// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/config/rem';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import VueI18n from 'vue-i18n'

Vue.use(Element, { size: 'small', zIndex: 3000, });
Vue.config.lang = 'zh-cn'
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)
Vue.use(VueI18n);
Vue.use(Vuex)
const i18n = new VueI18n({
  locale: 'zh_CN', // set locale
  messages: {
    'zh_CN': require('./language/language-zh.js'),   // 中文语言包
    'en': require('./language/language-en.js'),    // 英文语言包
  },
})
Vue.config.productionTip = false;
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
