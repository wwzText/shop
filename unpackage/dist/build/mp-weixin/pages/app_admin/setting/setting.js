(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/setting/setting"],{"0bf8":function(t,e,i){"use strict";i.r(e);var a=i("0e43"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"0e43":function(t,e,i){"use strict";(function(t){function a(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=s(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,r=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return l=t.done,t},e:function(t){r=!0,o=t},f:function(){try{l||null==i.return||i.return()}finally{if(r)throw o}}}}function s(t,e){if(t){if("string"===typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;for(var l=function(){i.e("components/basic-component/app-radio/app-radio").then(function(){return resolve(i("9a5a"))}.bind(null,i)).catch(i.oe)},r=new Date,h=[],u=[],d=[],m=[],c=[],f=[],p=r.getFullYear();p<=r.getFullYear()+10;p++)h.push(p);for(var y=1;y<=12;y++)u.push(y);for(var _=1;_<=31;_++)d.push(_);for(var g=1;g<=30;g++)m.push(g);for(var v=1;v<=28;v++)c.push(v);for(var b=1;b<=29;b++)f.push(b);var k={name:"setting",data:function(){var t;return t={lineHeight:"72rpx",indicatorStyle:"",detail:{setting:{delivery_time:"0",after_sale_time:"0",over_time:"0",member_integral:"0"}},mail:{},sms:{},model:!1,modelType:0,name:"",over_time:"",delivery_time:"",after_sale_time:"",payment_type:[],online_pay:!1,balance:!1,huodao:!1,send_type:[],express:!1,offline:!1,city:!1,member_integral:"",member_integral_rule:"",chooseAuto:1,date:[{label:"周一",value:"1",check:!1},{label:"周二",value:"2",check:!1},{label:"周三",value:"3",check:!1},{label:"周四",value:"4",check:!1},{label:"周五",value:"5",check:!1},{label:"周六",value:"6",check:!1},{label:"周日",value:"7",check:!1}],hour:[],minutes:[],dateVal:[0,0,0],timeVal:[0,0,0]},o(t,"chooseAuto",1),o(t,"years",h),o(t,"months",u),o(t,"days",d),o(t,"bigDays",d),o(t,"smallDays",m),o(t,"secDays",c),o(t,"otherDays",f),t},onLoad:function(){for(var e=0;e<60;e++)e<10&&(e="0"+e),e<24&&this.hour.push(e),this.minutes.push(e);this.indicatorStyle="height: 36px;font-size:14px;";var i=t.getSystemInfoSync().windowWidth,a=375/i;this.lineHeight=72*a+"rpx";var s=new Date,n=s.getFullYear(),o=s.getMonth()+1;o>=1&&o<=9&&(o="0"+o);var l=s.getDate();for(var r in this.years)n==this.years[r]&&(this.dateVal[0]=+r);for(var h in this.months)o==this.months[h]&&(this.dateVal[1]=+h);for(var u in this.days=2==o?n%4==0&&n%400!=0?this.otherDays:this.secDays:o<8&&o%2==1||o>7&&o%2==0?this.bigDays:this.smallDays,this.days)l==this.days[u]&&(this.dateVal[2]=+u)},onShow:function(){this.$showLoading({type:"global",text:"加载中..."}),this.getList()},methods:{getList:function(){var t=this;this.$request({url:this.$api.app_admin.setting}).then((function(e){if(0===e.code){t.detail=e.data.detail,t.$hideLoading();var i=t.detail.setting,s=i.over_time,n=i.delivery_time,o=i.after_sale_time,l=i.payment_type,r=i.member_integral,h=i.member_integral_rule,u=i.is_auto_open;t.over_time=s,t.delivery_time=n,t.after_sale_time=o,t.payment_type=l,t.member_integral=r,t.member_integral_rule=h,t.chooseAuto=u;for(var d=t.detail.setting.send_type,m=0;m<d.length;m++)"express"===d[m]?t.express=!0:"offline"===d[m]?t.offline=!0:"city"===d[m]&&(t.city=!0);t.name=t.detail.name,t.mail=e.data.mail,t.sms=e.data.sms;for(var c=0;c<l.length;c++)"online_pay"===l[c]?t.online_pay=!0:"huodao"===l[c]?t.huodao=!0:"balance"===l[c]&&(t.balance=!0);var f,p=a(t.date);try{for(p.s();!(f=p.n()).done;){var y,_=f.value,g=a(t.detail.setting.week_list);try{for(g.s();!(y=g.n()).done;){var v=y.value;_.value==v&&(_.check=!0)}}catch(b){g.e(b)}finally{g.f()}}}catch(b){p.e(b)}finally{p.f()}}}))},dateChange:function(t){var e=t.detail.value;this.dateVal=t.detail.value;this.years;var i=this.years[e[0]],a=this.months[e[1]];this.days=2==a?i%4==0&&i%400!=0?this.otherDays:this.secDays:a<8&&a%2==1||a>7&&a%2==0?this.bigDays:this.smallDays},timeChange:function(t){this.timeVal=t.detail.value},openAuto:function(){if(this.chooseAuto=this.detail.setting.is_auto_open,2==this.chooseAuto&&this.detail.setting.auto_open_time.length>0){for(var t in this.years)this.detail.setting.auto_open_time.substring(0,4)==this.years[t]&&(this.dateVal[0]=+t);for(var e in this.months)this.detail.setting.auto_open_time.substring(5,7)==this.months[e]&&(this.dateVal[1]=+e);var i=+this.dateVal[1]+1;for(var a in 2==i?year%4==0&&year%400!=0?this.days=this.otherDays:this.days=this.secDays:this.days=i<8&&i%2==1||i>7&&i%2==0?this.bigDays:this.smallDays,this.days)this.detail.setting.auto_open_time.substring(8,10)==this.days[a]&&(this.dateVal[2]=+a);var s=this.detail.setting.auto_open_time.substring(11);this.timeVal=s.split(":").map(Number)}this.model=!0,this.modelType=9},chooseWeek:function(){var t,e=a(this.date);try{for(e.s();!(t=e.n()).done;){var i=t.value;i.check=!1;var s,n=a(this.detail.setting.week_list);try{for(n.s();!(s=n.n()).done;){var o=s.value;i.value==o&&(i.check=!0)}}catch(l){n.e(l)}finally{n.f()}}}catch(l){e.e(l)}finally{e.f()}this.model=!0,this.modelType=8},toggleOpenType:function(t){1==t||this.detail.setting.week_list.length>0?(this.detail.setting.open_type=t,this.submit()):(this.model=!0,this.modelType=8)},toSettingTime:function(){t.navigateTo({url:"/pages/app_admin/open-time/open-time?time_list=".concat(JSON.stringify(this.detail.setting.time_list))})},chooseDate:function(t){t.check=!t.check},toRedirect:function(e){t.redirectTo({url:e})},setLogo:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){t.uploadFile({url:e.$api.upload.file,filePath:i.tempFilePaths[0],name:"file",success:function(t){e.detail.setting.mall_logo_pic=JSON.parse(t.data).data.url,e.submit()}})}})},setSmsStatus:function(){1===this.sms.status?this.sms.status=0:this.sms.status=1,this.submit()},setMailStatus:function(){"1"===this.mail.status?this.mail.status="0":this.mail.status="1",this.submit()},openStatus:function(){1===this.detail.setting.is_open?this.detail.setting.is_open=2:this.detail.setting.is_open=1,this.submit()},setPay:function(t){this[t]=!this[t],!1===this.balance&&!1===this.huodao&&(this.online_pay=!0)},setSend:function(t){this[t]=!this[t],!1===this.offline&&!1===this.city&&(this.express=!0)},sendTypeHandler:function(){this.model=!0,this.modelType=5},jumpGo:function(){this.$jump({open_type:"navigate",url:"/pages/address/address?manual_btn_bg=admin&is_hide_default_btn=1&is_refund_address=1"})},submit:function(){var t=this,e=this.mail?this.mail.status:null,i=this.sms?this.sms.status:null,a={name:this.detail.name,setting:JSON.stringify(this.detail.setting),mail:e,sms:i};this.$request({url:this.$api.app_admin.setting,method:"post",data:a}).then((function(e){0===e.code&&(t.model=!1)}))},cancel:function(){this.model=!1},confirm:function(){if(8==this.modelType){var e,i=!1,s=a(this.date);try{for(s.s();!(e=s.n()).done;){var n=e.value;n.check&&(i=n.check)}}catch(d){s.e(d)}finally{s.f()}if(!i)return t.showToast({title:"请选择营业时间",icon:"none",duration:1e3}),!1;this.detail.setting.open_type=2}this.detail.name=this.name,this.detail.setting.over_time=this.over_time,this.detail.setting.delivery_time=this.delivery_time,this.detail.setting.after_sale_time=this.after_sale_time,this.detail.setting.payment_type=[],this.detail.setting.member_integral=this.member_integral,this.detail.setting.member_integral_rule=this.member_integral_rule,!0===this.online_pay&&this.detail.setting.payment_type.push("online_pay"),!0===this.huodao&&this.detail.setting.payment_type.push("huodao"),!0===this.balance&&this.detail.setting.payment_type.push("balance"),this.detail.setting.send_type=[],!0===this.offline&&this.detail.setting.send_type.push("offline"),!0===this.express&&this.detail.setting.send_type.push("express"),!0===this.city&&this.detail.setting.send_type.push("city"),this.detail.setting.week_list=[];var o,l=a(this.date);try{for(l.s();!(o=l.n()).done;){var r=o.value;r.check&&this.detail.setting.week_list.push(r.value)}}catch(d){l.e(d)}finally{l.f()}if(this.detail.setting.is_auto_open=this.chooseAuto,2==this.detail.setting.is_auto_open){var h=this.months[this.dateVal[1]],u=this.days[this.dateVal[2]];h<10&&(h="0"+h),u<10&&(u="0"+u),this.detail.setting.auto_open_time=this.years[this.dateVal[0]]+"-"+h+"-"+u,this.detail.setting.auto_open_time+=" "+this.hour[this.timeVal[0]]+":"+this.minutes[this.timeVal[1]]+":"+this.minutes[this.timeVal[2]]}this.submit()}},components:{appRadio:l}};e.default=k}).call(this,i("543d")["default"])},"23f3":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(){t.model=!0,t.modelType=0,t.name=t.detail.name},t.e1=function(){t.model=!0,t.modelType=1,t.over_time=t.detail.setting.over_time},t.e2=function(){t.model=!0,t.modelType=2,t.delivery_time=t.detail.setting.delivery_time},t.e3=function(){t.model=!0,t.modelType=3,t.after_sale_time=t.detail.setting.after_sale_time},t.e4=function(){t.model=!0,t.modelType=4,t.payment_type=t.detail.setting.payment_type},t.e5=function(e){t.model=!0,t.modelType=6,t.member_integral=t.detail.setting.member_integral},t.e6=function(e){t.model=!0,t.modelType=7,t.member_integral_rule=t.detail.setting.member_integral_rule},t.e7=function(e){t.chooseAuto=1},t.e8=function(e){t.chooseAuto=2},t.e9=function(){t.cancel()})},n=[]},"273b":function(t,e,i){"use strict";var a=i("6f98"),s=i.n(a);s.a},"5c45":function(t,e,i){"use strict";(function(t){i("aaea");a(i("66fd"));var e=a(i("6b33"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"6b33":function(t,e,i){"use strict";i.r(e);var a=i("23f3"),s=i("0bf8");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("273b");var o,l=i("f0c5"),r=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,"69373997",null,!1,a["a"],o);e["default"]=r.exports},"6f98":function(t,e,i){}},[["5c45","common/runtime","common/vendor"]]]);