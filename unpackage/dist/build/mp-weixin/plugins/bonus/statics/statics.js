(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/bonus/statics/statics"],{"0db5":function(t,a,e){"use strict";e.r(a);var i=e("5e06"),n=e("9bc2");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("a623");var o,c=e("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"3fd20134",null,!1,i["a"],o);a["default"]=u.exports},"31ca":function(t,a,e){},"3fa8":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,n=s(e("9cbc"));function s(t){return t&&t.__esModule?t:{default:t}}var o=null,c={data:function(){return{list:[],setting:{},cWidth:"",cHeight:"",pixelRatio:1,_date:0,show:!0,all_data:[]}},methods:{tablist:function(t){var a=this;this._date=t,this.show=!0;var e,n,s={categories:[],series:[{name:"分红金额",data:[]}]};0==t?(a.list.day_list.forEach((function(t,i){e=a.list.day_list[i].created_at,s.series[0].data.push(t.bonus_price),i%6==0?(e<10?e="0"+e+":00":e+=":00",s.categories.push(e)):s.categories.push("")})),s.categories.push("24:00"),i.showColumn("canvasColumn",s,"line")):1==t?(a.list.day_7_list.forEach((function(t,i){e=a.list.day_7_list[i].created_at.slice(5),s.series[0].data.push(t.bonus_price),s.categories.push(e)})),n=[15,15,4,-30],i.showColumn("canvasColumn",s,"column",n)):2==t&&(a.list.month_12_list.forEach((function(t,i){e=a.list.month_12_list[i].created_at.slice(5)+"月",s.series[0].data.push(t.bonus_price),s.categories.push(e)})),n=[15,15,4,-30],i.showColumn("canvasColumn",s,"column",n)),this.$forceUpdate()},touchIt:function(t){o.showToolTip(t,{format:function(t,a){return t.color="rgba(0,0,0,0)","object"===typeof t.data?a+" "+t.name+":"+t.data.value:a+" "+t.name+":"+t.data}})},getSetting:function(){var a=this;a.$request({url:a.$api.bonus.setting}).then((function(e){0===e.code?(a.setting=e.data.list,a.setting.form&&a.setting.form.orders?t.setNavigationBarTitle({title:a.setting.form.statistic_bonus}):t.setNavigationBarTitle({title:"分红统计"})):t.showToast({title:e.msg,icon:"none",duration:1e3})})).catch((function(){a.$hideLoading()}))},getList:function(){var a=this;t.showLoading({title:"加载中..."}),a.$request({url:a.$api.bonus.data}).then((function(e){if(t.hideLoading(),0==e.code){a.list=e.data.list,a.all_data=e.data.all_data;var n,s={categories:[],series:[{name:"分红金额",data:[]}]};e.data.list.day_list.forEach((function(t,a){n=e.data.list.day_list[a].created_at,s.series[0].data.push(t.bonus_price),a%6==0?(n<10?n="0"+n+":00":n+=":00",s.categories.push(n)):s.categories.push("")})),s.categories.push("24:00"),i.showColumn("canvasColumn",s,"line")}else t.showToast({title:e.msg,icon:"none",duration:1e3})})).catch((function(a){t.hideLoading()}))},showColumn:function(t,a,e,s){o=new n.default({$this:i,canvasId:t,type:e||"column",legend:{show:!1},fontSize:9,background:"#FFFFFF",colors:["#ff4544"],pixelRatio:i.pixelRatio,padding:s||[15,15,4,0],categories:a.categories,series:a.series,xAxis:{disableGrid:!0},yAxis:{gridType:"dash",data:{disabled:!0}},dataLabel:!1,dataPointShape:!1,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{tooltip:{bgColor:"#000000",bgOpacity:.7}}})},changeData:function(){o.updateData({series:i.serverData.ColumnB.series,categories:i.serverData.ColumnB.categories})}},onLoad:function(){i=this,this.cWidth=t.upx2px(650),this.cHeight=t.upx2px(440),this.getList(),this.getSetting()}};a.default=c}).call(this,e("543d")["default"])},"5e06":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement;t._self._c},s=[]},"74a5":function(t,a,e){"use strict";(function(t){e("b8bc");i(e("66fd"));var a=i(e("0db5"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},"9bc2":function(t,a,e){"use strict";e.r(a);var i=e("3fa8"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},a623:function(t,a,e){"use strict";var i=e("31ca"),n=e.n(i);n.a}},[["74a5","common/runtime","common/vendor"]]]);