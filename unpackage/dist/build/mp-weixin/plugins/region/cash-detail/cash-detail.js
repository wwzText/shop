(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/region/cash-detail/cash-detail"],{"50db":function(t,e,n){"use strict";n.r(e);var i=n("bf71"),a=n("88d3");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("9e65");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"d599b520",null,!1,i["a"],r);e["default"]=s.exports},"51aa":function(t,e,n){"use strict";(function(t){n("aaea");i(n("66fd"));var e=i(n("50db"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"686e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){n.e("components/basic-component/app-tab-nav/app-tab-nav").then(function(){return resolve(n("87a5"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{tabList:[{id:-1,name:"全部"},{id:0,name:"待审核"},{id:1,name:"待打款"},{id:2,name:"已打款"},{id:3,name:"已驳回"}],loading:null,list:[],activeTab:-1,noBorder:!1,id:null,page:2}},components:{"app-tab-nav":c},computed:o({},(0,i.mapState)({mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),methods:{open:function(t){this.id=t},tabStatus:function(e){t.showLoading({title:"加载中..."}),this.list=[],this.page=2,this.activeTab=e.currentTarget.dataset.id,this.getList()},getList:function(){var e=this;e.$request({url:e.$api.region.detail,data:{status:e.activeTab}}).then((function(n){e.$hideLoading(),t.hideLoading(),0==n.code?e.list=n.data.list:t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(n){e.$hideLoading(),t.hideLoading(),e.$event.on(e.$const.EVENT_USER_LOGIN).then((function(){e.getList()}))}))},getMore:function(){var e=this;t.showLoading({title:"加载中..."}),e.$request({url:e.$api.region.detail,data:{status:e.activeTab,page:e.page}}).then((function(n){if(t.hideLoading(),0==n.code){e.loading=null;var i=n.data.list;i.length>0&&(e.list[e.list.length-1].date==i[0].date?(e.list[e.list.length-1].list=e.list[e.list.length-1].list.concat(i[0].list),i.shift(),e.list=e.list.concat(i)):e.list=e.list.concat(i),e.page++)}else t.showToast({title:n.msg,icon:"none",duration:1e3})})).catch((function(e){t.hideLoading()}))},toGoods:function(e){t.navigateTo({url:"/pages/goods/goods?id="+e})}},onLoad:function(e){var n=this;e.name&&t.setNavigationBarTitle({title:e.name}),n.$showLoading({type:"global",text:"加载中..."}),n.getList()},onReachBottom:function(){this.getMore()}};e.default=s}).call(this,n("543d")["default"])},"88d3":function(t,e,n){"use strict";n.r(e);var i=n("686e"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"9e65":function(t,e,n){"use strict";var i=n("df6e"),a=n.n(i);a.a},bf71:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},df6e:function(t,e,n){}},[["51aa","common/runtime","common/vendor"]]]);