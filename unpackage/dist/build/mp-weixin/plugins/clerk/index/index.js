(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/clerk/index/index"],{"34f6":function(e,t,n){"use strict";var r=n("4de5"),o=n.n(r);o.a},"4de5":function(e,t,n){},"6eff":function(e,t,n){"use strict";n.r(t);var r=n("86a2"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},"86a2":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n("88ed")),o=n("2f62");function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={name:"about",data:function(){return{is_mall:!1}},computed:u({},(0,o.mapState)({clerkImg:function(e){return e.mallConfig.__wxapp_img.clerk},mall:function(e){return e.mallConfig.mall}})),onLoad:function(){this.getList()},methods:{toStatic:function(){e.navigateTo({url:"/plugins/clerk/statics/statics"})},toOrder:function(){e.navigateTo({url:"/plugins/clerk/order/order?status=1"})},toCard:function(){e.navigateTo({url:"/plugins/clerk/order/order?status=2"})},scan:function(){var t=this;e.scanCode({success:function(n){if(n.path){var o=n.path;o=o.split("?");var a=o[1],c=new RegExp("scene=","g");a=o[1].replace(c,""),t.$request({url:t.$api.clerk.qrcode_parameter,data:{token:a}}).then((function(t){if(0===t.code){var n=t.data.detail,o="/"+n.path;n.data&&(o+="?"+r.objectToUrlParams(n.data)),e.redirectTo({url:o}),e.options=null}}))}else e.showToast({title:"暂不支持此二维码，请使用应用内扫一扫功能",icon:"none",duration:1e3})}})},getList:function(){var t=this;t.$request({url:t.$api.clerk.info}).then((function(n){t.$hideLoading(),0==n.code?t.is_mall=n.data.is_mall:"无核销信息权限"==n.msg?e.showModal({title:"提示",content:"该帐号无核销权限",showCancel:!1,success:function(t){e.redirectTo({url:"/pages/index/index"})}}):e.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(e){t.$hideLoading()}))}}};t.default=f}).call(this,n("543d")["default"])},c052:function(e,t,n){"use strict";(function(e){n("aaea");r(n("66fd"));var t=r(n("d528"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},cde1:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},a=[]},d528:function(e,t,n){"use strict";n.r(t);var r=n("cde1"),o=n("6eff");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("34f6");var c,i=n("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"6ddee403",null,!1,r["a"],c);t["default"]=u.exports}},[["c052","common/runtime","common/vendor"]]]);