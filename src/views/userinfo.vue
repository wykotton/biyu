<template>
	<header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
		<h2 class="header-title">个人</h2>
	</header>
	<div v-if="isok">
		<div class="mb30 ptb30 bgff bb yt yt-ac yt-pc">
		<div class="img-wrap round user-photo size-b mr30 bd bdc-fff" :style="{backgroundImage: 'url(' + userInfo.avatar + ')'}" v-link="{name:'userPhoto'}"></div>
	</div>
	<ul class="list bn mb30">
		<li class="yt yt-ac">
			<h3 class="list-title">邮编</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66 lh1">
				<span class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0 db">
								{{userInfo.postcode}}
    </span>
			</div>
		</li>
		<li class="yt yt-ac" >
			<h3 class="yt-f1 yt-te list-title">笔名</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66 lh1">
				<!--起个名字好难-->
				<span class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0 db"  v-link="{name:'userName'}">{{userInfo.nickname}}</span>
			</div>
			<i class="pl10 icon icon-next db fz32 c99"></i>
		</li>
	</ul>
	<ul class="list mb30">
		<li class="yt yt-ac">
			<h3 class="yt-f1 yt-te list-title">性别</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66 lh1">
				<!--男-->
				<span class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0 db" v-link="{name:'userSex'}">{{userInfo.sex | sexType}}</span>
			</div>
			<i class="pl10 icon icon-next db fz32 c99"></i>
		</li>
		<li class="yt yt-ac">
			<h3 class="yt-f1 yt-te list-title">年龄</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66 lh1">
				<!--24-->
				<span class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0 db" v-link="{name:'userNum'}">{{userInfo.birthday}}</span>
			</div>
			<i class="pl10 icon icon-next db fz32 c99"></i>
		</li>
		<li class="yt yt-ac">
			<h3 class="yt-f1 yt-te list-title">星座</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66 lh1">
				<!--巨蟹座-->
				<span class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0 db" v-link="{name:'userZodiac'}">{{userInfo.zodiac}}</span>
			</div>
			<i class="pl10 icon icon-next db fz32 c99"></i>
		</li>
		<li class="yt yt-ac">
			<h3 class="yt-f1 yt-te list-title">坐标</h3>
			<div class="yt-f3 yt-te yt yt-ac yt-pe fz28 c66 lh1">
				<!--四川省成都市高新区-->
				<span class="yt-f1 input-text c66 bgn bn tx-r p0 db" v-link="{name:'userLocation'}">{{userInfo.location}}</span>
			</div>
			<i class="pl10 icon icon-next db fz32 c99"></i>
		</li>
		<li class="yt yt-ac">
			<h3 class="yt-f1 yt-te list-title">目前状态</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66 lh1">
				<!--上班-->
				<span class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0 db" v-link="{name:'userAnarchy'}">{{userInfo.status}}</span>
			</div>
			<i class="pl10 icon icon-next db fz32 c99"></i>
		</li>
	</ul>
	<div class="mb30 bgff">
		<div class="p30 yt yt-ac">
			<h3 class="list-title yt-f1 yt-te">兴趣爱好</h3>
			<i class="pl10 icon icon-next db fz32 c99" v-link="{name:'userLove'}"></i>
		</div>
		<div class="p30 pb0 bt bb personal-tags-list">
			<ul class="clear">
				<li class="bd fz28 c66" v-for="li in userInfo.favorite">{{li.split("|")[0]}}</li>
			</ul>
		</div>
	</div>
	<div class="mb30 bgff">
		<div class="p30 yt yt-ac">
			<h3 class="list-title yt-f1 yt-te">需求</h3>
			<i class="pl10 icon icon-next db fz32 c99" v-link="{name:'userNeed'}"></i>
		</div>
		<div class="p30 pb0 bt bb personal-tags-list">
			<ul class="clear">
				<li class="bd fz28 c66" v-for="tag in userInfo.needs">{{tag}}</li>
			</ul>
		</div>
	</div>
	<div class="mb30 bgff">
		<div class="p30 yt yt-ac">
			<h3 class="list-title yt-f1 yt-te">个性签名</h3>
			<i class="pl10 icon icon-next db fz32 c99" v-link="{name:'userSignature'}"></i>
		</div>
		<div class="p30 bt bb yt fz28 c66 lh14">
			{{userInfo.signature}}
		</div>
	</div>
	</div>
</template>

<script>
export default {
    data () {
        return {
            userInfo:{
            avatar : "/src/source/images/bg-img-avatar.png",
            nickname:"快给自己起个笔名吧",
			birthday : '未设置',
			favorite : [],
			location : "四川成都市",
			needs : [],
			postcode : "610000",
			sex : '未设置',
			signature : '未设置',
			status : '未设置',
			zodiac : '未设置'},
            uid:sessionStorage.getItem('uid'),
            isok:false
        }
    },
    ready(){
    	try{
            this.favorite = sessionStorage.getItem('isfresh').split(',')
        }catch(e){}
        this.getUser()
    },


    methods :{
        getUser (){
            this.$http.get('user/get/info/' + this.uid)
            .then(function(res){
                if(res && res.data.data){
                let allData = res.data.data;
                        // allData.favorite = (allData.favorite||this.userInfo.favorite).split(',');
                        // allData.needs    = (allData.needs||this.userInfo.needs).split(',');


						this.userInfo.avatar = allData.avatar || this.userInfo.avatar,
						this.userInfo.nickname = allData.nickname || this.userInfo.nickname,
						this.userInfo.birthday = allData.birthday || this.userInfo.birthday,
						this.userInfo.favorite = allData.favorite?allData.favorite.split(','):this.userInfo.favorite,
						this.userInfo.location = allData.location || this.userInfo.location,
						this.userInfo.needs = allData.needs?allData.needs.split(','):this.userInfo.needs,
						this.userInfo.postcode = allData.postcode || this.userInfo.postcode,
						this.userInfo.sex = allData.sex || this.userInfo.sex,
						this.userInfo.signature = allData.signature || this.userInfo.signature,
						this.userInfo.status = allData.status || this.userInfo.status,
						this.userInfo.zodiac = allData.zodiac || this.userInfo.zodiac;

						sessionStorage.setItem('userinfo',JSON.stringify(this.userInfo));
						this.isok = true;
                     	//allData.needs  = allData.needs||this.userInfo.needs
                    	// this.userInfo = allData;
                }
            },function(err){
                console.log(err)
            })

        }

    },
    filters:{
        sexType:function(value){
            let realSex = value == 0 ? '男' : '女';
            return realSex
        }

    }
}
</script>