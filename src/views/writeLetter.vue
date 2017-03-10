<template>
	<div class="all-wrapper">
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">写信</h2>
		</header>
		<div class="yt yt-ac bgff bb plr30 mt30">
			<b class="db fz32 c33">收信人：</b>
			<div class="dx-psw yt-f1">
				<input type="text" class="input-text bgn bn dx-input" placeholder="收件人电话号码" v-model="accountphone">
			</div>
		</div>
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" v-on:click="getpf">确定</div></div>
</template>

<script>
    export default {
        data () {
            return {
            	accountphone:""
            }
        },
        methods:{
        	getpf:function(){
        		if (this.accountphone == "") {alert("电话号码不能为空")}
        		this.$http.get('user/find/' + this.accountphone)
	            .then(function(res){
	                if(res.data.data&&res.data.code == '2000000'){
	                    this.$router.go({name:'pullLetter', params: { accountphone: this.accountphone }});
	                }else{
	                	alert('该用户不存在！');
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

<style>
    
</style>