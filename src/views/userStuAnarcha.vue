<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">目前状态</h2>
		<div href="javascript:;" class="header-right fz32">
			保存
		</div>
	</header>
	<ul class="student-select">
		<li class="bb bgff">
			<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state" id="" value="" class="select-sex mr20 db" />
				<b>学生</b>
				<div class="yt-f1 tx-r select-icon">
					<i class="icon icon-up icon-down"></i>
				</div>
			</label>
			<ul class="student-list">
				<li class="bb pl30">
					<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state-mini" id="" value="" class="select-sex mr20 db" />
					<b>初中</b>
					</label>
				</li>
				<li class="bb pl30">
					<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio"name="state-mini" id="" value="" class="select-sex mr20 db" />
					<b>高中</b>
					</label>
				</li>
				<li class="bb pl30">
					<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state-mini" id="" value="" class="select-sex mr20 db" />
					<b>大学</b>
					</label>
				</li>
				<li class="bb pl30">
					<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state-mini" id="" value="" class="select-sex mr20 db" />
					<b>硕士</b>
					</label>
				</li>
				<li class="pl30">
					<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state-mini" id="" value="" class="select-sex mr20 db" />
					<b>博士</b>
					</label>
				</li>
			</ul>
		</li>
		<li class="bb bgff">
			<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state" id="" value="" class="select-sex mr20 db" />
				<b>上班</b>
			</label>
		</li>
		<li class="bb bgff">
			<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state" id="" value="" class="select-sex mr20 db" />
				<b>经商</b>
			</label>
		</li>
		<li class="bb bgff">
			<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state" id="" value="" class="select-sex mr20 db" />
				<b>闲人</b>
			</label>
		</li>
		<li class="bb bgff">
			<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state" id="" value="" class="select-sex mr20 db" />
				<b>自由职业</b>
			</label>
		</li>
	</ul>
	<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt60 fz36">大功告成</div>
	
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