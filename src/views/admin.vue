<template>
	<header class="header-bar bg-main">
	<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
		<h2 class="header-title">个人</h2>
	</header>
	<ul class="list mb30">
		<li class="yt yt-ac" v-link="{name:'userIndex'}">
			<div class="img-wrap round user-photo mr30 bd bdc-fff" v-bind:style="{backgroundImage:'url('+ userinfo.avatar +')'}" >
				
			</div>
			<h3 class="yt-f1 yt-te list-title">{{userinfo.nickname}}</h3>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
	</ul>
	<ul class="list mb30">
		<li class="yt yt-ac" v-link="{name:'myNumerical'}">
			<i class="mr20 icon-hi icon-personal-li1"></i>
			<h3 class="list-title yt-f1 yt-te">我的积分</h3>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
		<li class="yt yt-ac" v-link="{name:'myDynamics'}">
			<i class="mr20 icon-hi icon-personal-li2"></i>
			<h3 class="list-title yt-f1 yt-te">我的动态</h3>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
		<li class="yt yt-ac" v-link="{name:'account'}">
			<i class="mr20 icon-hi icon-personal-li3"></i>
			<h3 class="list-title yt-f1 yt-te">账号管理</h3>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
	</ul>
	<ul class="list mb30">
		<li class="yt yt-ac" v-link="{name:'setting'}">
			<i class="mr20 icon-hi icon-personal-li4"></i>
			<h3 class="list-title yt-f1 yt-te">系统设置</h3>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
		<li class="yt yt-ac" v-link="{name:'collection'}">
			<i class="mr20 icon-hi icon-personal-li5"></i>
			<h3 class="list-title yt-f1 yt-te">集邮</h3>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
	</ul>
</template>

<script>
    export default {
        data () {
            return {
                userinfo:JSON.parse(sessionStorage.getItem('userinfo'))
            }
        },
        ready(){
        	if (this.userinfo.avatar == 'null') this.userinfo.avatar = '/src/source/images/by-photo.png';
        	if (this.userinfo.nickname == 'null') this.userinfo.nickname = '快给自己起个笔名吧';
            // try{
            // 	if (sessionStorage.getItem('userinfo')) {
            // 		this.userinfo = 

            // 	}
            // }catch(e){}
        },
        components: {
        }
    }
</script>