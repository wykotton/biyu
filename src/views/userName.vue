<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">个人资料</h2>
		<div href="javascript:;" class="header-right fz32" @click="setName">
			保存
		</div>
	</header>
	<div class="dx-psw bgff bb">
		<input type="text" class="input-text bgn bn dx-input" placeholder="给自己起个笔名吧！" v-model="name">
	</div>
	<p class="fz28 c99 p30">一个好听的笔名能增加自己的魅力哦！</p>
		
</template>

<script>
export default {
    data () {
        return {
            name:JSON.parse(sessionStorage.getItem('userinfo')).nickname,
            uid:sessionStorage.getItem('uid')
        }
    },
    computed:{
        userinfo:function(){
            return Object.assign({},JSON.parse(sessionStorage.getItem('userinfo')),{nickname:this.name})
        }
    },
    // ready(){
    //     this.$set('name',this.userinfo.nickname)
    // },
    methods:{
        setName (){
            if(this.name !=''){
                this.$http.post('user/modify/nickname/' + this.uid,{name:this.name})
                .then(function(res){
                console.log(res)
                if(res && res.data.data){
                    sessionStorage.setItem('userinfo',JSON.stringify(this.userinfo));
                    this.$router.go({name:'userinfo'});
                }
                
            },function(err){
                console.log(err)
            })
            }else{
                alert('不能为空')
            }
            
            
            
        }
        
        
    }
    
}
</script>