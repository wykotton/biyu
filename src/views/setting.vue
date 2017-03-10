<template>
	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
		<h2 class="header-title">系统设置</h2>
	</header>
	<ul class="list mb30">
		<li class="yt yt-ac" v-link="{name:''}">
			<h3 class="list-title yt-f1 yt-te">意见反馈</h3>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
		<li class="yt yt-ac">
			<h3 class="list-title yt-f1 yt-te">评分</h3>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
	</ul>
	<ul class="list mb30">
		<li class="yt yt-ac">
			<h3 class="list-title yt-f1 yt-te">清除缓存</h3>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
		<li class="yt yt-ac">
			<h3 class="list-title yt-f1 yt-te">检查更新</h3>
			<span class="db bages bages-s mr10"></span>
			<i class="icon icon-next db fz32 c99"></i>
		</li>
	</ul>
	<ul class="list mb30">
		<li class="yt yt-ac">
			<h3 class="list-title yt-f1 yt-te">仅WIFI下查看</h3>
			<label class="db">
            <i class="switch switch-green"><input name="on-off" type="checkbox" checked="checked"><span></span></i>
        </label>
		</li>
	</ul>
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