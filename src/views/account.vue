<template>
	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">账号管理</h2>
	</header>
	<div class="p30 bgff yt yt-ac mt20" v-link="{name:'repsd'}">
		<div class="yt-f1 fz32 c33">修改密码</div>
		<i class="icon icon-next fz30 db"></i>
	</div>
	<div class="pt40 mt30">
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" v-link="{name:'login'}">更换账号</div>
		<div class="btn btn-b bg-red yt-f1 db ml30 mr30 mt50 fz36" v-on:click="exitApp">退出登录</div>
	</div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods:{
        	exitApp:function(){
        		try{
        			api.closeWidget({
	                    id: 'A6922783637546', //这里改成自己的应用ID 
	                    retData: {
	                        name: 'closeWidget'
	                    },
	                    silent: true
	                });
        		}catch(e){}
        	}
        },
        components: {
        }
    }
</script>