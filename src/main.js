import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";

import directives from './directives';
import libs from '@/libs'; // 引入全局插件

//组件库部分
// import ElementUI from 'element-ui';
// import '../static/css/element_ui.scss';


// 是否需要websocket
// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';
// Vue.use(VueSocketio, socketio(process.env.SOCKETIO));

//图片懒加载
//import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   preLoad: 1,
//   error: require('./assets/img/logo.png'),
//   loading: require('./assets/img/logo.png')

// });
Vue.config.productionTip = false;

Vue.use(libs);
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]));



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
