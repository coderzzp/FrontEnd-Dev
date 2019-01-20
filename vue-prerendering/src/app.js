import Vue from 'vue';

import store from './store';
import router from './routes';

import App from './pages/App';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
