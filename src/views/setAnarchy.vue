<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">状态选择</h2>
		<div href="javascript:;" class="header-right fz32" onclick="window.history.go(-1)">
			确定
		</div>
	</header>
	<ul class="student-select">
		<li class="bb bgff" v-for="list in statusLists" @click="change($index)">
			<label class="fz32 c33 yt yt-ac p30">					
					<input type="radio" name="state" id="" value="{{$index}}" class="select-sex mr20 db" />
				<b>{{list.title}}</b>
				<!--<div class="yt-f1 tx-r select-icon">
					<i class="icon icon-up icon-down"></i>
				</div>-->
			</label>
		</li>
	</ul>
	<!-- <div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt60 fz36">大功告成</div> -->

</template>

<script>
export default {
    data () {
        return {
            statusLists: [{
				title: '不限',
				type: 'all',
				isDefault: false
			}, {
				title: '学生',
				type: '学生',
				isDefault: false
			}, {
				title: '上班',
				type: '上班',
				isDefault: false
			}, {
				title: '经商',
				type: '经商',
				isDefault: false
			}, {
				title: '闲人',
				type: '闲人',
				isDefault: false
			}, {
				title: '自由职业',
				type: '自由职业',
				isDefault: false
			}],
            statusDefault:{}
        }
    },
    ready(){
        try{
            this.statusDefault = JSON.parse(sessionStorage.getItem('setstatus'))
        }catch(e){}
        if (this.statusDefault) {
            for(let value of this.statusLists){
                if (value.type == this.statusDefault.key) {
                    value.isDefault = true;
                    break;
                }
            }
        }else{
            this.statusLists[0].isDefault = true;
        }
    },
    
    methods :{
        change (index){
            for(let value of this.statusLists){
                value.isDefault = false;
            }
            this.statusLists[index].isDefault = true;
            sessionStorage.setItem('setstatus',JSON.stringify({key:this.statusLists[index].type,value:this.statusLists[index].title}));  
        }
        
    },
    components: {
    }
}
</script>