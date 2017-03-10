<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">性别</h2>
		<div href="javascript:;" class="header-right fz32" @click="setSex">
			保存
		</div>
	</header>
	<ul class="bgff">
		<li v-for="list in listData" @click=" sex = $index">
			<label class="yt yt-ac fz32 c33 p30 bb">
				<input type="radio" name="sex" id="" :checked="userinfo.sex == $index" value="{{$index}}" class="select-sex mr20 db">
				<span>{{list}}</span>
			</label>
		</li>
	</ul>
		
</template>

<script>
export default {
    data () {
        return {
            listData:['男','女'],
            sex:0,
            uid:sessionStorage.getItem('uid'),
            userinfo:JSON.parse(sessionStorage.getItem('userinfo'))
        }
    },    
    methods:{
        setSex (){
                this.$http.post('user/modify/info/sex/' + this.uid,{sex:this.sex})
            .then(function(res){
                console.log(res)
                if(res && res.data.data){
                    this.$router.go({name:'userinfo'})
                }
            },function(err){
                console.log(err)
            })

            
            
            
        }
        
    },
    
    components: {
    }
}
</script>