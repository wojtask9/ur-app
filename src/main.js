import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

window.addEventListener('beforeinstallprompt', function (event) {
  event.preventDefault();
  console.log('beforeinstallprompt')
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
