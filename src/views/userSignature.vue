<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">个人资料</h2>
		<div href="javascript:;" class="header-right fz32" @click="setSign">
			保存
		</div>
	</header>

	<div class="bgff dx-textarea p30 mt20 bb bt">
		<textarea placeholder="输入您的个性签名！" :value="userinfo.signature" v-model="sign"></textarea>
	</div>
	
</template>

<script>
export default {
    data () {
        return {
            sign:'',
            uid:sessionStorage.getItem('uid'),
            userinfo:JSON.parse(sessionStorage.getItem('userinfo'))
        }
    },
    methods:{
        setSign (){
            this.$http.post('user/modify/signature/' + this.uid,{signature:this.sign})
            .then(function(res){
                if(res && res.data.data){
                    this.$router.go({name:'userinfo'})
                }
            },function(err){
                console.log(err)
            })
            
        }
        
    }
   
}
</script>