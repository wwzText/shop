(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/integral_mall/exchange/exchange"],{"093e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){n.e("components/basic-component/app-tab-nav/app-tab-nav").then(function(){return resolve(n("cf4b"))}.bind(null,n)).catch(n.oe)},u={name:"about",components:{"app-tab-nav":c},data:function(){return{list:[],tabList:[{id:1,name:"优惠券"},{id:2,name:"商品"}],page:2,activeTab:1}},computed:o(o({},(0,a.mapState)({mall:function(t){return t.mallConfig.mall}})),(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"})),onLoad:function(){this.$showLoading({type:"global",text:"加载中..."}),this.getList()},methods:{tabStatus:function(e){this.list=[],this.page=2,this.activeTab=e.currentTarget.dataset.id,t.showLoading({title:"加载中..."}),this.getList()},toOrder:function(e){t.navigateTo({url:"/pages/order/order-detail/order-detail?id="+e})},toList:function(){t.navigateTo({url:"/pages/coupon/index/index"})},getList:function(){var e=this,n=e.$api.integral_mall.coupon_order;2==e.activeTab&&(n=e.$api.integral_mall.order),e.$request({url:n}).then((function(n){e.$hideLoading(),t.hideLoading(),0==n.code?e.list=n.data.list:t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(n){e.$hideLoading(),t.hideLoading()}))}},onReachBottom:function(){var e=this,n=e.$api.integral_mall.coupon_order;2==e.activeTab&&(n=e.$api.integral_mall.order),e.$request({url:n,data:{page:e.page}}).then((function(n){if(e.$hideLoading(),0==n.code){var a=!1;e.list.forEach((function(t,e){if(t.id==n.data.list[0].id)return a=!0,!1})),a||(e.list=e.list.concat(n.data.list)),page++}else t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))}};e.default=u}).call(this,n("543d")["default"])},"367a":function(t,e,n){"use strict";n.r(e);var a=n("093e"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"45e5":function(t,e,n){},"7bfa":function(t,e,n){"use strict";n.r(e);var a=n("b354"),i=n("367a");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("ddbc");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"2d65b47b",null,!1,a["a"],r);e["default"]=u.exports},b354:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},ddbc:function(t,e,n){"use strict";var a=n("45e5"),i=n.n(a);i.a},fe06:function(t,e,n){"use strict";(function(t){n("b8bc");a(n("66fd"));var e=a(n("7bfa"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fe06","common/runtime","common/vendor"]]]);