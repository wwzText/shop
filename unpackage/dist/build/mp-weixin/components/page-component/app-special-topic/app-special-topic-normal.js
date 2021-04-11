(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-special-topic/app-special-topic-normal"],{"7df9":function(t,n,e){"use strict";var c;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return c}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},8583:function(t,n,e){"use strict";e.r(n);var c=e("dbe2"),i=e.n(c);for(var u in c)"default"!==u&&function(t){e.d(n,t,(function(){return c[t]}))}(u);n["default"]=i.a},"9d41b":function(t,n,e){},caa6:function(t,n,e){"use strict";var c=e("9d41b"),i=e.n(c);i.a},dbe2:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={name:"app-special-topic",props:{topic_list:{type:Array,default:function(){return[]}},count:{type:Number,default:function(){return 2}},icon:String,logo_1:String,logo_2:String},computed:{newDataList:function(){if(2===this.count){for(var t=[],n=0;n<Math.ceil(this.topic_list.length/this.count);n++)t.push(this.topic_list.slice(n*this.count,(n+1)*this.count));return t}}}};n.default=c},f09f:function(t,n,e){"use strict";e.r(n);var c=e("7df9"),i=e("8583");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("caa6");var o,r=e("f0c5"),a=Object(r["a"])(i["default"],c["b"],c["c"],!1,null,"f3104e22",null,!1,c["a"],o);n["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-special-topic/app-special-topic-normal-create-component',
    {
        'components/page-component/app-special-topic/app-special-topic-normal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f09f"))
        })
    },
    [['components/page-component/app-special-topic/app-special-topic-normal-create-component']]
]);
