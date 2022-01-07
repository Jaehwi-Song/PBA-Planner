import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import {rtdbPlugin} from 'vuefire'
Vue.use(rtdbPlugin);

Vue.config.productionTip = false

new Vue({
  data:{
    show: false
  },
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
