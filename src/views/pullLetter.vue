<template>
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">寄信</h2>
		</header>
		<div class="mt30 p30 bgff bt bb">
			<div class="bg-envelope-hmc">
				<div class="stamp-wrap clear">
					<div class="sw">
						<div class="bg-yc yt yt-ac yt-pc yt-ver c66 lh1">
							<p class="fz20">12月13日</p>
							<h3 class="fz24">成都市<br />四川省</h3>
							<p class="fz20">2016年</p>
						</div>
					</div>
					<div class="sw">
						<div class="bg-stamp-collecting-list-li-img-wrap">
							<div class="img-wrap user-photo" style="background-image: url(/src/source/images/img-stamp-collecting-list-li.png);">
								<img v-if="postmarkSrc" :src="postmarkSrc" />
							</div>
						</div>
					</div>
				</div>
				<div class="beh-list">
					<ul>
						<li class="yt yt-ac fz28 c33 yt-te">
							<div class="max-w400-hmc yt-te">
								{{pfInfo.location}}
							</div>
						</li>
						<li class="yt yt-ac fz28 c33 yt-te">
							<div class="user-photo round size44-hmc" style="background-image: url(/src/source/images/bg-img-avatar.png);">
							</div>
							<h3 class="pl10 pr20 yt-te max-w220-hmc">{{pfInfo.nickname}}</h3>
							<收>
						</li>
						<li class="yt yt-ac fz24 c66 yt-te">
							<div class="yt-te mr10">
								{{userInfo.location}}
							</div>
							<div class="user-photo round size44-hmc mr10" style="background-image: url(/src/source/images/bg-img-avatar.png);">
							</div>
							<div class="yt-te mr10">
								{{userInfo.nickname}}
							</div>
							寄
						</li>
					</ul>
				</div>
				<div class="postcode postcode-lt">
						<span class="dib">1</span>
						<span class="dib">2</span>
						<span class="dib">3</span>
						<span class="dib">4</span>
						<span class="dib">5</span>
						<span class="dib">6</span>
						<span class="dib">7</span>
						<span class="dib">8</span>
					</div>
					<div class="postcode postcode-rb clear">
						<span class="dib">1</span>
						<span class="dib">2</span>
						<span class="dib">3</span>
						<span class="dib">4</span>
						<span class="dib">5</span>
						<span class="dib">6</span>
						<span class="dib">7</span>
						<span class="dib">8</span>
					</div>
			</div>
		</div>
		<div class="send-wrap">
			<div class="ptb30 yt yt-pc yt-ver process-hmc">
				<div class="yt yt-ac yt-pc ph-status">
					<!--第一步，active状态下，图标高亮-->
					<div class="yt yt-ac yt-pc step1" :class="{'active':step == 0||1||2||3}">
						<em>1</em>
					</div>
					<!--第二步，active状态下，图标高亮且进度条span高亮-->
					<span class="db yt-f1" :class="['step2span',step ==1 || step == 2 || step == 3 ? 'active' : '']"></span>
					<div class="yt yt-ac yt-pc" :class="['step2',step ==1 || step == 2 || step == 3 ? 'active' : '']">
						<em>2</em>
					</div>
					<!--第三步，active状态下，图标高亮且进度条span高亮-->
					<span class="db yt-f1" :class="['step3span',step == 2 || step == 3 ? 'active' : '']"></span>
					<div class="yt yt-ac yt-pc" :class="['step3',step == 2 || step == 3 ? 'active' : '']">
						<em>3</em>
					</div>
					<!--第四步，active状态下，图标高亮且进度条span高亮-->
					<span class="db yt-f1 step4span" :class="{'active':step == 3}"></span>
					<div class="yt yt-ac yt-pc step4" :class="{'active':step == 3}">
						<em>4</em>
					</div>
				</div>
				<div class="yt yt-ac mt10 plr30 tx-c fz24 c66 ph-txt">
					<div class="tx-l active">
						放信纸
					</div>
					<div class="pr30">
						贴邮票
					</div>
					<div class="pl30">
						盖邮戳
					</div>
					<div class="tx-r">
						寄出
					</div>
				</div>
			</div>
			<!--以下代码分四步，默认每一步均隐藏，追加active类则显示；
			如需同页面进行切换，则每一步追加active类；
			如果不同页面进行切换，则需删除其他三步多余代码。-->
			<!--第一步：放信纸-->
			<div class="mt30 send-step send-fir" :class="{'active':step == 0}">
				<!--以下代码默认不显示图片div只显示上传div，
				当类sf-upload-img后追加active时，则隐藏上传div，显示图片div，
				图片div可以使用背景行内样式style="background-image: url(wgts/images/bg-img-avatar.png);"-->
				
				<div class="pub-upload-img-list pb10">
	                <ul class="clear">
	                <img-list v-bind:srclist="letterSrc"></img-list>
	                <!-- <li><label class="img-wrap"><img class="avatar" v-if="src" v-bind:src="src"/></label></li>  -->
	                <li v-if="this.letterSrc.length<5">
	                    <label class="img-wrap"></label>
	                    <vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="false"  v-bind:url="uploadAPI" extensions="png,gif,jpeg,jpg" input-accept="image/*"></vue-core-image-upload>
	                </li>
	                </ul>
	            </div>
				<!-- <div class="sf-upload-img">
					<label><img v-if="letterSrc" v-bind:src="letterSrc"/></label>
					<vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="false"  v-bind:url="uploadAPI" extensions="png,gif,jpeg,jpg" input-accept="image/*"></vue-core-image-upload>
				</div> -->
				<div class="fz24 c99 lh1 mt20 mb30 pb30 tx-c">
					点击将写好的信件拍照后上传
				</div>
				<div class="plr30 yt yt-ac">
					<button class="btn btn-b bg-second db yt-f1" @click="step += 1">下一步</button>
				</div>
			</div>
			<!--第二步：贴邮票-->
			<div class="mt30 send-step send-sec" :class="{'active':step == 1}">
				<!--以下代码默认不显示图片div只显示上传div，
				当类bg-stamp-collecting-list-li-img-wrap后追加active时，则隐藏上传div，显示图片div,
				图片div可以使用背景行内样式style="background-image: url(wgts/images/bg-img-avatar.png);"-->
				<div class="bg-stamp-collecting-list-li-img-wrap">
					
					<label><img v-if="postmarkSrc" v-bind:src="postmarkSrc"/></label>
					<vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="false"  v-bind:url="uploadAPI" extensions="png,gif,jpeg,jpg" uploadck="UploadPM" input-accept="image/*"></vue-core-image-upload>
				</div>
				<div class="fz24 c99 lh1 mt20 mb30 pb30 tx-c">
					上传一张照片制作个性邮票
				</div>
				<div class="plr30 yt yt-ac sstf-db-btn">
					<button class="btn btn-b db yt-f1" @click="step -= 1">上一步</button>
					<button class="btn btn-b bg-second db yt-f1" @click="step += 1">下一步</button>
				</div>
			</div>
			<!--第三步：盖邮戳-->
			<div class="mt30 send-step send-thr" :class="{'active':step == 2}">
				<div class="bg-yc yt yt-ac yt-pc yt-ver c66 lh1">
					<p class="fz20">12月13日</p>
					<h3 class="fz24">成都市<br />四川省</h3>
					<p class="fz20">2016年</p>
				</div>
				<div class="fz24 c99 lh1 mt20 mb30 pb30 tx-c">
					点击上面邮戳盖上去
				</div>
				<div class="plr30 yt yt-ac sstf-db-btn">
					<button class="btn btn-b db yt-f1" @click="step -= 1">上一步</button>
					<button class="btn btn-b bg-second db yt-f1" @click="step += 1">下一步</button>
				</div>
			</div>
			<!--第四步：寄出-->
			<div class="send-step send-fou" :class="{'active':step == 3}">
				<ul class="list">
					<li class="yt yt-ac">
						<label class="yt-f1 yt yt-ac">					
							<input type="radio" name="state" value="0" class="select-sex mr20 db" v-model="state">
							<h3 class="list-title mr40">平邮：</h3>
							<p class="fz28 c66 yt-f1 yt-te ml40">{{normalMail}}</p>
						</label>
						<!--<i class="icon icon-edit db color-green"></i>-->
					</li>
					<li class="yt yt-ac">
						<label class="yt-f1 yt yt-ac">					
							<input type="radio" name="state" value="1" class="select-sex mr20 db" checked="checked" v-model="state">
							<h3 class="list-title mr40">快件：</h3>
							<p class="fz28 c66 yt-f1 yt-te ml40">{{advMail}}</p>
						</label>
						<i class="icon icon-edit db color-green advMail"><input id="editTime" type="datetime" readonly v-model="advMail" data-lcalendar="2016/10/12 00:00:00,2016/10/12 00:00:00"></input></i>
						
					</li>
				</ul>
				<div class="fz24 c99 lh16 p20 wb-ba-hmc">
					<p>平邮：依据双方地理位置自动计算出收信时间！</p>
					<p>快件：自由设定收信时间，每次使用消耗50积分！</p>
				</div>
				<div class="plr30 yt yt-ac sstf-db-btn">
					<button class="btn btn-b db yt-f1" @click="step -= 1">上一步</button>
					<button class="btn btn-b bg-second db yt-f1" v-on:click="sendLetter">寄出</button>
				</div>
			</div>
		</div>
</template>

<script>

var VueCoreImageUpload = require('../components/vue.core.image.upload');
    var imgListTemp = require('../components/imgList')
    export default {
        data () {
            return {
            	penpalPhone:this.$route.params.accountphone,
            	pfInfo:{},
            	userInfo:{},
	            letterSrc: [],
	            postmarkSrc: '',
	            uploadAPI:'/api/common/postimg',
	            normalMail:"",
	            advMail:"",
	            state:1,
                step:0
            }
        },
        ready(){
	        try{
	            this.userInfo = JSON.parse(sessionStorage.getItem('userinfo'))
	        }catch(e){}
        	this.showTime();
        	this.getpf();
        },
        methods:{
        	getpf:function(){
        		this.$http.get('user/find/' + this.penpalPhone)
	            .then(function(res){
	                if(res.data.data&&res.data.code == '2000000'){
	                    this.pfInfo = res.data.data;
	                }
	            },function(err){
	                console.log(err)
	            })
        	},
        	
            sendLetter (){
                if(this.step == 3){
                    this.$http.post('mail/sendplan/'+sessionStorage.getItem('accountphone')+'/'+this.penpalPhone,{subject:this.postmarkSrc,content:JSON.stringify(this.letterSrc),dateTime:this.state =="1"?this.advMail:this.normalMail})
                    .then(function(res){
                    console.log(res)
                        if(res && res.data.data){
                            alert('寄信成功')
                            this.$router.go({name:'mail'});
                        }
                    },function(err){
                    console.log(err)
                    })
                }

            },
            changeStep(){
            	console.log(this.step);
            	if(this.step == 3){
            		this.normalMail = new Date(new Date().getTime() + 120000).Format("yyyy/MM/dd hh:mm:ss");
            		this.advMail = new Date(new Date().getTime() + 60000).Format("yyyy/MM/dd hh:mm:ss");
            	}
            },
	        showTime:function(){                
	            var calendar = new LCalendar();
	            calendar.init({
	                'trigger': '#editTime', //标签id
	                'type': 'datetime', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
	                'minDate': new Date().Format("yyyy-MM-dd hh:mm:ss"), //最小日期
	                'maxDate': new Date().getFullYear()+1 + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
	            });
	        }
        },
        watch:{
        	'step':'changeStep'
        },

    events: {
    imageUploaded(res) {
      if (res.result) {
      	var _this = this;
        if(res.data) {
          setTimeout(function(){
            _this.letterSrc.push({src:res.data});
        	},1000);
        }
        
      }
    },
    UploadPM(res) {
      if (res.result) {
        if(res.data) {
          this.postmarkSrc = res.data;
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