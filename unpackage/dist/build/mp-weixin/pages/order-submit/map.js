(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order-submit/map"],{"1c8b":function(t,n,e){"use strict";e.r(n);var r=e("b45c"),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=o.a},"259f":function(t,n,e){"use strict";var r=e("3a89"),o=e.n(r);o.a},"3a89":function(t,n,e){},"9bb1":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var o=function(){var t=this,n=t.$createElement;t._self._c},i=[]},a9db:function(t,n,e){"use strict";e.r(n);var r=e("9bb1"),o=e("1c8b");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("259f");var a,c=e("f0c5"),f=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"1450f655",null,!1,r["a"],a);n["default"]=f.exports},b45c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("2f62");function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c={name:"map",data:function(){return{config:null}},onLoad:function(){this.loadData()},computed:i({polygons:function(){var t=[];if(this.config&&this.config.range&&this.config.range.length>0){var n=[];for(var e in this.config.range)n.push({latitude:this.config.range[e].lat,longitude:this.config.range[e].lng});t.push({points:n,strokeColor:"#4d77ff",strokeWidth:2,fillColor:"#4d77ff40"})}return t},markers:function(){var t=[];return this.config&&this.config.range&&this.config.address&&t.push({latitude:this.config.address.latitude,longitude:this.config.address.longitude,callout:{content:this.mall.name,color:"#353535",bgColor:"#ffffff",display:"ALWAYS",fontSize:13,padding:4,borderWidth:2,borderRadius:10,borderColor:"#ffffff"},anchor:{x:.5,y:1},iconPath:"/static/image/location.png",width:20,height:20}),t}},(0,r.mapState)({mall:function(t){return t.mallConfig.mall},iPhoneX:function(t){return t.iPhoneX}})),methods:{loadData:function(){var n=this;this.$request({url:this.$api.order.delivery,method:"post"}).then((function(e){0==e.code?n.config=e.data.config:t.showModal({content:e.msg,showCancel:!1})}))},mobile:function(){t.makePhoneCall({phoneNumber:this.config.contact_way})}}};n.default=c}).call(this,e("543d")["default"])},f5c2:function(t,n,e){"use strict";(function(t){e("aaea");r(e("66fd"));var n=r(e("a9db"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["f5c2","common/runtime","common/vendor"]]]);