(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/bd-info"],{"5da0":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var o=function(){var e=this,n=e.$createElement;e._self._c},i=[]},a09e:function(e,n,t){"use strict";t.r(n);var r=t("5da0"),o=t("dc39");for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("d4b1");var c,a=t("f0c5"),u=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);n["default"]=u.exports},c33b:function(e,n,t){},c5f7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("2f62");function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=function(){Promise.all([t.e("common/vendor"),t.e("components/page-component/app-vip-card/app-vip-card")]).then(function(){return resolve(t("85a9"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("components/page-component/goods/bd-flash-sale").then(function(){return resolve(t("b462"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/page-component/goods/app-price").then(function(){return resolve(t("f854"))}.bind(null,t)).catch(t.oe)},p=function(){t.e("components/page-component/goods/bd-join-member").then(function(){return resolve(t("1d7d"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("components/page-component/app-member-mark/app-member-mark").then(function(){return resolve(t("5c88"))}.bind(null,t)).catch(t.oe)},f=function(){t.e("components/page-component/goods/bd-quick-share").then(function(){return resolve(t("0b58"))}.bind(null,t)).catch(t.oe)},b=function(){t.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(function(){return resolve(t("aa90"))}.bind(null,t)).catch(t.oe)},d={name:"u-info",props:{name:String,subtitle:String,isNegotiable:Number,theme:Object,flashSale:Object,levelShow:Number,price:Number,originalPrice:Number,priceMax:Number,priceMin:Number,priceMemberMax:Number,priceMemberMin:Number,isShowMember:{type:Boolean,default:function(){return!0}},isShowShare:{type:Boolean,default:function(){return!0}},discount:Number,isVipCardUser:{type:Number,default:function(){return 0}},sales:{type:[Number,String]},unit:String,isSales:Number,posterConfig:String,posterGenerate:String,hasPosterNav:{type:Boolean,default:function(){return!1}},goodsId:Number,shareUrl:String,extraQuickShare:Object,appSharePic:String,appShareTitle:String,goods:Object,isVip:Boolean},data:function(){return{shareShow:!1,quickShareShow:!1}},components:{AppVipCard:a,bdFlashSale:u,appPrice:s,appMemberMark:l,bdJoinMember:p,bdQuickShare:f,appShareQrCode:b},computed:i(i({},(0,r.mapState)({isUnderlinePrice:function(e){return e.mallConfig.mall.setting.is_underline_price}})),{},{newShareUrl:function(){return this.shareUrl?this.shareUrl:this.goodsId?this.$api.poster.goods+"&goods_id="+this.goodsId:""}}),methods:{quickShare:function(e){this.$emit("quickShare",e)},shareClick:function(){this.$user.isLogin()?this.extraQuickShare?this.quickShareShow=!0:this.shareShow=!0:this.$user.getInfo().then((function(){}))}}};n.default=d},d4b1:function(e,n,t){"use strict";var r=t("c33b"),o=t.n(r);o.a},dc39:function(e,n,t){"use strict";t.r(n);var r=t("c5f7"),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/bd-info-create-component',
    {
        'components/page-component/goods/bd-info-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a09e"))
        })
    },
    [['components/page-component/goods/bd-info-create-component']]
]);
