<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">看信</h2>
		<div href="javascript:;" class="header-right fz32">
			回信
		</div>
	</header>
	<div class="view-mail m30"></div>

		<div class="view-container m30">
			<section class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in mail.content">
					<div class="mail-pic" :data-url="item.src" :style="{backgroundImage: 'url('+item.src+')'}">

					</div>
				</div>
			</section>
		</div>
</template>
<style>
	@import '../source/css/swiper.min.css';
</style>
<script>
	import swiper from '../source/js/swiper.min.js'
    export default {
        data () {
            return {
            	id:this.$route.params.mailId,
            	mail:{}
            }
        },
        ready(){
        	this.readmail();
        },
        methods:{
        	readmail:function(){
        		var _this = this;
        		this.$http.get('mail/read/'+this.id+'/' + sessionStorage.getItem('accountphone'))
	            .then(function(res){
	                if(res.data.data&&res.data.code == '2000000'){
	                    this.mail = res.data.data;
	                    this.mail.content = JSON.parse(res.data.data.content);
	                    setTimeout(function(){
                    		var homeNavSwiper = new Swiper('.view-container', {
								paginationClickable: true,
								slidesPerView: 5,
								centeredSlides: true,
								onInit: function(swiper){
							      $(".view-mail").css("background-image", "url(" + $('.mail-pic').eq(0).data('url') + ")");
							    },
								onSlideChangeStart: function(swiper) {
									var Url = $(".view-container").find(".swiper-slide").eq(swiper.activeIndex).children(".mail-pic").attr("data-url");			
									$(".view-mail").css("background-image", "url(" + Url + ")");
								}
							});
	                    	$('.view-container').on('click', '.swiper-slide', function(event) {
	                    		event.preventDefault();
	                    		var _this = $(this);
	                    		homeNavSwiper.slideTo(_this.index(), 1000, function(){
									$(".view-mail").css("background-image", "url(" + _this.children().data('url') + ")");
	                    		});
	                    		
	                    	});
	                    },500)
	                }
	            },function(err){
	                console.log(err)
	            })
        	}
        },
        components: {
        }
    }
</script>