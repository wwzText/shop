(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order-detail/order-detail"],{"1ce6":function(e,r,t){"use strict";var o=t("b395"),n=t.n(o);n.a},"2295c":function(e,r,t){"use strict";(function(e){t("aaea");o(t("66fd"));var r=o(t("842e"));function o(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("543d")["createPage"])},"6a84":function(e,r,t){"use strict";t.r(r);var o=t("a5d1"),n=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(r,e,(function(){return o[e]}))}(a);r["default"]=n.a},"842e":function(e,r,t){"use strict";t.r(r);var o=t("f08a"),n=t("6a84");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("1ce6");var i,d=t("f0c5"),s=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,"e07eda88",null,!1,o["a"],i);r["default"]=s.exports},a5d1:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(t("d810"));function n(e){return e&&e.__esModule?e:{default:e}}function a(e,r){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=i(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,d=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return d=e.done,e},e:function(e){s=!0,a=e},f:function(){try{d||null==t.return||t.return()}finally{if(s)throw a}}}}function i(e,r){if(e){if("string"===typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}var s=function(){t.e("components/page-component/app-order-goods-info/app-order-goods-info").then(function(){return resolve(t("1a1d"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("components/page-component/app-order-express/app-order-express").then(function(){return resolve(t("abc6"))}.bind(null,t)).catch(t.oe)},c=function(){t.e("components/page-component/app-order-banner/app-order-banner").then(function(){return resolve(t("4700"))}.bind(null,t)).catch(t.oe)},u={components:{"app-order-goods-info":s,"app-order-express":l,"app-order-banner":c},data:function(){return{order_id:null,orderDetail:{detailExpressRelation:[],detailExpress:[]},is_show:!1,advance_order:{goods_num:0},detail:[],sign:"",ecard:[],isShowFormGoods:!1}},computed:{formList:function(){var e=this,r=e.orderDetail.detail,t={},o=[];if(r&&r.length){var n,i=a(r);try{for(i.s();!(n=i.n()).done;){var d=n.value;"0"!=d.form_id&&(-1===o.indexOf(d.form_id)?(o.push(d.form_id),t[d.form_id]=[d]):t[d.form_id].push(d))}}catch(s){i.e(s)}finally{i.f()}}return e.isShowFormGoods=o.length>1,Object.values(t)},getPageUrl:function(){var e=this.orderDetail;if(1==e.is_send&&0==e.detailExpress.length){var r="";return e.detail.forEach((function(e,t){0===t&&(r=e.goods_info.pic_url)})),"/pages/order/express-detail/express-detail?express=".concat(e.express,"&customer_name=").concat(e.customer_name,"&express_no=").concat(e.express_no,"&cover_pic=").concat(r)}if(1==e.is_send&&1==e.detailExpress.length){var t=e.detailExpress[0].express,o=e.detailExpress[0].express_no,n=e.detailExpress[0].customer_name,a=e.detailExpress[0].expressRelation[0].orderDetail.goods_info.goods_attr.cover_pic;return"/pages/order/express-detail/express-detail?express="+t+"&customer_name="+n+"&express_no="+o+"&cover_pic="+a}if(e.detailExpress.length>=1)return"/pages/order/express-list/express-list?order_id="+e.id}},methods:{look:function(r){e.previewImage({current:r,urls:[r]})},toggle:function(e){this.orderDetail.composition_list[e].show=!this.orderDetail.composition_list[e].show,this.$forceUpdate()},getOrderDetail:function(){var r=this;r.$showLoading(),r.$request({url:r.$api.order.detail,data:{id:r.order_id}}).then((function(t){if(r.$hideLoading(),r.is_show=!0,0==t.code){if(r.orderDetail=t.data.detail,r.ecard=[r.orderDetail.type_data.ecard[0]],"composition"==r.sign)for(var o in r.orderDetail.composition_list)r.orderDetail.composition_list[o].show=!1}else e.showModal({title:"",content:t.msg,showCancel:!1})})).catch((function(){r.$hideLoading()}))},copyText:function(e){o.default.copyText(e)},copyTextEcard:function(e){for(var r="",t=0;t<e.length;t++)r+="".concat(e[t].key,":").concat(e[t].value,"\n");o.default.copyText(r)},navigation:function(r){e.openLocation({latitude:parseFloat(r.latitude),longitude:parseFloat(r.longitude),name:r.name,address:r.address})},cancel:function(r){e.navigateTo({url:"/pages/order/refund/order-refund?id="+r.id})},cancelAction:function(r){var t=this;e.showLoading({title:"取消中"}),t.$request({url:t.$api.order.cancel,data:{id:r.id}}).then((function(r){e.hideLoading(),0===r.code?"advance"===t.sign?t.$request({url:t.$api.advance.order_detail,method:"get",data:{id:t.order_id}}).then((function(r){t.is_show=!0,0===r.code?t.orderDetail=r.data.detail:e.showModal({title:"",content:r.msg,showCancel:!1})})):t.getOrderDetail():e.showModal({title:"",content:r.msg,showCancel:!1})})).catch((function(){e.hideLoading()}))},mobile:function(){e.makePhoneCall({phoneNumber:this.orderDetail.city.mobile})},go_eCard:function(){e.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.ecard.index),"&key=content&data=").concat(JSON.stringify({order_id:this.orderDetail.id}))})}},onLoad:function(e){this.order_id=e.id,this.sign=e.sign},onShow:function(){var r=this,t=setInterval((function(){"advance"===r.sign?r.$request({url:r.$api.advance.order_detail,method:"get",data:{id:r.order_id}}).then((function(t){r.is_show=!0,0===t.code?r.orderDetail=t.data.detail:e.showModal({title:"",content:t.msg,showCancel:!1})})):r.getOrderDetail(),clearInterval(t)}),300)}};r.default=u}).call(this,t("543d")["default"])},b395:function(e,r,t){},f08a:function(e,r,t){"use strict";var o;t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return o}));var n=function(){var e=this,r=e.$createElement,t=(e._self._c,e.is_show&&e.orderDetail&&("booking"===e.orderDetail.sign||"vip_card"===e.orderDetail.sign)&&e.orderDetail.order_form&&e.orderDetail.order_form.length?e.__map(e.orderDetail.order_form,(function(r,t){var o=e.__get_orig(r),n="img_upload"===r.key?Array.isArray(r.value):null;return{$orig:o,g0:n}})):null),o=e.is_show&&e.orderDetail&&("booking"!==e.orderDetail.sign&&"vip_card"!==e.orderDetail.sign||!e.orderDetail.order_form||!e.orderDetail.order_form.length)&&e.formList&&e.formList.length?e.__map(e.formList,(function(r,t){var o=e.__get_orig(r),n=e.__map(r[0]["form_data"],(function(r,t){var o=e.__get_orig(r),n="img_upload"===r.key?Array.isArray(r.value):null;return{$orig:o,g1:n}}));return{$orig:o,l1:n}})):null;e._isMounted||(e.e0=function(r){e.ecard=e.orderDetail.type_data.ecard}),e.$mp.data=Object.assign({},{$root:{l0:t,l2:o}})},a=[]}},[["2295c","common/runtime","common/vendor"]]]);