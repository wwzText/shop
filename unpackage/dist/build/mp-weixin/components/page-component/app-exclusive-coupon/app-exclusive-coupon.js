(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-exclusive-coupon/app-exclusive-coupon"],{"65f0f":function(t,e,n){"use strict";n.r(e);var i=n("dda9"),o=n("b451");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("e364");var s,u=n("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"5314c0b3",null,!1,i["a"],s);e["default"]=r.exports},"85c3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"app-exclusive-coupon",props:{receiveBg:{type:String,default:function(){return""}},list:{type:Array,default:function(){return[]}},textColor:{type:String,default:function(){return"#ffffff"}},unclaimedBg:{type:String,default:function(){return""}},index:{type:Number},sign:{type:String},showTop:{type:Boolean,default:function(){return!0}},noneColor:{type:Boolean,default:function(){return!1}},background:String,page_id:Number,is_required:Boolean,coupon_req:Boolean},data:function(){return{coupon_list:[],tempList:[]}},computed:{receiveTip:function(){var t="立即领取";return"integral-mall"===this.sign&&(t="立即兑换"),t}},methods:{receive:function(e){var n=this,i=this.coupon_list;if("integral-mall"!==this.sign){if(1==i[e].is_receive)return t.showToast({mask:!0,title:"已领取",icon:"none"}),!0;t.showLoading({mask:!0,title:"领取中"}),this.$request({url:this.$api.coupon.receive,data:{coupon_id:i[e].id}}).then((function(o){if(t.hideLoading(),0===o.code){0==o.data.rest&&(o.data.is_receive=1),n.coupon_list[e]=Object.assign(i[e],o.data);var a=n.$storage.getStorageSync("INDEX_MALL");a.home_pages[n.index].list=n.coupon_list,n.$storage.setStorageSync("INDEX_MALL",a),n.$store.dispatch("page/actionSetCoupon",{list:[n.coupon_list[e]],type:"receive"})}else t.showModal({title:"提示",content:o.msg,showCancel:!1})})).catch((function(){t.hideLoading()}))}else this.$jump({url:i[e].page_url,open_type:"navigate"})},loadData:function(){var t=this;this.$request({url:this.$api.index.extra,data:{type:"mall",key:"coupon",page_id:this.page_id,index:this.index}}).then((function(e){if(t.coupon_list=e.data,0===t.page_id){var n=t.$storage.getStorageSync("INDEX_MALL");n.home_pages[t.index].list=e.data,t.$storage.setStorageSync("INDEX_MALL",n)}}))},cloneData:function(t){return JSON.parse(JSON.stringify(t))},splitData:function(){var t=this;if(this.tempList.length){var e=this.tempList[0];this.coupon_list.push(e),this.tempList.splice(0,1),this.tempList.length&&setTimeout((function(){t.splitData()}),300)}},route:function(){t.navigateTo({url:"/pages/coupon/list/list"})}},mounted:function(){if(this.coupon_req)this.coupon_list=this.list;else if(this.is_required)this.loadData();else{var t=this.$storage.getStorageSync("INDEX_MALL");this.coupon_list=t.home_pages[this.index].list}}};e.default=n}).call(this,n("543d")["default"])},b451:function(t,e,n){"use strict";n.r(e);var i=n("85c3"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},dda9:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},e364:function(t,e,n){"use strict";var i=n("ed55"),o=n.n(i);o.a},ed55:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-exclusive-coupon/app-exclusive-coupon-create-component',
    {
        'components/page-component/app-exclusive-coupon/app-exclusive-coupon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("65f0f"))
        })
    },
    [['components/page-component/app-exclusive-coupon/app-exclusive-coupon-create-component']]
]);