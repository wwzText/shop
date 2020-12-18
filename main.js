import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
import siteInfo from 'siteinfo';
import appVersion from 'version.js';
import './uni.scss';
import request from './core/request.js';
import user from './core/user.js';
import Api from './core/appOnLaunch.js';
import {platform} from './core/config.js';
import mallConfig from './core/mallConfig.js';
import * as cache from './core/cache.js';
import appButton from './components/basic-component/app-button/app-button.vue';
import appFormId from './components/basic-component/app-form-id/app-form-id.vue';
import appLayout from './components/basic-component/app-layout/app-layout.vue';
import appInput from './components/basic-component/app-input/app-input.vue';
import appCartImage from './components/basic-component/app-cart-image/app-cart-image.vue';
import appJumpButton from './components/basic-component/app-jump-button/app-jump-button.vue';
import appLoadText from './components/basic-component/app-load-text/app-load-text.vue';
import * as utils from './core/utils.js';
import $const from './core/const.js';
import event from './core/event.js';
import showLoading from './core/showLoading.js';
import hideLoading from './core/hideLoading.js';
import platDiff from './core/platDiff.js';
import lazyLoadingData from './core/lazyLoadingData.js';
import jump from './core/jump.js';
import popupAd from './core/popupAd.js';
import appImage from './components/basic-component/app-image/app-image.vue';
import shareAppMessage from './core/shareAppMessage.js';
import shareTimeline from './core/shareTimeline.js';
import subscribe from './core/subscribe.js';
import appCssIcon from './components/basic-component/app-css-icon/app-css-icon.vue';
import validation from './core/test.js';
import appMemberPrice from './components/page-component/app-member-mark/app-member-price';
import appSupVip from './components/page-component/app-sup-vip/app-sup-vip.vue';

Vue.component('app-button', appButton);
Vue.component('app-form-id', appFormId);
Vue.component('app-layout', appLayout);
Vue.component('app-input', appInput);
Vue.component('app-jump-button', appJumpButton);
Vue.component('app-load-text', appLoadText);
Vue.component('app-image', appImage);
Vue.component('app-cart-image', appCartImage);
Vue.component('app-css-icon', appCssIcon);
Vue.component('app-member-price', appMemberPrice);
Vue.component('app-sup-vip', appSupVip);

Vue.use({
    install(Vue, options) {
        // 小程序端版本号
        Vue.prototype.$appVersion = appVersion;
        // 数据池
        Vue.prototype.$store = store;
        // 平台
        Vue.prototype.$platform = platform;
        // 接口 路径
        Vue.prototype.$api = Api;
        // 请求
        Vue.prototype.$request = request;
        // 缓存
        Vue.prototype.$storage = cache;
        // 用户组件
        Vue.prototype.$user = user;
        // 商城配置
        Vue.prototype.$mallConfig = mallConfig;
        // 工具函数
        Vue.prototype.$utils = utils;
        // 常量
        Vue.prototype.$const = $const;
        // 事件
        Vue.prototype.$event = event;
        // loading
        Vue.prototype.$showLoading = showLoading;
        Vue.prototype.$hideLoading = hideLoading;
        // 平台差异性
        Vue.prototype.$platDiff = platDiff;
        Vue.prototype.$lazyLoadingData = lazyLoadingData;
        Vue.prototype.$jump = jump;
        Vue.prototype.$popupAd = popupAd;
        Vue.prototype.$shareAppMessage = shareAppMessage;
        Vue.prototype.$shareTimeline = shareTimeline;
        Vue.prototype.$subscribe = subscribe;
        Vue.prototype.$appScene = 1001;
        Vue.prototype.$validation = validation;
    },
});

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
    store,
    ...App
});
app.$mount();
