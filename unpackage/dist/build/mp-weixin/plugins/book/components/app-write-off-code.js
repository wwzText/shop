(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/book/components/app-write-off-code"],{"25b1":function(t,e,n){"use strict";n.r(e);var i=n("e10a"),a=n("e222");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("f130");var r,o=n("f0c5"),f=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"2fe1eae7",null,!1,i["a"],r);e["default"]=f.exports},4062:function(t,e,n){},9867:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"app-write-off-code",props:{hidden:{type:Boolean,default:function(){return!1}},itemId:{type:String,default:function(){return"-1"}}},data:function(){return{file_path:""}},watch:{hidden:{handler:function(t){var e=this;!0===t&&this.$request({url:this.$api.book.clerk_code,data:{id:this.itemId}}).then((function(t){0===t.code&&(e.file_path=t.data.file_path)}))}}},methods:{hiddenHandler:function(){this.$emit("hiden",!1),this.file_path=""}}};e.default=i},e10a:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},e222:function(t,e,n){"use strict";n.r(e);var i=n("9867"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},f130:function(t,e,n){"use strict";var i=n("4062"),a=n.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/book/components/app-write-off-code-create-component',
    {
        'plugins/book/components/app-write-off-code-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("25b1"))
        })
    },
    [['plugins/book/components/app-write-off-code-create-component']]
]);
