(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/express/express"],{"0b6b":function(e,t,n){"use strict";n.r(t);var r=n("51da"),o=n("0df2");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("56be");var i,s=n("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"cfdf75d4",null,!1,r["a"],i);t["default"]=c.exports},"0df2":function(e,t,n){"use strict";n.r(t);var r=n("95a8"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},"3ea4":function(e,t,n){"use strict";(function(e){n("b8bc");r(n("66fd"));var t=r(n("0b6b"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"51da":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"56be":function(e,t,n){"use strict";var r=n("993e"),o=n.n(r);o.a},"95a8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={data:function(){return{express:"",id:"",express_no:"",express_company:""}},computed:a({},(0,r.mapState)({userInfo:function(e){return e.user.info},adminImg:function(e){return e.mallConfig.__wxapp_img.app_admin}})),methods:{copy:function(){e.setClipboardData({data:this.express_no,success:function(){e.getClipboardData({success:function(){e.showToast({title:"复制成功",duration:1e3})}})}})}},onLoad:function(t){var n=this;n.$showLoading({type:"global",text:"加载中..."}),n.$request({url:n.$api.app_admin.express_detail,data:{id:t.id,express:t.express,customer_name:t.customer_name,express_no:t.express_no}}).then((function(r){n.$hideLoading(),0==r.code?(n.express=r.data.express,n.id=t.id,n.express_company=t.express,n.express_no=t.express_no):e.showToast({title:r.msg,icon:"none",duration:1e3})})).catch((function(t){n.$hideLoading(),e.showToast({title:t,icon:"none",duration:1e3})}))}};t.default=s}).call(this,n("543d")["default"])},"993e":function(e,t,n){}},[["3ea4","common/runtime","common/vendor"]]]);