<template>
    <header class="header-bar bg-main">
			<ul class="tabs-nav tabs-nav-green tn-hmc">
				<li class="tabs-nav-li" :class="{'active':nav.isActive}" v-for="nav in navData" @click="changeTab($index,navData,0)">
					{{nav.name}}
				</li>
			</ul>
			<div class="header-right fz32" v-link="{name:'writeLetter'}">
				写信
			</div>
		</header>
		<div class="tabs-nav-line tabs-nav-line-second bgff">
			<a href="javascript:;" class="tabs-nav-line-li" v-for="type in typeData" :class="{'active':type.isActive}" @click="changeTab($index,typeData,1)">
				<p class="dib fz28">{{type.name}}</p>
			</a>
			<span class="ptb20 br dib"></span>
		</div>
		<div class="mt30 bgff bt bb" v-for="list in mailLists">
			<div class="p30 fz28 bb">
				<div class="yt yt-ac lh1 c66">
					<div class="yt-f1 yt-te">
						寄信时间：
					</div>
					<div class="yt-f1 yt-te tx-r">
						收信时间：
					</div>
				</div>
				<div class="yt yt-ac lh1 mt20">
					<div class="yt-f1 yt-te color-orange">
						{{list.allowReciveDate | birth}}
					</div>
					<div class="yt-f1 yt-te color-green tx-r">
						{{list.sendDate | birth}}
					</div>
				</div>
			</div>
			<div class="p30">
				<div class="bg-envelope-hmc" v-link="{name:'mailshow',params:{mailId:list.id}}">
					<div class="stamp-wrap clear">
						<div class="sw">
							<div class="bg-yc yt yt-ac yt-pc yt-ver c66 lh1">
								<p class="fz20">{{new Date(list.sendDate).Format("MM月dd日")}}</p>
								<h3 class="fz24">{{list.location}}</h3>
								<p class="fz20">{{new Date(list.sendDate).Format("yy年")}}</p>
							</div>
						</div>
						<div class="sw">
							<div class="bg-stamp-collecting-list-li-img-wrap">
								<div class="img-wrap user-photo">
									<img :src="list.subject!=''?list.subject:'/src/source/images/img-stamp-collecting-list-li.png'" />
								</div>
							</div>
						</div>
					</div>
					<div class="beh-list">
						<ul>
							<li class="yt yt-ac fz28 c33 yt-te">
								<div class="max-w400-hmc yt-te">
									<!-- {{list.subject}} -->
									四川·成都
								</div>
							</li>
							<li class="yt yt-ac fz28 c33 yt-te">
								<div class="user-photo round size44-hmc" style="background-image: url(/src/source/images/bg-img-avatar.png);">
								</div>
								<h3 class="pl10 pr20 yt-te max-w220-hmc">{{list.nickName}}</h3>
								  <收>
							</li>
							<li class="yt yt-ac fz24 c66 yt-te">
								<div class="yt-te mr10">
									{{list.nickName}}
								</div>
								<div class="user-photo round size44-hmc mr10" style="background-image: url(/src/source/images/bg-img-avatar.png);">
								</div>
								<div class="yt-te mr10">
									尼古拉斯赵四 
								</div>
								寄
							</li>
						</ul>
					</div>
					<div class="postcode postcode-lt">
						<span class="dib" v-for="code in list.postCode" track-by="$index">{{code}}</span>
					</div>
					<div class="postcode postcode-rb clear">
						<span class="dib" v-for="code in list.postCode" track-by="$index">{{code}}</span>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        data () {
            return {
                mailLists:[],
                navData:[{name:'已收信',isActive:true},{name:'已发信',isActive:false}],
                typeData:[{name:'待查看',isActive:true},{name:'已查看',isActive:false}],
                postCode:[],
                type:1,
                accountphone:sessionStorage.getItem('accountphone')

            }
        },
        ready(){
            this.getData('mail/get/tolist/'+this.accountphone+'/' + this.type);
        },
        methods:{
            changeTab(index,data,id){
                 for(var i in data){
                    data[i].isActive = false;
                }
                data[index].isActive = true;
                if (id==0) this.typeData[0].isActive = true,this.typeData[1].isActive = false,this.type = 1;
                else this.type = index + 1;
                let api = (this.navData[1].isActive ? 'mail/get/fromlist/' + this.accountphone : 'mail/get/tolist/' + this.accountphone) + '/' + this.type
                this.getData(api);
                
                
                
            },
            
            
            getData (api){
                this.$http.get(api)
                    .then(function(res){
                    if(res && res.data.data.length > 0){
                    let allData = res.data.data;
                    // let allData = Collections.reverse(res.data.data);
                    // let allDataTemp = res.data.data;
                    // let allDataTemp1 = [];
                    // for (var j = 0; j < allDataTemp.length; j++) {
                    // 	console.log(j);
                    // 	allDataTemp1.push(allDataTemp.pop());
                    // }
                    
                    
                        for(let i in allData){
                            allData[i].postCode = allData[i].postCode ? allData[i].postCode.split('') : '12345678';
                        }
                        this.mailLists = allData;
                    }else{
                    	this.mailLists = [];
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