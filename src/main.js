import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Home from './Home.vue';
import AddCard from './AddCard.vue';

const routes = {
  '/': Home,
  '/addcard': AddCard,
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] 
    }
  },
  render (h) { return h(this.ViewComponent) }
})