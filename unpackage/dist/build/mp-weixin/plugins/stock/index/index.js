(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/stock/index/index"],{"1a9f":function(t,e,n){"use strict";(function(t){n("aaea");i(n("66fd"));var e=i(n("9312"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"1ff7":function(t,e,n){"use strict";n.r(e);var i=n("22f7"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"22f7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){n.e("plugins/stock/components/app-index/app-index").then(function(){return resolve(n("c555"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("plugins/stock/components/app-condition/app-condition").then(function(){return resolve(n("fa47"))}.bind(null,n)).catch(n.oe)},u=function(){Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-rich/parse")]).then(function(){return resolve(n("4828"))}.bind(null,n)).catch(n.oe)},l={data:function(){return{detail:{bonus_rate:0},protocol:null,setting:{},name:"",mobile:"",wait:!1,refuse:!1,remove:!1,read:!1,look:!1,beApply:!1,rate:0,template_message:[],height:0,status:!1,check:{}}},components:{"app-index":s,"app-rich-text":u,"app-condition":r},computed:a({},(0,i.mapState)({stock:function(t){return t.mallConfig.__wxapp_img.stock},bonusImg:function(t){return t.mallConfig.__wxapp_img.bonus}})),methods:{toRead:function(){this.protocol=this.setting.agreement_content},reApply:function(){var e=this;t.showLoading({title:"加载中..."}),e.wait=!1,e.$request({url:e.$api.stock.clear,method:"post"}).then((function(n){0==n.code?e.getDetail():t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(e){t.hideLoading()}))},receive:function(t){this.beApply=!0},beRead:function(){this.read=!this.read},toIndex:function(){t.navigateTo({url:"/pages/index/index"})},imageLoad:function(t){var e=t.detail.width,n=t.detail.height;this.height=n*(750/e)/2},submit:function(){var e=this,n=this,i=0;if(!n.read&&0!=n.setting.is_agreement)return t.showToast({title:n.setting.agreement_title?"请先查看"+n.setting.agreement_title+"申请协议并同意":"请先查看股东分红申请协议并同意",icon:"none",duration:1e3}),!1;i=1,n.setting.apply_type<3?n.name&&n.mobile?11==n.mobile.length&&/0?(1)[0-9]{10}/.test(n.mobile)?this.$subscribe(this.template_message).then((function(t){e.submitApply(i)})).catch((function(t){e.submitApply(i)})):t.showToast({title:"请输入正确的手机号码",icon:"none",duration:1e3}):t.showToast({title:"请完善申请信息",icon:"none",duration:1e3}):this.$subscribe(this.template_message).then((function(t){e.submitApply(i)})).catch((function(t){e.submitApply(i)}))},submitApply:function(e){var n=this;n.$request({url:n.$api.stock.apply,data:{name:n.name,mobile:n.mobile,is_agree:e},method:"post"}).then((function(e){n.$hideLoading(),0==e.code?(t.showToast({title:e.msg,duration:1e3}),n.name="",n.mobile="",setTimeout((function(){t.showLoading({title:"加载中..."}),n.getStatus(),n.look=!1,1!=n.setting.apply_type&&3!=n.setting.apply_type||(n.wait=!0)}),500)):("请先查看股东分红申请协议并同意"==e.msg&&(e.msg="请先查看"+n.setting.agreement_title+"申请协议并同意"),t.showToast({title:e.msg,icon:"none",duration:1e3}))})).catch((function(t){n.$hideLoading()}))},getStatus:function(){var e=this;e.wait=!1,e.status=!1,e.$request({url:e.$api.stock.status}).then((function(n){if(e.status=!0,0==n.code)if(e.detail=n.data.stock,n.data.stock.name&&(e.name=n.data.stock.name),n.data.stock.phone&&(e.mobile=n.data.stock.phone),-1==e.detail.status)e.$hideLoading(),t.hideLoading(),e.beApply=!1,e.remove=!0;else if(2==e.detail.status)e.$hideLoading(),t.hideLoading(),e.beApply=!1,e.refuse=!0;else{if(1==e.detail.status)return e.$hideLoading(),t.hideLoading(),e.beApply=!1,!1;0==e.detail.status?(e.$hideLoading(),t.hideLoading(),e.beApply=!1,e.wait=!0):e.getDetail()}else"用户未申请股东"==n.msg?e.getDetail():(e.$hideLoading(),t.hideLoading(),t.showToast({title:n.msg,icon:"none",duration:1e3}))})).catch((function(n){e.$hideLoading(),t.hideLoading()}))},getSetting:function(){var e=this;e.$request({url:e.$api.stock.setting}).then((function(n){e.$hideLoading(),t.hideLoading(),0==n.code?(e.setting=n.data,e.template_message=n.data.template_message_stock,t.setNavigationBarTitle({title:e.setting.form.title?e.setting.form.title:"股东分红"})):t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(n){e.$hideLoading(),t.hideLoading()}))},getDetail:function(){var e=this;t.showLoading({title:"加载中..."}),e.check={},e.$request({url:e.$api.stock.index}).then((function(n){t.hideLoading(),0==n.code?(e.look=!0,e.refuse=!1,e.remove=!1,e.check=n.data,e.check.all_money?e.rate=+e.check.all_money/+e.check.condition*100:e.check.all_order?e.rate=+e.check.all_order/+e.check.condition*100:e.check.all_money?e.rate=+e.check.all_money/+e.check.condition*100:e.check.cash_money?e.rate=+e.check.cash_money/+e.check.condition*100:e.check.total_money&&(e.rate=+e.check.total_money/+e.check.condition*100)):(t.showToast({title:n.msg,icon:"none",duration:1e3}),setTimeout((function(){e.toIndex()}),1e3))})).catch((function(e){t.hideLoading()}))}},onShow:function(){var t=this;t.getStatus()},onLoad:function(t){this.$showLoading({type:"global",text:"加载中..."}),t.name&&(this.name=t.name),t.mobile&&(this.mobile=t.mobile),this.getSetting()}};e.default=l}).call(this,n("543d")["default"])},"66fc":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.protocol=null,t.read=!0})},a=[]},8350:function(t,e,n){},9312:function(t,e,n){"use strict";n.r(e);var i=n("66fc"),o=n("1ff7");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("ea37");var c,s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"76dfe070",null,!1,i["a"],c);e["default"]=r.exports},ea37:function(t,e,n){"use strict";var i=n("8350"),o=n.n(i);o.a}},[["1a9f","common/runtime","common/vendor"]]]);