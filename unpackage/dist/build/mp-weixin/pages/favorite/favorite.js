(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/favorite/favorite"],{"1c94":function(t,e,i){"use strict";var s=i("24c2"),o=i.n(s);o.a},"24c2":function(t,e,i){},"468a":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(i("a34a")),o=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return u(t)||c(t)||h(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){if(t){if("string"===typeof t)return p(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return p(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}function l(t,e,i,s,o,r,a){try{var n=t[r](a),h=n.value}catch(c){return void i(c)}n.done?e(h):Promise.resolve(h).then(s,o)}function f(t){return function(){var e=this,i=arguments;return new Promise((function(s,o){var r=t.apply(e,i);function a(t){l(r,s,o,a,n,"next",t)}function n(t){l(r,s,o,a,n,"throw",t)}a(void 0)}))}}function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){m(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v=function(){i.e("pages/favorite/component/good-action").then(function(){return resolve(i("770d"))}.bind(null,i)).catch(i.oe)},_=function(){i.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(function(){return resolve(i("b12d"))}.bind(null,i)).catch(i.oe)},b=function(){i.e("components/page-component/app-special-topic/app-special-topic-list").then(function(){return resolve(i("e44f"))}.bind(null,i)).catch(i.oe)},y=function(){i.e("components/page-component/app-no-goods/app-no-goods").then(function(){return resolve(i("17fc"))}.bind(null,i)).catch(i.oe)},w=[],$={name:"favorite",data:function(){return{getCurrent:0,is_goods:!0,left:0,rotate:{left:0,right:0},leftSet:0,rightSet:0,statusTop:85,listStyle:!0,statusList:[],selectStatus:0,typeY:-800,show:!1,list:[],topicList:[],timeOutEvent:-1,touch:!1,allTouch:!1,touchNumber:0,shareShow:!1,shareItem:{},goods_page:1,topic_page:1,topicShow:!1}},computed:g({getTabs:function(){return[{name:"商品"},{name:"专题"}]}},(0,o.mapGetters)("mallConfig",{cat_style:"getCatStyle",getTheme:"getTheme"})),methods:{emit:function(t){var e=this;if(this.goods_page=1,0===t)this.is_goods=!0,this.left=0,this.statusTop=85,setTimeout((function(){e.getCurrent=t})),this.getFavorite();else if(1===t){for(var i in setTimeout((function(){e.is_goods=!1}),500),this.getCurrent=t,this.left=375,this.typeY=-800,this.statusTop=-85,this.rotate)this.rotate[i]=0;if(this.show=!1,!this.listStyle){for(var s=0;s<this.list.length;s++)this.list[s].touch=!1;this.touch=!1,this.allTouch=!1}this.getTopicList()}},setDef:function(t){"right"===t?(this.statusList=[{name:"全部状态",id:0},{name:"优惠",id:3},{name:"低库存",id:1},{name:"失效",id:2}],this.rotate.left=0,this.typeY=-800):(this.statusList=w,this.rotate.right=0,this.typeY=-800),0===this.rotate[t]?(this.rotate[t]=180,this.show=!0,this.typeY=-3):this.rotate[t]=0},setStatus:function(t){this.selectStatus=t},sureStatus:function(t){if(this.goods_page=1,this.typeY=-800,this.show=!1,1===t)for(var e in 0!==this.rotate.left&&(this.leftSet=this.selectStatus),0!==this.rotate.right&&(this.rightSet=this.selectStatus),this.getFavorite(),this.rotate)this.rotate[e]=0;else for(var i in this.leftSet=0,this.rightSet=0,this.getFavorite(),this.rotate)this.rotate[i]=0},getCats:function(){var t=this;return f(s.default.mark((function e(){var i;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request({url:t.$api.favorite.cats,method:"get"});case 2:i=e.sent,w=i.data.list,t.statusList=i.data.list;case 5:case"end":return e.stop()}}),e)})))()},getFavorite:function(t){var e=this;return f(s.default.mark((function i(){var o,r;return s.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$request({url:e.$api.favorite.my_favorite_goods,method:"get",data:{cat_id:e.leftSet,status:e.rightSet,page:e.goods_page}});case 2:o=i.sent,t?(r=e.list).push.apply(r,a(o.data.list)):e.list=o.data.list;case 4:case"end":return i.stop()}}),i)})))()},getTopicList:function(t){var e=this;return f(s.default.mark((function i(){var o,r,n,h;return s.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.$request({url:e.$api.user.my_favorite_topic,method:"get",data:{page:e.topic_page}});case 2:for(o=i.sent,r=o.data.list,n=0;n<r.length;n++)r[n].show=!1;t?(h=e.topicList).push.apply(h,a(r)):e.topicList=r;case 6:case"end":return i.stop()}}),i)})))()},del:function(e){0===this.getCurrent?(this.$request({url:this.$api.user.favorite_remove,method:"get",data:{goods_id:this.list[e].id}}),this.$delete(this.list,e)):(this.$request({url:this.$api.topic.favorite,data:{id:this.topicList[e].id,is_favorite:"no_love"},method:"post"}),this.$delete(this.topicList,e)),t.showToast({title:"取消收藏成功",icon:"none"})},remove:function(){for(var e=[],i=0;i<this.list.length;i++)this.list[i].touch&&e.push(this.list[i].id);if(0!==e.length){this.$request({url:this.$api.user.favorite_batch_remove,method:"post",data:{goods_ids:JSON.stringify(e)}});for(var s=0;s<this.list.length;s++)for(var o=0;o<e.length;o++)e[o]===this.list[s].id&&this.$delete(this.list,s);t.showToast({title:"取消收藏成功",icon:"none"})}},share:function(t){if(0===this.getCurrent){var e=this.list[t];switch(this.shareItem.goods=this.list[t],this.shareItem.hasPosterNav=!0,this.shareItem.newShareUrl=this.$api.goods.poster+"&goods_id="+e.id,this.shareShow=!0,e.sign){case"step":this.shareItem.posterGenerate=this.$api.step.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.step.poster_config+"&goods_id="+e.id;break;case"book":this.shareItem.posterGenerate=this.$api.book.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.book.poster_config+"&goods_id="+e.id;break;case"bargain":this.shareItem.posterGenerate=this.$api.bargain.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.bargain.poster_config+"&goods_id="+e.id;break;case"integral_mall":this.shareItem.posterGenerate=this.$api.integral_mall.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.integral_mall.poster_config+"&goods_id="+e.id;break;case"pt":this.shareItem.posterGenerate=this.$api.pt.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.pt.poster_config+"&goods_id="+e.id;break;case"mch":this.shareItem.posterGenerate=this.$api.mch.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.mch.poster_config+"&goods_id="+e.id;break;case"miaosha":this.shareItem.posterGenerate=this.$api.miaosha.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.miaosha.poster_config+"&goods_id="+e.id;break;case"advance":this.shareItem.posterGenerate=this.$api.advance.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.advance.poster_config+"&goods_id="+e.id;break;case"quick_share":this.shareItem.posterGenerate=this.$api.quick_share.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.quick_share.poster_config+"&goods_id="+e.id;break;case"pick":this.shareItem.posterGenerate=this.$api.pick.poster_generate+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.pick.poster_config+"&goods_id="+e.id;break;default:this.shareItem.posterGenerate=this.$api.poster.goods_new+"&goods_id="+e.id,this.shareItem.posterConfig=this.$api.goods.poster+"&goods_id="+e.id;break}}else this.shareItem.url=this.$api.poster.topic+"&id="+this.topicList[t].id,this.shareItem.topic=this.topicList[t],this.topicShow=!0},openAction:function(t){var e=this;0===this.getCurrent?(this.list[t].show=!0,this.list.map((function(i,s){t!=s&&(e.list[s].show=!1)}))):(this.topicList[t].show=!0,this.topicList.map((function(i,s){t!=s&&(e.topicList[s].show=!1)})))},handletouchmove:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},handletouchstart:function(t){var e=this;return this.timeOutEvent=setTimeout((function(){e.onLongPress(t)}),1e3),!1},handletouchend:function(t,e){return clearTimeout(this.timeOutEvent),0!=this.timeOutEvent&&(this.touch?this.touch&&this.setTouch(e):this.route(t)),!1},onLongPress:function(t){this.touch=!0},setTouch:function(t){this.list[t].touch=!this.list[t].touch},setTouchA:function(t){this.allTouch=!t;for(var e=0;e<this.list.length;e++)this.list[e].touch=this.allTouch},setListStyle:function(){if(this.listStyle=!this.listStyle,this.touch=!1,!this.listStyle){for(var t=0;t<this.list.length;t++)this.list[t].touch=!1;this.allTouch=!1}},route:function(e){3!==e.status_type&&t.navigateTo({url:e.page_url})},edit:function(){if(this.touch){for(var t=0;t<this.list.length;t++)this.list[t].touch=!1;this.touch=!1,this.allTouch=!1}else{this.touch=!this.touch;for(var e=0;e<this.list.length;e++)this.list[e].show=!1}},closeMask:function(){this.show=!1,this.rotate.left=0,this.rotate.right=0,this.typeY=-500}},watch:{rotate:{handler:function(t){0===t.left&&0===t.right&&(this.show=!1),0!==t.left&&(this.selectStatus=this.leftSet),0!==t.right&&(this.selectStatus=this.rightSet)},deep:!0},list:{handler:function(t){for(var e=0,i=0;i<t.length;i++)t[i].touch&&e++;this.touchNumber=e,e===t.length?this.allTouch=!0:this.allTouch=!1},deep:!0}},onLoad:function(){this.getCats(),this.getFavorite()},components:{goodAction:v,appShareQrCode:_,"app-special-topic-list":b,appNoGoods:y},onReachBottom:function(){0===this.getCurrent?(this.goods_page++,this.getFavorite(!0)):(this.topic_page++,this.getTopicList(!0))},onShareAppMessage:function(t){if("button"===t.from)return 0===this.getCurrent?this.$shareAppMessage({title:this.shareItem.goods.name,imageUrl:this.shareItem.goods.cover_pic,path:"/pages/goods/goods",params:{id:this.shareItem.goods.id}}):this.$shareAppMessage({title:this.shareItem.topic.app_share_title?this.shareItem.topic.app_share_title:this.shareItem.topic.title,imageUrl:this.shareItem.topic.cover_pic?this.shareItem.topic.cover_pic:"",path:"/pages/topic/topic",params:{id:this.shareItem.topic.id}})},filters:{category:function(t){for(var e=0;e<w.length;e++)if(w[e].id===t)return w[e].name},setStatus:function(t){for(var e=[{name:"全部状态",id:0},{name:"优惠",id:3},{name:"低库存",id:1},{name:"失效",id:2}],i=0;i<e.length;i++)if(e[i].id===t)return e[i].name}}};e.default=$}).call(this,i("543d")["default"])},"8c41":function(t,e,i){"use strict";(function(t){i("b8bc");s(i("66fd"));var e=s(i("9562"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"8d21":function(t,e,i){"use strict";i.r(e);var s=i("468a"),o=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,(function(){return s[t]}))}(r);e["default"]=o.a},9562:function(t,e,i){"use strict";i.r(e);var s=i("f33c"),o=i("8d21");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("1c94");var a,n=i("f0c5"),h=Object(n["a"])(o["default"],s["b"],s["c"],!1,null,"3e8abad1",null,!1,s["a"],a);e["default"]=h.exports},f33c:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return s}));var o=function(){var t=this,e=t.$createElement,i=(t._self._c,t._f("category")(t.leftSet)),s=t._f("setStatus")(t.rightSet);t.$mp.data=Object.assign({},{$root:{f0:i,f1:s}})},r=[]}},[["8c41","common/runtime","common/vendor"]]]);