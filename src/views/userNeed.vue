<template>

	<header class="header-bar bg-main">
		<a href="javascript:history.go(-1);" class="header-left">
			<i class="icon icon-pre"></i>
		</a>
		<h2 class="header-title">目前状态</h2>
		<div href="javascript:;" class="header-right fz32" @click="saveNeed">
			保存
		</div>
	</header>
	<p class="fz26 c66 p30 tx-c">最多选择四项</p>
	<ul class="interests-list bgff">
		<li class="bb" v-for="list in dataLists" @click="setNeed($index,$event,list)">
			<label class="p30 yt yt-ac fz32 c33">
				<input type="checkbox" name="isNeed" :value="list.name" class="dx-checkbox mr20" :checked="userinfo.needs.indexOf(list.name) != -1">
				<span>{{list.name}}</span>
			</label>
		</li>
	</ul>

</template>

<script>
export default {
    data () {
        return {
            dataLists:[{name:'倾述',active:false},{name:'安慰',active:false},{name:'鼓励',active:false},
            {name:'学习',active:false},{name:'友谊',active:false},{name:'认可',active:false},{name:'陪伴',active:false},
            {name:'恋爱',active:false},{name:'理解',active:false},{name:'分担',active:false}],
             realData:[],
             uid:sessionStorage.getItem('uid'),
             isNeed:sessionStorage.getItem('isneed'),
            userinfo:JSON.parse(sessionStorage.getItem('userinfo'))
        }

    },
    ready(){
        // if (this.isNeed) {
        //     this.realData = this.realData.concat(this.isNeed.split(","));
        //     for(let i in this.dataLists){
        //         if (this.isNeed.indexOf(this.dataLists[i].name)!=-1) {
        //             this.dataLists[i].active = true;
        //         }
        //     }
        // }
        
    },
    methods:{
        setNeed(index,ev,data){
                    if ($('[name="isNeed"]:checked').size()>4) return alert('已超过四项'),ev.preventDefault(),!1;
                },
        saveNeed (){

            this.realData = new Array();
            var _this = this;
            $('[name="isNeed"]:checked').each(function(index, el) {
                _this.realData.push(this.value)
            });

            this.$http.post('user/modify/needs/' + this.uid,{needs:this.realData.toString()})
            .then(function(res){
                if(res && res.data.data){
                    // let name = this.isFresh ? 'setHobby' : 'userinfo';

                    sessionStorage.setItem('isneed',this.realData.join()); 
                    // this.$router.go({name:'setHobby'});
                    history.go(-1)
                    // this.$router.go({name:name})
                }
            },function(err){
                console.log(err)
            })
        }
    }


}
</script>