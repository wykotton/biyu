<template>
	<header class="header-bar bg-main">
		<div class="header-left fz32" @click="isShow = true">
			<i class="icon icon-menu"></i>
			<span>分类</span>
		</div>
		<h2 class="header-title">动态</h2>
		<div class="header-right">
			<i class="icon icon-edit" v-link="{name:'sendAct'}"></i>
		</div>
	</header>
	
	<!-- 
		此处判断下 如果是我的动态的话就显示 要么就不显示好了
	-->
	<!-- 我的动态-回复提示-start -->
	<div class="mt30 p30 bgff bb wb-ba-hmc fz32 c66" v-if="newlyc">
		<span class="dib mr10 c33">{{newlyc.nickName}}</span>评论了您的动态，<a class="color-green" href="javascript:void(0)" v-link="{name:'comment',params:{msgId:newlyc.fid}}">点击查看</a>吧！
	</div>
	<!-- 我的动态-回复提示-end -->

	<div class="card-list-hmc mt30" v-for="item in listData">
		<div class="clh-item bgff bt bb mb30">
			<div class="cit p30 yt">
				<div class="img-wrap user-photo user-photo-s round mr30" :style="{backgroundImage: 'url('+item.avatar+')'}" v-on:click="userview(item.uid)">
				</div>
				<div class="yt-f1">
					<div class="lh1">
						<h3 class="list-title dib yt-te max-w400-hmc">{{item.nickName}}</h3>
						<span class="ml10 dib bg-sex bg-sex-m fz24 cff"><i class="icon icon-sex-m mr10"></i>24</span>
					</div>
					<div class="mt20 lh1 yt yt-ac">
						<div class="ci-tags fz20 cff">{{item.ftype | cardType}}</div>
						<div class="yt-f1 tx-r fz24 c99">
							<span>附近</span>
							<span class="plr20">|</span>
							<span>{{DateDiff(new Date(parseInt(item.created)).Format("yyyy-MM-dd"))}} {{new Date(parseInt(item.created)).Format("hh:mm:ss")}}</span>
						</div>
					</div>
					<div class="mt20 fz28 c66 lh16 wb-ba-hmc">
						<p>{{item.message}}</p>
						<ul class="ci-imgs-list clear mt20" v-if="item.pic!=''">
							<li class="img-wrap" v-for="list in item.pic" track-by="$index"><img :src="list.src" @click="showpic(item.pic,$index)" /></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="cib yt yt-ac ptb15-hmc bt">
				<div class="yt-f1 yt yt-ac yt-pc ptb15-hmc br active" v-link="{name:'share'}">
					<i class="icon-hi icon-share-hmc mr10"></i>
					<div class="fz28 c99">({{item.forwarded}})</div>
				</div>
				<div class="yt-f1 yt yt-ac yt-pc ptb15-hmc br" v-bind:class="{ 'active': item.islike == '1' }"  @click="setLike($index,item)">
					<i class="icon-hi icon-zan-hmc mr10"></i>
					<div class="fz28 c99">({{item.liked}})</div>
				</div>
				<div class="yt-f1 yt yt-ac yt-pc ptb15-hmc active" v-link="{name:'comment',params:{msgId:item.id}}">
					<i class="icon-hi icon-comment-hmc mr10"></i>
					<div class="fz28 c99">({{item.commentnum}})</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- 筛选 -->
	<div class="dialog-wrap" :class="{'dialog-show':isShow}" @click="isShow = false">
		<div class="action-main bgff cat-main yt">
			<!-- <ul class="cm-nav yt-f1">
				<li>
					<a href="javascript:;">不限</a>
				</li>
				<li>
					<a href="javascript:;">最新</a>
				</li>
				<li class="active" id="cm-all">
					<a href="javascript:;">全部</a>
				</li>
			</ul> -->
			<div class="cm-content yt-f2 active">
				<ul>
					<li v-for="typeList in filterData" @click="getData($index)">
						<a href="javascript:;">{{typeList}}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="imgmask" v-if="focue"><showimg v-bind:srclist="imglist" v-bind:srcindex="focueindex"></showimg></div>
	
</template>

<script>
	import '../source/js/owl.carousel.js';
	// var carousel = require('../source/js/owl.carousel.js');
	var showimgTemp = require('../components/showImg');
    export default {
        data () {
            return {
                isShow:false,
                listData:[],
                uid:sessionStorage.getItem('uid'),
                filterData:['全部','公开信','分享','征友'],
                pageindex:1,
                pagesize:10,
                imglist:[],
                focueindex : 0,
                focue:false,
                newlyc:{},
                userInfo:{},
                loadGd:false
            }
        },
        ready(){
            this.getData(0);
            this.newestcom();
            this.getuserinfo();
            var _this = this;
            $(document.body).scroll(function(event) {
                var curDom = $(event.target);
                if (curDom.find('#app').height() - curDom.scrollTop() - window.screen.availHeight < 5 && !_this.loadGd) {
                    _this.loadGd = 1;
                    _this.getData(_this.pageindex++)
                }
            });
        },
        
        methods:{
        	showpic:function(l,index){
        		this.imglist = l;
        		this.focueindex = index;
        		this.focue = true;		
        	},
            getData:function(type){
                this.$http.get('feed/list/'+type+'/'+this.pageindex+'/'+this.pagesize).then(function(res){
                	for(var i in res.data.data){
                		if (!res.data.data[i].pic) res.data.data[i].pic = '[]';
                		res.data.data[i].pic = JSON.parse(res.data.data[i].pic);
                		if (!res.data.data[i].islike) {res.data.data[i].islike = "0"}
                	};
                    this.$set('listData',res.data.data);
                },function(error){
                    console.log(error);
                })
            },
            newestcom:function(){

                this.$http.get('comment/my/1/1').then(function(res){
                	if(res.data.code == '2000000'){
                        this.newlyc = res.data.data[0];
                    }else{
                        alert(res.data.msg);
                    }
                },function(error){
                    console.log(error);
                })

            },
            
            setLike:function(index,d){
                if(!parseInt(d.islike)){
                    this.$http.post('feed/liked/' + d.id).then(function(res){
                        if(res.data.code == '2000000'){
                            this.listData[index].islike = "1";
                            this.listData[index].liked += 1;
                        }else{
                            alert(res.data.msg);
                        }
                        
                },function(error){
                    console.log(error);
                })
                    
                }else{
                	alert('你已经赞过了');
                }
                
            },
            DateDiff:function(sDate2){    //sDate1和sDate2是2006-12-18格式  
			   var  aDate,  oDate1,  oDate2,  iDays , sDate1 ;
			   sDate1 = new Date().Format("yyyy-MM-dd");
			   aDate  =  sDate1.split("-");
			   oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]); //转换为12-18-2006格式  
			   aDate  =  sDate2.split("-");  
			   oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);  
			   iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24); //把相差的毫秒数转换为天数
			   if (iDays == 1) {return  '昨天';} 
			   else if (iDays == 2) {return  '前天'; }
			   else if (iDays > 2) {return  '三天前'; }
			   else {return;}
			   
			},

        getuserinfo:function(){
            this.$http.get('user/get/info/' + this.uid)
            .then(function(res){
            	if(res.data.code == '2000000'){
					this.userinfo = sessionStorage.setItem('userinfo',JSON.stringify(res.data.data));
                    sessionStorage.setItem('accountphone',res.data.data.accountphone);
            	}
            },function(err){
                console.log(err)
            })

        },
        userview:function(uid){
        	if (uid == sessionStorage.getItem('uid')) this.$router.go({name:'userinfo'});
        	else this.$router.go({name:'user',params:{userId:uid}});
        }
            
        },
        filters:{
            cardType:function(value){
                let type = parseInt(value);
                let realType;
                switch (type){
                    case 0:
                        realType = '全部'
                        break;
                    case 1:
                         realType = '公开信'
                        break;
                    case 2:
                         realType = '分享'
                        break;
                    case 3:
                         realType = '征友'
                        break;
                }
                return realType;
            }
           
            
            
            
        },
        components: {
        	'showimg': showimgTemp
        }
    }
</script>

