(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/clerk/statics/statics"],{3113:function(t,e,a){"use strict";(function(t){a("aaea");r(a("66fd"));var e=r(a("9102"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"41bb":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("934b")),i=a("2f62");function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u,d=function(){a.e("components/basic-component/app-tab-nav/app-tab-nav").then(function(){return resolve(a("87a5"))}.bind(null,a)).catch(a.oe)},l={},f={name:"about",components:{"app-tab-nav":d},data:function(){return{noBorder:!1,tabList:[{id:0,name:"累计"},{id:1,name:"今日"},{id:-1,name:"昨日"},{id:7,name:"7日"},{id:30,name:"30日"}],cWidth:"",cHeight:"",pixelRatio:1,card_list:[],order_num_list:[],order_price_list:[],activeTab:0,total_card:0,total_order_num:0,total_order_price:0}},computed:c({},(0,i.mapState)({mall:function(t){return t.mallConfig.mall}})),onLoad:function(){u=this,this.cWidth=t.upx2px(702),this.cHeight=t.upx2px(340),this.activeTab=0,this.getList()},methods:{showColumn:function(t,e,a,i){l[t]=new r.default({$this:u,canvasId:t,type:"area",legend:{show:!1},fontSize:9,background:"#FFFFFF",colors:a,padding:i||[15,15,4,0],pixelRatio:u.pixelRatio,animation:!1,categories:e.categories,series:e.series,xAxis:{disableGrid:!0},yAxis:{gridType:"dash",data:{disabled:!0}},dataLabel:!1,dataPointShape:!1,width:u.cWidth*u.pixelRatio,height:u.cHeight*u.pixelRatio,extra:{area:{type:"curve",addLine:!0},tooltip:{bgColor:"#000000",bgOpacity:.7}}})},tabStatus:function(t){this.activeTab=t.currentTarget.dataset.id,this.getList()},touchIt:function(t,e){l[e].showToolTip(t,{format:function(t,e){return t.color="rgba(0,0,0,0)","object"===typeof t.data?e+" "+t.name+":"+t.data.value:e+" "+t.name+":"+t.data}})},getList:function(){var e=this;e.$request({url:e.$api.clerk.statistics,data:{key:e.activeTab}}).then((function(a){if(e.$hideLoading(),0==a.code){e.card_list=a.data.card_list,e.order_num_list=a.data.order_num_list,e.order_price_list=a.data.order_price_list,e.total_card=0,e.total_order_num=0,e.total_order_price=0,e.card_list.forEach((function(t){e.total_card=(+e.total_card+ +t.num).toFixed(2)})),e.order_num_list.forEach((function(t){e.total_order_num=(+e.total_order_num+ +t.num).toFixed(2)})),e.order_price_list.forEach((function(t){e.total_order_price=(+e.total_order_price+ +t.num).toFixed(2)}));var r={categories:[],series:[{name:"核销订单数",data:[]}]},i={categories:[],series:[{name:"核销订单金额",data:[]}]},n={categories:[],series:[{name:"核销卡券次数",data:[]}]},o=[15,15,4,-20];1!=e.activeTab&&-1!=e.activeTab&&7!=e.activeTab||(o=[15,15,4,0]),r=e.create(a.data.order_num_list,r),u.showColumn("canvasFirst",r,["#417afd"],o),i=e.create(a.data.order_price_list,i),u.showColumn("canvasSec",i,["#ff9000"]),n=e.create(a.data.card_list,n),u.showColumn("canvasThird",n,["#41c6fe"])}else t.showToast({title:a.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))},create:function(t,e){var a,r=this;return t.forEach((function(i,n){a=t[n].time,1==r.activeTab||-1==r.activeTab?n%6==0?(a<10?a="0"+a+":00":a+=":00",e.categories.push(a)):e.categories.push(""):30==r.activeTab?n%5==0||n==t.length-1?e.categories.push(a):e.categories.push(""):e.categories.push(a),e.series[0].data.push(i.num)})),1!=r.activeTab&&-1!=r.activeTab||e.categories.push("24:00"),e}}};e.default=f}).call(this,a("543d")["default"])},6624:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},n=[]},"6a4c":function(t,e,a){"use strict";var r=a("88b4"),i=a.n(r);i.a},"88b4":function(t,e,a){},"8cc3":function(t,e,a){"use strict";a.r(e);var r=a("41bb"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},9102:function(t,e,a){"use strict";a.r(e);var r=a("6624"),i=a("8cc3");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("6a4c");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"0118bae8",null,!1,r["a"],o);e["default"]=s.exports}},[["3113","common/runtime","common/vendor"]]]);