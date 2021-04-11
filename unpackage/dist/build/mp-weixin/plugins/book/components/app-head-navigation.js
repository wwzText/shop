(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/book/components/app-head-navigation"],{"0b64":function(n,t,e){"use strict";var a=e("d968"),i=e.n(a);i.a},"2dbda":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement;n._self._c},u=[]},"306d":function(n,t,e){"use strict";e.r(t);var a=e("2dbda"),i=e("9454");for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e("0b64");var r,c=e("f0c5"),d=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"52db0f4f",null,!1,a["a"],r);t["default"]=d.exports},3689:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"app-head-navigation",props:{list:{type:Array,default:function(){return[{name:"全部",id:0},{name:"待支付",id:1},{name:"待使用",id:2},{name:"待评价",id:4},{name:"售后",id:9}]}}},data:function(){return{activeIndex:0}},methods:{active:function(n){this.activeIndex=n,this.$emit("click",n)}}};t.default=a},9454:function(n,t,e){"use strict";e.r(t);var a=e("3689"),i=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=i.a},d968:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/book/components/app-head-navigation-create-component',
    {
        'plugins/book/components/app-head-navigation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("306d"))
        })
    },
    [['plugins/book/components/app-head-navigation-create-component']]
]);
