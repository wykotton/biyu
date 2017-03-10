	<template><div class="guid-page">
			<div class="guid-btn" v-link="{name:'login'}">开启书信之旅</div>
			<div class="guid-logo"></div>
			<div class="guid-copyright">Copyright © 2016-2021 biyu</div>
		</div></template>

<script>
    export default {
        data () {
            return {
            }
        },
        ready(){
        	localStorage.clear();
        	sessionStorage.clear();
        },
        methods :{}
      
    }
</script>

<style>
    
</style>