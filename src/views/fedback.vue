<template>
	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">意见反馈</h2>
	</header>
	
	<!-- 反馈提交 -->
	<div class="page show">
		<div class="bgff dx-textarea p30 mt20 bb bt">
			<textarea placeholder="请写下您的宝贵意见！"></textarea>
		</div>
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36">确定</div>
	</div>
	
	<!-- 反馈tips -->
	<div class="page">
		<div class="feedback-txt p40 m30 c33 fz28 tc lh16 tx-c">
			我们已经收到您的宝贵意见并会认真考虑！
			感谢您对“笔遇”的支持！
		</div>
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36">返回</div>
	</div>

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
	
/*	.page { display: none; }
	.show { display: block; }*/

</style>