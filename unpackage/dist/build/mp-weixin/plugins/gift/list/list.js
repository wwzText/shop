(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/list/list"],{"2fc9":function(t,e,n){"use strict";n.r(e);var o=n("8654"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"4f8e3":function(t,e,n){"use strict";(function(t){n("aaea");o(n("66fd"));var e=o(n("7df3"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6c7d":function(t,e,n){"use strict";var o=n("e67f"),r=n.n(o);r.a},"7df3":function(t,e,n){"use strict";n.r(e);var o=n("96ac"),r=n("2fc9");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("6c7d");var a,u=n("f0c5"),c=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},8654:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a")),r=n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n,o,r,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(o,r)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){s(i,o,r,a,u,"next",t)}function u(t){s(i,o,r,a,u,"throw",t)}a(void 0)}))}}function f(t){return g(t)||h(t)||d(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){if(t){if("string"===typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function h(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function g(t){if(Array.isArray(t))return b(t)}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var v=function(){n.e("components/page-component/app-sort-rule/app-sort-rule").then(function(){return resolve(n("a1b3"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/page-component/app-product-list/app-product-list").then(function(){return resolve(n("054a"))}.bind(null,n)).catch(n.oe)},y=function(){n.e("components/page-component/app-no-goods/app-no-goods").then(function(){return resolve(n("9aaa"))}.bind(null,n)).catch(n.oe)},O=function(){n.e("plugins/gift/components/list/search").then(function(){return resolve(n("8e9a"))}.bind(null,n)).catch(n.oe)},_={name:"list",data:function(){return{goods_list:[],page:1,page_count:1,sort:1,sort_type:-1,loading:!1,listStyle:!1}},onLoad:function(){var t=this;this.$store.dispatch("gift/getConfig",this.$api.gift.config),this.request().then((function(e){var n;(n=t.goods_list).push.apply(n,f(e.list)),t.loading=!0}))},onReachBottom:function(){var t=this;this.page<this.page_count&&(this.page++,this.request().then((function(e){var n;(n=t.goods_list).push.apply(n,f(e.list))})))},methods:{request:function(){var e=this;return l(o.default.mark((function n(){var r;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.$utils.showLoading(),n.prev=1,n.next=4,e.$request({url:e.$api.gift.list,method:"get",data:{sort:e.sort,page:e.page,sort_type:e.sort_type}});case 4:if(r=n.sent,e.$utils.hideLoading(),0!==r.code){n.next=11;break}return e.page_count=r.data.pagination.page_count,n.abrupt("return",r.data);case 11:t.showModal({title:"提示",content:r.msg});case 12:n.next=18;break;case 14:throw n.prev=14,n.t0=n["catch"](1),e.$utils.hideLoading(),new Error(n.t0);case 18:case"end":return n.stop()}}),n,null,[[1,14]])})))()},set_sort:function(t,e){var n=this;this.sort=t,this.goods_list=[],this.page=1,this.sort_type=e,this.request().then((function(t){var e;(e=n.goods_list).push.apply(e,f(t.list))}))},routeGo:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=gift")}):t.navigateTo({url:"/plugins/gift/goods/goods?".concat(e.page_url.split("?")[1])})},setStyle:function(t){this.listStyle=t}},computed:u(u(u({},(0,r.mapState)("gift",{theme:function(t){return t.theme}})),(0,r.mapGetters)("mallConfig",{getVideo:"getVideo"})),{},{themeObject:function(){return{back:this.theme+"-background",userTheme:this.theme,color:this.theme+"-color",backO:this.theme+"-background-o",backP:this.theme+"-background-p"}}}),components:{"app-sort-rule":v,"product-list":m,"app-no-goods":y,search:O}};e.default=_}).call(this,n("543d")["default"])},"96ac":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},e67f:function(t,e,n){}},[["4f8e3","common/runtime","common/vendor"]]]);