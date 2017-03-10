<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">目前状态</h2>
		<div href="javascript:;" class="header-right fz32" @click="setAct">
			保存
		</div>
	</header>
	<ul class="student-select">
		<li class="bb bgff" v-for="list in actLists" @click="actName = list">
			<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state" :checked="userinfo.status == list" value="{{$index}}" class="select-sex mr20 db" />
				<b>{{list}}</b>
				<!--<div class="yt-f1 tx-r select-icon">
					<i class="icon icon-up icon-down"></i>
				</div>-->
			</label>
		</li>
	</ul>
	<!-- <div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt60 fz36">大功告成</div> -->
	
</template>

<script>
export default {
    data () {
        return {
            actLists:['其他','学生','上班','经商','闲人','自由职业'],
            actName:'',
            uid:sessionStorage.getItem('uid'),
            userinfo:JSON.parse(sessionStorage.getItem('userinfo'))
        }
    },
    methods:{
        setAct (){
            if(this.actName != ''){
                this.$http.post('user/modify/otherinfo/status/' + this.uid,{status:this.actName})
                .then(function(res){
                    console.log(res)
                    if(res && res.data.data){
                        this.$router.go({name:'userinfo'})
                    }
                },function(err){
                    
                    console.log(err)
                })
            }
        }
        
        
    },
    components: {
    }
}
</script>