<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">星座</h2>
		<div href="javascript:;" class="header-right fz32"　@click="setZon">
			保存
		</div>
	</header>
	<ul class="bgff">
		<li v-for="list in zonLists" @click="zonName = list">
			<label class="yt yt-ac fz32 c33 p30 bb">
				<input type="radio" name="constellation" :checked="userinfo.zodiac == list" value="{{$index}}" class="select-sex mr20 db">
				<span>{{list}}</span>
			</label>
		</li>
		
	</ul>
	
</template>

<script>
export default {
    data () {
        return {
            zonLists:['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','摩羯座','射手座','水瓶座','双鱼座','天蝎座'],
            zonName:'',
            uid:sessionStorage.getItem('uid'),
            userinfo:JSON.parse(sessionStorage.getItem('userinfo'))
        }
    },
    methods :{
        setZon (){
            if(this.zonName != ''){
                this.$http.post('user/modify/info/sign/' + this.uid,{sign:this.zonName})
                .then(function(res){
                    console.log(res)
                    if(res && res.data.data){
                        this.$router.go({name:'userinfo'})
                    }
                },function(err){
                    console.log(err);
                })
                
            }else{
                alert('不能为空')
            }
            
        }
        
        
    }
}
</script>