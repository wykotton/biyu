<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">头像</h2>
		<div class="header-right" @click="isShow =! isShow">
			<div class="dx-photo-more" :class="{'active':isShow}">
				<i></i>
				<i></i>
				<i></i>
				<ul>
					<li>拍照</li>
					<li>从相册中选取</li>
				</ul>
			</div>
		</div>
	</header>
	<div class="dx-photo" :style="{backgroundImage: 'url('+cropSrc+')'}">
		
    <vue-core-image-upload  crop-ratio="1:1" v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="true" v-bind:url="modAvatarAPI" extensions="png,gif,jpeg,jpg" input-accept="image/*"></vue-core-image-upload>

	</div>
	<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" @click="setAvatar">保存</div>
		
</template>

<script>
var VueCoreImageUpload = require('../components/vue.core.image.upload');
export default {
    data () {
        return {
            uid:sessionStorage.getItem('uid'),
            userinfo:JSON.parse(sessionStorage.getItem('userinfo')),
            isShow:false,
            cropSrc: '/src/source/images/dx-photo.png',
            modAvatarAPI:'/api/common/postimg',
            cropArgs: {}
        };
    },
    ready(){
        this.cropSrc = this.userinfo.avatar || this.cropSrc;
    },
    
    methods:{
        setAvatar (){
                this.$http.post('user/modify/avatar/' + this.uid,{pic:this.cropSrc})
            .then(function(res){
                console.log(res)
                if(res && res.data.data){
                    this.userinfo.avatar = this.cropSrc;
                    sessionStorage.setItem('userinfo',JSON.stringify(this.userinfo));

                    this.$router.go({name:'userinfo'})
                }
            },function(err){
                console.log(err)
            })

            
            
            
        }
        
    },
    events: {
    imageUploaded(res) {
      if (res.result) {
        if(res.data) {
            var _this = this;
            setTimeout(function(){
            _this.cropSrc = res.data;
            },1000);
          return;
        }
        
      }
    },
    errorHandle: function(msg) {
      console.warn(msg);
    }
    
  },
        components: {
    'vue-core-image-upload': VueCoreImageUpload
  }
}
</script>