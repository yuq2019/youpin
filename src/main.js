import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { NavBar, Icon, Swipe, SwipeItem, Card, Grid, GridItem } from 'vant';
Vue.use(NavBar).use(Icon).use(Swipe).use(SwipeItem).use(Card).use(Grid).use(GridItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
