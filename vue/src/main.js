import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './Login.vue';
import ajax from './js/common.js';
Vue.use(ajax);
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
new Vue({
  el: '#app',
  render: h => h(App)
});