(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-associated-link/app-associated-link"],{"1f34":function(t,e,n){"use strict";n.r(e);var r=n("eb38"),u=n("4cba");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("b54d");var c,o=n("f0c5"),a=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"74779d1e",null,!1,r["a"],c);e["default"]=a.exports},4478:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={name:"app-associated-link",data:function(){return{className:""}},computed:i({},(0,r.mapState)({styleImg:function(t){return t.mallConfig.__wxapp_img.diy}})),props:{arrowsSwitch:{type:Boolean,default:function(){return!1}},background:{type:String,default:function(){return"#E11B1B"}},color:{type:String,default:function(){return"#F4EBEB"}},link:{type:Object,default:function(){return{open_type:"tel",params:[{value:"111"}]}}},styleColor:{type:String,default:function(){return"#353535"}},picSwitch:{type:Boolean,default:function(){return!1}},picUrl:{type:String,default:function(){return""}},position:{type:String,default:function(){return"left"}},title:{type:String,default:function(){return""}},styleNum:{type:String,default:function(){return"1"}},fontSize:{type:String,default:function(){return"36"}}},created:function(){"36"==this.fontSize?this.className="big-style":"28"==this.fontSize?this.className="medium-style":this.className="small-style"}};e.default=o},"4cba":function(t,e,n){"use strict";n.r(e);var r=n("4478"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},b54d:function(t,e,n){"use strict";var r=n("c21c"),u=n.n(r);u.a},c21c:function(t,e,n){},eb38:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement;t._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-associated-link/app-associated-link-create-component',
    {
        'components/page-component/app-associated-link/app-associated-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1f34"))
        })
    },
    [['components/page-component/app-associated-link/app-associated-link-create-component']]
]);
