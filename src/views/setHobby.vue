<template>
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">个人资料</h2>
		</header>
		<ul class="bgff">
			<li class="yt yt-ac p30 bb">
				<b class="db fz32 c33 yt-f1">坐标</b>
				<span class="fz28 c66">四川成都</span>
				<i class="icon icon-next fz24 ml20 mt5"></i>
			</li>
			<li class="yt yt-ac p30 bb" v-link="{name:'setAnarchy'}">
				<b class="db fz32 c33 yt-f1">状态</b>
				<span class="fz28 c66">{{anarchyDefault.value}}</span>
				<i class="icon icon-next fz24 ml20 mt5"></i>
			</li>
		</ul>
		<div class="bgff mt20">
			<ul>
				<li class="yt yt-ac p30 bb" v-link="{name:'userLove'}">
					<b class="db fz32 c33 yt-f1">爱好</b>
					<i class="icon icon-next fz24 ml20 mt5"></i>
				</li>
			</ul>
			<div class="love-list clear c66 fz28 ptb30 bb">
				<span v-for="love in isFresh">{{love.split('|')[0]}}</span>
			</div>
		</div>
		<div class="bgff mt20">
			<ul>
				<li class="yt yt-ac p30 bb" v-link="{name:'userNeed'}">
					<b class="db fz32 c33 yt-f1">需求</b>
					<i class="icon icon-next fz24 ml20 mt5"></i>
				</li>
			</ul>
			<div class="love-list clear c66 fz28 ptb30 bb">
				<span v-for="need in isNeed">{{need}}</span>
			</div>
		</div>
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" @click="save">下一步</div>
</template>

<script>
    export default {
        data () {
            return {
                uid:sessionStorage.getItem('uid'),
                userInfo:{},
                anarchyDefault:{key:'不限',value: '不限'},
                isFresh:[],
                isNeed:[]
            }
        },
        ready(){
	        try{
                if (sessionStorage.getItem('setanarchy')) {
                    this.anarchyDefault = JSON.parse(sessionStorage.getItem('setanarchy'))
                }
	        }catch(e){}
            try{
                this.isFresh = sessionStorage.getItem('isfresh').split(",");
            }catch(e){}
            try{
                this.isNeed = sessionStorage.getItem('isneed').split(",");
            }catch(e){}
            // this.getUser()
        },
        methods:{
        	save(){
        		this.$http.post('user/modify/otherinfo/' + this.uid,{location:"四川成都",status:this.anarchyDefault.value,favorite:this.isFresh.join()})
        		.then(function(res){
        			if(res && res.data.data){

        				this.$router.go({name:'setSign'})
        			}
        			
        		},function(err){
        			console.log(err)
        		})
        		
        	}
         //    getUser (){
         //        this.$http.get('user/get/info/' + this.uid)
         //        .then(function(res){
         //            if(res && res.data.data){
         //            let allData = res.data.data;
         //                    allData.favorite = allData.favorite.split('，');
         //                    allData.needs = allData.needs.split(',');
         //                this.userInfo = allData;
         //            }
         //        },function(err){
         //            console.log(err)
         //        })
        	// }
        }


    }
</script>

<style>
    
</style>