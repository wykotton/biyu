<template>
	<div class="all-wrapper">
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">忘记密码</h2>
		</header>
		<ul class="plr30 lgrlist mt30">
			<li class="yt bb yt-ac">
				<i class="dx-icon-phone"></i>
				<div class="yt-f1">
					<input type="text" class="input-text bgn bn" placeholder="手机号/用户名" maxlength="11" v-model="accountphone">
				</div>
			</li>
			<li class="yt bb yt-ac">
				<i class="dx-icon-lock"></i>
				<div class="yt-f1">
					<input type="text" class="input-text bgn bn" placeholder="输入验证码" maxlength="6" v-model="validCode">
				</div>
                <button class="code" v-on:click="sendcode($event)">{{getcodetxt}}</button>
			</li>
		</ul>
		
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" v-on:click="validTel">下一步</div></div>
</template>

<script>
    export default {
        data () {
            return {
                accountphone:'',
                validCode:'',
                getcodetxt:'获取验证码',
                wait:60
            }
        },
        methods:{
            is_mobile: function(str) {
                            return /^1[34578]\d{9}$/.test(str);
                        },
            validTel:function(){
                if (!this.is_mobile(this.accountphone)) {
                    alert('请填写正确的手机号码');
                    return;
                }else if(!this.validCode){
                    alert('验证码不能为空');
                }else{
                    this.$http.post('user/register/' + this.accountphone + '/' + this.validCode)
                    .then(function(res){
                        if(res.data.code == '2000000'&&res.data.data){
                            sessionStorage.setItem('accountphone',this.accountphone);
                            this.$router.go({name:'repsd',params:{tel:this.accountphone}});
                        }else{
                            // alert(res.data.msg);
                            alert('验证码错误');
                        }
                        
                    },function(error){
                        console.log(error);
                    })
                    
                }},
            sendcode:function(event){
                this.$http.get('user/sms/' + this.accountphone)
                .then(function(res){
                    if(res.data.code == '2000000'&&res.data.data){
                        var _this = this;
                        reTime(event.target)
                        function reTime(o){
                            if (_this.wait == 0) {  
                                o.removeAttribute("disabled");
                                _this.getcodetxt="获取验证码";
                                _this.wait = 60;  
                            } else {  
                                o.setAttribute("disabled", true);  
                                _this.getcodetxt="重新发送(" + _this.wait + ")";  
                                _this.wait--;  
                                setTimeout(function() {  
                                    reTime(o)  
                                },  
                                1000)  
                            } 
                        }
                    }else{
                        alert('短信接口故障');
                    }
                },function(error){
                    console.log(error);
                })
            }
        },
        components: {
        }
    }
</script>

<style>
    
</style>