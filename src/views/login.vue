	<template><div class="all-wrapper">
    <header class="header-bar bg-main">
			<!-- <a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a> -->
			<h2 class="header-title">登录</h2>
		</header>
		<ul class="plr30 lgrlist mt30">
			<li class="yt bb yt-ac">
				<i class="dx-icon-phone"></i>
				<div class="yt-f1">
					<input type="text" class="input-text bgn bn" placeholder="手机号/用户名" v-model="userName">
				</div>
			</li>
			<li class="yt bb yt-ac">
				<i class="dx-icon-lock"></i>
				<div class="yt-f1">
					<input type="password" class="input-text bgn bn" placeholder="输入至少8位密码" v-model="password">
				</div>
			</li>
		</ul>
		
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" @click="sendUser">登录</div>
		<div class="clear c66 fz28 p30">
			<div class="fl" v-link="{name:'reset'}">忘记密码</div>
			<div class="fr" v-link="{name:'register'}">注册</div>
		</div>
		<!--第三方登陆-->
		<div class="mt40 ml20 mr20">
				<div class="yt yt-ac">
					<div class="yt-f1 bt">
						
					</div>
					<div class="fz28 c66 plr30 pb10">
						使用第三方软件登录
					</div>
					<div class="yt-f1 bt">
						
					</div>
				</div>
				<div class="yt yt-ac yt-pc tx-c m30 sns-login">
					<div class="yt-f1 yt yt-ac yt-pc yt-ver">
						<i class="icon-hi icon-sns-wechat-hmc"></i>
						<p>微信</p>
					</div>
					<div class="yt-f1 yt yt-ac yt-pc yt-ver">
						<i class="icon-hi icon-sns-qq-hmc"></i>
						<p>QQ</p>
					</div>
					<div class="yt-f1 yt yt-ac yt-pc yt-ver">
						<i class="icon-hi icon-sns-weibo-hmc"></i>
						<p>微博</p>
					</div>
				</div>
			</div>
</div></template>

<script>
    export default {
    	data() {
			return {
				userName: '',
				password: ''
			}
		}, 
		ready() {
			localStorage.clear();
			sessionStorage.clear();
			this.exitApp();
		}, 
		methods: {
			sendUser: function() {
				if (this.userName && this.password) {
					this.$http.get('user/login/' + this.userName + '/' + this.password).then(function(res) {
						if (res.data.code == '2000000' && res.data.data) {
							sessionStorage.setItem('uid', res.data.data.id);
							sessionStorage.setItem('userinfo', JSON.stringify(res.data.data));
							this.$router.go({
								name: 'dynamics'
							});
						} else {
							alert(res.data.msg);
						}
					}, function(err) {
						console.log(err)
					})
				} else {
					alert('用户名或密码不能为空');
				}
			}
		}
    }
</script>

<style>
    
</style>