(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-check-in/app-check-in"],{4669:function(t,e,n){"use strict";n.r(e);var o=n("4781"),r=n("53ea4");for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);n("fee7");var u,i=n("f0c5"),a=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"64e7a7f9",null,!1,o["a"],u);e["default"]=a.exports},4781:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"53ea4":function(t,e,n){"use strict";n.r(e);var o=n("6420"),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=r.a},6420:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62"),r=c(n("afe35"));function c(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){n.e("components/basic-component/app-hotspot/app-hotspot").then(function(){return resolve(n("efad"))}.bind(null,n)).catch(n.oe)},s={name:"app-check-in",components:{"app-hotspot":f},props:{backgroundPicUrl:{type:String,default:function(){return""}},hotspot:{type:Object,default:function(){return{}}},showText:{type:Boolean,default:function(){return!1}},textColor:String,textPosition:String},computed:i({},(0,o.mapGetters)({userInfo:"user/info"})),methods:{checkIn:function(){var e=this;t.showLoading({title:"签到中"}),r.default.getAward(1,1).then((function(n){t.hideLoading(),t.showToast({title:"签到成功",icon:"success",mask:!1}),e.$store.dispatch("user/info")})).catch((function(e){t.hideLoading(),t.showToast({title:e,mask:!1,icon:"none"})}))}}};e.default=s}).call(this,n("543d")["default"])},b3fc:function(t,e,n){},fee7:function(t,e,n){"use strict";var o=n("b3fc"),r=n.n(o);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-check-in/app-check-in-create-component',
    {
        'components/page-component/app-check-in/app-check-in-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4669"))
        })
    },
    [['components/page-component/app-check-in/app-check-in-create-component']]
]);
