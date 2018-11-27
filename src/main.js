import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/iconfont.css'
import App from './App.vue'
import router from './router'
import global_ from './components/Global'

Vue.config.productionTip = false;
Vue.prototype.GLOBAL = global_;
Vue.use(MintUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
