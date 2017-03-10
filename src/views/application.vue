<template>
	
	<header class="header-bar bg-main">
		<h2 class="header-title">笔友</h2>
		<div class="header-right">
			<i class="icon icon-search"></i>
		</div>
	</header>
	<div class="tabs-nav-line tabs-nav-line-second bgff">
		<a href="#" class="tabs-nav-line-li">
			<p class="dib fz28">笔友</p>
		</a>
		<a href="#" class="tabs-nav-line-li">
			<p class="dib fz28">熟人</p>
		</a>
		<a href="#" class="tabs-nav-line-li   ">
			<p class="dib fz28">关注</p>
		</a>
		<a href="#" class="tabs-nav-line-li active">
			<p class="dib fz28">申请</p>
		</a>
	</div>
	<div class="mt30 mb30 ptb30 bgff bt bb yt yt-ac">
		<div class="yt-f1 yt-te plr30">
			<h3 class="fz28 c33 yt-te yt yt-ac">您的笔友申请已经被<span class="dib pl20 yt-te">爱吃西红柿的小猫爱吃西红柿的小猫</span>拒绝</h3>
			<p class="fz28 c66 yt-te yt yt-ac mt20">回复信息：<span class="dib pl20 yt-te">无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无</span></p>
		</div>
		<div class="plr30 ptb20 bl yt yt-ac">
			<i class="icon-hi icon-del-hmc"></i>
		</div>
	</div>
	<ul class="list bgn bn">
		<li class="bt bgff yt p30 mb30">
			<div class="img-wrap user-photo user-photo-s mr20" style="background-image: url(wgts/images/bg-img-avatar.png);"></div>
			<div class="yt-f1 yt-te">
				<h3 class="fz28 c33 yt-te yt yt-ac"><span class="dib yt-te">爱吃西红柿的小猫爱吃西红柿的小猫</span>申请加您为<span class="color-orange">熟人</span></h3>
				<p class="fz28 c66 yt-te yt yt-ac mt10">验证信息：<span class="dib pl20 yt-te">阿拉啦啦啦啦啦啦啦阿拉啦啦啦啦啦啦啦阿拉啦啦啦啦啦啦啦</span></p>
				<p class="fz24 c99 yt-te mt10">2016-8-3 17:53:49</p>
				<div class="yt yt-ac mt20">
					<button class="btn btn-bd-green btn-s plr40 mr30 min-w158-hmc">拒绝</button>
					<button class="btn btn-bd-green btn-s plr40 min-w158-hmc">接受</button>
				</div>
			</div>
		</li>
	</ul>
	<!--底部-->
	<footer class="yt bg-main fz24 mt30">
		<div class="yt-f1 yt yt-ac yt-ver yt-pc" v-link="{name:'dynamics'}">
			<div class="footer-icon footer-icon01">
				<i></i>
				<b></b>
			</div>
			<p>动态</p>
		</div>
		<div class="yt-f1 yt yt-ac yt-ver yt-pc active" v-link="{name:'penpal'}">
			<div class="footer-icon footer-icon02">
				<i></i>
				<b></b>
			</div>
			<p>笔友</p>
		</div>
		<div class="yt-f1 yt yt-ac yt-ver yt-pc" v-link="{name:'finding'}">
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
		<div class="yt-f1 yt yt-ac yt-ver yt-pc" v-link="{name:'admin'}">
			<div class="footer-icon footer-icon05">
				<i></i>
				<b></b>
			</div>
			<p>个人</p>
		</div>
	</footer>

</template>

<script>
    export default {
        data () {
            return {
            }
        },
        components: {
        }
    }
</script>