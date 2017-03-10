<template>
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">个人资料</h2>
		</header>
		<div class="bgff yt yt-ac yt-ver p30 bb">
			<div class="user-photo photo-s yt-f1" :style="{backgroundImage: 'url('+cropSrc+')'}">
				<vue-core-image-upload  crop-ratio="1:1" v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="true" v-bind:url="modAvatarAPI" extensions="png,gif,jpeg,jpg" input-accept="image/*"></vue-core-image-upload>
			</div>
			<b class="db fz24 c99 mt20">请上传您的个人资料头像</b>
		</div>
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" @click="setAvatar">下一步</div>
</template>

<script>
var VueCoreImageUpload = require('../components/vue.core.image.upload');
export default {
    data () {
        return {
            uid:sessionStorage.getItem('uid'),
            userinfo:{},
            isShow:false,
            cropSrc: '/src/source/images/by-photo.png',
            modAvatarAPI:'/api/common/postimg',
            cropArgs: {}
        };
    },    
    methods:{
        setAvatar (){
            this.$http.post('user/modify/avatar/' + this.uid,{pic:this.cropSrc})
            .then(function(res){
                console.log(res)
                if(res && res.data.data){
                    this.userinfo.avatar = this.cropSrc;
                    sessionStorage.setItem('userinfo',JSON.stringify(this.userinfo));

                    this.$router.go({name:'setName'})
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

<style>
    
</style>