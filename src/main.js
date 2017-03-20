// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import Firebase from 'firebase'

import router from './router'
import App from './App'

// explicit installation required in module environments
Vue.use(Vuex)
Vue.use(VuexFire)

Vue.config.productionTip = false

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: ''
}

Firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
