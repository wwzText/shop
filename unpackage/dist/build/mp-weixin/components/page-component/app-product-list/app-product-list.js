(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-product-list/app-product-list"],{"054a":function(t,e,n){"use strict";n.r(e);var o=n("cb4f"),r=n("98ab");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("1cf1");var a,c=n("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"edab30c8",null,!1,o["a"],a);e["default"]=s.exports},"1cf1":function(t,e,n){"use strict";var o=n("ebc2"),r=n.n(o);r.a},"98ab":function(t,e,n){"use strict";n.r(e);var o=n("ac1b"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},ac1b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){n.e("components/page-component/app-attr/app-attr").then(function(){return resolve(n("bb7b"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/page-component/goods/u-attr").then(function(){return resolve(n("fb47"))}.bind(null,n)).catch(n.oe)},u={name:"product-list",props:{goods_list:Array,theme:String,is_name:{type:Boolean,default:!0},is_cart:{type:Boolean,default:!0},sign:String,listStyle:{type:Boolean,default:!1},isShowAttr:{type:Boolean,default:!0},themeObject:{type:Object}},computed:i({},(0,o.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},isShowCart:function(t){return t.mallConfig.mall.setting.is_show_cart},isShowGoodsName:function(t){return t.mallConfig.mall.setting.is_show_goods_name},isShowSalesNum:function(t){return t.mallConfig.mall.setting.is_show_sales_num},appSetting:function(t){return t.mallConfig.mall.setting},isListUnderlinePrice:function(t){return t.mallConfig.mall.setting.is_list_underline_price}})),methods:{routeGo:function(t){this.$emit("routeGo",t)},specification:function(e){var n=this;this.attrGoods.select=null,this.isShowAttr?(this.attrGoods.goods=e,this.attrGoods.attrShow=!0):(t.showLoading({text:"",mask:!0}),this.$request({url:this.$api.goods.attr,data:{id:e.id,mch_id:e.mch_id}}).then((function(o){t.hideLoading(),0===o.code?(n.attrGoods.goods=Object.assign(e,o.data),n.attrGoods.attrShow=!0):t.showToast({title:o.msg,icon:"none"})})))},checkClick:function(t){this.attrGoods.select=t}},data:function(){return{attrGoods:{goods:null,attrShow:0,select:null}}},components:{"app-attr":c,uAttr:s}};e.default=u}).call(this,n("543d")["default"])},cb4f:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},ebc2:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-product-list/app-product-list-create-component',
    {
        'components/page-component/app-product-list/app-product-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("054a"))
        })
    },
    [['components/page-component/app-product-list/app-product-list-create-component']]
]);
