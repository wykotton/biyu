<template><div class="all-wrapper">

	<header class="header-bar bg-main">
		<ul class="tabs-nav tabs-nav-green tn-hmc">
			<li class="tabs-nav-li" v-link="{name:'finding'}">
				找笔友
			</li>
			<li class="tabs-nav-li active">
				找熟人
			</li>
		</ul>
	</header>

	<!-- 查找 -->
	<div class="dx-psw bgff bb mt20">
		<input type="text" class="input-text bgn bn dx-input" placeholder="请输入TA的手机号！" v-model="penpalPhone">
	</div>
	<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" @click="search">查找</div>
	<!--有结果 begin-->	
	<div class="yt bgff p30 mt20" v-show="isResult">
		<div class="img-wrap user-photo user-photo-s round mr30" :style="{backgroundImage: 'url('+searchData.avatar+')'}">
		</div>
		<div class="yt-te">
			<h2 class="fz32 c33 yt-te">{{searchData.nickname}}</h2>
			<div class="yt yt-ac mt20">
				<i class="iconfont-dianhua"></i>
				<span class="fz28 c66 ml10">{{searchData.accountphone}}</span>
			</div>
		</div>
	</div>
	<!--有结果 end-->
	<!--无结果 begin-->
	<div class="p30 m30 fz28 c66 tx-c lh16" v-if="searchData.length > 0">{{name}}，此手机号码用户尚未注册<br />
		赶快邀请TA一起来加入“笔遇”吧！
	</div>
		
	<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" v-if="isResult" @click="addPeople">添加熟人</div>
	<div class="btn btn-b bg-f9 yt-f1 db ml30 mr30 mt50 fz36 cff" v-if="isResult" @click="isResult = false">重新找人</div>
	<!--无结果 end-->

	 <footer class="yt bg-main fz24 mt30 footer">
		<div class="yt-f1 yt yt-ac yt-ver yt-pc" v-link="{name:'dynamics'}">
			<div class="footer-icon footer-icon01">
				<i></i>
				<b></b>
			</div>
			<p>动态</p>
		</div>
		<div class="yt-f1 yt yt-ac yt-ver yt-pc" v-link="{name:'penpal'}">
			<div class="footer-icon footer-icon02">
				<i></i>
				<b></b>
			</div>
			<p>笔友</p>
		</div>
		<div class="yt-f1 yt yt-ac yt-ver yt-pc active" v-link="{name:'finding'}">
			<div class="footer-icon footer-icon03">
				<i></i>
				<b></b>
			</div>
			<p>找人</p>
		</div>
		<div class="yt-f1 yt yt-ac yt-ver yt-pc" v-link="{name:'mail'}">
			<div class="footer-icon footer-icon04">
				<i></i>
				<b></b>
			</div>
			<p>信件</p>
		</div>
		<div class="yt-f1 yt yt-ac yt-ver yt-pc " v-link="{name:'admin'}">
			<div class="footer-icon footer-icon05">
				<i></i>
				<b></b>
			</div>
			<p>个人</p>
		</div>
	</footer>
	</div></template>

<script>
export default {
    data () {
        return {
            searchData:{},
            isResult:false,
            name:'',
            penpalPhone:'',
            uid:sessionStorage.getItem('uid')
            
        }
    },
    
    methods:{
     
      search (){
        if(this.penpalPhone != ''){
        	if (this.penpalPhone == sessionStorage.getItem('accountphone')) return alert('不能搜索自己！'),!1;
            this.$http.get('user/find/' + this.penpalPhone)
            .then(function(res){
                console.log(res)
                if(res.data.data){
                    this.searchData = res.data.data;
                    this.isResult = true;
                    this.penpalPhone = this.searchData.accountphone;
                }
            },function(err){
                console.log(err)
            })
            
        }else{
            alert('不能为空')
        }
          
          
      },
        addPeople (){
            this.$http.get('penpal/add/'+sessionStorage.getItem('accountphone')+'/' + this.penpalPhone + '/2/0')
            .then(function(res){
                console.log(res)
                if(res.data.code=="2000000" && res.data.data){
                    alert('添加成功');
                    this.$router.go({name: 'penpal'});
                }else{
                    alert('添加失败,可能该用户已是你的笔友。')
                }
            },function(err){
                console.log(err)
            })
            
            
        }
        
        
        
    },
    
    
    
    components: {
    }
}
</script>