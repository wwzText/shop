(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/components/index/voice"],{1694:function(t,n,i){"use strict";var a=i("5e6d"),e=i.n(a);e.a},"28da":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"voice",props:["theme","is_play","audio","voice_i"],data:function(){return{animationData1:"",animationData2:"",animationStatus:!1,manager:null,start_tran:!1}},watch:{voice_i:{handler:function(t){t>=30&&this.end()}}},methods:{animationFun:function(n){if(this.animationStatus){var i=t.createAnimation({duration:1e3});i.opacity(0).scale(1.5,1.5).step(),this[n]=i.export()}},animationEnd:function(n){var i=t.createAnimation({duration:0});i.opacity(1).scale(1,1).step(),this[n]=i.export()},recodeEnd:function(){var n=t.createAnimation({duration:0});n.opacity(1).scale(1,1).step();var i=t.createAnimation({duration:0});i.opacity(1).scale(1,1).step(),this.animationData1=n.export(),this.animationData2=i.export(),this.animationStatus=!1},recodeClick:function(){var t=this;this.animationStatus=!0,this.animationFun("animationData1"),setTimeout((function(){t.animationFun("animationData2")}),500),setTimeout((function(){t.animationRest()}),1e3)},animationRest:function(){var t=this;this.animationEnd("animationData1"),setTimeout((function(){t.animationEnd("animationData2")}),500),setTimeout((function(){t.animationStatus&&t.recodeClick()}),100)},start:function(){this.recodeClick(),this.$emit("recorder",!0)},end:function(){this.recodeEnd(),this.$emit("recorder",!1),this.start_tran=!1},playaudio:function(){this.is_play?this.$emit("play",!1):this.$emit("play",!0)},open:function(){var t=this;wx.getSetting({success:function(n){n.authSetting["scope.record"]?(t.start_tran=!0,t.$emit("click")):wx.authorize({scope:"scope.record",success:function(){t.start_tran=!0,t.$emit("click")},fail:function(n){wx.showModal({title:"提示",content:"您未授权录音，功能将无法使用",showCancel:!0,confirmText:"授权",confirmColor:"#52a2d8",success:function(){wx.openSetting({success:function(n){n.authSetting["scope.record"]&&(t.start_tran=!0,t.$emit("click"))},fail:function(t){}})}})}})},fail:function(t){}})},close:function(){this.audio={},this.$emit("close")}},filters:{second:function(t){return t<10?"00:0"+t:"00:"+t}}};n.default=i}).call(this,i("543d")["default"])},"5e6d":function(t,n,i){},"7fa8":function(t,n,i){"use strict";var a;i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a}));var e=function(){var t=this,n=t.$createElement,i=(t._self._c,Object.keys(t.audio)),a=t.start_tran?t._f("second")(t.voice_i):null;t._isMounted||(t.e0=function(n){n.stopPropagation(),t.start_tran=!1}),t.$mp.data=Object.assign({},{$root:{g0:i,f0:a}})},o=[]},"94a9":function(t,n,i){"use strict";i.r(n);var a=i("28da"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},d61d:function(t,n,i){"use strict";i.r(n);var a=i("7fa8"),e=i("94a9");for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);i("1694");var c,s=i("f0c5"),r=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"22218027",null,!1,a["a"],c);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/gift/components/index/voice-create-component',
    {
        'plugins/gift/components/index/voice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d61d"))
        })
    },
    [['plugins/gift/components/index/voice-create-component']]
]);
