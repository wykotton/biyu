<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">出生年月</h2>
		<div href="javascript:;" class="header-right fz32" @click="setAge">
			保存
		</div>
	</header>
	<ul class="fz32 c33 bgff">
		<li class="yt yt-ac p30 bb">
			<b class="yt-f1 db">年龄</b>
			<div>
			<input type="datetime" class="dx-input-txt c66 fz28 tx-r fr db" placeholder="未设置" id="appDateTime" data-lcalendar="2016-05-11,2016-05-11"  readonly v-model="age"/>
			</div>
		</li>
	</ul>
	
</template>

<script>
export default {
    data () {
        return {
            age:JSON.parse(sessionStorage.getItem('userinfo')).birthday||'',
            uid:sessionStorage.getItem('uid')
        }
    },
    ready(){
        this.showTime();
    },
    methods:{
        setAge(){
            if(this.age != ''){
                this.$http.post('user/modify/info/birthday/' + this.uid,{birthday:this.age})
                .then(function(res){
                    console.log(res)
                    if(res && res.data.data){
                        this.$router.go({name:'userinfo'})
                    }
                },function(err){
                    console.log(err)
                })
            }else{
                alert('不能为空')
            }
        },
        showTime:function(){                
            var calendar = new LCalendar();
            calendar.init({
                'trigger': '#appDateTime', //标签id
                'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
                'minDate': '1900-1-1', //最小日期
                'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
            });
        }
    },
    components: {
    }
}
</script>