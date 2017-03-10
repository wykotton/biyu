<template>
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">个人资料</h2>
		</header>
		<div class="dx-psw bgff bb">
					<input type="text" class="input-text bgn bn dx-input" maxlength="6" placeholder="给自己起个笔名吧！" v-model="nickName">
				</div>
				<p class="fz28 c66 p30">2至4个字为佳，最多不超过6个字</p>
		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" @click="setName">下一步</div>
</template>

<script>
    export default {
        data () {
            return {
                nickName:'',
                uid:sessionStorage.getItem('uid'),
                userinfo:{}
            }
        },
        ready(){
            try{
                this.userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
            }catch(e){}
        },
        methods:{
            setName (){
                
                if(this.nickName != ''){
                    console.log(sessionStorage.getItem('uid'))
                    this.$http.post('user/modify/nickname/' + this.uid,{name:this.nickName})
                        .then(function(res){
                            // console.log(res)
                            if(res.data.data){
                                this.userinfo = Object.assign(this.userinfo, {nickname:this.nickName});
                                sessionStorage.setItem('userinfo',JSON.stringify(this.userinfo));
                                this.$router.go({name:'setPersonal'})
                            }
                    },function(error){
                            console.log(error)
                    })
                    
                    
                }else{
                    alert('笔名不能为空')
                    
                }
                
                
                
                
            }
            
            
            
            
        },
        
        
        
        components: {
        }
    }
</script>

<style>
    
</style>