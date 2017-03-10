<template>

<header class="header-bar bg-main">
		<ul class="tabs-nav tabs-nav-green tn-hmc">
			<li class="tabs-nav-li active">
				找笔友
			</li>
			<li class="tabs-nav-li ">
				找熟人
			</li>
		</ul>
	</header>
	<div class="p30 fz28 c66">
		设定匹配条件
	</div>
	<div class="p30 bgff bt bb yt yt-ac">
		<div class="mr40 fz28">
			<span class="dib c33">
				性别：
			</span>
			<span class="dib c66">
				男
			</span>
		</div>
		<div class="mr40 fz28">
			<span class="dib c33">
				年龄：
			</span>
			<span class="dib c66">
				18-25 
			</span>
		</div>
		<div class="mr40 fz28">
			<span class="dib c33">
				距离：
			</span>
			<span class="dib c66">
			省内
			</span>
		</div>
		<div class="yt-f1 tx-r fz28 color-green">
			修改>
		</div>
	</div>
	<div class="h943-hmc yt yt-ac yt-pc yt-ver">
		<div class="img-wrap user-photo round size240-hmc bd bdc-fff bd-w6-hmc" style="background-image: url(/src/source/images/bg-img-avatar.png);">
			<!--<img src="wgts/images/bg-img-avatar.png"/>-->
		</div>
		<div class="mt30 yt-te">
			<h3 class="list-title lh1 dib yt-te max-w600-hmc">爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫爱吃西红柿的小猫</h3>
			<span class="ml10 dib bg-sex bg-sex-w fz24 cff"><i class="icon icon-sex-w mr10"></i>18</span>
		</div>
		<div class="mt20 fz28 c66 lh1">
			<span class="mr40">处女座</span>
			<span>成都</span>
		</div>
		<div class="mt20 fz24 c99 lh1 yt yt-ac">
			<i class="icon icon-map-marker db mr10"></i>
			<div>500m</div>
		</div>
		<div class="mt30 pt30">
			<button class="btn btn-bd-green btn-s mr30">重新匹配</button>
			<button class="btn btn-bd-green btn-s ml30">加为笔友</button>
		</div>
		<div class="mt40 pt40 fz36 c66">
			今天还可以匹配 <span class="color-red">10</span> 次
		</div>
	</div>

	<!-- 无结果 -->
	<div class="h943-hmc yt yt-ac yt-pc yt-ver">
		<div class="img-wrap user-photo bg-img-blank" style="background-image: url(/src/source/images/bg-img-blank.png);">
		</div>
		<div class="mt30 pt30 fz36 c66 lh1">
			暂无匹配对象
		</div>
		<div class="mt30 pt30">
			<button class="btn btn-bd-green btn-s">重新匹配</button>
		</div>
		<div class="mt40 pt40 fz36 c66">
			今天还可以匹配 <span class="color-red">10</span> 次
		</div>
	</div>

	<!-- 十次以后的dialog： 每天只有10次机会 -->
	<div class="dx-dialog active">
		<div class="dialogmask"></div>
		<div class="dx-dialogcontent">
			<div class="dialog-cbox dialog-cbox-hmc yt yt-pc yt-ver">
				<div class="dialog-success-btn icon-hi icon-dialog-warning"></div>
				<h3 class="dialog-tit list-title tx-c">匹配次数用完</h3>
				<div class="dialog-contxt mt30">一天只能匹配10次，请明天再试</div>
			</div>
		</div>
	</div>
	<!--底部-->
	<footer class="yt bg-main fz24 mt30">
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