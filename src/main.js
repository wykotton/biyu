import Vue from 'vue'
import Router from 'vue-router'
import {configRouter} from './route-config'
import Resource from 'vue-resource'
import $ from 'jquery'

Vue.prototype.serverUrl = 'http://139.196.209.6:3000';
Vue.prototype.exitApp = function() {
    try {
        api.addEventListener({
            name: 'keyback'
        }, function(ret, err) {
            api.toast({
                msg: '再按一次返回键退出' + api.appName,
                duration: 2000,
                location: 'bottom'
            });
            api.addEventListener({
                name: 'keyback'
            }, function(ret, err) {
                api.closeWidget({
                    id: 'A6922783637546', //这里改成自己的应用ID 
                    retData: {
                        name: 'closeWidget'
                    },
                    silent: true
                });
            });
            setTimeout(function() {
                alert(this)
                alert(Vue.exitApp)
                alert(this.exitApp)
                alert(exitApp)
                exitApp();
            }, 3000)
        });
    } catch (e) {}
};


Vue.use(Router)
Vue.use(Resource)
const router = new Router({
	histrory:true,
	saveScrollPosition: true
	
})
$(document).bind("dblclick", function(e) {e.preventDefault();});
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
configRouter(router)
const app = Vue.extend(require('./App.vue'))
Vue.http.options.root = '/api';
Vue.http.options.emulateJSON = true;
//Vue.http.options.xhr = {withCredentials: true};
/*Vue.config.debug = true;*/
router.start(app,'#app');











