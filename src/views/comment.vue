    <template><div class="all-wrapper">
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
                <i class="icon icon-pre"></i>
            </a>
			<h2 class="header-title">评论</h2>
		</header>
		<div class="card-list-hmc mt30">
			<div class="clh-item bgff bt bb mb30">
				<div class="cit p30 yt">
					<div class="img-wrap user-photo user-photo-s round mr30" style="background-image: url(src/source/images/bg-img-avatar.png);">
					</div>
					<div class="yt-f1">
						<div class="lh1">
							<h3 class="list-title dib yt-te max-w400-hmc">{{userinfo.nickname}}</h3>
							<span class="ml10 dib bg-sex bg-sex-w fz24 cff"><i class="icon icon-sex-w mr10"></i>{{userinfo.nickname}}</span>
						</div>
						<div class="mt20 lh1 yt yt-ac">
							<div class="ci-tags fz20 cff">{{actData.ftype | cardType}}</div>
							<div class="yt-f1 tx-r fz24 c99">
								<span>附近</span>
								<span class="plr20">|</span>
								<span>{{actData.created}}</span>
							</div>
						</div>
						<div class="mt20 fz28 c66 lh16 wb-ba-hmc">
							<p>{{actData.message}}</p>
							<!--<ul class="ci-imgs-list clear mt20">
								<li class="img-wrap"><img src="wgts/images/img-stamp-collecting-list-li.png"/></li>
								<li class="img-wrap"><img src="wgts/images/img-stamp-collecting-list-li.png"/></li>
								<li class="img-wrap"><img src="wgts/images/img-stamp-collecting-list-li.png"/></li>
								<li class="img-wrap"><img src="wgts/images/img-stamp-collecting-list-li.png"/></li>
								<li class="img-wrap"><img src="wgts/images/img-stamp-collecting-list-li.png"/></li>
								<li class="img-wrap"><img src="wgts/images/img-stamp-collecting-list-li.png"/></li>
							</ul>-->
						</div>
					</div>
				</div>
				<div class="cib yt yt-ac ptb15-hmc bt">
					<div class="yt-f1 yt yt-ac yt-pc ptb15-hmc br">
						<i class="icon-hi icon-share-hmc mr10"></i>
						<div class="fz28 c99">(0)</div>
					</div>
					<div class="yt-f1 yt yt-ac yt-pc ptb15-hmc br" :class="{'active':actData.islike == 1}"  @click="setLike(actData)">
						<i class="icon-hi icon-zan-hmc mr10"></i>
						<div class="fz28 c99">({{actData.liked}})</div>
					</div>
					<div class="yt-f1 yt yt-ac yt-pc ptb15-hmc">
						<i class="icon-hi icon-comment-hmc mr10"></i>
						<div class="fz28 c99">({{pagecount}})</div>
					</div>
				</div>
			</div>
		</div>
		<!-- comments: "名流"created : 1476954217000 fid : 20 id : 11 nickName : "二号"uid : 13 -->
		<ul class="list" v-if="commentLists.length > 0">
			<li class="yt" v-for = "item in commentLists">
				<div class="user-photo user-photo-s round mr20" style="background-image: url(/src/source/images/bg-img-avatar.png);">
				</div>
				<div class="yt-f1">
					<div class="yt yt-ac lh1">
						<h3 class="list-title yt-f1 yt-te color-orange" v-link="{name:'user',params:{userId:item.id}}">{{item.nickName}}</h3>
						<div class="fz24 c99">
							{{new Date(parseInt(item.created)).Format("yyyy-MM-dd hh:mm:ss")}}
						</div>
					</div>
					<div class="fz28 c66 lh16 mt10 wb-ba-hmc commentscon">
						{{{showface($index,item.comments)}}}
					</div>
				</div>
			</li>
			<!-- <li class="yt">
				<div class="user-photo user-photo-s round mr20" style="background-image: url(/src/source/images/bg-img-avatar.png);">
				</div>
				<div class="yt-f1">
					<div class="yt yt-ac lh1">
						<h3 class="list-title yt-f1 yt-te">尼古拉斯赵四</h3>
						<div class="fz24 c99">
							2016-8-8 15:22:08
						</div>
					</div>
					<div class="fz28 c66 lh16 mt10 wb-ba-hmc">
						回复<span class="ml10">爱吃西红柿的小猫</span>：至少还有诗和远方！Everything is going on, but don't give up trying.
万事随缘，但不要放弃努力。
					</div>
				</div>
			</li> -->
		</ul>
		<div class="yt-f1 yt yt-ac yt-pc ptb15-hmc mt30 br card" @click="showmore"  v-if="pagecount>pageSize&&commentLists.length<pagecount">查看更多</div>
		<div class="mt30 ptb20 plr30 bgff bt yt yt-ac">
			<div class="bgf5 bdrds6-hmc yt-f1 yt yt-ac ptb10 h60-hmc">
                <div id="Smohan_FaceBox"></div>
				<div class="yt-f1 yt yt-ac">
					<input type="text" id="Smohan_text" class="input-text db pt0 pb0 bn bgn" placeholder="我也说一句..." v-model="commentData" />
				</div>
				<div class="bl plr20 yt yt-ac face">
					<i class="icon-hi icon-emoji-hmc"></i>
				</div>
			</div>
			<div class=" ml20 p20 fz24 c66 bgf5 h60-hmc yt yt-ac bdrds6-hmc" @click="sendComment">
				发送
			</div>
		</div>
</div></template>

<script>
     import '../source/js/smohan.face.js'
     // require("../source/js/smohan.face.js");
    export default {
        data () {
            return {
                fid:this.$route.params.msgId,
                userinfo:{},
                commentLists:[],
                actData:{},
                commentData:'',
                deval:'',
                pageindex:1,
                pageSize:10,
                pagecount:0
                
            }
        },
        ready(){
            this.getData(event);
            $(".face").smohanfacebox({
                Event : "click",    //触发事件  
                divid : "Smohan_FaceBox", //外层DIV ID
                textid : "Smohan_text" //文本框 ID
            });
        },
        route:{
            data(transition){
                let _self = this;
                _self.$http.get('feed/get/' + _self.fid).then(function(res){
                    if(res.data.code =='2000000' && res.data.data){
                    	_self.actData = res.data.data;
                        _self.pagecount = res.data.data.commentnum
                        // _self.actData = $.extend(true, _self.actData, res.data.data);
                        // 
                        // 查询发布人的信息
                        _self.$http.get('user/get/info/' + _self.actData.uid).then(function(res){
                        	if(res.data.code =='2000000' && res.data.data){
                        		_self.userinfo = res.data.data;
                        	}
                        },function(error){
		                    console.log(error);
		                })
                    }
                },function(error){
                    console.log(error);
                })
                
                 
                
            }
        },
        
        
        methods :{
            sendComment (){
                this.$http.post('comment/post',{fid:this.fid,comments:this.commentData})
                    .then(function(res){
                        if(res.data.code == '2000000'){
                        	this.getData(this.actData);
                        	this.commentData = '';
                            alert('发布成功');
                        }
                },function(error){
                        alert(error)
                    
                })
                
            },            
            getData:function(event){
                
                this.$http.get('comment/list/'+ this.fid +'/'+this.pageindex +'/'+this.pageSize).then(function(res){
                    if(res.data.code =='2000000' && res.data.data.length > 0){
                        // this.commentLists = res.data.data;
                        this.$set('commentLists',res.data.data);
                    }
                   
                },function(error){
                    console.log(error)
                })
            },
            setLike:function(d){
            	d.islike = 0;
                if(d.islike == 0){
                    this.$http.post('feed/liked/' + d.id).then(function(res){
                        if(res.data.code == '2000000'){
                            this.actData.islike = 1;
                            this.actData.liked += 1;
                        }else{
                            alert(res.data.msg);
                        }
                        
                },function(error){
                    console.log(error);
                })
                    
                }
                
            },
            showmore:function(event){

                this.$http.get('comment/list/'+ this.fid +'/'+ (this.pageindex+1) +'/'+this.pageSize).then(function(res){
                    if(res.data.code =='2000000' && res.data.data.length > 0){
                        this.commentLists = this.commentLists.concat(res.data.data);
                    }
                   
                },function(error){
                    console.log(error)
                })},
                showface:function(index,msg){
                    var comcon = this.escape2Html(msg);
                    for(i=0;i<60;i++){
                        var Reg = new RegExp('<emt>'+ (i+1) +'</emt>',"g")
                        comcon = comcon.replace(Reg,'<img src="../src/source/images/face/'+(i+1)+'.gif">');
                    }
                    return comcon;
                },
                escape2Html:function(str) {
                 var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
                 return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
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
        }
    }

</script>

<style>
    
</style>