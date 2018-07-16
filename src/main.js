// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/config/rem';
Vue.use(VueI18n);
Vue.use(Vuex)
Vue.use(Element);
Vue.config.silent = true;
const i18n = new VueI18n({
  locale: 'zh_CN', // set locale
  messages: {
    'zh_CN': require('./language/language-zh.js'),   // 中文语言包
    'en': require('./language/language-en.js'),    // 英文语言包
  },
  config:{
    silent:true,
  }
});
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false;
/* eslint-disable */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
