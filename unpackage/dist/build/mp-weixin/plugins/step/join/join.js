(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/step/join/join"],{8814:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{list:{},name:"",open_date:"",step_num:1e3,bail_currency:1,setting:null,template_activity:null,join:!1}},computed:o({},(0,i.mapState)({stepImg:function(t){return t.mallConfig.plugin.step},userInfo:function(t){return t.user.info}})),methods:{getSetting:function(){var e=this;e.$request({url:e.$api.step.setting}).then((function(n){e.$hideLoading(),0==n.code?(e.setting=n.data,e.template_activity=n.data.template_activity):t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))},getList:function(e){var n=this;n.$showLoading({type:"global",text:"加载中..."}),n.$request({url:n.$api.step.activity_detail,data:{activity_id:e}}).then((function(e){n.getSetting(),0==e.code?n.list=e.data.list:t.showToast({title:e.msg,icon:"none",duration:1e3})})).catch((function(t){n.$hideLoading()}))},subscribe:function(){var t=this;this.$subscribe(this.template_activity).then((function(e){t.apply()})).catch((function(e){t.apply()}))},apply:function(){var e=this,n=e.list.id;t.showLoading({title:"报名中..."}),e.$request({url:e.$api.step.activity_join,data:{activity_id:n},method:"POST"}).then((function(n){if(t.hideLoading(),0==n.code){var i=e.list.begin_at;t.redirectTo({url:"/plugins/step/dare/dare?join=1&date="+i})}else t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(e){t.hideLoading(),t.showToast({title:e,icon:"none",duration:1e3})}))}},onLoad:function(t){var e=this;e.getList(t.id)}};e.default=c}).call(this,n("543d")["default"])},"8e6a":function(t,e,n){"use strict";n.r(e);var i=n("bdd8"),a=n("e2aa");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("abff");var r,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"7f360491",null,!1,i["a"],r);e["default"]=u.exports},a74b:function(t,e,n){},abff:function(t,e,n){"use strict";var i=n("a74b"),a=n.n(i);a.a},bdd8:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},c8b2:function(t,e,n){"use strict";(function(t){n("aaea");i(n("66fd"));var e=i(n("8e6a"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e2aa:function(t,e,n){"use strict";n.r(e);var i=n("8814"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}},[["c8b2","common/runtime","common/vendor"]]]);