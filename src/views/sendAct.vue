<template>
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
                <i class="icon icon-pre"></i>
            </a>
			<h2 class="header-title">发布动态</h2>
		</header>
		<div class="p30 pb20 fz24 c99">
			亲！先选择您的动态分类吧！
		</div>
		<div class="mb30 p30 bgff bb yt yt-ac">
			<label class="db yt-f1" v-for="list in typeLists" @click="setType($index)">
                <i class="input-radio input-radio-green"><input name="a" type="radio"><span></span></i>
                <span class="fz32 c33 ml10">{{list}}</span>
            </label>
		</div>
        <div class="mb30 plr30 bgff bt bb">
            <textarea class="input-text pt0 pb0 pl0 pr0 bgn bn mt30 mb30 h150-hmc" placeholder="这一刻你想说点啥呢..." v-model="msg"></textarea>
            <div class="pub-upload-img-list pb10">
                <ul class="clear">
                <img-list v-bind:srclist="imgs"></img-list>
                <!-- <li><label class="img-wrap"><img class="avatar" v-if="src" v-bind:src="src"/></label></li>  -->
                <li v-if="this.imgs.length<4">
                    <label class="img-wrap"></label>
                    <vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="false"  v-bind:url="uploadAPI" extensions="png,gif,jpeg,jpg" input-accept="image/*"></vue-core-image-upload>
                </li>
                </ul>
            </div>
        </div>
		<div class="m30 ptb30 yt yt-ac">
			<button class="btn btn-b bg-green db yt-f1" @click="sendAct">发布</button>
		</div>
		<div class="m30">
			<h3 class="list-title tx-c mb20">小贴士</h3>
			<p class="fz28 c33 lh16 mb10 wb-ba-hmc">分享：<span class="c66">可以手写一段随笔、摘抄、美文等，也可以分享下你今天的心情或者美照！</span></p>
			<p class="fz28 c33 lh16 mb10 wb-ba-hmc">征友：<span class="c66">简单自我介绍，希望结识怎么样的笔友，是否愿意写头信。</span></p>
			<p class="fz28 c33 lh16 mb10 wb-ba-hmc">公开信：<span class="c66">写封信给自己、曾经的友人、恋人或者父母...并且愿意与大家分享！</span></p>
			<p class="fz28 c33 lh16 mb10 wb-ba-hmc">PS：<span class="c66">亲笔手写后拍照上传哦！</span></p>
			<div class="yt yt-ac yt-pe">
				<label>
                <i class="input-checkbox input-checkbox-hmc"><input type="checkbox"><span></span></i>
                <span class="fz28 c66">不再提示</span>
            </label>
			</div>
		</div>
</template>

<script>
    var VueCoreImageUpload = require('../components/vue.core.image.upload')
    var imgListTemp = require('../components/imgList')
    export default {
        data () {
            return {
                typeLists:['公开信','分享','征友'],
                realType:1,
                msg:'',
                imgs:[],
                name: '',
                src: '',
                cropSrc: '',
                cropArgs: {},
                uploadAPI:'/api/common/postimg',
                uid:sessionStorage.getItem('uid')
            }
        },
        methods :{
            setType(index){
                this.realType = index + 1;
                
            },
            sendAct (){
                if(this.msg != ''){
                    let data = this.imgs.length > 0 ? {ftype:this.realType,message:this.msg,imgs:JSON.stringify(this.imgs)} :{ftype:this.realType,message:this.msg};
                    this.$http.post('feed/post',data)
                        .then(function(res){
                        if(res.data.data){
                            alert('发送成功');
                            if (true) {}
                            this.$router.go({name:'dynamics'})
                        }else{
                            alert('用户未登陆')
                        }
                    },function(error){
                        console.log(error)
                    })
                }else{
                    alert('不能为空');
                }
                
                
            }
            
        },
  events: {
    imageUploaded(res) {
      if (res.result) {
        if(res.data) {
            var _this = this;
            setTimeout(function(){
                _this.imgs.push({src:res.data});
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
        'vue-core-image-upload': VueCoreImageUpload,
        'img-list': imgListTemp
    }
}
</script>

<style>
    
</style>