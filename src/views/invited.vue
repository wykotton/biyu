<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">邀请熟人</h2>
	</header>

	<div class="bgff dx-textarea p30 mt20 bb bt">
		<textarea placeholder="请输入邀请语..."></textarea>
	</div>
	<div class="bgff yt yt-ac c33 fz32 p30">
		<b class="mr20">邀请方式：</b>
		<label class="yt yt-ac fz24 c66 yt-pc">
			<input type="radio" name="sex" id="" value="" class="select-sex mr10 db">
			<i class="iconfont-weixin mr5"></i>
			<span>微信</span>
		</label>
		<label class="yt-f1 yt yt-ac fz24 c66 yt-pc">
			<input type="radio" name="sex" id="" value="" class="select-sex mr10 db">
			<i class="iconfont-iconfontweibo mr5"></i>
			<span>新浪微博</span>
		</label>
		<label class="yt yt-ac fz24 c66 yt-pc">
			<input type="radio" name="sex" id="" value="" class="select-sex mr10 db">
			<i class="iconfont-qq mr5"></i>
			<span>QQ</span>
		</label>
	</div>
	<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36">确定</div>
		
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