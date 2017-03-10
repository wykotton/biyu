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

	<div class="view-mail m30" style="background-image: url(/src/source/images/meinv.jpg);"></div>

	<div class="view-container m30">
		<section class="swiper-wrapper">
			<div class="swiper-slide">
				<div class="mail-pic" data-url="/src/source/images/meinv.jpg" style="background-image: url(/src/source/images/meinv.jpg);">

				</div>
			</div>
			<div class="swiper-slide">
				<div class="mail-pic" data-url="/src/source/images/mail.jpg" style="background-image: url(/src/source/images/mail.jpg);">

				</div>
			</div>
			<div class="swiper-slide">
				<div class="mail-pic" data-url="/src/source/images/meinv.jpg" style="background-image: url(/src/source/images/meinv.jpg);">

				</div>
			</div>
			<div class="swiper-slide">
				<div class="mail-pic" data-url="/src/source/images/mail.jpg" style="background-image: url(/src/source/images/mail.jpg);">

				</div>
			</div>
			<div class="swiper-slide">
				<div class="mail-pic" data-url="/src/source/images/meinv.jpg" style="background-image: url(/src/source/images/meinv.jpg);">

				</div>
			</div>
			<div class="swiper-slide">
				<div class="mail-pic" data-url="/src/source/images/mail.jpg" style="background-image: url(/src/source/images/mail.jpg);">

				</div>
			</div>
			<div class="swiper-slide">
				<div class="mail-pic" data-url="/src/source/images/meinv.jpg" style="background-image: url(/src/source/images/meinv.jpg);">

				</div>
			</div>
			<div class="swiper-slide">
				<div class="mail-pic" data-url="/src/source/images/mail.jpg" style="background-image: url(/src/source/images/mail.jpg);">

				</div>
			</div>
		</section>
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

<!-- <script src="/src/source/js/swiper.min.js"></script>
<script>
	var homeNavSwiper = new Swiper('.view-container', {
		direction: 'horizontal',
		freeMode: false,
		loop: true,
		paginationClickable: true,
		slidesPerView: 5,
		onSlideChangeStart: function(swiper) {
			var Url = $(".view-container").find(".swiper-slide").eq(swiper.activeIndex).children(".mail-pic").attr("data-url");			
			$(".view-mail").css("background-image", "url(" + Url + ")");
		},
	});
	
</script> -->