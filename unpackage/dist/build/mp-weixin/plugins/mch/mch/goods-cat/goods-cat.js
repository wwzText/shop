(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/goods-cat/goods-cat"],{"1a48":function(t,e,i){"use strict";var n=i("b5b1"),a=i.n(n);a.a},"5ed7":function(t,e,i){"use strict";(function(t){i("aaea");n(i("66fd"));var e=n(i("75f7"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"75f7":function(t,e,i){"use strict";i.r(e);var n=i("9a38"),a=i("e9f6");for(var l in a)"default"!==l&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("1a48");var c,o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"4c4eee58",null,!1,n["a"],c);e["default"]=s.exports},"9a38":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},l=[]},a291:function(t,e,i){"use strict";(function(t){function i(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=n(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,l=function(){};return{s:l,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){s=!0,c=t},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw c}}}}function n(t,e){if(t){if("string"===typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l={data:function(){return{type:"",iphone_x:!1,cat:[],sec_list:[],third_list:[],list:[],dialog:!1,mch_id:0,index_1:0,index_2:0,index_3:0}},methods:{cancel:function(){this.dialog=!1,this.sec_list=[],this.third_list=[],this.index_1=0,this.index_2=0,this.index_3=0},toAdd:function(){var e,n=this,a=this.cat[this.index_1],l=this.sec_list[this.index_2],c=this.third_list[this.index_3];if(e="未选择"==l.label?a:"未选择"==c.label?l:c,n.list.length>0){var o,s=i(n.list);try{for(s.s();!(o=s.n()).done;){var r=o.value;if(r.value==e.value)return t.showToast({title:"请勿重复添加",icon:"none",duration:1e3}),!1}}catch(d){s.e(d)}finally{s.f()}}setTimeout((function(){n.list.push(e),n.dialog=!1,n.index_1=0,n.index_2=0,n.index_3=0}))},getCat:function(){var e=this;e.$request({url:"mall"==e.type?e.$api.mch.cat:e.$api.mch.mch_cat,data:{mch_id:e.mch_id}}).then((function(i){e.$hideLoading(),0==i.code?e.cat=i.data.list:t.showToast({title:i.msg,icon:"none",duration:1e3})})).catch((function(t){e.$hideLoading()}))},delCat:function(t){this.list.splice(t,1)},bindChange:function(t){var e=this;t.detail.value[0]<0&&(t.detail.value[0]=0),e.index_1==t.detail.value[0]?e.index_2==t.detail.value[1]?e.index_3=t.detail.value[2]:(e.index_2=t.detail.value[1],e.index_3=0,e.third_list=[{label:"未选择",value:""}],e.sec_list[e.index_2].children&&(e.third_list=e.third_list.concat(e.sec_list[e.index_2].children))):(e.index_1=t.detail.value[0],e.index_2=0,e.index_3=0,e.sec_list=[{label:"未选择",value:""}],e.third_list=[{label:"未选择",value:""}],e.cat[e.index_1].children&&(e.sec_list=e.sec_list.concat(e.cat[e.index_1].children),e.sec_list[0].children&&(e.third_list=e.third_list.concat(e.sec_list[0].children))))},save:function(){"mall"==this.type?t.setStorage({key:"mch_goods_cat",data:this.list}):t.setStorage({key:"mch_goods_mch_cat",data:this.list}),setTimeout((function(){t.navigateBack()}),500)},add:function(){this.dialog=!0,this.sec_list=[{label:"未选择",value:""}],this.third_list=[{label:"未选择",value:""}],this.cat[0].children&&(this.sec_list=this.sec_list.concat(this.cat[0].children),this.sec_list[0].children&&(this.third_list=this.third_list.concat(this.sec_list[0].children)))}},onLoad:function(e){var i=this;i.$showLoading({type:"global",text:"加载中..."}),this.type=e.type,this.mch_id=e.mch_id,"mall"==this.type?t.getStorage({key:"mch_goods_cat",success:function(t){i.list=t.data}}):t.getStorage({key:"mch_goods_mch_cat",success:function(t){i.list=t.data}}),t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),i.getCat()}};e.default=l}).call(this,i("543d")["default"])},b5b1:function(t,e,i){},e9f6:function(t,e,i){"use strict";i.r(e);var n=i("a291"),a=i.n(n);for(var l in n)"default"!==l&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a}},[["5ed7","common/runtime","common/vendor"]]]);