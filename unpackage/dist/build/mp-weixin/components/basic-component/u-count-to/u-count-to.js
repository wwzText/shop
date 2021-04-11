(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/u-count-to/u-count-to"],{"1b3e":function(t,i,a){},5229:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-count-to",props:{startVal:{type:[Number,String],default:0},endVal:{type:[Number,String],default:0,required:!0},duration:{type:[Number,String],default:2e3},autoplay:{type:Boolean,default:!0},decimals:{type:[Number,String],default:0},useEasing:{type:Boolean,default:!0},decimal:{type:[Number,String],default:"."},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:50},bold:{type:Boolean,default:!1},separator:{type:String,default:""}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{easingFn:function(t,i,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+i},requestAnimationFrame:function(t){var i=(new Date).getTime(),a=Math.max(0,16-(i-this.lastTime)),n=setTimeout((function(){t(i+a)}),a);return this.lastTime=i+a,n},cancelAnimationFrame:function(t){clearTimeout(t)},start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.startTime=null,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count)},reset:function(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var i=t-this.startTime;this.remaining=this.localDuration-i,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(i,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(i,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(i/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(i/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),i<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=Number(t),t=t.toFixed(Number(this.decimals)),t+="";var i=t.split("."),a=i[0],n=i.length>1?this.decimal+i[1]:"",e=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))while(e.test(a))a=a.replace(e,"$1"+this.separator+"$2");return a+n},destroyed:function(){this.cancelAnimationFrame(this.rAF)}}};i.default=n},a1ea:function(t,i,a){"use strict";a.r(i);var n=a("5229"),e=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);i["default"]=e.a},b5b5:function(t,i,a){"use strict";a.r(i);var n=a("ed3d"),e=a("a1ea");for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);a("f18d");var r,l=a("f0c5"),u=Object(l["a"])(e["default"],n["b"],n["c"],!1,null,"f62efb14",null,!1,n["a"],r);i["default"]=u.exports},ed3d:function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement;t._self._c},s=[]},f18d:function(t,i,a){"use strict";var n=a("1b3e"),e=a.n(n);e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/u-count-to/u-count-to-create-component',
    {
        'components/basic-component/u-count-to/u-count-to-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b5b5"))
        })
    },
    [['components/basic-component/u-count-to/u-count-to-create-component']]
]);
