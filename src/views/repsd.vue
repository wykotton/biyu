<template><div class="all-wrapper">
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">找回密码</h2>
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
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" v-on:click="resetPassword">确认并登录</div></div>
</template>

<script>
    export default {
        data () {
            return {
                psd:'',
                psdshow:false,
                copypsd:'',
                copypsdshow:false,
                uName:sessionStorage.getItem('accountphone'),
                tel:this.$route.params.tel
            }
        },
        methods:{
            resetPassword (){
                if((this.psd || this.copypsd) !='' && this.psd == this.copypsd){
                    this.$http.post('user/password/change/' + this.tel,{newPassword:this.psd})
                        .then(function(res){
                            if(res.data.code == '2000000'&&res.data.data){
                                sessionStorage.setItem('uid',obj);
                            	// sessionStorage.setItem('userinfo',JSON.stringify(res.data.data));
                                this.$router.go({name:'dynamics'})
                            }else{
                                alert('找回失败，请联系管理员')
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