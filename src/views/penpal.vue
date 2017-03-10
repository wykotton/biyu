<template>
	
	<header class="header-bar bg-main">
		<h2 class="header-title">笔友</h2>
		<div class="header-right">
			<i class="icon icon-search" v-link="{name:'finding'}"></i>
		</div>
	</header>
	<div class="tabs-nav-line tabs-nav-line-second bgff">
    <a href="javascript:;" class="tabs-nav-line-li" :class="{'active':nav.isActive}" v-for="nav in tabMenu" @click="changeNav($index)">
        <p class="dib fz28">{{nav.name}}</p>
    </a>
	</div>
	
	<!-- if list && list.length > 0 -->
	<ul class="list bn mt30">
		<li class="yt yt-ac" v-for="list in listData">
			<div class="img-wrap user-photo user-photo-s mr20" v-bind:style="{backgroundImage:'url('+ list.avatar +')'}" v-link="{name:'user',params:{userId:list.id}}">
			</div>
			<h3 class="list-title yt-f1 yt-te">{{list.nickname}}</h3>
		</li>
	</ul>
	<!-- else -->
	<!-- 空白提示页面 -->
	<div class="h943-hmc yt yt-ac yt-pc yt-ver" v-if="listData.length == 0">
		<div class="img-wrap user-photo bg-img-blank" style="background-image: url(/src/source/images/bg-img-blank.png);">
		</div>
		<div class="fz36 c66 lh1 mt30 pt30">
			暂无笔友
		</div>
	</div>


</template>

<script>
    export default {
        data () {
            return {
                listData:[],
                tabMenu:[{name:'笔友',isActive:true},{name:'熟人',isActive:false},{name:'关注',isActive:false},{name:'申请',isActive:false}],
                uid:sessionStorage.getItem('uid'),
                type:3
                
            }
        },
        ready(){
            this.getData(this.type)
            
        },
        methods:{
            changeNav:function(index){
                for(var i in this.tabMenu){
                    this.tabMenu[i].isActive = false;
                }
                this.tabMenu[index].isActive = true;
                let type = (-(index-3))
                this.getData(type)
                
                
            },
            getData (type){
                if (type == 2||type == 3) {
                this.$http.get('penpal/list/' + type+ '/' + sessionStorage.getItem('accountphone'))
                    .then(function(res){
                    if(res.data.data&&res.data.code=="2000000"){
                        this.listData = res.data.data
                    }
                    
                },function(error){
                    console.log(error)
                })
                }

                if (type == 1) {
                this.$http.get('penpal/list/follow/' + sessionStorage.getItem('accountphone'))
                    .then(function(res){
                    if(res.data.data&&res.data.code=="2000000"){
                        this.listData = res.data.data
                    }
                    
                },function(error){
                    console.log(error)
                })}
                
                
            }
            
            
            
        },
        
        
        components: {
        }
    }
</script>