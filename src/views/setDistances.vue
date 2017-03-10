<template>

	<header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">距离选择</h2>
			<div href="javascript:;" class="header-right fz32" v-link="{name:'findingIndex'}">
				确定
			</div>
		</header>
		<ul class="bgff">
			<li v-for="list in distanceLists" @click="change($index)">
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
            distanceLists: [{
				title: '不限',
				type: 'all',
				isDefault: false
			}, {
				title: '同城',
				type: 1,
				isDefault: false
			}, {
				title: '省内',
				type: 2,
				isDefault: false
			}, {
				title: '省外',
				type: 3,
				isDefault: false
			}, {
				title: '国外',
				type: 4,
				isDefault: false
			}],
            distanceDefault:{}
        }
    },
    ready(){
        try{
            this.distanceDefault = JSON.parse(sessionStorage.getItem('setdistance'))
        }catch(e){}
        if (this.distanceDefault) {
            for(let value of this.distanceLists){
                if (value.type == this.distanceDefault.key) {
                    value.isDefault = true;
                    break;
                }
            }
        }else{
            this.distanceLists[0].isDefault = true;
        }
    },
    methods :{
        change (index){
            for(let value of this.distanceLists){
                value.isDefault = false;
            }
            this.distanceLists[index].isDefault = true;
            sessionStorage.setItem('setdistance',JSON.stringify({key:this.distanceLists[index].type,value:this.distanceLists[index].title}));  
        }        
    },
    components: {
    }
}
</script>