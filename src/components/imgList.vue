<template>
	<li v-for="item in srclist">
		<label class="img-wrap">
			<img :src="item.src"/>
		</label>
		<span class="icon icon-del" @click="srclist.pop($index)"></span>
	</li>
</template>
<script>
	export default {
		props:{
			srclist:{
		        type: Array,
		        default:[]}
    	}
	}
</script>