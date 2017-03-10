<template>
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">个人资料</h2>
			<a @click="setSign" class="header-right fz32">
				保存
			</a>
		</header>

		<div class="bgff dx-textarea p30 mt20 bb bt">
			<textarea placeholder="输入您的个性签名！" v-model="sign"></textarea>
		</div>
</template>

<script>
    export default {
        data () {
            return {
                sign:'',
                uid:sessionStorage.getItem('uid')
            }
        },
        methods: {
            setSign (){
                    this.$http.post('user/modify/signature/' + this.uid,{signature:this.sign})
                    .then(function(res){
                        if(res && res.data.data){
                            this.$router.go({name:'dynamics'})
                        }
                    },function(err){
                        console.log(err)
                    })

                }

        }
    }
</script>

<style>
    
</style>