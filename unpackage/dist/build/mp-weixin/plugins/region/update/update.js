(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/region/update/update"],{"0009":function(t,e,n){},"16b1":function(t,e,n){"use strict";n.r(e);var i=n("6b12"),r=n("ddc4");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("eb40");var u,a=n("f0c5"),c=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"77afa663",null,!1,i["a"],u);e["default"]=c.exports},"4f88":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{detail:{},setting:{},first:!0}},computed:o({},(0,i.mapState)({region:function(t){return t.mallConfig.__wxapp_img.region},bonus:function(t){return t.mallConfig.__wxapp_img.bonus}})),methods:{toUpdate:function(){t.navigateTo({url:"/plugins/region/index/index?up=1"})},getList:function(){var e=this;e.$request({url:e.$api.region.status}).then((function(n){0==n.code?(e.first=!1,e.$hideLoading(),e.detail=n.data.region,1!=e.detail.status&&t.redirectTo({url:"/plugins/region/index/index"}),1==e.detail.level_up_log.status&&e.clearLevel()):(e.$hideLoading(),t.showToast({title:n.msg,icon:"none",duration:1e3}))})).catch((function(t){e.$hideLoading()}))},clearLevel:function(){var t=this;t.$request({url:t.$api.region.clear_up,method:"post"}).then((function(t){}))},getSetting:function(){var e=this;e.$request({url:e.$api.region.setting}).then((function(n){0==n.code?(e.getList(),e.setting=n.data):t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(n){e.$hideLoading(),t.hideLoading()}))}},onLoad:function(t){var e=this;e.$showLoading({type:"global",text:"加载中..."}),e.getSetting()},onShow:function(){this.first||this.getList()}};e.default=a}).call(this,n("543d")["default"])},"6b12":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"770e":function(t,e,n){"use strict";(function(t){n("aaea");i(n("66fd"));var e=i(n("16b1"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ddc4:function(t,e,n){"use strict";n.r(e);var i=n("4f88"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},eb40:function(t,e,n){"use strict";var i=n("0009"),r=n.n(i);r.a}},[["770e","common/runtime","common/vendor"]]]);