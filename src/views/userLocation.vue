<template>

    <header class="header-bar bg-main">
        <a href="javascript:history.go(-1);" class="header-left"> <i class="icon icon-pre"></i>
        </a>
        <h2 class="header-title">位置选择</h2>
        <div href="javascript:;" class="header-right fz32" @click="setLocation">保存</div>
    </header>
    <div class="ui-form-item ui-border-b area">
              <label>所在地区</label>
              <div class="area-list J_trigger_wherebox" mars_sead="addAddress_addLocation_btn">
                <!-- phper 判断空，展示请选择！非空，展示具体地址 -->
                <span>{{userinfo.location}}</span>
              </div>
              <div class="more">
                <i class="iconfont iconfont-more"></i>
              </div>
              <input type="hidden" class="J_where_box_save" id="province" name="province" save-data-level="0" value="" emptymsg="请选择省市区" datatype="*">
              <input type="hidden" class="J_where_box_save" id="city" name="city" save-data-level="1" value="" emptymsg="请选择省市区" datatype="*">
              <input type="hidden" class="J_where_box_save" id="district" name="district" save-data-level="2" value="" emptymsg="请选择省市区" datatype="*">
              <input type="hidden" class="J_where_box_save" id="street" name="street" save-data-level="3" value=""></div>
    <!-- <ul class="head-address-ul" id="headAddressUl">
        <li mytitle="0"></li>
        <li mytitle="1"></li>
        <li mytitle="2"></li>
        <li mytitle="3"></li>
    </ul>
    <div class="address-container" id="addressContainer">
        <div class="address-content" id="addressContentDiv">
            <ul class="address-ul"></ul>
            <ul class="address-ul"></ul>
            <ul class="address-ul"></ul>
            <ul class="address-ul"></ul> 
        </div>
    </div> -->
    <div class="drawer J_where_box">
  <div class="drawer-backdrop"></div>
  <div class="drawer-content" style="margin-left: 100%;">
    <div class="drawer-header ui-border-b">
      <a href="javascript:;" class="back J_where_box_goback" data-level="0">
        <i class="icon icon-pre"></i>
      </a>
      <strong class="J_where_box_title">选择省份</strong>
    </div>
    <div class="drawer-body">
      <ul class="J_where_box_list" data-level="0" style="display: block;">
        <li class="ui-border-b single-line" data-value="110000">
          <span>北京市</span>
        </li>
        <li class="ui-border-b single-line" data-value="120000">
          <span>天津市</span>
        </li>
        <li class="ui-border-b single-line" data-value="130000">
          <span>河北省</span>
        </li>
        <li class="ui-border-b single-line" data-value="140000">
          <span>山西省</span>
        </li>
        <li class="ui-border-b single-line" data-value="150000">
          <span>内蒙古自治区</span>
        </li>
        <li class="ui-border-b single-line" data-value="210000">
          <span>辽宁省</span>
        </li>
        <li class="ui-border-b single-line" data-value="220000">
          <span>吉林省</span>
        </li>
        <li class="ui-border-b single-line" data-value="230000">
          <span>黑龙江省</span>
        </li>
        <li class="ui-border-b single-line" data-value="310000">
          <span>上海市</span>
        </li>
        <li class="ui-border-b single-line" data-value="320000">
          <span>江苏省</span>
        </li>
        <li class="ui-border-b single-line" data-value="330000">
          <span>浙江省</span>
        </li>
        <li class="ui-border-b single-line" data-value="340000">
          <span>安徽省</span>
        </li>
        <li class="ui-border-b single-line" data-value="350000">
          <span>福建省</span>
        </li>
        <li class="ui-border-b single-line" data-value="360000">
          <span>江西省</span>
        </li>
        <li class="ui-border-b single-line" data-value="370000">
          <span>山东省</span>
        </li>
        <li class="ui-border-b single-line" data-value="410000">
          <span>河南省</span>
        </li>
        <li class="ui-border-b single-line" data-value="420000">
          <span>湖北省</span>
        </li>
        <li class="ui-border-b single-line" data-value="430000">
          <span>湖南省</span>
        </li>
        <li class="ui-border-b single-line" data-value="440000">
          <span>广东省</span>
        </li>
        <li class="ui-border-b single-line" data-value="450000">
          <span>广西壮族自治区</span>
        </li>
        <li class="ui-border-b single-line" data-value="460000">
          <span>海南省</span>
        </li>
        <li class="ui-border-b single-line" data-value="500000">
          <span>重庆市</span>
        </li>
        <li class="ui-border-b single-line" data-value="510000">
          <span>四川省</span>
        </li>
        <li class="ui-border-b single-line" data-value="520000">
          <span>贵州省</span>
        </li>
        <li class="ui-border-b single-line" data-value="530000">
          <span>云南省</span>
        </li>
        <li class="ui-border-b single-line" data-value="540000">
          <span>西藏自治区</span>
        </li>
        <li class="ui-border-b single-line" data-value="610000">
          <span>陕西省</span>
        </li>
        <li class="ui-border-b single-line" data-value="620000">
          <span>甘肃省</span>
        </li>
        <li class="ui-border-b single-line" data-value="630000">
          <span>青海省</span>
        </li>
        <li class="ui-border-b single-line" data-value="640000">
          <span>宁夏回族自治区</span>
        </li>
        <li class="ui-border-b single-line" data-value="650000">
          <span>新疆维吾尔自治区</span>
        </li>
        <li class="ui-border-b single-line" data-value="710000">
          <span>台湾省</span>
        </li>
        <li class="ui-border-b single-line" data-value="810000">
          <span>香港特别行政区</span>
        </li>
        <li class="ui-border-b single-line" data-value="820000">
          <span>澳门特别行政区</span>
        </li>
      </ul>
      <ul class="J_where_box_list hide" data-level="1" style="display: none;"></ul>
      <ul class="J_where_box_list hide" data-level="2" style="display: none;"></ul>
      <ul class="J_where_box_list hide" data-level="3" style="display: none;"></ul></div>
  </div>
  <div class="modal-backdrop2 J_where_box_shadow hide"></div>
</div>
</template>

<script>
export default {
    data () {
        return {
            // areadate:,
            // address:[
            //     {name:'',id:'',liIndex:0},
            //     {name:'',id:'',liIndex:0},
            //     {name:'',id:'',liIndex:0}
            // ],
            address:"请选择",
            connectAddressLi1:[],
            uid:sessionStorage.getItem('uid'),
            provinceTpl:"",
            userinfo:JSON.parse(sessionStorage.getItem('userinfo'))
        }
    },
    ready(){
            console.log(1);
        this.init({
            $triggerShow: $(".J_trigger_wherebox"),
            $list: $(".J_where_box_list"),
            $box: $(".J_where_box"),
            $title: $(".J_where_box_title"),
            $back: $(".J_where_box_goback"),
            $save: $(".J_where_box_save"),
            $item: $(".J_where_box_list li"),
            $submit: $("#addressSub"),
            $goback: $("#addAddress"),
            $content: $(".drawer-content"),
            $background: $(".J_where_box .drawer-backdrop"),
            itemSizzle: "li",
            $shadow: $(".J_where_box_shadow"),
            pointSizzle: ".icon-ok",
            pointHtml: '<i class="icon icon-ok"></i>',
            saveCallback: function() {
                $(".J_trigger_wherebox").parent().addClass("focus");
            }
        })
    },
    methods:{
        setLocation(){
            if(this.age != ''){
                this.$http.post('user/modify/otherinfo/location/' + this.uid,{location:$('.J_trigger_wherebox').text()})
                .then(function(res){
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
        initLocal:function(id){
            console.log(id);
            var headAddressUl = $('#headAddressUl');
            if (id==undefined) {
                headAddressUl.children().eq(0).addClass('head-address-li').text('请选择')
            }
            
        },
            init: function(a) {

                var b = this;
                b.amapAdcode = {};
                try{
                    mapReady();
                }catch(e){
                    var script = document.createElement("script");
                    script.src = "http://webapi.amap.com/maps?v=1.3&key=d19e94ca6fe8753edc8ae4b29c894907&plugin=AMap.DistrictSearch&callback=mapReady";//高德
                    // script.id = 'map-api-online';
                    document.body.appendChild(script);
                }
                window.mapReady = function(){
                    b.amapAdcode._district = new AMap.DistrictSearch({//高德行政区划查询插件实例
                        subdistrict: 1,   //返回下一级行政区
                       showbiz:false
                    });
                }

                $.extend(b, a);
                    b.provinceTpl = b.$list.html(),
                    b.$triggerShow.on("click.show.address", $.proxy(b.showWhereBox, b)),
                    b.$list.on("click.select.address", b.itemSizzle, function() {
                        var a = $(this);
                        b.selectWherebox(b, a)
                    }),
                    b.$back.on("click.goback.address", $.proxy(b.whereboxGoBack, b)),
                    b.$background.on("click.background.address", $.proxy(b.triggerBackground, b)),
                    b.$submit.on("click.submit.address", $.proxy(b.submitAddress, b)),
                    b.$goback.on("click.hide.address",".myaddress-header__back-btn", $.proxy(b.goback, b))
            },
            render:function(d){
                addrVm.$set('uinfo', d);
            },
            goback:function(){
                this.$goback.fadeOut('fast');
            },
            submitAddress: function() {
                var _this = this;
                var dom = $('#addressSave');
                var dataJson = {
                      "nickName": dom.find('input[name="consignee"]').val(),
                      "receiverName": dom.find('input[name="consignee"]').val(),
                      "receiveAddress": dom.find('.J_trigger_wherebox').text() + '|' +dom.find('textarea[name="address"]').val(),
                      "receiveTel": dom.find('input[name="mobile"]').val()
                    }
                if (dataJson.receiverName == "") return alertMC('收货人姓名不能为空');
                if (!is_mobile(dataJson.receiveTel)) return alertMC('请填写正确的手机号码');
                if ($.trim(dom.find('.J_trigger_wherebox').text()) == "") return alertMC('所在地区不能为空');
                if (dom.find('textarea[name="address"]').val() == "") return alertMC('详细地址不能为空');
                $.ajax({
                    url: apiRootUrl + '/VipAccountInfo/updateaccount',
                    type: 'POST',
                    dataType: 'json',
                    data: dataJson,
                    success:function(d){
                        if (d.success) {
                            var uinfo = {};
                            if (actInfo.channel) {
                                uinfo = $.extend(true, actInfo, dataJson);
                                $.cookie('wqinfo',JSON.stringify(uinfo));
                                $.cookie('uinfo',JSON.stringify(uinfo));
                            }else{
                                uinfo = $.extend(true, JSON.parse($.cookie('uinfo')), dataJson);
                                $.cookie('uinfo',JSON.stringify(uinfo));
                            }
                            EBP.selectAddress.render(uinfo);
                            $('#addAddress').fadeOut('fast');
                        }
                    }
                })
            },
            triggerBackground: function() {
                var a = this;
                a.hideWhereBox(),
                    a.$back.attr("data-level", 0)
            },
            showWhereBox: function() {
                var a = this;
                $("body").addClass("ui-modal-open"),
                    a.$title.html("选择省份"),
                    a.$box.show(),
                    a.$content.animate({
                        "margin-left": "12%"
                    }),
                    a.$list.hide().filter('[data-level="0"]').html(a.provinceTpl).show(),
                    a.selectedAddress()
            },
            selectedAddress: function() {
                var a = this,
                    b = a.$back.attr("data-level"),
                    c = a.$save.filter('[save-data-level="' + b + '"]').val();
                a.setSelectedAddress(a.$list.find('li[data-value="' + c + '"]'))
            },
            setSelectedAddress: function(a) {
                if (a.length) {
                    var b = this;
                    a.siblings().find(b.pointSizzle).remove(),
                        a.find(b.pointSizzle).length || a.append(b.pointHtml)
                }
            },
            whereboxGoBack: function() {
                var a, b = this;
                switch (+b.$back.attr("data-level")) {
                    case 1:
                        a = "省份";
                        break;
                    case 2:
                        a = "城市";
                        break;
                    case 3:
                        a = "市县";
                        break;
                    case 4:
                        a = "街道"
                }
                a && b.$title.html("选择" + a),
                    0 == b.$back.attr("data-level") ? b.hideWhereBox() : (b.$back.attr("data-level", b.$back.attr("data-level") - 1),
                        b.$list.hide().filter('[data-level="' + b.$back.attr("data-level") + '"]').show())
            },
            hideWhereBox: function() {
                var a = this;
                a.$content.animate({
                        "margin-left": "100%"
                    }, function() {
                        a.$box.hide()
                    }),
                    $("body").removeClass("ui-modal-open")
            },
            saveAddress: function() {
                var a = this;
                a.hideWhereBox(),
                    a.$back.attr("data-level", 0),
                    a.$triggerShow.html("<span></span> <span></span> <span></span> <span></span>"),
                    $(a.pointSizzle).each(function() {
                        var b = $(this),
                            c = b.parents(a.$list.selector).attr("data-level");
                        a.$save.filter('[save-data-level="' + c + '"]').val(b.parent(a.$item.selector).attr("data-value")),
                            a.$triggerShow.children(":eq(" + c + ")").html(b.parent(a.$item.selector).find("span").html())
                    }),
                    3 == $(a.pointSizzle).length && (a.$triggerShow.children(":eq(3)").html(""),
                        a.$save.filter('[save-data-level="3"]').val("")),
                    a.saveCallback()
            },
            selectWherebox: function(a, b) {
                a.setSelectedAddress(b),
                    3 == a.$back.attr("data-level") ? a.saveAddress() : (a.$shadow.show(),
                        a.getAddressList(b.attr("data-value"), a.$back.attr("data-level")))
            },
            getAddressList: function(a, b) {
                var c, d, e = this;
                switch (+b) {
                    case 0:
                        c = "city",
                            d = "城市";
                        break;
                    case 1:
                        c = "district",
                            d = "市县";
                        break;
                    case 2:
                        c = "street",
                            d = "街道";
                        break;
                    default:
                        b = null
                }
                if (null !== b) {
                        e.amapAdcode._district.search(a, function(status, result) {
                            var listArr = result.districtList[0].districtList;
                            if (!listArr) listArr = new Array();
                            listArr && listArr.length ? e.setWhereBoxAjax(listArr, c, d) : $.isArray(listArr) && !listArr.length ? (e.$shadow.hide(),
                                e.saveAddress()) : alertMC((result || {}).info || "未知错误，请刷新页面重试")
                        });
                }
            },
            setWhereBoxAjax: function(a, b, c) {
                var d = this,
                    e = "";
                d.$shadow.hide(),
                    $.each(a, function(a, c) {
                        e += '<li class="ui-border-b single-line" data-value="' + c.adcode + '"><span>' + c.name + "</span></li>"
                    }),
                    d.$back.attr("data-level", +d.$back.attr("data-level") + 1),
                    $(".drawer-body").scrollTop(0),
                    d.$list.hide().filter('[data-level="' + d.$back.attr("data-level") + '"]').html(e).fadeIn(),
                    d.selectedAddress(),
                    d.$title.html("选择" + c)
            }
        
    },
    components: {
    }
}
</script>