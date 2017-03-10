<template>

	<header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">兴趣爱好</h2>
			<div href="javascript:;" class="header-right fz32" @click="saveLove">
				保存
			</div>
		</header>
		<p class="fz26 c66 p30 tx-c">最多选择四项</p>
		<ul class="interests-list bgff" >
			<li class="bb" v-for="list in listData" @click="setLove($index,$event,list)">
				<label class="p30 yt yt-ac fz32 c33">
					<input type="checkbox" name="love" :value="list.name" class="dx-checkbox mr20" :checked="isFresh.indexOf(list.name) != -1">
					<span>{{list.name}}</span>
					<div class="yt-f1" v-if="list.name.indexOf('自定义')!=-1">
						<input type="" class="interests-input-txt" placeholder="最多四个字" maxlength="4" name="love" :value="list.byself" />
					</div>
				</label>
			</li>
			</ul>
	
</template>

<script>
export default {
    data () {
        return {
            listData:[{name:'阅读','byself':false,'checked':false},
                      {name:'游戏','byself':false,'checked':false},
                      {name:'电影','byself':false,'checked':false},
                      {name:'动漫','byself':false,'checked':false},
                      {name:'运动','byself':false,'checked':false},
                      {name:'音乐','byself':false,'checked':false},
                      {name:'旅游','byself':false,'checked':false},
                      {name:'美食','byself':false,'checked':false},
                      {name:'学习','byself':false,'checked':false},
                      {name:'自定义一','checked':false,'byself':""},
                      {name:'自定义二','checked':false,'byself':""}],
            realData:[],
            uid:sessionStorage.getItem('uid'),
            // isFresh:sessionStorage.getItem('isfresh')||"",
            userinfo:JSON.parse(sessionStorage.getItem('userinfo'))
            
        }
    },
    computed:{
        isFresh:function(){
            var favorite = this.userinfo.favorite;
            var isFreshArr = [];
            for (var i in favorite) {
                if (favorite[i].indexOf('自定义一')!=-1) {
                    this.listData[9].byself=favorite[i].split('|')[0];
                    isFreshArr.push('自定义一');
                }else if (favorite[i].indexOf('自定义二')!=-1) {
                    this.listData[10].byself=favorite[i].split('|')[0];
                    isFreshArr.push('自定义二');
                }else{
                    isFreshArr.push(favorite[i]);
                }
            }
            return isFreshArr;
        }
    },
    ready(){
        // this.realData = this.realData.concat(this.isFresh.split(","));
        // var isFreshArr = this.isFresh.split(',')
        // for(let i in isFreshArr){
        //     for(let j in this.listData){
        //         if (isFreshArr[i].split('|').length>1) {var lname = isFreshArr[i].split('|')[1]}
        //         else{var lname = isFreshArr[i].split('|')[0]}                
        //         if (lname == this.listData[j].name) {
        //             if (isFreshArr[i].split('|')[1]) {this.listData[j].byself = isFreshArr[i].split('|')[0]}
        //             this.listData[j].checked = true;
        //         }
        //     }
        // }
    },
    methods:{
        setLove(index,ev,data){
            // ev.preventDefault();
            if ($('[name="love"]:checked').size()>4) return alert('已超过四项'),ev.preventDefault(),!1;
            // for(let i in this.realData){
            //     if(data.name == this.realData[i]){
            //         this.realData.splice(i,1)
            //     }
            //     if (true) {}
            // };
            // if(this.realData.length < 4 ){
            //     this.listData[index].checked =! this.listData[index].checked;
            //     // if(data.checked){
            //         this.realData.push(this.listData[index].name);
            //     // }
            // }else{
            //     alert('已超过四项')
            // }
        },
        saveLove (){
            this.realData = new Array();
            var _this = this;
            var status = true;
            // for(let i in this.listData){
            //     if (this.listData[i].checked) {
            //         if (this.listData[i].name.indexOf('自定义')!=-1) {
            //             if (this.listData[i].byself=="") return true;
            //             else this.realData.push(this.listData[i].byself+'|'+this.listData[i].name); 
            //         }else{
            //             this.realData.push(this.listData[i].name)
            //         }
            //     }             
            // }
            $('[name="love"]:checked').each(function(index, el) {
                if (this.value.indexOf('自定义')!=-1) {
                    var custum = $(el).next().next().children('input').val();
                    if (custum=="") return alert('选中自定义不能为空！'),status=false;
                    _this.realData.push(custum +'|'+this.value);
                }
                else _this.realData.push(this.value)
            });

            if (status) {
                sessionStorage.setItem('isfresh',this.realData.join());            
                this.$http.post('user/modify/otherinfo/favorite/' + this.uid,{favorite:sessionStorage.getItem('isfresh')})
                .then(function(res){
                    console.log(res)
                    if(res && res.data.data){
                        history.go(-1)
                    }
                },function(err){
                    console.log(err)
                })

            }
            
            // this.$router.go({name:'setHobby'});

            // this.$http.post('user/modify/otherinfo/' + this.uid,{favorite:this.realData.toString()})
            // .then(function(res){
            //     if(res && res.data.data){
            //         let name = this.isFresh ? 'setHobby' : 'userinfo'
            //         this.$router.go({name:name})
            //     }
            // },function(err){
            //     console.log(err)
            // })
        }
        
    }
    
}
</script>