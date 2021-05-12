import Vue from 'vue'
import App from './App.vue'
import RotateButton from './components/RotateButton.vue'
import PolyButton from './components/PolyButton.vue'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.component(RotateButton.name, RotateButton)
Vue.component(PolyButton.name, PolyButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
