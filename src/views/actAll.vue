<template>
     <div class="all-wrapper">
        <router-view></router-view>
    </div>
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
		<div class="yt-f1 yt yt-ac yt-ver yt-pc " v-link="{name:'admin'}">
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

<style>
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
    	z-index: 999;
    }
    .all-wrapper{
        padding-bottom: 3.6rem;
        padding-top: 2.34667rem;
    }
</style>