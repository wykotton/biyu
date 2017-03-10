<template>
	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">TA的资料</h2>
		<div class="header-right fz32" v-if="userInfo.lv!=0" v-on:click="delpenfriend">
			删除TA
		</div>
	</header>
	<ul class="list bn mb30">
		<div class="mb30 plr30 ptb40 bgff bb yt yt-ac">
			<div class="img-wrap round user-photo mr30 bd bdc-fff" :style="{backgroundImage: 'url(' + userInfo.avatar + ')'}">
			</div>
			<div class="yt-f1 yt-te">
				<div class="yt yt-ac">
					<h3 class="list-title yt-te max-w680-hmc">{{userInfo.nickname}}</h3>
					<span class="ml10 dib bg-sex" :class="parseInt(userInfo.sex)?'bg-sex-w':'bg-sex-m'"><i class="icon fz32 cff" :class="parseInt(userInfo.sex)?'icon-sex-w':'icon-sex-m'"></i></span>
				</div>
				<p class="fz28 c66 yt-te mt20">邮编：{{userInfo.postcode}}</p>
			</div>
		</div>
	</ul>
	<ul class="list bn mb30">
		<li class="yt yt-ac">
			<h3 class="list-title">出生年月</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66">
				<!--1990-03-24-->
				<input type="text" class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0" disabled="disabled" value="" v-model="userInfo.birthday" />
			</div>
		</li>
		<li class="yt yt-ac">
			<h3 class="list-title">星座</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66">
				<!--巨蟹座-->
				<input type="text" class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0" disabled="disabled" v-model="userInfo.zodiac" />
			</div>
		</li>
		<li class="yt yt-ac">
			<h3 class="list-title">坐标</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66">
				<!--四川省成都市高新区-->
				<input type="text" class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0" disabled="disabled" value="四川省成都市高新区" v-model="userInfo.location" />
			</div>
		</li>
		<li class="yt yt-ac">
			<h3 class="list-title">目前状态</h3>
			<div class="yt-f1 yt-te yt yt-ac yt-pe fz28 c66">
				<!--上班-->
				<input type="text" class="yt-f1 input-text c66 bgn bn tx-r pt0 pb0 pr0" disabled="disabled" value="上班" v-model="userInfo.status" />
			</div>
		</li>
	</ul>
	<div class="mb30 bgff">
		<div class="p30 yt yt-ac">
			<h3 class="list-title yt-f1 yt-te">兴趣爱好</h3>
		</div>
		<div class="p30 pb0 bt bb personal-tags-list">
			<ul class="clear">
				<li class="bd fz28 c66" v-for="li in userInfo.favorite">{{li.split("|")[0]}}</li>
			</ul>
		</div>
	</div>
	<div class="mb30 bgff">
		<div class="p30 yt yt-ac">
			<h3 class="list-title yt-f1 yt-te">TA想要</h3>
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
		</div>
		<div class="p30 bt bb yt fz28 c66 lh14">
			{{userInfo.signature}}
		</div>
	</div>
<!-- orange-tnh 关注TA  成为笔友-->
<!-- -1 就是没有关系 0申请中 1关注 2熟悉 3笔友 -->
	<div class="p-fixed-b vcard">
		<div class="tabs-nav-hmc yt yt-ac m30">
			<div class="yt-f1 tx-c orange-tnh" v-if="userInfo.follow==0" v-on:click="attention">
				关注TA
			</div>
			<div class="yt-f1 tx-c" v-if="userInfo.follow==1" v-on:click="unattention">
				取消关注
			</div>
			<div class="yt-f1 tx-c green-tnh" v-if="userInfo.lv==2||userInfo.lv==3" v-link="{name:'pullLetter', params: { accountphone: userInfo.accountphone }}">
				给TA写信
			</div>
			<div class="yt-f1 tx-c green-tnh" v-else v-on:click="bepenfriend">
				成为笔友
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data () {
        return {
            userInfo:{
            	accountphone:"",
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
				zodiac : '未设置',
				follow:0,
				lv:0
			},
            uid:this.$route.params.userId
        }
    },
    ready(){
    	// if (this.uid == sessionStorage.getItem('uid')) this.$router.go({name:'userinfo'});
        try{
            this.favorite = sessionStorage.getItem('isfresh').split(',')
        }catch(e){}
        this.getUser()
    },


    methods :{
        getUser (){
            this.$http.get('penpal/userInfo/'+this.uid+'/' + sessionStorage.getItem('accountphone'))
            .then(function(res){
                if(res && res.data.data){
                let allData = res.data.data;
                        // allData.favorite = (allData.favorite||this.userInfo.favorite).split(',');
                        // allData.needs    = (allData.needs||this.userInfo.needs).split(',');

                        this.userInfo.accountphone = allData.accountphone,
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
						this.userInfo.follow = allData.follow;
						this.userInfo.lv = allData.lv;

                     	//allData.needs  = allData.needs||this.userInfo.needs
                    	// this.userInfo = allData;
                }
            },function(err){
                console.log(err)
            })

        },
        attention:function(){
        	this.$http.get('penpal/add/'+sessionStorage.getItem('accountphone')+'/' + this.userInfo.accountphone + '/0/1')
            .then(function(res){
                if(res.data.code=="2000000" && res.data.data){
                	this.userInfo.follow = 1
                }
            },function(err){
                console.log(err)
            })
        },
        unattention:function(){
        	this.$http.get('penpal/unfollow/'+sessionStorage.getItem('accountphone')+'/' + this.userInfo.accountphone + '/0')
            .then(function(res){
                if(res.data.code=="2000000" && res.data.data){
                	this.userInfo.follow = 0
                }
            },function(err){
                console.log(err)
            })
        },
        bepenfriend:function(){
        	this.$http.get('penpal/add/'+sessionStorage.getItem('accountphone')+'/' + this.userInfo.accountphone + '/3/0')
            .then(function(res){
                if(res.data.code=="2000000" && res.data.data){
                	this.userInfo.lv = 3
                }else{
                    alert('添加失败,可能该用户已是你的熟人。')
                }
            },function(err){
                console.log(err)
            })
        },
        delpenfriend:function(){
        	this.$http.get('penpal/del/'+sessionStorage.getItem('accountphone')+'/' + this.userInfo.accountphone)
            .then(function(res){
                if(res.data.code=="2000000" && res.data.data){
                	this.userInfo.lv = 0
                }else{
                    alert('删除失败，请刷新重试')
                }
            },function(err){
                console.log(err)
            })
        },
        writeletter:function(){
        	this.$router.go({name:'pullLetter', params: { accountphone: this.userInfo.accountphone }});
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
