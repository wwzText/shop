(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/scratch/index/index"],{6908:function(t,e,n){"use strict";n.r(e);var i=n("dd19"),a=n("aeb4");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("e037");var s,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"27db9d48",null,!1,i["a"],s);e["default"]=o.exports},aeb4:function(t,e,n){"use strict";n.r(e);var i=n("bcae"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},af0ac:function(t,e,n){"use strict";(function(t){n("b8bc");i(n("66fd"));var e=i(n("6908"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},bcae:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){n.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(function(){return resolve(n("b12d"))}.bind(null,n)).catch(n.oe)},o={name:"index",components:{appShareQrCodePoster:c},computed:r({},(0,i.mapState)({appImg:function(t){return t.mallConfig.plugin.scratch.app_image},userInfo:function(t){return t.user.info}})),data:function(){var t,e,n,i,a,r,s,c;return{ctx:t,interval:e,minX:n,minY:i,maxX:a,maxY:r,lastX:s,lastY:c,logs:[],setting:null,list:null,oppty:0,msg:"",is_start:!0,is_award:!1,is_name:!1,extra_list:null,touch_end:!0,poster:this.$api.scratch.poster,poster_status:!1,shareShow:!1,userLoginShow:!1,r:16,is_integral:!1}},watch:{shareShow:function(t,e){!1===t&&!0===e&&this.init()}},onUnload:function(){clearInterval(this.interval)},onHide:function(){clearInterval(this.interval)},onShareAppMessage:function(){return this.$shareAppMessage({title:this.$children[0].navigationBarTitle,path:"/plugins/scratch/index/index",params:{}})},onShow:function(){var e=this;e.$showLoading({title:"加载中"}),e.$request({url:e.$api.scratch.index}).then((function(n){if(e.$hideLoading(),e.is_award=!1,n.data){var i=[1===n.code?n.msg:"",n.data.setting,n.data.oppty,n.data.list];e.msg=i[0],e.setting=i[1],e.oppty=i[2],e.list=i[3],e.is_integral=e.setting.deplete_integral_num>0}else t.showToast({title:n.msg,icon:"none"});e.init()})),e.prizeList(),e.interval=setInterval((function(){e.prizeList()}),1e4)},methods:{register:function(){this.msg?t.showToast({icon:"none",title:this.msg}):(this.is_integral=!1,this.init())},share:function(){this.shareShow=!0},home:function(){t.redirectTo({url:"/pages/index/index"})},prize:function(){t.navigateTo({url:"/plugins/scratch/prize/prize"})},rules:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.scratch.setting),"&keys=").concat(JSON.stringify(["setting","rule"]))})},prizeList:function(){var t=this;t.$request({url:t.$api.scratch.record}).then((function(e){0===e.code&&(t.logs=e.data)}))},onStart:function(){this.init();var t=[this.setting.deplete_integral_num>0,this.extra_list,!1];this.is_integral=t[0],this.list=t[1],this.is_award=t[2]},init:function(){var e=this,n=[!0,!1];e.is_start=n[0],e.is_name=n[1],setTimeout((function(){var n=t.createSelectorQuery();n.select("#frame").boundingClientRect(),n.exec((function(n){var i=n[0].width,a=n[0].height,r="./../image/scratch_hide.png",s=["","","","","",""];e.lastX=s[0],e.lastY=s[1],e.minX=s[2],e.minY=s[3],e.maxX=s[4],e.maxY=s[5];var c=[16,i,a];e.r=c[0],e.canvasWidth=c[1],e.canvasHeight=c[2];var o=t.createCanvasContext("scratch");o.drawImage(r,0,0,i,a),e.ctx=o,o.draw(!0,(function(t){e.is_name=!0}))}))}))},drawRect:function(t,e){var n=this,i=n.r/2,a=t-i>0?t-i:0,r=e-i>0?e-i:0;if(""!==n.minX)n.minX=n.minX>a?a:n.minX,n.minY=n.minY>r?r:n.minY,n.maxX=n.maxX>a?n.maxX:a,n.maxY=n.maxY>r?n.maxY:r;else{var s=[a,r,a,r];n.minX=s[0],n.minY=s[1],n.maxX=s[2],n.maxY=s[3]}var c=[a,r];return n.lastX=c[0],n.lastY=c[1],[a,r,2*i]},clearArc:function(t,e,n){var i=this.r,a=this.ctx,r=i-n,s=Math.sqrt(i*i-r*r),c=t-r,o=e-s,u=2*r,l=2*s;n<=i&&(a.clearRect(c,o,u,l),n+=2,this.clearArc(t,e,n))},touchStart:function(e){var n=this;"User ID不能为空。"===n.msg?(this.userLoginShow=!0,n.$store.dispatch("user/info")):n.msg&&t.showToast({icon:"none",title:n.msg})},touchMove:function(t){if(this.is_start&&!this.msg){var e=2;this.drawRect(t.touches[0].x,t.touches[0].y),this.clearArc(t.touches[0].x,t.touches[0].y,e),this.ctx.draw(!0)}},touchEnd:function(e){var n=this;if(n.is_start&&!n.msg){var i=n.canvasWidth,a=n.canvasHeight,r=n.minX,s=n.minY,c=n.maxX,o=n.maxY;c-r>.4*i&&o-s>.4*a&&n.touch_end&&(n.touch_end=!1,n.$request({url:n.$api.scratch.receive,data:{id:n.list.id}}).then((function(e){if(0===e.code){n.ctx.draw();var i=[e.msg,e.data.setting,e.data.oppty,e.data.list];n.msg=i[0],n.setting=i[1],n.oppty=i[2],n.extra_list=i[3];var a=[!1,5!=n.list.type];n.is_start=a[0],n.is_award=a[1]}else t.showToast({icon:"none",content:e.msg}),n.onStart();n.touch_end=!0})))}}}};e.default=o}).call(this,n("543d")["default"])},be4d:function(t,e,n){},dd19:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},e037:function(t,e,n){"use strict";var i=n("be4d"),a=n.n(i);a.a}},[["af0ac","common/runtime","common/vendor"]]]);