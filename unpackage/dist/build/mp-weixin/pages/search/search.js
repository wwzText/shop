(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"0273":function(t,e,i){},"4ad8":function(t,e,i){"use strict";i.r(e);var n=i("ef3d"),r=i("77b1");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("55a1");var s,c=i("f0c5"),a=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"54305c02",null,!1,n["a"],s);e["default"]=a.exports},5375:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("a34a")),r=i("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function s(t){return h(t)||u(t)||a(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function h(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function f(t,e,i,n,r,o,s){try{var c=t[o](s),a=c.value}catch(u){return void i(u)}c.done?e(a):Promise.resolve(a).then(n,r)}function d(t){return function(){var e=this,i=arguments;return new Promise((function(n,r){var o=t.apply(e,i);function s(t){f(o,n,r,s,c,"next",t)}function c(t){f(o,n,r,s,c,"throw",t)}s(void 0)}))}}function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){y(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=function(){i.e("components/page-component/u-goods-list/u-ordinary-list").then(function(){return resolve(i("1f2b"))}.bind(null,i)).catch(i.oe)},b=1,v=!1,w=!1,S={name:"search",components:{uOrdinaryList:p},data:function(){return{hotGoodsList:[],list:[],isSearch:!1,historyList:[],keyword:"",recommend_list:[],mch_id:0,beginAfter:!0,tempList:[],realHistoryList:[],loading:!1,goodsReset:!1}},computed:m(m({},(0,r.mapGetters)("mallConfig",{getTheme:"getTheme",getSetting:"getSetting"})),{},{newList:function(){return this.list.length>0?this.list:this.recommend_list},sizeTransform:function(){var e=t.getSystemInfoSync().windowWidth,i=750/e,n=24/i,r=20/i,o=60/i,s=e-2*n;return{p:i,boxLeft:n,marginRight:r,btnWidth:o,listWidth:s}},themeObject:function(){return{back:this.getTheme+"-m-back "+this.getTheme,theme:this.getTheme,color:this.getTheme+"-m-text "+this.getTheme,sBack:this.getTheme+"-s-back "+this.getTheme}}},(0,r.mapState)({isListUnderlinePrice:function(t){return t.mallConfig.mall.setting.is_list_underline_price}})),onLoad:function(t){this.mch_id=t.mch_id?t.mch_id:0,b=1,v=!1,w=!1,this.historyList=this.getHistory(),this.getSelect(),this.getRecommend(),this.getHotSearch()},onReachBottom:function(){w||(this.goodsReset=!1,this.keyword&&(this.loading=!0,this.getGoodsList()))},watch:{keyword:{handler:function(t){""==t&&this.cancel()},immediate:!0}},methods:{getSelect:function(){var e=this;return d(n.default.mark((function i(){var r,o;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:r=e.historyList,r&&r.length&&(o=e,setTimeout((function(){var i=t.createSelectorQuery().in(e);i.selectAll(".once-item").fields({size:!0},(function(t){o.formatData(t),o.beginAfter?o.selectLimitList(t):o.selectAllList()})).exec()}),500));case 2:case"end":return i.stop()}}),i)})))()},formatData:function(t){for(var e=this,i=e.historyList,n=e.sizeTransform,r=n.marginRight,o=n.listWidth,s=[],c=[],a=0,u=0;u<t.length;u++){var h=t[u].width+r,l=h+a;l<=o?(c.push(i[u]),a=l):0===c.length&&0===a?s.push([i[u]]):(s.push(c),a=0,c=[],u--)}c.length&&s.push(c),this.tempList=s},selectLimitList:function(t){var e=this,i=e.sizeTransform,n=i.btnWidth,r=i.listWidth,o=i.marginRight,s=JSON.parse(JSON.stringify(e.tempList)),c=[];if(s.length>2){var a=0,u=r-n-o,h=0;s[1].forEach((function(e,i){h+=t[s[0].length+i].width+o,h<=u&&(a=i+1)})),s[1].splice(a,s[1].length-a,{mark:!0}),c=[s[0],s[1]],e.beginAfter=!0}else s.forEach((function(t){return c.push(t)})),e.beginAfter=!1;e.realHistoryList=c},selectAllList:function(){var t=this.tempList,e=[];if(t&&t.length)for(var i=0;i<5&&i<t.length;i++)e.push(t[i]);this.beginAfter=!1,this.realHistoryList=e},goodsNav:function(e){t.navigateTo({url:e})},clear:function(){t.hideKeyboard(),this.keyword="",this.loading=!1},getHotSearch:function(){var t=this;1==this.getSetting.is_show_hot_goods&&this.$request({url:this.$api.goods.hot_search}).then((function(e){t.hotGoodsList=e.data.list}))},cancel:function(){this.isSearch=!1,this.loading=!1,this.keyword="",this.list=[]},reset:function(){b=1,w=!1,this.goodsReset=!0,this.getGoodsList()},search:function(){var t=this.keyword;""!==t&&(this.keyword=t.trim(),this.setHistory(),this.getSelect(),this.reset())},getGoodsList:function(){var e=this;this.keyword&&(v||(v=!0,this.$request({url:this.$api.default.goods_list,data:{keyword:this.keyword,mch_id:this.mch_id,page:b}}).then((function(i){v=!1,e.isSearch=!0,e.loading=!1;var n,r=i.code,o=i.data,c=i.msg;0===r?(1===b&&(e.list=[]),o.list.length>0?((n=e.list).push.apply(n,s(o.list)),b++):(w=!0,1===b&&e.getRecommend())):t.showModal({content:c})})).catch((function(){v=!1}))))},setHistory:function(){var e=this.getHistory(),i=this.keyword.trim();e.forEach((function(t,n){t.keyword===i&&e.splice(n,1)})),e.unshift({keyword:i}),e.length>20&&e.pop(),this.historyList=e,t.setStorageSync("SEARCH_HISTORY_LIST",e)},getHistory:function(){var e=t.getStorageSync("SEARCH_HISTORY_LIST");return e||(e=[]),e},deleteHistory:function(){var e=this;t.showModal({content:"确认删除全部历史记录？",success:function(i){i.confirm&&(t.removeStorageSync("SEARCH_HISTORY_LIST"),e.historyList=[])}})},historyClick:function(t){this.keyword=t.trim(),this.reset()},getRecommend:function(){var t=this;this.mch_id||this.recommend_list.length>0||this.$request({url:this.$api.goods.new_recommend,data:{goods_id:0,type:"goods"}}).then((function(e){0===e.code&&(t.recommend_list=e.data.list)}))}}};e.default=S}).call(this,i("543d")["default"])},"55a1":function(t,e,i){"use strict";var n=i("0273"),r=i.n(n);r.a},"77b1":function(t,e,i){"use strict";i.r(e);var n=i("5375"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},a313:function(t,e,i){"use strict";(function(t){i("b8bc");n(i("66fd"));var e=n(i("4ad8"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},ef3d:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement;t._self._c},o=[]}},[["a313","common/runtime","common/vendor"]]]);