(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/quick-shop/quick-shop"],{"133c":function(t,e,i){"use strict";var n=i("9b89"),r=i.n(n);r.a},"21a6":function(t,e,i){"use strict";(function(t){i("aaea");n(i("66fd"));var e=n(i("7469"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"4b69":function(t,e,i){"use strict";i.r(e);var n=i("4f8e"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"4f8e":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a34a")),r=i("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i,n,r,a,o){try{var c=t[a](o),s=c.value}catch(u){return void i(u)}c.done?e(s):Promise.resolve(s).then(n,r)}function c(t){return function(){var e=this,i=arguments;return new Promise((function(n,r){var a=t.apply(e,i);function c(t){o(a,n,r,c,s,"next",t)}function s(t){o(a,n,r,c,s,"throw",t)}c(void 0)}))}}function s(t){return d(t)||h(t)||l(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return f(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(t,e):void 0}}function h(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){g(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var b=function(){i.e("pages/quick-shop/components/app-add-subtract/app-add-subtract").then(function(){return resolve(i("9b7f"))}.bind(null,i)).catch(i.oe)},v=function(){i.e("components/page-component/app-attr/app-attr").then(function(){return resolve(i("bb7b"))}.bind(null,i)).catch(i.oe)},_=function(){i.e("components/page-component/goods/u-attr").then(function(){return resolve(i("fb47"))}.bind(null,i)).catch(i.oe)},y={name:"quick-shop",components:{"app-add-subtract":b,"app-attr":v,uAttr:_},computed:m(m(m(m({},(0,r.mapState)({tabBarNavs:function(t){return t.mallConfig.navbar.navs},appSetting:function(t){return t.mallConfig.mall.setting},appImg:function(t){return t.mallConfig.__wxapp_img.mall},isListUnderlinePrice:function(t){return t.mallConfig.mall.setting.is_list_underline_price}})),(0,r.mapGetters)("iPhoneX",{botHeight:"getBotHeight"})),(0,r.mapGetters)("mallConfig",{getVideo:"getVideo",getTheme:"getTheme"})),{},{themeObject:function(){return{back:this.getTheme+"-m-back "+this.getTheme,backP:this.getTheme+"-m-back-p "+this.getTheme,backO:this.getTheme+"-m-back-o "+this.getTheme,theme:this.getTheme,color:this.getTheme+"-m-text "+this.getTheme,sBack:this.getTheme+"-s-back "+this.getTheme,border:this.getTheme+"-m-border "+this.getTheme}}}),data:function(){return{activeNum:"",classification:[],activeIndex:0,activeName:"",list:[],coverPic:"",spec:!0,goodsNum:0,item:null,selectAttr:{},checked:null,show:!1,page:1,over:!1,tabbarbool:!1,currentRoute:this.$platDiff.route(),activeId:"0",scrollTop:0,old:{scrollTop:0}}},methods:{onAttr:function(t){this.checked=t},request:function(){var t=this;this.$request({url:"".concat(this.$api.quick.goods_list,"&page=").concat(this.page,"&cat_id=").concat(this.activeId,"is_sell_well=0 ")}).then((function(e){0===e.code&&(e.data.list.length>0?t.list=[].concat(s(t.list),s(e.data.list)):t.over=!0)}))},active:function(t,e){var i=this;this.scrollTop=1,this.$nextTick((function(){i.scrollTop=0})),this.activeIndex=e,this.activeName=t.name,this.activeId=t.id,this.over=!1,this.page=1,this.pushSelectProduct().then((function(){i.$request({url:"".concat(i.$api.quick.goods_list,"&page=").concat(i.page,"&cat_id=").concat(t.id,"is_sell_well=0 ")}).then((function(t){i.list=t.data.list}))}))},specification:function(t){this.checked=null,this.item=t,this.show=!0},selectNumber:function(t,e){for(var i=0;i<this.list.length;i++)this.list[i].id===t.goods_id&&(this.list[i].total_num+=e,this.activeNum=Number(this.activeNum)+Number(e))},pushSelectProduct:function(){var t=this;return c(n.default.mark((function e(){var i,r;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in i=[],t.selectAttr)i.push(t.selectAttr[r]);t.$request({url:t.$api.quick.cart,method:"post",data:{list:JSON.stringify(i)}});case 3:case"end":return e.stop()}}),e)})))()},add:function(t){for(var e=0;e<this.list.length;e++)this.list[e].id===t.id&&(this.list[e].total_num+=1,this.activeNum=Number(this.activeNum)+1,this.selectAttr[t.attr[0].id]={attr:t.attr[0].id,num:this.list[e].total_num,goods_id:t.id})},subtract:function(t){for(var e=0;e<this.list.length;e++)this.list[e].id===t.id&&(this.list[e].total_num-=1,this.activeNum=Number(this.activeNum)-1,this.selectAttr[t.attr[0].id]={attr:t.attr[0].id,num:this.list[e].total_num,goods_id:t.id})},changeNum:function(t,e){for(var i=0;i<this.list.length;i++)this.list[i].id===t.id&&(this.activeNum=Number(this.activeNum)-this.list[i].total_num,this.activeNum=Number(this.activeNum)+e,this.list[i].total_num=e,this.selectAttr[t.attr[0].id]={attr:t.attr[0].id,num:this.list[i].total_num,goods_id:t.id})},jumpGo:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id)}):t.navigateTo({url:"/pages/goods/goods?id=".concat(e.id)})},scrolltolower:function(){this.over||(this.page++,this.request())},b:function(){for(var t=this.currentRoute,e=0;e<this.tabBarNavs.length;e++)if(t.includes(this.tabBarNavs[e].url.split("?")[0]))return this.tabbarbool=!0;return this.tabbarbool=!1}},onLoad:function(){var t=this;this.$request({url:this.$api.quick.index}).then((function(e){t.activeNum="".concat(e.data.count);var i=e.data.cats_list[t.activeIndex],n=i.name,r=i.id;t.activeName=n,t.activeId=r,t.classification=e.data.cats_list,t.$request({url:t.$api.quick.index}).then((function(e){t.activeNum="".concat(e.data.count)})),t.$request({url:"".concat(t.$api.quick.goods_list,"&page=").concat(t.page,"&cat_id=").concat(r,"is_sell_well=0 ")}).then((function(e){t.list=e.data.list}))}))},onHide:function(){this.pushSelectProduct()},onUnload:function(){this.pushSelectProduct()},onShareAppMessage:function(){return this.$shareAppMessage({path:"/pages/quick-shop/quick-shop",title:this.$children[0].navigationBarTitle})},watch:{tabBarNavs:{handler:function(){this.b()},immediate:!0}}};e.default=y}).call(this,i("543d")["default"])},7469:function(t,e,i){"use strict";i.r(e);var n=i("cd65"),r=i("4b69");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("133c");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"ee36b70e",null,!1,n["a"],o);e["default"]=s.exports},"9b89":function(t,e,i){},cd65:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement;t._self._c},a=[]}},[["21a6","common/runtime","common/vendor"]]]);