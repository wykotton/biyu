<template>
	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">集邮</h2>
	</header>
	<div class="p30 tx-c fz28 c99">
		你共收集了 <span class="color-red">9</span> 张邮票
	</div>
	<div class="stamp-collecting-list plr30">
		<ul class="clear">
			<li class="bd bgff" v-for="item in datalist">
				<div class="bg-stamp-collecting-list-li-img-wrap">
					<div class="img-wrap user-photo" style="background-image: url(/src/source/images/img-stamp-collecting-list-li.png);">
						<img :src="item.pic" />
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    data () {
        return {
                uid:sessionStorage.getItem('uid'),
                userinfo:JSON.parse(sessionStorage.getItem('userinfo')),
                pageindex:1,
                pagesize:10,
                datalist:[]
        }
    },
    ready(){
        this.getData();
    },
    methods:{
    	getData:function(type){
                this.$http.get('stamp/list/'+this.userinfo.accountphone+'/'+this.pageindex+'/'+this.pagesize).then(function(res){
                	if(res.data.code == '2000000'){
                        this.datalist = res.data.data.list;
                    }else{
                        alert(res.data.msg);
                    }
                },function(error){
                    console.log(error);
                })
            }
        },
    components: {
    }
}
</script>