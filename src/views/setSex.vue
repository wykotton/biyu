<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">性别</h2>
		<div href="javascript:;" class="header-right fz32" v-link="{name:'findingIndex'}">
			确定
		</div>
	</header>
	<ul class="bgff">
		<li v-for="list in sexData">
			<label class="yt yt-ac fz32 c33 p30 bb">
				<input type="radio" name="sex"  value="list.type" :checked="list.isDefault" class="select-sex mr20 db" @click="change($index)">
				<span>{{list.title}}</span>
			</label>
		</li>
	</ul>
</template>

<script>
export default {
    data () {
        return {
            sexData:[{
                title: '不限',
                type: -1,
                isDefault: false
            }, {
                title: '男',
                type: 0,
                isDefault: false
            }, {
                title: '女',
                type: 1,
                isDefault: false
            }],
            sexDefault:{}
        }
    },
    ready(){
        try{
            this.sexDefault = JSON.parse(sessionStorage.getItem('setsex'))
        }catch(e){}
        if (this.sexDefault) {
            for(let value of this.sexData){
                if (value.type == this.sexDefault.key) {
                    value.isDefault = true;
                    break;
                }
            }
        }else{
            this.sexData[0].isDefault = true;
        }
    },
    
    methods:{
        change (index){
            for(let value of this.sexData){
                value.isDefault = false;
            }
            this.sexData[index].isDefault = true;
            // this.sexDefault = this.sexData[index].title;
            sessionStorage.setItem('setsex',JSON.stringify({key:this.sexData[index].type,value:this.sexData[index].title}));  
        }
        
    },
   
    
    components: {
    }
}
</script>

<style>
    .v-link-active{
        color:#fff !important;
    }

</style>
