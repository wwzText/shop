(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/wholesale/goods/goods"],{"1f00":function(t,e,o){"use strict";(function(t){o("aaea");n(o("66fd"));var e=n(o("ded5"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"4a06":function(t,e,o){},"91ea":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},a0b4:function(t,e,o){"use strict";o.r(e);var n=o("f6ed"),a=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},d53e:function(t,e,o){"use strict";var n=o("4a06"),a=o.n(n);a.a},ded5:function(t,e,o){"use strict";o.r(e);var n=o("91ea"),a=o("a0b4");for(var r in a)"default"!==r&&function(t){o.d(e,t,(function(){return a[t]}))}(r);o("d53e");var i,s=o("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"60c3451e",null,!1,n["a"],i);e["default"]=c.exports},f6ed:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("a34a")),a=o("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,o,n,a,r,i){try{var s=t[r](i),c=s.value}catch(l){return void o(l)}s.done?e(c):Promise.resolve(c).then(n,a)}function s(t){return function(){var e=this,o=arguments;return new Promise((function(n,a){var r=t.apply(e,o);function s(t){i(r,n,a,s,c,"next",t)}function c(t){i(r,n,a,s,c,"throw",t)}s(void 0)}))}}function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){u(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function d(t,e){var o;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=h(t))||e&&t&&"number"===typeof t.length){o&&(t=o);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){s=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(s)throw r}}}}function h(t,e){if(t){if("string"===typeof t)return f(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}var p=function(){o.e("components/page-component/goods/app-goods-banner").then(function(){return resolve(o("4f02"))}.bind(null,o)).catch(o.oe)},g=function(){o.e("components/page-component/app-attr/app-attr").then(function(){return resolve(o("bb7b"))}.bind(null,o)).catch(o.oe)},m=function(){o.e("components/page-component/goods/app-goods-full-reduce").then(function(){return resolve(o("d55d"))}.bind(null,o)).catch(o.oe)},b=function(){o.e("components/page-component/goods/bd-info").then(function(){return resolve(o("a09e"))}.bind(null,o)).catch(o.oe)},v=function(){Promise.all([o.e("common/vendor"),o.e("components/page-component/goods/bd-coupon")]).then(function(){return resolve(o("2dbd"))}.bind(null,o)).catch(o.oe)},_=function(){o.e("components/page-component/goods/bd-xbc").then(function(){return resolve(o("5e18"))}.bind(null,o)).catch(o.oe)},w=function(){o.e("components/page-component/goods/bd-kb").then(function(){return resolve(o("197d"))}.bind(null,o)).catch(o.oe)},y=function(){o.e("components/page-component/goods/bd-hc").then(function(){return resolve(o("7dd9"))}.bind(null,o)).catch(o.oe)},O=function(){o.e("components/page-component/goods/bd-detail").then(function(){return resolve(o("af2c"))}.bind(null,o)).catch(o.oe)},T=function(){o.e("components/page-component/goods/bd-comments").then(function(){return resolve(o("6cd4"))}.bind(null,o)).catch(o.oe)},k=function(){o.e("components/basic-component/app-close/app-close").then(function(){return resolve(o("d6b7"))}.bind(null,o)).catch(o.oe)},$={name:"goods",data:function(){return{showClose:!1,is_open:0,goods:{},selectAttr:null,previewUrl:this.$api.wholesale.order_preview,submitUrl:this.$api.wholesale.order_submit,show:0,list:[],appAttr:{},totalNumber:0,totalPrice:"0.00",poster_config:this.$api.wholesale.poster_config,poster_generate:this.$api.wholesale.poster_generate,url:this.$api.wholesale.poster,goods_id:-1,loading:!1,first:!0,is_vip:!1,is_vip_card_user:0,discount:null,full_reduce:null,flash_sale:null,wholesaleDiscount:0}},onLoad:function(t){var e=this,o=this;o.goods_id=t.id,wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),o.$showLoading({type:"global",text:"加载中..."}),o.request({url:o.$api.wholesale.detail,data:{id:o.goods_id}}).then((function(t){o.first=!1,o.goods=t.detail,t.detail.goods_activity&&(e.full_reduce=t.detail.goods_activity.full_reduce),o.goods.vip_card_appoint.discount>0&&(o.is_vip=!0,o.discount=o.goods.vip_card_appoint.discount),o.is_vip_card_user=o.goods.vip_card_appoint.is_vip_card_user;var n,a=d(o.goods.attr);try{for(a.s();!(n=a.n()).done;){var r=n.value;r.number="0"}}catch(u){a.e(u)}finally{a.f()}if(1==o.goods.attr_groups.length)o.goods.attr[0].number="0";else{var i,s=d(o.goods.attr_groups);try{for(s.s();!(i=s.n()).done;){var c=i.value;for(var l in c.scrollLeft=0,c.attr_list)c.attr_list[l].active=!(l>0),c.attr_list[l].number=0}}catch(u){s.e(u)}finally{s.f()}}o.flash_sale=o.goods.plugin_extra.flash_sale,o.loading=!0,o.$hideLoading()}))},onShow:function(){var t=this;if(this.showClose=!1,setTimeout((function(){t.showClose=!0})),this.first)return!1;var e=JSON.parse(JSON.stringify(this.goods.attr)),o=JSON.parse(JSON.stringify(this.goods.attr_groups));this.$showLoading(),this.$nextTick((function(){var n=t;n.request({url:n.$api.wholesale.detail,data:{id:n.goods_id}}).then((function(a){n.goods=a.detail,n.goods.attr=e,n.goods.attr_groups=o,t.$hideLoading()}))}))},computed:l(l(l(l({},(0,a.mapState)("gConfig",{mall:function(t){return t.mallConfig.mall},iphone:function(t){return t.iphone},iphoneHeight:function(t){return t.iphoneHeight}})),(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"})),(0,a.mapState)({mall:function(t){return t.mallConfig.mall}})),{},{good_negotiable:function(){var t=this.mall.setting.good_negotiable;this.contact_tel="",this.contact="",this.contact_web="";for(var e=[],o=0;o<t.length;o++)"contact_tel"===t[o]&&(this.contact_tel="contact_tel"),"contact"===t[o]&&(this.contact="contact"),"contact_web"===t[o]&&(this.contact_web="contact_web");return this.contact_tel&&e.push(this.contact_tel),this.contact&&e.push(this.contact),this.contact_web&&e.push(this.contact_web),e},contactBtn:function(){var t=this.good_negotiable.length,e=this.getTheme;return 3!==t||"a"!==e&&"b"!==e&&"f"!==e?3===t&&"a"!==e&&"b"!==e&&"f"!==e?"".concat(e,"-m-back ").concat(e,"-s-text ").concat(e):2!==t||"a"!==e&&"b"!==e&&"f"!==e||this.contact_tel?2!==t||"a"!==e&&"b"!==e&&"f"!==e||!this.contact_tel?2!==t||"a"===e||"b"===e||"f"===e||this.contact_tel?(2===t&&"a"!==e&&"b"!==e&&"f"!==e&&this.contact_tel,"".concat(e,"-m-back ").concat(e,"-s-text ").concat(e)):"".concat(e,"-s-back text ").concat(e):"".concat(e,"-m-back ").concat(e,"-s-text ").concat(e):"".concat(e,"-s-back text ").concat(e):"".concat(e,"-m-back ").concat(e,"-s-text ").concat(e)},themeObject:function(){return{back:this.getTheme+"-m-back "+this.getTheme,backP:this.getTheme+"-m-back-p "+this.getTheme,backO:this.getTheme+"-m-back-o "+this.getTheme,theme:this.getTheme,color:this.getTheme+"-m-text "+this.getTheme,sBack:this.getTheme+"-s-back "+this.getTheme,border:this.getTheme+"-m-border "+this.getTheme}}}),onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/wholesale/goods/goods",title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,imageUrl:this.goods.app_share_pic?this.goods.app_share_pic:"",params:{id:this.goods.id}})},onShareTimeline:function(){return this.$shareTimeline({title:this.goods.app_share_title?this.goods.app_share_title:this.goods.name,query:{id:this.goods.id}})},methods:{getMall:function(t){this.is_open=t.is_open},setCoupon:function(t){this.$set(this.goods.goods_coupon_center[t],"is_receive",1)},clickAttr:function(){this.show=Math.random()},attr:function(t){this.appAttr=t},favorite:function(){var e=this.$api.user.favorite_add,o=!0;this.goods.favorite&&(e=this.$api.user.favorite_remove,o=!1),this.goods.favorite=o,this.$request({url:e,data:{goods_id:this.goods.id}}).then((function(e){0===e.code||t.showModal({title:"提示",content:e.msg,showCancel:!1})})).catch((function(t){}))},request:function(e){var o=this;return s(n.default.mark((function a(){var r,i,s;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.url,i=e.data,n.next=3,o.$request({url:r,data:i});case 3:if(s=n.sent,0!==s.code){n.next=8;break}return n.abrupt("return",s.data);case 8:t.showToast({title:s.msg,icon:"none",duration:1e3}),setTimeout((function(){t.navigateBack()}),1e3);case 10:case"end":return n.stop()}}),a)})))()},attrtap:function(t,e){var o=this,n=this;if(null!==t){n.goods=t;var a,r=d(e);try{for(r.s();!(a=r.n()).done;){var i,s=a.value,c=d(n.goods.attr);try{for(c.s();!(i=c.n()).done;){var l=i.value;s.id==l.id&&(l.number=s.number)}}catch(O){c.e(O)}finally{c.f()}}}catch(O){r.e(O)}finally{r.f()}n.totalNumber=0;var u,h=0,f=d(n.goods.attr);try{for(f.s();!(u=f.n()).done;){var p=u.value;if(n.totalNumber+=+p.number,p.number>0){var g=1===n.goods.level_show?p.price_member:p.price;h+=p.number*g}}}catch(O){f.e(O)}finally{f.f()}if(n.goods.attr_groups.length>1){var m,b=d(n.goods.attr_groups[0].attr_list);try{for(b.s();!(m=b.n()).done;){var v=m.value;v.number=0;var _,w=d(n.goods.attr);try{for(w.s();!(_=w.n()).done;){var y=_.value;y.number>0&&v.attr_id==y.attr_list[0].attr_id&&v.attr_name==y.attr_list[0].attr_name&&(v.number+=+y.number,v.length=-5-10*+v.number.toString().length)}}catch(O){w.e(O)}finally{w.f()}}}catch(O){b.e(O)}finally{b.f()}}setTimeout((function(){var t,e=0,a=d(n.goods.wholesaleGoods.wholesale_rules);try{for(a.s();!(t=a.n()).done;){var r=t.value;n.totalNumber<r.num||(o.wholesaleDiscount=r.discount,e++)}}catch(O){a.e(O)}finally{a.f()}0==e&&(o.wholesaleDiscount=0==n.goods.wholesaleGoods.type?10:0),o.wholesaleDiscount>0&&(0==n.goods.wholesaleGoods.type?h*=o.wholesaleDiscount/10:h-=o.wholesaleDiscount*n.totalNumber),n.totalPrice=h.toFixed(2)}),0)}}},components:{"app-banner":p,"app-attr":g,"app-goods-full-reduce":m,appClose:k,bdInfo:b,bdCoupon:v,bdXbc:_,bdKb:w,bdHc:y,bdDetail:O,bdComments:T}};e.default=$}).call(this,o("543d")["default"])}},[["1f00","common/runtime","common/vendor"]]]);