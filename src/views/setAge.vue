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
		<li v-for="list in ageLists" @click="change($index)">
			<label class="yt yt-ac fz32 c33 p30 bb">
				<input type="radio" name="sex" id="" value="{{$index}}" class="select-sex mr20 db">
				<span>{{list.title}}</span>
			</label>
		</li>
	</ul>
		
</template>

<script>
export default {
    data () {
        return {
        	nowdata:new Date().Format("yyyy/MM/dd"),
        	ageLists:[{
                title: '不限',
                minDate: '1700/1/1',
                maxDate: this.nowdata,
                isDefault: false
            }, {
                title: '12岁以下',
                minDate: '1700/1/1',
                maxDate: this.nowdata,
                isDefault: false
            }, {
                title: '12岁至18岁',
                minDate: '1700/1/1',
                maxDate: this.nowdata,
                isDefault: false
            }, {
                title: '18岁至24岁',
                minDate: '1700/1/1',
                maxDate: this.nowdata,
                isDefault: false
            }, {
                title: '24岁至30岁',
                minDate: '1700/1/1',
                maxDate: this.nowdata,
                isDefault: false
            }, {
                title: '30岁至40岁',
                minDate: '1700/1/1',
                maxDate: this.nowdata,
                isDefault: false
            }, {
                title: '40岁至50岁',
                minDate: '1700/1/1',
                maxDate: this.nowdata,
                isDefault: false
            }, {
                title: '50岁至60岁',
                minDate: '1700/1/1',
                maxDate: this.nowdata,
                isDefault: false
            }, {
                title: '60岁以上',
                minDate: '1700/1/1',
                maxDate: this.nowdata,
                isDefault: false
            }],
            ageDefault:{}
        }
    },
    ready(){
    	try{
    		this.ageDefault = JSON.parse(sessionStorage.getItem('setage'))
    	}catch(e){}
        if (this.ageDefault) {
            for(let value of this.ageLists){
                if (value.title == this.ageDefault.title) {
                    value.isDefault = true;
                    break;
                }
            }
        }else{
            this.ageLists[0].isDefault = true;
        }
    },
    methods:{
        change (index){
            for(let value of this.ageLists){
                value.isDefault = false;
            }
            this.ageLists[index].isDefault = true;
            sessionStorage.setItem('setage',JSON.stringify({
                title: this.ageLists[index].title,
                minDate: this.ageLists[index].minDate,
                maxDate: this.nowdata
            }));  
        }
        
        
    },
    
    
    components: {
    }
}
</script>