<template><div class="all-wrapper">
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">设置密码</h2>
		</header>
		<ul class="plr30 lgrlist mt30">
			<li class="yt bb yt-ac">
				<i class="dx-icon-lock"></i>
				<div class="yt-f1  dx-psw">
					<input :type="psdshow?'text':'password'" class="input-text bgn bn" placeholder="输入密码" v-model="psd">
					<div class="input-psw">显示密码</div>
				</div>
				<div class="dx-icon-eye" @click="psdshow = !psdshow"></div>
			</li>
			<li class="yt bb yt-ac">
				<i class="dx-icon-lock"></i>
				<div class="yt-f1 dx-psw">
					<input :type="copypsdshow?'text':'password'" class="input-text bgn bn" placeholder="输入密码" v-model="copypsd">
					<div class="input-psw">再次输入密码</div>
				</div>
				<div class="dx-icon-eye" @click="copypsdshow = !copypsdshow"></div>
			</li>
		</ul>
		
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" @click="setPassword">确认并登录</div>
		<div class="dx-dialog" :class="{'active':isShow}">
			<div class="dialogmask"></div>
			<div class="dx-dialogcontent">
				<div class="dialog-cbox">
					<div class="dialog-success-btn"></div>
					<h2 class="dialog-tit fz32 tx-c c33">注册成功</h2>
					<!-- <div class="dialog-contxt mt30">哇哦！您现在拥有了一个专属邮编了</div>
					<div class="dialog-num">56958636</div>
					<div class="dialog-num-v"></div> -->
					<!-- <div class="bg-second fz32 tx-c know-btn yt yt-ac yt-pc" @click="isShow = false">我知道了</div> -->
					<div class="dialog-contxt mt30 mb30 tx-c lh18">为了更好的体验，建议您完善信息。<br><a class="color-green" v-link="{name:'dynamics'}">先进去逛逛</a></div>
					<div class="bg-second fz32 tx-c know-btn yt yt-ac yt-pc" v-link="{name:'setHead'}">完善信息</div>
				</div>
			</div>
		</div>
	</div></template>

<script>
    export default {
        data () {
            return {
                isShow:false,
                psd:'',
                psdshow:false,
                copypsd:'',
                copypsdshow:false,
                uName:sessionStorage.getItem('accountphone')
            }
        },
        
        
        methods:{
            setPassword (){
                if((this.psd || this.copypsd) !='' && this.psd == this.copypsd){
                    this.$http.get('user/add/' + this.uName + '/' + this.psd)
                        .then(function(res){
                            // console.log(res)
                            let obj = res.data.data;
                            if(res && obj != null){
                                sessionStorage.setItem('uid',obj);
                                this.isShow = true;
                            	// sessionStorage.setItem('userinfo',JSON.stringify(res.data.data));

                                // this.$router.go({name:'setHead'})
                            }else{
                                alert('您已经注册过了，请返回重新重新登陆！')
                                this.$router.go({name:'login'})
                            }
                            
                    },function(error){
                        console.log(error);
                    })
                }else{
                    alert('密码不能为空并且重复密码必须相同')
                }
                
                
                
            }
            
            
            
        },
        
        
        components: {
        }
    }
</script>

<style>
    
</style>