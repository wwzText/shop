(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/lottery/goods/goods"],{"0544":function(t,e,n){"use strict";n.r(e);var o=n("6fd8"),i=n("6b39");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("ed3a");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"448ccf5a",null,!1,o["a"],a);e["default"]=c.exports},"366d":function(t,e,n){"use strict";(function(t){n("aaea");o(n("66fd"));var e=o(n("0544"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6b39":function(t,e,n){"use strict";n.r(e);var o=n("c366"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"6fd8":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},c366:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){n.e("components/page-component/app-quick-navigation/app-quick-navigation").then(function(){return resolve(n("aeaf"))}.bind(null,n)).catch(n.oe)},c=function(){Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-rich/parse")]).then(function(){return resolve(n("4828"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/page-component/goods/app-goods-banner").then(function(){return resolve(n("4f02"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/page-component/goods/app-goods-service").then(function(){return resolve(n("7e3c"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(function(){return resolve(n("aa90"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/page-component/goods/app-goods-marketing").then(function(){return resolve(n("fe8b"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/basic-component/u-mask/u-mask").then(function(){return resolve(n("278c"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/basic-component/app-close/app-close").then(function(){return resolve(n("d6b7"))}.bind(null,n)).catch(n.oe)},h={name:"goods",components:{appQuickNavigation:s,appRichText:c,appGoodsBanner:l,appService:u,appShareQrCode:p,appGoodsMarketing:d,uMask:f,appClose:g},computed:r({},(0,o.mapState)({appImg:function(t){return t.mallConfig.plugin.lottery.app_image},isUnderlinePrice:function(t){return t.mallConfig.mall.setting.is_underline_price}})),data:function(){var t,e;return{showClose:!1,is_open:!1,integral_time:t,integral_animation:e,animation_trans_lottery:null,rule_list:[{key:1,value:"参与\n抽奖"},{key:2,value:"等待\n开奖"},{key:3,value:"幸运\n中奖"},{key:4,value:"下单\n收礼"}],times:{},poster:this.$api.lottery.poster,user_log:null,lottery:null,goods:null,lucky_list:null,lottery_id:"",award_bg:"",shareShow:!1,setting:null,new_status:0,template_message:null,poster_config:this.$api.lottery.poster_config,poster_generate:this.$api.lottery.poster_generate}},onHide:function(){clearInterval(this.integral_time)},onUnload:function(){clearInterval(this.integral_time)},onShareAppMessage:function(){return this.$shareAppMessage({title:this.goods.name,path:"/plugins/lottery/goods/goods",params:{lottery_id:this.lottery.id}})},onShow:function(){var t=this;this.showClose=!1,setTimeout((function(){t.showClose=!0}))},onLoad:function(e){var n=this;this.lottery_id=e.lottery_id,this.getSetting(),this.clerk(e.user_id),this.$showLoading({title:"加载中"}),this.$request({url:this.$api.lottery.goods,data:{lottery_id:this.lottery_id}}).then((function(e){if(n.$hideLoading(),0===e.code){var o=[e.data.goods,e.data.lottery,e.data.lucky_list,e.data.user_log,e.data.new_status,e.data.template_message];n.goods=o[0],n.lottery=o[1],n.lucky_list=o[2],n.user_log=o[3],n.new_status=o[4],n.template_message=o[5],n.setTimeStart(2==n.new_status?n.lottery.start_at:n.lottery.end_at)}else t.showToast({icon:"none",title:e.msg})})).catch((function(){n.$hideLoading()}))},methods:{getMall:function(t){this.is_open=1==t.is_open},qrcode:function(){t.navigateTo({url:"/plugins/lottery/qrcode/qrcode"})},prize:function(){t.navigateTo({url:"/plugins/lottery/detail/detail?lottery_id="+this.lottery.id}),clearInterval(this.lotteryInter),this.award_bg=!1},rule:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.lottery.setting),"&keys=").concat(JSON.stringify(["setting","rule"]))})},catchTouchMove:function(){return!1},getSetting:function(){var t=this;t.$request({url:t.$api.lottery.setting}).then((function(e){0===e.code&&(t.setting=e.data.setting)}))},clerk:function(t){var e=this;t&&e.$request({url:e.$api.lottery.clerk,data:{user_id:t,lottery_id:e.lottery_id},method:"POST"})},setTimeStart:function(t){var e=this;clearInterval(e.integral_time);var n=function(t){var n=t.replace(/-/g,"/"),o=parseInt((new Date(n).getTime()-(new Date).getTime())/1e3),i=0,r=0,a=0,s=0;o>0&&(i=Math.floor(o/86400),r=Math.floor(o/3600)-24*i,a=Math.floor(o/60)-24*i*60-60*r,s=Math.floor(o)-24*i*60*60-60*r*60-60*a),e.times={day:i,hour:r,minute:a,second:s},e.times<=0&&clearInterval(e.integral_time)};n(t),e.integral_time=setInterval((function(){n(t)}),1e3)},subscribe:function(){if(!this.award_bg){var t=this;t.$subscribe(this.template_message).then((function(e){t.buyZero()})).catch((function(e){t.buyZero()}))}},buyZero:function(){var t=this;t.award_bg=!t.award_bg,setTimeout((function(){var e=wx.createAnimation({duration:500,timingFunction:"linear",delay:0,transformOrigin:"50% 50%"});t.award_bg?e.width("360rpx").height("314rpx").step():e.scale(0,0).opacity(0).step(),t.animation_trans_lottery=e.export(),setTimeout((function(){var n=0;t.integral_animation=setInterval((function(){n%2===0?e.scale(.9).opacity(1).step():e.scale(1).opacity(1).step(),t.animation_trans_lottery=e.export(),n++,500===n&&(n=0)}),500)}),500)}),50)},detail:function(){clearInterval(this.integral_animation),this.award_bg=!1},onImageListClick:function(e){var n=[],o=e.currentTarget.dataset.index;for(var i in this.goods.pic_url)n.push(this.goods.pic_url[i].pic_url);t.previewImage({urls:n,current:n[o]})},buyNow:function(){t.navigateTo({url:"/pages/goods/goods?id="+this.lottery.buy_goods_id})},shareClick:function(){this.shareShow=!0}}};e.default=h}).call(this,n("543d")["default"])},cb50:function(t,e,n){},ed3a:function(t,e,n){"use strict";var o=n("cb50"),i=n.n(o);i.a}},[["366d","common/runtime","common/vendor"]]]);