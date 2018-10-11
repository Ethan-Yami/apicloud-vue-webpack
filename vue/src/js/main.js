import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/Index.css';


import App from './Login.vue';

Vue.use(ElementUI);


new Vue({
  el: '#app',
  render: h => h(App)
});