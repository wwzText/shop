(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/step/goods/goods"],{"007c":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var r=function(){var e=this,t=e.$createElement;e._self._c},c=[]},"4dc2":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){n.e("components/page-component/goods/app-goods-banner").then(function(){return resolve(n("b169"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(function(){return resolve(n("b12d"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/page-component/goods/u-attr").then(function(){return resolve(n("fae7"))}.bind(null,n)).catch(n.oe)},p=function(){Promise.all([n.e("common/vendor"),n.e("components/page-component/goods/bd-coupon")]).then(function(){return resolve(n("cfa2"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/page-component/goods/bd-xbc").then(function(){return resolve(n("abb7"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/page-component/goods/bd-detail").then(function(){return resolve(n("c91c"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/page-component/goods/bd-kb").then(function(){return resolve(n("7e79"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/page-component/goods/bd-hc").then(function(){return resolve(n("ecb3"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/basic-component/app-close/app-close").then(function(){return resolve(n("699f"))}.bind(null,n)).catch(n.oe)},m={name:"goods",components:{appGoodsBanner:s,appShareQrCode:a,uAttr:u,bdCoupon:p,bdXbc:l,bdDetail:d,bdHc:f,bdKb:h,appClose:g},data:function(){return{showClose:!1,is_open:0,goods:null,selectAttr:null,shareShow:!1,shareUrl:null,attrShow:!1,poster_config:this.$api.step.poster_config,poster_generate:this.$api.step.poster_generate}},computed:c(c(c({},(0,o.mapState)({mall:function(e){return e.mallConfig.mall}})),(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"})),{},{themeObject:function(){return{back:this.getTheme+"-m-back "+this.getTheme,theme:this.getTheme,color:this.getTheme+"-m-text "+this.getTheme,sBack:this.getTheme+"-s-back "+this.getTheme}}}),onShow:function(){var e=this;this.showClose=!1,setTimeout((function(){e.showClose=!0}))},onLoad:function(e){wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),this.loadData(e.goods_id)},onShareAppMessage:function(){var e=this.goods,t=e.app_share_title,n=e.name,o=e.app_share_pic,r=e.cover_pic,c=e.id;return this.$shareAppMessage({title:t||n,imageUrl:o||r,path:"/plugins/step/goods/goods",params:{goods_id:c}})},onShareTimeline:function(){var e=this.goods,t=e.app_share_title,n=e.name,o=e.id;return this.$shareTimeline({title:t||n,query:{goods_id:o}})},methods:{getMall:function(e){this.is_open=e.is_open},loadData:function(t){var n=this;this.$showLoading(),this.$request({url:this.$api.step.goods_detail,data:{id:t}}).then((function(o){n.$hideLoading(),0===o.code?(n.goods=o.data.detail,n.shareUrl=n.$api.step.goods_poster+"&goods_id="+t,n.goods.id=t):e.showToast({title:o.msg,icon:"none"})})).catch((function(){n.$hideLoading()}))},onAttr:function(e){this.selectAttr=e},shareClick:function(){this.shareShow=!0},back:function(){e.redirectTo({url:"/pages/index/index"})},clickAttr:function(){this.attrShow=!0},setCoupon:function(e){this.$set(this.goods.goods_coupon_center[e],"is_receive",1)},rightFunc:function(t){e.navigateTo({url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify([t]),"&preview_url=").concat(encodeURIComponent(this.$api.step.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.step.order_submit))})}}};t.default=m}).call(this,n("543d")["default"])},"5dd0":function(e,t,n){"use strict";var o=n("9a33"),r=n.n(o);r.a},"9a33":function(e,t,n){},"9a9e":function(e,t,n){"use strict";(function(e){n("b8bc");o(n("66fd"));var t=o(n("b706"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},b706:function(e,t,n){"use strict";n.r(t);var o=n("007c"),r=n("c6a3");for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);n("5dd0");var i,s=n("f0c5"),a=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"3605b691",null,!1,o["a"],i);t["default"]=a.exports},c6a3:function(e,t,n){"use strict";n.r(t);var o=n("4dc2"),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=r.a}},[["9a9e","common/runtime","common/vendor"]]]);