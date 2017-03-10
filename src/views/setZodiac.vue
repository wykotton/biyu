<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">星座</h2>
		<div href="javascript:;" class="header-right fz32" v-link="{name:'findingIndex'}">
			确定
		</div>
	</header>
	<ul class="bgff">
		<li v-for="list in zonLists" @click="change($index)">
			<label class="yt yt-ac fz32 c33 p30 bb">
				<input type="radio" name="constellation" id="" value="{{$index}}" class="select-sex mr20 db">
				<span>{{list.title}}</span>
			</label>
		</li>
		
	</ul>
		
</template>

<script>
export default {
    data () {
        return {

            zonLists:[{
				title: '不限',
				type: 'all',
				isDefault: false
			}, {
				title: '白羊座',
				type: '白羊座',
				isDefault: false
			}, {
				title: '金牛座',
				type: '金牛座',
				isDefault: false
			}, {
				title: '双子座',
				type: '双子座',
				isDefault: false
			}, {
				title: '巨蟹座',
				type: '巨蟹座',
				isDefault: false
			}, {
				title: '狮子座',
				type: '狮子座',
				isDefault: false
			}, {
				title: '处女座',
				type: '处女座',
				isDefault: false
			}, {
				title: '天秤座',
				type: '天秤座',
				isDefault: false
			}, {
				title: '摩羯座',
				type: '摩羯座',
				isDefault: false
			}, {
				title: '射手座',
				type: '射手座',
				isDefault: false
			}, {
				title: '水瓶座',
				type: '水瓶座',
				isDefault: false
			}, {
				title: '双鱼座',
				type: '双鱼座',
				isDefault: false
			}, {
				title: '天蝎座',
				type: '天蝎座',
				isDefault: false
			}],
            zonDefault:{}
        }
    },
    ready(){
        try{
            this.zonDefault = JSON.parse(sessionStorage.getItem('setzon'))
        }catch(e){}
        if (this.zonDefault) {
            for(let value of this.zonLists){
                if (value.type == this.zonDefault.key) {
                    value.isDefault = true;
                    break;
                }
            }
        }else{
            this.zonLists[0].isDefault = true;
        }
    },
    methods:{
        
        change (index){
            for(let value of this.zonLists){
                value.isDefault = false;
            }
            this.zonLists[index].isDefault = true;
            sessionStorage.setItem('setzon',JSON.stringify({key:this.zonLists[index].type,value:this.zonLists[index].title}));  
        }
    },
    components: {
    }
}
</script>