import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';

// Global styles
import './styles/styles.scss';

import Checkbox from './components/common/Checkbox.vue';

import {i18n} from './i18n';

Vue.component('Checkbox', Checkbox);

Vue.config.productionTip = false;

export const app = new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: {App},
  template: '<App/>'
});
