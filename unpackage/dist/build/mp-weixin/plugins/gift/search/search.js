(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/search/search"],{"34fd":function(t,e,n){"use strict";var r=n("ed1c"),o=n.n(r);o.a},"36fa":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),o=n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return g(t)||d(t)||l(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function g(t){if(Array.isArray(t))return p(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){h(i,r,o,a,s,"next",t)}function s(t){h(i,r,o,a,s,"throw",t)}a(void 0)}))}}var b="GIFT_SEARCH",v=function(){n.e("components/page-component/app-product-list/app-product-list").then(function(){return resolve(n("d4b5"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/page-component/app-no-goods/app-no-goods").then(function(){return resolve(n("17fc"))}.bind(null,n)).catch(n.oe)},w={name:"search",data:function(){return{keyword:"",strong:[],page:1,goods_list:[],search:!1,is_search:0,loading:!0}},onLoad:function(){this.$storage.getStorageSync(b)?this.strong=this.$storage.getStorageSync(b):this.$storage.setStorageSync(b,[])},methods:{request:function(){var t=this;return y(r.default.mark((function e(){var n,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$request({url:t.$api.gift.list,method:"get",data:{page:t.page,keyword:t.keyword,sign:""}});case 3:n=e.sent,t.loading=!1,0===n.code&&(o=t.goods_list).push.apply(o,u(n.data.list));case 6:case"end":return e.stop()}}),e)})))()},searchRequest:function(t){this.search=!0,this.goods_list=[],this.page=1,this.keyword=t,this.request()},dataProcessing:function(t){for(var e=0;e<t.list.length;e+=2)e+1!==t.list.length?this.goods_list.push([t.list[e],t.list[e+1]]):this.goods_list.push([t.list[e]]);this.page_count=t.pagination.page_count},setRequest:function(){var t=this;this.keyword.match(/^[ ]*$/)||(this.search=!0,this.goods_list=[],this.request().then((function(){for(var e=t.$storage.getStorageSync(b),n=0;n<e.length;n++)if(e[n]===t.keyword)return;e.push(t.keyword),t.$storage.setStorageSync(b,e)})))},routeGo:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=gift")}):t.navigateTo({url:"/plugins/gift/goods/goods?".concat(e.page_url.split("?")[1],"&is_search=1")})},empyt_search:function(){this.goods_list=[],this.keyword="",this.search=!1},setClearStorage:function(){this.$storage.removeStorageSync(b),this.strong=[],this.$storage.setStorageSync(b,[])}},components:{"app-product-list":v,appNoGoods:m},computed:s(s({},(0,o.mapState)("gift",{theme:function(t){return t.theme}})),(0,o.mapGetters)("mallConfig",{getVideo:"getVideo"})),onReachBottom:function(){this.page<this.page_count&&(this.page++,this.request())}};e.default=w}).call(this,n("543d")["default"])},"6f27":function(t,e,n){"use strict";n.r(e);var r=n("36fa"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},b2d2:function(t,e,n){"use strict";n.r(e);var r=n("f7ef"),o=n("6f27");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("34fd");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"30e554fd",null,!1,r["a"],a);e["default"]=c.exports},b344:function(t,e,n){"use strict";(function(t){n("b8bc");r(n("66fd"));var e=r(n("b2d2"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ed1c:function(t,e,n){},f7ef:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement;t._self._c},i=[]}},[["b344","common/runtime","common/vendor"]]]);