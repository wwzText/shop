(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/app-goods-full-reduce"],{"0fe2":function(t,e,i){},"1c65":function(t,e,i){"use strict";var n=i("0fe2"),u=i.n(n);u.a},"4b45":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return u})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var u=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"62b6":function(t,e,i){"use strict";i.r(e);var n=i("639a"),u=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=u.a},"639a":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"app-goods-full-reduce",props:{theme:String,full_reduce:Object,sign:String},data:function(){return{textWidth:0,resultWidth:0,list:[],opacity:!1}},methods:{route:function(){t.navigateTo({url:"/pages/full_reduce/index/index"})},initSize:function(){for(var e=this,i=[],n=function(n){i.push(new Promise((function(i){var u=t.createSelectorQuery().in(e);u.select("#bd-".concat(n,"-text")).boundingClientRect().exec((function(n){n[0]&&(e.textWidth+=n[0].width+t.upx2px(10)),i()}))})))},u=0;u<this.list.length;u++)n(u);Promise.all(i).then((function(){e.resultWidth=e.textWidth}))}},watch:{"full_reduce.rule":{immediate:!0,handler:function(t){var e=this;this.list=t,this.textWidth=0,setTimeout((function(){e.initSize()}),500)},deep:!0},resultWidth:{handler:function(e){var i=this;e>t.upx2px(552)?(this.list=this.list.slice(0,this.list.length-1),this.textWidth=0,this.$nextTick((function(){i.initSize()}))):this.opacity=!0}}},mounted:function(){var t=this;setTimeout((function(){t.list=t.full_reduce.rule,t.textWidth=0,setTimeout((function(){t.initSize()}),500)}),500)}};e.default=i}).call(this,i("543d")["default"])},d55d:function(t,e,i){"use strict";i.r(e);var n=i("4b45"),u=i("62b6");for(var c in u)"default"!==c&&function(t){i.d(e,t,(function(){return u[t]}))}(c);i("1c65");var o,r=i("f0c5"),a=Object(r["a"])(u["default"],n["b"],n["c"],!1,null,"cfa8a4d6",null,!1,n["a"],o);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/app-goods-full-reduce-create-component',
    {
        'components/page-component/goods/app-goods-full-reduce-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d55d"))
        })
    },
    [['components/page-component/goods/app-goods-full-reduce-create-component']]
]);
