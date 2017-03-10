<template>
    <header class="header-bar bg-main">
		<!-- <a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a> -->
		<h2 class="header-title">设置条件</h2>
	</header>
	<ul class="fz32 c33 bgff">
		<li class="yt yt-ac p30 bb">
			<b class="yt-f1 db">性别</b>
			<span class="fz28 c66" v-link="{name:'setSex'}">{{sex.value}}</span>
			<i class="icon icon-next  ml10 db fz28"></i>
		</li>
		<li class="yt yt-ac p30 bb">
			<b class="yt-f1 db">年龄</b>
			<span class="fz28 c66" v-link="{name:'setAge'}">{{age.title}}</span>
			<i class="icon icon-next fz28  ml10 db"></i>
		</li>
		<li class="yt yt-ac p30 bb">
			<b class="yt-f1 db">星座</b>
			<span class="fz28 c66" v-link="{name:'setZodiac'}">{{zodiac.value}}</span>
			<i class="icon icon-next fz28  ml10 db"></i>
		</li>
		<li class="yt yt-ac p30 bb">
			<b class="yt-f1 db">状态</b>
			<span class="fz28 c66" v-link="{name:'setAnarchy'}">{{status.value}}</span>
			<i class="icon icon-next fz28  ml10 db"></i>
		</li>
		<li class="yt yt-ac p30 bb">
			<b class="yt-f1 db" v-link="{name:'setDistances'}">距离</b>
			<span class="fz28 c66">{{distance.value}}</span>
			<i class="icon icon-next fz28 ml10 db"></i>
		</li>
		<li class="yt yt-ac p30 bb">
			<b class="yt-f1 db">需求匹配</b>
			<i class="switch switch-green"><input type="checkbox" :checked=isPatt><span></span></i>
		</li>
	</ul>
	<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" @click="getAll">保存</div>
</template>

<script>
    export default {
        data () {
            return {
                sex:{key:-1,value:'不限'},
                age:{title:'不限',minDate:'1700/1/1',maxDate:new Date().Format("yyyy/MM/dd")},
                zodiac:{key:'all',value:'不限'},
                status:{key:'all',value:'不限'},
                distance:{key:-1,value:'不限'},
                isPatt:true
            }
        },
        ready (){
        	// console.log(this.getItemObj('setsex'));
            this.sex = this.getItemObj('setsex') ? this.getItemObj('setsex') : this.sex;
            this.age = this.getItemObj('setage') ? this.getItemObj('setage') : this.age;
            this.zodiac = this.getItemObj('setzon') ? this.getItemObj('setzon') : this.zodiac;
            this.status = this.getItemObj('setstatus') ? this.getItemObj('setstatus') : this.status;
            this.distance = this.getItemObj('setdistance') ? this.getItemObj('setdistance') : this.distance;
        },
       methods:{
           getAll (){
               let obj = {'age':this.age,'sex':this.sex,'zodiac':this.zodiac,'status':this.status,'distance':this.distance}
               sessionStorage.setItem('setNeed',JSON.stringify(obj));
               this.$router.go({name:'finding'})
           },
           getItemObj: function(name){
           	var formatObj;
           	try{
           		formatObj = JSON.parse(sessionStorage.getItem(name));
           	}catch(e){
           		formatObj = false;
           	}
           	return formatObj;
           }
           
           
       },
        components: {
        }
    }
</script>

<style>
    
</style>