(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-recommended-product/app-recommended-product"],{"1fb9":function(t,e,n){"use strict";var o=n("a154"),r=n.n(o);r.a},4423:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=function(){n.e("components/page-component/app-attr/app-attr").then(function(){return resolve(n("bb7b"))}.bind(null,n)).catch(n.oe)},c={name:"app-recommended-product",props:{showCat:{type:Boolean,default:function(){return!0}},showBuyBtn:{type:Boolean,default:function(){return!0}},showGoodsName:{type:Boolean,default:function(){return!0}},showGoodsPrice:{type:Boolean,default:function(){return!0}},showGoodsTag:{type:Boolean,default:function(){return!0}},goodsTagPicUrl:{type:String,default:function(){return"https://www.bangdian.net/plugins/diy/assets/images/goods-tag-rx.png"}},goodsCoverProportion:{type:String,default:function(){return"1-1"}},goodsStyle:{type:Number,default:function(){return 1}},listStyle:{type:Number,default:function(){return 2}},list:{type:Array,default:function(){return[]}},fill:{type:Number,default:function(){return 2}},customizeGoodsTag:{type:Boolean,default:function(){return!1}},catStyle:{type:Number,default:function(){return 2}},buyBtnText:{type:String,default:function(){return"购买放电"}},buyBtnStyle:{type:Number,default:function(){return 1}},buyBtn:{type:String,default:function(){return"cart"}},catList:{type:Array,default:function(){return[]}}},data:function(){return{activeCurrent:0,goods:{}}},computed:u({},(0,o.mapGetters)("mallConfig",{getVideo:"getVideo"})),methods:{change:function(t){this.activeCurrent=t},buyProduct:function(t){var e=this;0===t.mch_id?this.$request({url:this.$api.goods.detail,data:{id:t.id}}).then((function(t){0===t.code&&(e.goods=t.data.goods,e.show=Math.random())})):this.$request({url:this.$api.mch.goods_detail,data:{mch_id:t.mch_id,id:t.id}}).then((function(t){0===t.code&&(e.goods=t.data.goods,e.show=Math.random())}))},jump:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id)}):t.navigateTo({url:e.page_url})}},components:{"app-attr":i}};e.default=c}).call(this,n("543d")["default"])},6879:function(t,e,n){"use strict";n.r(e);var o=n("4423"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},a154:function(t,e,n){},a1b0:function(t,e,n){"use strict";n.r(e);var o=n("bc56"),r=n("6879");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("1fb9");var a,i=n("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"495f9838",null,!1,o["a"],a);e["default"]=c.exports},bc56:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-recommended-product/app-recommended-product-create-component',
    {
        'components/page-component/app-recommended-product/app-recommended-product-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a1b0"))
        })
    },
    [['components/page-component/app-recommended-product/app-recommended-product-create-component']]
]);
