(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/composition/components/app-list/app-list"],{"02c8":function(t,o,i){"use strict";var s;i.d(o,"b",(function(){return e})),i.d(o,"c",(function(){return r})),i.d(o,"a",(function(){return s}));var e=function(){var t=this,o=t.$createElement;t._self._c},r=[]},"1db1":function(t,o,i){},"221a":function(t,o,i){"use strict";var s=i("1db1"),e=i.n(s);e.a},"61c7":function(t,o,i){"use strict";i.r(o);var s=i("862e"),e=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(o,t,(function(){return s[t]}))}(r);o["default"]=e.a},"862e":function(t,o,i){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=i("2f62");function e(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);o&&(s=s.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),i.push.apply(i,s)}return i}function r(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?e(Object(i),!0).forEach((function(o){l(t,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))}))}return t}function l(t,o,i){return o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}var a=function(){i.e("components/page-component/app-attr/app-attr").then(function(){return resolve(i("0e1c"))}.bind(null,i)).catch(i.oe)},c={name:"app-index",props:{list:{type:Array},top:{type:Number,default:function(){return 388}},search:{type:Boolean,default:function(){return!1}},allCount:{type:Boolean,default:function(){return!1}},hidden:{type:Boolean,default:function(){return!0}},theme:String},data:function(){return{attrShow:0,goods:null,cartShow:!1,buyBool:!0,max_discount:"0.00",noAttrList:[],total:0}},computed:r({},(0,s.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting}})),components:{"app-attr":a},methods:{toDetail:function(o){t.navigateTo({url:"/pages/goods/goods?id="+o})},buyClick:function(t){var o=this;o.list[o.index].goods_list.forEach((function(i){if(i.id==o.goods.id){for(var s in i.choose_attr=t,i.detail.selectAttr=t,t.attr_list)for(var e in i.attr_groups)if(i.attr_groups[e].attr_group_id==t.attr_list[s].attr_group_id)for(var r in i.attr_groups[e].attr_list)i.attr_groups[e].attr_list[r].checked=!1,i.attr_groups[e].attr_list[r].attr_id==t.attr_list[s].attr_id&&i.attr_groups[e].attr_list[r].attr_name==t.attr_list[s].attr_name&&(i.attr_groups[e].attr_list[r].checked=!0);2==o.list[o.index].type&&(i.choose_goods=!0,o.list[o.index].host_list[0].choose_goods=!0,o.list[o.index].host_list[0].opacity=.3),o.count(),o.$forceUpdate()}})),o.list[o.index].host_list.forEach((function(i){if(i.id==o.goods.id){for(var s in t.attr_list)for(var e in i.attr_groups)if(i.attr_groups[e].attr_group_id==t.attr_list[s].attr_group_id)for(var r in i.attr_groups[e].attr_list)i.attr_groups[e].attr_list[r].checked=!1,i.attr_groups[e].attr_list[r].attr_id==t.attr_list[s].attr_id&&i.attr_groups[e].attr_list[r].attr_name==t.attr_list[s].attr_name&&(i.attr_groups[e].attr_list[r].checked=!0);if(i.choose_attr=t,i.detail.selectAttr=t,i.choose_goods=!0,o.count(),o.$forceUpdate(),o.search)return o.$emit("search",i,1),!1}}))},chooseAttr:function(t,o,i){this.goods=t,this.index=o,this.attrShow=Math.random()},choose:function(t,o){if(2==this.list[t].type){for(var i in this.list[t].choose=!this.list[t].choose,this.list[t].goods_list)this.list[t].goods_list[i].choose_goods=this.list[t].choose;this.count(),this.$forceUpdate(),this.search&&this.$emit("search",o)}},chooseGoods:function(t,o,i){this.list[o].goods_list[t].choose_goods=!this.list[o].goods_list[t].choose_goods;var s=!0;for(var e in this.list[o].goods_list)this.list[o].goods_list[e].choose_goods||(s=!1);this.list[o].choose=s,this.$forceUpdate(),this.$emit("updateList",this.list),this.count(),this.search&&this.$emit("search",i,1)},count:function(){var t=this;t.total=0,t.noAttrList=[],t.max_discount=0;var o=0;if(1==t.list[o].type){t.list[o].total_price=0;var i=!0;for(var s in t.list[o].goods_list)t.list[o].goods_list[s].choose_attr?t.list[o].goods_list[s].choose_attr.price>0&&(t.list[o].total_price+=+t.list[o].goods_list[s].choose_attr.price):i=!1,t.list[o].choose&&null==t.list[o].goods_list[s].choose_attr&&t.noAttrList.push(t.list[o].goods_list[s]);t.list[o].total_price<0&&(t.list[o].total_price=0),t.list[o].total_price=+t.list[o].total_price-+t.list[o].price,t.list[o].total_price<0&&(t.list[o].total_price=0),t.list[o].choose?t.list[o].total_price=t.list[o].total_price.toFixed(2):delete t.list[o].total_price,t.list[o].choose&&i&&(t.total+=+t.list[o].total_price)}else if(2==t.list[o].type){for(var e in t.list[o].total_price=0,t.list[o].host_list[0].choose_attr?(t.list[o].total_price=+t.list[o].host_list[0].choose_attr.price-+t.list[o].host_list[0].price,t.list[o].host_list[0].total_price=+t.list[o].host_list[0].choose_attr.price-+t.list[o].host_list[0].price,t.max_discount+=+t.list[o].host_list[0].price,t.list[o].host_list[0].total_price<0?t.list[o].host_list[0].total_price=0:t.list[o].host_list[0].total_price=+t.list[o].host_list[0].total_price.toFixed(2),t.total+=+t.list[o].host_list[0].total_price):t.noAttrList.push(t.list[o].host_list[0]),t.list[o].goods_list)t.list[o].goods_list[e].choose_goods&&t.list[o].goods_list[e].choose_attr&&(t.list[o].goods_list[e].total_price=+t.list[o].goods_list[e].choose_attr.price-+t.list[o].goods_list[e].price,t.max_discount+=+t.list[o].goods_list[e].price,t.list[o].goods_list[e].total_price<0?t.list[o].goods_list[e].total_price=0:t.list[o].goods_list[e].total_price=+t.list[o].goods_list[e].total_price.toFixed(2),t.total+=+t.list[o].goods_list[e].total_price,t.list[o].total_price>0&&(t.list[o].total_price+=+t.list[o].goods_list[e].total_price)),t.list[o].goods_list[e].choose_goods&&null==t.list[o].goods_list[e].choose_attr&&t.noAttrList.push(t.list[o].goods_list[e]);t.list[o].total_price<0&&(t.list[o].total_price=0),t.list[o].total_price=+t.list[o].total_price.toFixed(2),t.max_discount=+t.max_discount.toFixed(2)}t.total=t.total.toFixed(2),t.$emit("updateList",t.list),t.$emit("change",t.total,t.max_discount),t.$emit("update",t.noAttrList)}},mounted:function(){var t=this,o=setInterval((function(){t.list.length>0&&(clearInterval(o),t.count())}),500)}};o.default=c}).call(this,i("543d")["default"])},b905:function(t,o,i){"use strict";i.r(o);var s=i("02c8"),e=i("61c7");for(var r in e)"default"!==r&&function(t){i.d(o,t,(function(){return e[t]}))}(r);i("221a");var l,a=i("f0c5"),c=Object(a["a"])(e["default"],s["b"],s["c"],!1,null,"2c298a68",null,!1,s["a"],l);o["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/composition/components/app-list/app-list-create-component',
    {
        'plugins/composition/components/app-list/app-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b905"))
        })
    },
    [['plugins/composition/components/app-list/app-list-create-component']]
]);