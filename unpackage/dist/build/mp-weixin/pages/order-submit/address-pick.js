(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order-submit/address-pick"],{1282:function(t,e,n){"use strict";var i=n("7668"),a=n.n(i);a.a},"1b1d":function(t,e,n){"use strict";n.r(e);var i=n("29a3"),a=n("27a8");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("dc8e"),n("1282");var o,s=n("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"0d259386",null,!1,i["a"],o);e["default"]=d.exports},"27a8":function(t,e,n){"use strict";n.r(e);var i=n("f900"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"29a3":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.search=!1},t.e1=function(e){t.getFocus=!0},t.e2=function(e){e.stopPropagation(),t.keyword=""})},r=[]},"70e4":function(t,e,n){},7668:function(t,e,n){},d70e:function(t,e,n){"use strict";(function(t){n("aaea");i(n("66fd"));var e=i(n("1b1d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},dc8e:function(t,e,n){"use strict";var i=n("70e4"),a=n.n(i);a.a},f900:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){n.e("components/page-component/app-shipping-address/app-shipping-address").then(function(){return resolve(n("51a6"))}.bind(null,n)).catch(n.oe)},d={name:"address-pick",components:{appShippingAddress:s},data:function(){return{mchIndex:null,allList:[],notInPointList:null,sign:"",page:1,noMore:!1,destroy_url:this.$api.user.address_destroy,keyword:"",search:!0,getFocus:!1,type:0}},computed:r(r({},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"})),{},{list:function(){var t=this.allList,e=this.keyword;return t.filter((function(t){var n=new RegExp(e);return n.test(t.mobile)||n.test(t.name)}))}}),onLoad:function(t){this.type="true"===t.hasCity?1:0,this.sign=t.sign},onShow:function(){this.page=1,this.loadData()},methods:{inputBlur:function(){var t=this;setTimeout((function(e){t.getFocus=!1,""===t.keyword&&(t.search=!0)}),300)},address:function(t){this.page=1,this.loadData()},more:function(){this.noMore||(this.page++,this.loadData("add"))},loadData:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current";t.showLoading({mask:!0,title:"加载中"}),this.$request({url:this.$api.user.address,data:{type:this.type,page:this.page}}).then((function(i){t.hideLoading(),0===i.code&&(i.data.list&&i.data.list.length||i.data.notInPointList&&i.data.notInPointList.length||(e.noMore=!0),"add"===n?(e.allList=e.list.concat(i.data.list),e.notInPointList=e.notInPointList.concat(i.data.notInPointList)):(e.allList=i.data.list,e.notInPointList=i.data.notInPointList))})).catch((function(){t.hideLoading()}))},setData:function(e){if("gift"===this.sign){var n=this.$store.state.gift.address_id;n=e,this.$store.commit("gift/addressId",n)}else{var i=this.$store.state.orderSubmit.formData;1===this.type?i.list[0].address_id=e:i.address_id=e,this.$store.commit("orderSubmit/mutSetFormData",i)}t.navigateBack()},editAddress:function(e){t.navigateTo({url:"/pages/address/address-edit?id="+e+"&type="+this.type})},wechatAddAddress:function(){var e=this;t.chooseAddress({success:function(n){"chooseAddress:ok"===n.errMsg&&e.$request({url:e.$api.user.wechat_district,data:{national_code:n.nationalCode,province_name:n.provinceName,city_name:n.cityName,county_name:n.countyName}}).then((function(e){if(0===e.code){var i=e.data.district["province"]["id"],a=e.data.district["city"]["id"],r=e.data.district["district"]["id"],o={id:"",name:n.userName,ids:[i,a,r],province_id:i,city_id:a,district_id:r,mobile:n.telNumber,detail:n.detailInfo,type:0};t.navigateTo({url:"/pages/address/address-edit?form="+JSON.stringify(o)})}}))}})}}};e.default=d}).call(this,n("543d")["default"])}},[["d70e","common/runtime","common/vendor"]]]);