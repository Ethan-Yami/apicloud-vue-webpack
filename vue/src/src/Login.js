import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './Login.vue';
import config from './js/common.js';
/*import api from  "./js/api.js";
Vue.use(api);*/
Vue.use(config);
Vue.use(ElementUI);



new Vue({
  el: '#app',
  render: h => h(App)
});