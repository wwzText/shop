(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/receive/receive"],{"0e0d":function(t,e,i){"use strict";i.r(e);var n=i("fdef"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},1755:function(t,e,i){},"5bb7":function(t,e,i){"use strict";(function(t){i("b8bc");n(i("66fd"));var e=n(i("685c"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},6822:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"685c":function(t,e,i){"use strict";i.r(e);var n=i("6822"),o=i("0e0d");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("97d2");var a,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"273fb19d",null,!1,n["a"],a);e["default"]=u.exports},"97d2":function(t,e,i){"use strict";var n=i("1755"),o=i.n(n);o.a},fdef:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("a34a")),o=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t,e,i,n,o,r,a){try{var s=t[r](a),u=s.value}catch(c){return void i(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function f(t){return function(){var e=this,i=arguments;return new Promise((function(n,o){var r=t.apply(e,i);function a(t){c(r,n,o,a,s,"next",t)}function s(t){c(r,n,o,a,s,"throw",t)}a(void 0)}))}}var l=function(){i.e("plugins/gift/components/announcement/share-gift-text").then(function(){return resolve(i("e6f0"))}.bind(null,i)).catch(i.oe)},d=function(){i.e("plugins/gift/components/receive/receive-content").then(function(){return resolve(i("1a9b"))}.bind(null,i)).catch(i.oe)},g={name:"receive",data:function(){return{loading:!1,big:"",small:"",status:"",gift_status:-1,gift_id:-1,gift_detail:{list:{type:"direct_open"}},is_play:!1}},onLoad:function(e){this.gift_id=e.gift_id,this.gift_status=e.status,this.$store.dispatch("gift/getConfig",this.$api.gift.config),this.request(),t.hideShareMenu();var i=this;this.innerAudioContext=t.createInnerAudioContext(),this.innerAudioContext.autoplay=!0,this.innerAudioContext.onEnded((function(t){i.is_play=!1}))},onHide:function(){this.is_play=!1,this.innerAudioContext.stop()},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/gift/index/index",title:this.gift_detail.list.bless_word,params:{gift_id:this.gift_id},imageUrl:0===this.gift_detail.is_big_gift?this.gift_detail.list.sendOrder[0].detail[0].goods.goodsWarehouse.cover_pic:this.big_gift_pic})},methods:{request:function(){var t=this;return f(n.default.mark((function e(){var i,o,r,a,s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$utils.showLoading(),e.next=3,t.$request({url:t.$api.gift.gift,methods:"get",data:{gift_id:t.gift_id}});case 3:i=e.sent,t.$utils.hideLoading(),t.gift_detail=i.data,0!=t.gift_status?"num_open"===t.gift_detail.list.type?0===t.gift_detail.open_status?(t.big="参与成功，等待开奖",t.small="满".concat(t.gift_detail.list.open_num,"人开奖")):0===t.gift_detail.status?(t.big="很遗憾，你未中奖",t.status="未中奖"):(t.big="恭喜你，中奖了",t.status="中奖了"):"time_open"===t.gift_detail.list.type?0===t.gift_detail.open_status?(t.big="参与成功，等待开奖",o=new Date(t.gift_detail.list.open_time.replace(/-/g,"/")),r=o.getMonth()+1,a=o.getDate(),t.small="".concat(r>10?r:"0"+r,"月").concat(a>10?a:"0"+a,"日 ").concat(o.getHours(),":").concat(o.getMinutes()>10?o.getMinutes():"0"+o.getMinutes(),":00 开奖")):0===t.gift_detail.status?(t.big="很遗憾，你未中奖",t.status="未中奖"):(t.big="恭喜你，中奖了",t.status="中奖了"):"direct_open"===t.gift_detail.list.type&&(1===t.gift_detail.status?(t.big="礼物领取成功",t.status="已领取"):(t.big="礼物已被抢光",t.status="已抢光")):(t.big=t.gift_detail.win_goods_name,"time_open"===t.gift_detail.list.type&&(s=new Date(t.gift_detail.list.open_time.replace(/-/g,"/")),t.small="".concat(s.getMonth()+1>10?s.getMonth()+1:"0"+s.getMonth()+1,"月").concat(s.getDate()>10?s.getDate():"0"+s.getDate(),"日 ").concat(s.getHours(),":").concat(s.getMinutes()>10?s.getMinutes():"0"+s.getMinutes(),":00 开奖"))),t.loading=!0;case 8:case"end":return e.stop()}}),e)})))()},play:function(t,e){this.is_play=t,t?(this.innerAudioContext.src=e,this.innerAudioContext.play()):this.innerAudioContext.stop()}},computed:s({},(0,o.mapState)("gift",{theme:function(t){return t.theme},big_gift_pic:function(t){return t.big_gift_pic}})),components:{"share-gift-text":l,"receive-content":d}};e.default=g}).call(this,i("543d")["default"])}},[["5bb7","common/runtime","common/vendor"]]]);