import Vue from 'vue'
import App from './App.vue'
import alert from '../index.js'

Vue.use(alert)
new Vue({
  render: h => h(App)  
}).$mount('#app')