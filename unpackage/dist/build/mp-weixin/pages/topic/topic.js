(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic/topic"],{"1f78":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-rich/parse")]).then(function(){return resolve(n("46fb"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(function(){return resolve(n("b12d"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/basic-component/app-iphone-x/app-iphone-x").then(function(){return resolve(n("5e0d"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(function(){return resolve(n("c2f3"))}.bind(null,n)).catch(n.oe)},l=function(){Promise.all([n.e("common/vendor"),n.e("components/page-component/app-video/app-video")]).then(function(){return resolve(n("2d2a"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/page-component/app-image-ad/app-image-ad").then(function(){return resolve(n("c879"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/basic-component/app-hotspot/app-hotspot").then(function(){return resolve(n("95b4"))}.bind(null,n)).catch(n.oe)},h={name:"topic",components:{"app-rich-text":c,"app-share-qr-code-poster":p,appIphoneX:s,appEmptyBottom:u,"app-video":l,"app-image-ad":d,"app-hotspot":f},computed:a(a({},(0,o.mapState)({gConfig:function(t){return t.gConfig}})),(0,o.mapGetters)("mallConfig",{getTheme:"getTheme"})),data:function(){return{topic:null,is_loading:!1,shareShow:!1,poster:null}},onLoad:function(t){this.loadData(t.id),this.poster=this.$api.poster.topic+"&id="+t.id},onShareAppMessage:function(t){return this.$shareAppMessage({title:this.topic.app_share_title?this.topic.app_share_title:this.topic.title,imageUrl:this.topic.qrcode_pic?this.topic.qrcode_pic:"",path:"/pages/topic/topic",params:{id:this.topic.id}})},methods:{loadData:function(t){var e=this;this.$showLoading(),this.$request({url:this.$api.topic.detail,data:{id:t}}).then((function(t){e.$hideLoading(),0===t.code&&(e.topic=t.data.list)})).catch((function(t){e.$hideLoading()}))},favorite:function(){var e=this;if(!this.is_loading){t.showLoading({mark:!0,title:"正在请求"}),this.is_loading=!0;var n="no_love"===this.topic.is_favorite?"love":"no_love";this.$request({url:this.$api.topic.favorite,data:{id:this.topic.id,is_favorite:n},method:"post"}).then((function(o){t.hideLoading(),e.is_loading=!1,0===o.code?(e.topic.is_favorite=n,t.showToast({title:o.msg,mask:!1})):t.showModal({title:"提示",content:o.msg,showCancel:!1})})).catch((function(n){t.hideLoading(),e.is_loading=!1}))}},shareClick:function(){this.shareShow=!0},rubikHotspot:function(t){return t&&t.link&&(t.link.url=t.link.new_link_url,t.link.openType=t.link.open_type),t}}};e.default=h}).call(this,n("543d")["default"])},2512:function(t,e,n){"use strict";n.r(e);var o=n("1f78"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},4254:function(t,e,n){"use strict";(function(t){n("b8bc");o(n("66fd"));var e=o(n("5292"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"4f93":function(t,e,n){},5292:function(t,e,n){"use strict";n.r(e);var o=n("a3bd"),i=n("2512");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("5a85");var r,c=n("f0c5"),p=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"7d37c478",null,!1,o["a"],r);e["default"]=p.exports},"5a85":function(t,e,n){"use strict";var o=n("4f93"),i=n.n(o);i.a},a3bd:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.topic&&t.topic.detail.length>0?t.__map(t.topic.detail,(function(e,n){var o=t.__get_orig(e),i="image-text"!==e.id&&"rubik"===e.id?t.__map(e.data.hotspot,(function(e,n){var o=t.__get_orig(e),i=t.rubikHotspot(e);return{$orig:o,m0:i}})):null;return{$orig:o,l0:i}})):null),o=Number(96);t.$mp.data=Object.assign({},{$root:{l1:n,m1:o}})},a=[]}},[["4254","common/runtime","common/vendor"]]]);