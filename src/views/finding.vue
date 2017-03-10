<template>
    <header class="header-bar bg-main">
			<ul class="tabs-nav tabs-nav-green tn-hmc">
				<li class="tabs-nav-li active">
					找笔友
				</li>
				<li class="tabs-nav-li " v-link="{name:'acquaintances'}">
					找熟人
				</li>
			</ul>
		</header>
		<div class="p30 fz28 c66">
			设定匹配条件

			<div class="yt-f1 tx-r fz28 color-green fr" v-link="{name:'findingSetting'}">
				修改>
			</div>
		</div>
		<div class="p30 bgff bt bb yt yt-ac">
			<div class="mr40 fz28">
				<span class="dib c33">
					性别：
				</span>
				<span class="dib c66">
				{{sex.value}}
				</span>
			</div>
			<div class="mr40 fz28">
				<span class="dib c33">
					年龄：
				</span>
				<span class="dib c66">
					{{age.title}}
				</span>
			</div>
			<div class="mr40 fz28">
				<span class="dib c33">
					星座：
				</span>
				<span class="dib c66">
				{{zodiac.value}}
				</span>
			</div>
		</div>
		
		
		<div class="h943-hmc yt yt-ac yt-pc yt-ver" v-if="isResult">
			<div class="img-wrap user-photo round size240-hmc bd bdc-fff bd-w6-hmc" :style="{backgroundImage: 'url(' + searchResult.avatar + ')'}">
				<!--<img src="wgts/images/bg-img-avatar.png"/>-->
			</div>
			<div class="mt30 yt-te">
				<h3 class="list-title lh1 dib yt-te max-w600-hmc">{{searchResult.nickname}}</h3>
				<span class="ml10 dib bg-sex fz24 cff" :class="parseInt(searchResult.sex)?'bg-sex-w':'bg-sex-m'"><i class="icon  mr10" :class="parseInt(searchResult.sex)?'icon-sex-w':'icon-sex-m'"></i>{{searchResult.birthday | birth}}</span>
			</div>
			<div class="mt20 fz28 c66 lh1">
				<span class="mr40">{{searchResult.zodiac}}</span>
				<span>{{searchResult.location}}</span>
			</div>
			<div class="mt20 fz24 c99 lh1 yt yt-ac">
				<i class="icon icon-map-marker db mr10"></i>
				<div>500m</div>
			</div>
			<div class="mt30 pt30">
				<button class="btn btn-bd-green btn-s mr30" @click="searchList(searchNeed)">重新匹配</button>
				<button class="btn btn-bd-green btn-s ml30" @click="addPenpal" v-if="!ismypenpal">加为笔友</button>
				<button class="btn btn-disable btn-s ml30" v-if="ismypenpal">已是笔友</button>
			</div>
			<div class="mt40 pt40 fz36 c66">
				今天还可以匹配 <span class="color-red">{{hasNum}}</span> 次
			</div>
		</div>
		<div class="h943-hmc yt yt-ac yt-pc yt-ver" v-else>
			<div class="img-wrap user-photo bg-img-blank" style="background-image: url(/src/source/images/bg-img-blank.png);">
			</div>
			<div class="mt30 pt30 fz36 c66 lh1">
				暂无匹配对象
			</div>
			<div class="mt30 pt30">
				<button class="btn btn-bd-green btn-s" @click="searchList(searchNeed)">重新匹配</button>
			</div>
			<div class="mt40 pt40 fz36 c66">
				今天还可以匹配 <span class="color-red">{{hasNum}}</span> 次
			</div>
		</div>
</template>
<script>
    export default {
        data () {
            return {
                searchResult:{},
                isResult:false,
                penpalID:'',
                penpalTEL:'',
                uid:sessionStorage.getItem('uid'),
                searchNeed:null,
                hasNum:10,
                sex:{key:-1,value:"不限"},
                age:{title:'不限',minDate:'1700/1/1',maxDate:new Date().Format("yyyy/MM/dd")},
                zodiac:{key:'all',value:"不限"},
                status:{key:'all',value:"不限"},
                userinfo:JSON.parse(sessionStorage.getItem('userinfo')),
                ismypenpal:false
            }
        },
        ready(){
	        try{
	            this.searchNeed = JSON.parse(sessionStorage.getItem('setNeed'))
	        }catch(e){}
            this.sex = this.searchNeed ? this.searchNeed.sex : this.sex;
            this.age = this.searchNeed ? this.searchNeed.age : this.age;
            this.zodiac = this.searchNeed ? this.searchNeed.zodiac : this.zodiac;
            this.status = this.searchNeed ? this.searchNeed.status : this.status;
            this.searchNeed = {
            	sex:this.sex,
            	age:this.age,
            	zodiac:this.zodiac,
            	status:this.status
            }
            this.searchList(this.searchNeed);
        },
        methods:{
            searchList (obj){
                let realData = {sex:this.sex.key,minDate:this.age.minDate,maxDate:this.age.maxDate,zodiac:this.zodiac.key,status:this.status.key}
                this.$http.post('penpal/search/' + this.userinfo.accountphone ,realData)
                    .then(function(res){
                    	// console.log(res.data.data.length);
                        if(res.data.code = '2000000' && res.data.data.length!=0){
                            this.isResult = true;
                            this.ismypenpal = false;
                            this.searchResult = res.data.data;
                            this.penpalID = this.searchResult.id;
                            this.penpalTEL = this.searchResult.accountphone;
                            this.searchNum()
                        }else{
                        	this.isResult = false;
                        	this.searchNum();
                        }
                },function(err){
                    console.log(err);
                })
            },
            addPenpal (){
                this.$http.get('penpal/add/' + sessionStorage.getItem('accountphone') + '/' + this.penpalTEL + '/3/0')
                    .then(function(res){
	            	if (res.data.code = '2000000' && res.data.data) {
	            		this.ismypenpal = true;
	                    console.log(res)
	            	}else{
                    	alert('添加失败,可能该用户已是你的熟人。')
	            	}
            		
                },function(err){
                    console.log(err)
                })
            },

            searchNum (){
                this.$http.get('penpal/search/count/'+this.userinfo.accountphone)
                .then(function(res){
                    if(res && res.data.data){
                        this.hasNum = res.data.data;
                    }
                },function(err){
                    console.log(err)
                })


            }
            
            
        },
        filters:{
          birth:function(value){
              return new Date(value).Format("yyyy-MM-dd");
          }
            
            
            
        },
        
        
        components: {
        }
    }
</script>

<style>
    
</style>