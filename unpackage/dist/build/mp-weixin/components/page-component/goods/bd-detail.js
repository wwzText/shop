(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/bd-detail"],{5112:function(t,e,n){},"8e58":function(t,e,n){"use strict";var c;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return c}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"9c88":function(t,e,n){"use strict";var c=n("5112"),o=n.n(c);o.a},af2c:function(t,e,n){"use strict";n.r(e);var c=n("8e58"),o=n("f50d");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("9c88");var a,i=n("f0c5"),u=Object(i["a"])(o["default"],c["b"],c["c"],!1,null,"a196ee1e",null,!1,c["a"],a);e["default"]=u.exports},ce06:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=function(){Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-rich/parse")]).then(function(){return resolve(n("4828"))}.bind(null,n)).catch(n.oe)},o={name:"bd-detail",components:{"app-rich-text":c},props:{detail:{type:String,default:function(){return""}}},created:function(){this.$store.dispatch("gConfig/setImageWidth",48)},computed:{newDetail:function(){var t="正在加载数据，模拟网络延迟2秒😝";return this.detail&&(t=this.detail),t}}};e.default=o},f50d:function(t,e,n){"use strict";n.r(e);var c=n("ce06"),o=n.n(c);for(var r in c)"default"!==r&&function(t){n.d(e,t,(function(){return c[t]}))}(r);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/bd-detail-create-component',
    {
        'components/page-component/goods/bd-detail-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("af2c"))
        })
    },
    [['components/page-component/goods/bd-detail-create-component']]
]);
