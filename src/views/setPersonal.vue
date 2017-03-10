<template>
    <header class="header-bar bg-main">
			<a href="javascript:history.go(-1);" class="header-left">
				<i class="icon icon-pre"></i>
			</a>
			<h2 class="header-title">个人资料</h2>
		</header>
		<ul class="fz32 c33 bgff">
			<li class="yt yt-ac p30 bb">
				<b class="yt-f1 db">性别</b>
				<span class="fz28 c66" @click="modalShow('sex')">{{sexDefault.value}}</span>
			</li>
			<li class="yt yt-ac p30 bb">
				<b class="yt-f1 db">生日</b>
                <input type="datetime" class="dx-input-txt c66 fz28 tx-r fr db" placeholder="未设置" id="appDateTime" data-lcalendar="2016-05-11,2016-05-11"  readonly v-model="ageDefault"/>
				<!-- <span class="fz28 c66" @click = "modalShow('age')" id="picktime">{{ageDefault}}</span> -->
			</li>
			<li class="yt yt-ac p30 bb">
				<b class="yt-f1 db">星座</b>
				<span class="fz28 c66" @click = "modalShow('zodiac')">{{zonDefault}}</span>
			</li>
		</ul>

		<div class="btn btn-b bg-second yt-f1 db ml30 mr30 mt120 fz36" @click="setPersonal">下一步</div>

        <!--性别弹窗-->
        <modal :show.sync="isShow" ></modal>


</template>


<script>
    import Modal from '../components/Modal';

    export default {
        data () {
            return {
                isShow:false,
                sexDefault:{key:-1,value:'未设置'},
                ageDefault:'未设置',
                zonDefault:'未设置',
                uid:sessionStorage.getItem('uid'),
                userinfo:{}

            }
        },
        ready(){
            try{
                this.userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
            }catch(e){}
            this.showTime();
        },
        events:{
            sex:function(value){
                let realSex = value == 1 ? '女' : '男';
                this.sexDefault = {key:value,value:realSex};
            },
            zon:function(value){
                let arr = ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'];
               this.zonDefault = arr[value];
            }
        },

        methods:{
            modalShow:function(name){
                this.$broadcast('type',name);
                this.isShow = true;
            },
            setPersonal(){
                // sessionStorage.setItem('isfresh',true);
                this.$http.post('user/modify/info/' + this.uid,{sex:this.sexDefault.key,birthday:this.ageDefault,sign:this.zonDefault})
                .then(function(res){
                    if(res && res.data.data){
                        this.userinfo = Object.assign(this.userinfo, {sex:this.sexDefault.key,birthday:this.ageDefault,zodiac:this.zonDefault});
                        sessionStorage.setItem('userinfo',JSON.stringify(this.userinfo));
                        this.$router.go({name:'setHobby'})
                    }
                },function(err){
                    console.log(err);
                })


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

            // showTime:function(){
            //     $('#picktime').mdatetimer({
            //         mode: 1, //时间选择器模式：1：年月日，2：年月日时分（24小时），3：年月日时分（12小时），4：年月日时分秒。默认：1
            //         format: 2, //时间格式化方式：1：2015年06月10日 17时30分46秒，2：2015-05-10  17:30:46。默认：2
            //         years: [2000, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017], //年份数组
            //         nowbtn: true, //是否显示现在按钮
            //         onOk: function() {
            // //					alert('OK');
            //         }, //点击确定时添加额外的执行函数 默认null
            //         onCancel: function() {
            // //					alert('A');
            //         }, //点击取消时添加额外的执行函数 默认null
            //       });
            // }



        },
        components: {
            Modal
        }
    }
</script>

<style>
</style>
