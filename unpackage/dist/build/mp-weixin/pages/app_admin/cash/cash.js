(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/cash/cash"],{"0a12":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a34a"));i("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i,n,a,s,o){try{var r=t[s](o),u=r.value}catch(c){return void i(c)}r.done?e(u):Promise.resolve(u).then(n,a)}function o(t){return function(){var e=this,i=arguments;return new Promise((function(n,a){var o=t.apply(e,i);function r(t){s(o,n,a,r,u,"next",t)}function u(t){s(o,n,a,r,u,"throw",t)}r(void 0)}))}}function r(t){return d(t)||l(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return h(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(t,e):void 0}}function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var p=function(){i.e("components/basic-component/u-mask/u-mask").then(function(){return resolve(i("278c"))}.bind(null,i)).catch(i.oe)},f={name:"cash",data:function(){return{tabList:[{id:1,name:"出售中"},{id:0,name:"下架中"}],activeTab:"1",detailDialog:!1,searchBool:!1,list:[],tab:[],detail:{},titleShow:!1,type:"share",titleWidth:null,getFocus:!1,status:0,over:!1,model:!1,modelType:-1,textarea:"",setItem:{},page:1,inputText:""}},components:{"u-mask":p},onLoad:function(t){this.$showLoading({type:"global",text:"加载中..."}),this.getTabs()},onReachBottom:function(){this.over||(this.page++,this.bottomRequest())},methods:{toDetail:function(t){this.detail=t,this.detailDialog=!0},getTabs:function(){var e=this;e.$request({url:e.$api.app_admin.cash_tabs,method:"get"}).then((function(i){e.$hideLoading(),t.hideLoading(),0==i.code?(e.tab=i.data,1==e.tab.length?t.setNavigationBarTitle({title:e.tab[0].plugin+"提现"}):e.titleShow=!0,e.titleWidth=1/e.tab.length*100+"%",e.type=i.data[0].key,e.$request({url:e.$api.app_admin.cash,data:{page:1,model_type:e.type,status:0,keyword:""}}).then((function(i){0==i.code?e.list=i.data.list:t.showToast({title:i.msg,icon:"none",duration:1e3})}))):t.showToast({title:i.msg,icon:"none",duration:1e3})}))},searchText:function(){var t=this;setTimeout((function(e){t.page=1,t.over=!1,t.getFocus=!1,""==t.inputText&&(t.searchBool=!1),t.switchRequest({type:1})}),300)},clearSearch:function(){this.inputText=""},bottomRequest:function(){var e=this;this.$request({url:this.$api.app_admin.cash,data:{page:this.page,model_type:this.type,status:this.status,keyword:""}}).then((function(i){0===i.code?0===i.data.list.length?e.over=!0:e.list=[].concat(r(e.list),r(i.data.list)):t.showToast({title:i.msg,icon:"none",duration:1e3})}))},setStatus:function(e){var i=this;this.page=1,this.status=e,this.over=!1,this.inputText="",this.searchBool=!1,this.$request({url:this.$api.app_admin.cash,data:{page:1,model_type:this.type,status:e,keyword:this.inputText}}).then((function(e){0===e.code?i.list=e.data.list:t.showToast({title:e.msg,icon:"none",duration:1e3})}))},tabSwitch:function(e){var i=this;this.page=1,this.status=0,this.over=!1,this.type=e,this.inputText="",this.searchBool=!1,this.list=[],this.$request({url:this.$api.app_admin.cash,data:{page:1,model_type:e,status:0,keyword:this.inputText}}).then((function(e){0===e.code?i.list=e.data.list:t.showToast({title:e.msg,icon:"none",duration:1e3})}))},confirm:function(){var e=this;if(1===this.modelType){if(""===this.textarea)return t.showToast({title:"请填写拒绝理由",icon:"none",duration:1e3}),!1;this.$request({url:this.$api.app_admin.cash_save,method:"post",data:{status:3,id:this.setItem.id,content:this.textarea,model_type:this.type}}).then((function(i){if(0===i.code)for(var n=0;n<e.list.length;n++)e.list[n].id===e.setItem.id&&(e.$delete(e.list,n),e.model=!1,e.textarea="");else t.showToast({title:i.msg,icon:"none",duration:1e3})}))}else 3===this.modelType?this.$request({url:this.$api.app_admin.cash_save,method:"post",data:{id:this.setItem.id,content:"小程序端操作",model_type:this.type,status:2}}).then((function(i){if(0===i.code)for(var n=0;n<e.list.length;n++)e.list[n].id===e.setItem.id&&(e.$delete(e.list,n),e.model=!1);else t.showToast({title:i.msg,icon:"none",duration:1e3})})):2===this.modelType&&this.$request({url:this.$api.app_admin.cash_save,method:"post",data:{id:this.setItem.id,content:"小程序端操作",model_type:this.type,status:1}}).then((function(i){if(0===i.code)for(var n=0;n<e.list.length;n++)e.list[n].id===e.setItem.id&&(e.$delete(e.list,n),e.model=!1,e.textarea="");else t.showToast({title:i.msg,icon:"none",duration:1e3})}))},refuse:function(t){this.setItem=t,this.model=!0,this.modelType=1},byGo:function(t){this.setItem=t,this.model=!0,this.modelType=2},pay:function(t){this.setItem=t,this.model=!0,this.modelType=3},request:function(e){var i=this;return o(n.default.mark((function a(){var s;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.$request({url:i.$api.app_admin.cash,data:{model_type:i.type,page:e.page,status:e.status,keyword:i.inputText}});case 2:s=n.sent,0===s.code?i.list=s.data.list:t.showToast({title:s.msg,icon:"none",duration:1e3});case 4:case"end":return n.stop()}}),a)})))()},switchRequest:function(t){0===this.status?this.request({page:this.page,status:0}):1===this.status&&this.request({page:this.page,status:1})}}};e.default=f}).call(this,i("543d")["default"])},1540:function(t,e,i){"use strict";i.r(e);var n=i("0a12"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"31d7":function(t,e,i){"use strict";(function(t){i("aaea");n(i("66fd"));var e=n(i("7122"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},6964:function(t,e,i){"use strict";var n=i("d0cb"),a=i.n(n);a.a},7122:function(t,e,i){"use strict";i.r(e);var n=i("88a5"),a=i("1540");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("6964");var o,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4a376fb0",null,!1,n["a"],o);e["default"]=u.exports},"88a5":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.getFocus=!0},t.e1=function(e){t.searchBool=!0},t.e2=function(e){t.model=!1,t.modelType=-1},t.e3=function(e){t.detailDialog=!1})},s=[]},d0cb:function(t,e,i){}},[["31d7","common/runtime","common/vendor"]]]);