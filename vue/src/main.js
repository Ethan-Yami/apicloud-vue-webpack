import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

import App from './Login.vue';
import config from './js/common.js';

Vue.prototype.$ajax = axios

Vue.use(config);
Vue.use(ElementUI);



new Vue({
  el: '#app',
  render: h => h(App)
});