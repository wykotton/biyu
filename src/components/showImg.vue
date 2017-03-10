<template>
	<div id="owl-imgmask" v-on:click="hideimgbox">
		<a href="javascript:;" v-for="ltm in srclist"><img :src="ltm.src" /></a>
	</div>
</template>
<script>
	export default {
		props:{
			srclist:{
		        type: Array,
		        default:[]
		    },
		    srcindex:{
		        type: Number,
		        default:0
		    }
    	},
	    ready(){
	    	jQuery('#owl-imgmask').owlCarousel({
				items: 1,
				autoPlay: false,
				transitionStyle: 'fade'
			});
			carousel.goTo(this.srcindex, true);
	    },
	    methods:{
	    	hideimgbox:function(){
	    		this.$parent.focue = false
	    	}	    	
	    }
	}
</script>