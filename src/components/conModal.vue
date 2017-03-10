<template>
<div class="dx-dialog" :class="{'active': show}">
			<div class="dialogmask"></div>
			<div class="dx-dialogcontent">
				<div class="dialog-cbox">
					<h2 class="dialog-tit fz32 tx-c c33">性别</h2>
					<div class="sex-select yt ptb50">
						<label class="yt-f1 yt yt-ac fz28 c66 yt-pc">
							<input type="radio" name="sex" id="" value="" checked class="select-sex mr20 db" />
							<span>男</span>
						</label>
						<label class="yt-f1 yt yt-ac fz28 c66 yt-pc">
								<input type="radio" name="sex" id="" value="" class="select-sex mr20 db" />
							<span>女</span>
						</label>
					</div>
					<div class="fz32 tx-c know-btn yt yt-ac yt-pc">
						<div class="yt-f1 bg99 dilog-h80 yt yt-ac yt-pc" @click= "show = false">取消</div>
						<div class="yt-f1 bg-second dilog-h80 yt yt-ac yt-pc">确定</div>
					</div>
				</div>
			</div>
		</div>

</template>


<script>
     export default {
        data () {
            return {
               
            }
        },
        props:{
            'show':{
                type:Boolean,
                required:true,
                twoWay:true
            }
        
        }
      
    }



</script>