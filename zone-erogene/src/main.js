import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCoffee, faSearch, faComments, faBars } from '@fortawesome/free-solid-svg-icons'



library.add(faCoffee, faSearch, faComments, faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.me = ()=>{
  return true;
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
