(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/order-detail/order-detail"],{"41bb":function(e,t,r){"use strict";(function(e){r("b8bc");o(r("66fd"));var t=o(r("45bb"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"43df":function(e,t,r){"use strict";r.r(t);var o=r("ae97"),n=r.n(o);for(var i in o)"default"!==i&&function(e){r.d(t,e,(function(){return o[e]}))}(i);t["default"]=n.a},"45bb":function(e,t,r){"use strict";r.r(t);var o=r("e78e"),n=r("43df");for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r("d9d0");var a,s=r("f0c5"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"634f5c3e",null,!1,o["a"],a);t["default"]=d.exports},ae97:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("2f62");function n(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=i(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,d=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){d=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(d)throw a}}}}function i(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(){r.e("pages/app_admin/components/order-menu").then(function(){return resolve(r("059c"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{order:{total_pay_price:"",express_price:"",total_goods_price:"",total_goods_original_price:""},address:[],today:"",yesterday:"",weekday:"",detail:{},reset_time:0,dd:0,hh:0,mm:0,status:1,hiddenRemark:!0,showForm:!1,first:!0,iphone_x:!1}},components:{"order-menu":l},computed:d(d({},(0,o.mapState)({userInfo:function(e){return e.user.info},adminImg:function(e){return e.mallConfig.__wxapp_img.app_admin}})),{},{formList:function(){var e=this,t=e.order.detail,r={},o=[];if(t&&t.length){var i,a=n(t);try{for(a.s();!(i=a.n()).done;){var s=i.value;"0"!=s.form_id&&(-1===o.indexOf(s.form_id)?(o.push(s.form_id),r[s.form_id]=[s]):r[s.form_id].push(s))}}catch(d){a.e(d)}finally{a.f()}}return Object.values(r)},orderStatus:function(){return 1==this.order.is_sale?"已完成":1==this.order.cancel_status?"订单已取消":2==this.order.cancel_status?"取消订单 待处理":0==this.order.is_pay&&2!=this.order.pay_type?"等待买家付款":0==this.order.is_send?"等待卖家发货":0==this.order.is_confirm?"卖家已发货":1==this.order.is_confirm?"买家已收货":void 0}}),methods:{toExpressInfo:function(t){e.navigateTo({url:"/pages/app_admin/express/express?id="+t.id+"&express="+t.detailExpress[0].express+"&express_no="+t.detailExpress[0].express_no+"&customer_name="+t.detailExpress[0].customer_name})},toExpressMore:function(t){e.navigateTo({url:"/pages/order/express-list/express-list?order_id="+t.id})},cancel:function(e){e&&e.id>0&&(2==this.status?this.detail=e:this.order=e),this.$forceUpdate()},toCall:function(e){2==this.status?this.detail.showMobile=!0:this.order.showMobile=!0},update:function(t){e.showLoading({title:"加载中..."}),this.getList()},toggle:function(e){this.order.composition_list[e].show=!this.order.composition_list[e].show},openMap:function(){var t=this.order.location.split(",");e.openLocation({latitude:+t[1],longitude:+t[0]})},imageLoad:function(e){this.order.order_form[e].loadOver=!1},look:function(t){e.previewImage({current:t,urls:[t]})},imageFormLoad:function(e,t){this.order.detail[e].form_data[t].loadOver=!1},copy:function(){var t="".concat(this.order.name," ").concat(this.order.mobile," ").concat(this.order.address);e.setClipboardData({data:t,success:function(){e.hideToast(),e.getClipboardData({success:function(){e.showToast({title:"复制成功",duration:1e3})}})}})},getTime:function(){var e=this.reset_time-1,t=0,r=parseInt(e/3600);e>86400&&(t=parseInt(e/86400),r=parseInt((e-86400*t)/3600));var o=e%3600,n=parseInt(o/60);r<10&&(r="0"+r.toString()),n<10&&(n="0"+n.toString()),this.reset_time=e,this.dd=t,this.hh=r,this.mm=n},getList:function(){var t=this;t.about="",t.$showLoading({type:"global",text:"加载中..."});var r={};1==t.status?r.order_id=t.id:r.refund_order_id=t.id,t.$request({url:1==t.status?t.$api.app_admin.detail:t.$api.app_admin.refund_detail,data:r,method:"post"}).then((function(r){if(e.hideLoading(),t.$hideLoading(),0==r.code){var o;1==t.status?o=r.data.order:(t.detail=r.data.detail,o=r.data.detail.order,o.detail=[],o.detail[0]=r.data.detail.detail),o.address=o.address.replace(/\s*/g,""),o.showMobile=!1;var i=0;if(o.auto_cancel>0?i=o.auto_cancel:o.auto_confirm>0?i=o.auto_confirm:o.auto_sales>0&&(i=o.auto_sales),t.first){if(null!=o.order_form&&o.order_form.length>0)for(var a=0;a<o.order_form.length;a++)"img_upload"==o.order_form[a].key&&(o.order_form[a].loadOver=!0);t.first=!1}for(var s in t.showForm=!1,o.detail)if(null!=o.detail[s].form_data&&o.detail[s].form_data.length>0){var d,u=n(o.detail[s].form_data);try{for(u.s();!(d=u.n()).done;){var l=d.value;null!=l.value&&(t.showForm=!0)}}catch(h){u.e(h)}finally{u.f()}}if("booking"===o.sign||"vip_card"===o.sign){var c,f=n(o.order_form);try{for(f.s();!(c=f.n()).done;){var p=c.value;null!=p.value&&(t.showForm=!0)}}catch(h){f.e(h)}finally{f.f()}}if("composition"==o.sign)for(var m in o.composition_list)o.composition_list[m].show=!1;t.order=o,i>0&&(t.reset_time=i,setInterval((function(){t.getTime()}),1e3))}else e.showToast({title:r.msg,icon:"none",duration:1e3})})).catch((function(r){e.hideLoading(),t.$hideLoading()}))},getAddress:function(){var t=this;t.$request({url:t.$api.app_admin.refund_address}).then((function(r){t.$hideLoading(),0==r.code?t.address=r.data.list:e.showToast({title:r.msg,icon:"none",duration:1e3})})).catch((function(r){t.$hideLoading(),e.showToast({title:r,icon:"none",duration:1e3})}))}},onShow:function(){this.getList()},onLoad:function(t){var r=this;e.getSystemInfo({success:function(e){(e.model.indexOf("iPhone X")>-1||e.model.indexOf("iPhone 11")>-1||e.model.indexOf("iPhone11")>-1||e.model.indexOf("iPhone12")>-1||e.model.indexOf("Unknown Device")>-1)&&(r.iphone_x=!0)}}),r.id=t.id,r.status=t.status,r.getAddress()}};t.default=c}).call(this,r("543d")["default"])},d3d4:function(e,t,r){},d9d0:function(e,t,r){"use strict";var o=r("d3d4"),n=r.n(o);n.a},e78e:function(e,t,r){"use strict";var o;r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return o}));var n=function(){var e=this,t=e.$createElement,r=(e._self._c,e.__map(e.order.order_form,(function(t,r){var o=e.__get_orig(t),n=t.value&&"booking"!==e.order.sign&&"vip_card"!==e.order.sign&&"img_upload"===t.key?Array.isArray(t.value):null;return{$orig:o,g0:n}}))),o=e.showForm&&1==e.status?e.__map(e.formList,(function(t,r){var o=e.__get_orig(t),n=e.__map(t[0].form_data,(function(t,r){var o=e.__get_orig(t),n=t.value&&"booking"!==e.order.sign&&"img_upload"===t.key?Array.isArray(t.value):null;return{$orig:o,g1:n}})),i=e.__map(e.order.order_form,(function(t,r){var o=e.__get_orig(t),n=!t.value||"booking"!==e.order.sign&&"vip_card"!==e.order.sign||"img_upload"!==t.key?null:Array.isArray(t.value);return{$orig:o,g2:n}}));return{$orig:o,l1:n,l2:i}})):null;e.$mp.data=Object.assign({},{$root:{l0:r,l3:o}})},i=[]}},[["41bb","common/runtime","common/vendor"]]]);