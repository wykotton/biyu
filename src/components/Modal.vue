<template>
<div class="dx-dialog" :class="{'active': show}">
			<div class="dialogmask" @click="show = false"></div>
			<div class="dx-dialogcontent"  v-if="fileName == 'sex'">
				<div class="dialog-cbox">
                        <h2 class="dialog-tit fz32 tx-c c33">性别</h2>
                        <div class="sex-select yt ptb50">
                            <label class="yt-f1 yt yt-ac fz28 c66 yt-pc" v-for="list in sexData" @click="sexDefault = $index">
                                <input type="radio" name="sex" id="" :value="$index+1" :checked="$index==0?true:false" class="select-sex mr20 db" />
                                <span>{{list}}</span>
                            </label>
                        </div>
                        <div class="fz32 tx-c know-btn yt yt-ac yt-pc">
						<div class="yt-f1 bg99 dilog-h80 yt yt-ac yt-pc" @click= "show = false">取消</div>
						<div class="yt-f1 bg-second dilog-h80 yt yt-ac yt-pc" @click="setSex">确定</div>
					</div>
				</div>
                </div>
                <div class="dx-dialogcontent" v-if = "fileName == 'zodiac'">
                <div class="constellation">
					<label class="yt yt-ac fz32 c33" v-for="zon in zonData" @click="zonDefault = $index">
						<b class="db yt-f1">{{zon}}</b>
						<input type="radio" name="constellation" />
						<i class="icon-duigou"></i>
					</label>
				</div>
				<div class="fz32 tx-c know-btn yt yt-ac yt-pc">
                	<div class="yt-f1 bg99 dilog-h80 yt yt-ac yt-pc" @click= "show = false">取消</div>
                	<div class="yt-f1 bg-second dilog-h80 yt yt-ac yt-pc" @click="setZon">确定</div>
			</div>
		</div>    
    
    </div>
    
</template>

<script>
    export default {
        data () {
            return {
                fileName : '',
                sexData:['男','女'],
                zonData:['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
                sexDefault:0,
                zonDefault:0
            }
        },
       events:{
        'type':function(name){
             this.fileName = name;
            }
       
       },
       methods:{
        setSex (){
            this.$dispatch('sex',this.sexDefault);
            this.show = false;
        },
        setZon (){
             this.$dispatch('zon',this.zonDefault);
             this.show = false;
        }

       },
        props:{
            'show':{
                type:Boolean,
                required:true,
                twoWay:true
            },
            
        
        }
       
    }
</script>

<style>
    
</style>