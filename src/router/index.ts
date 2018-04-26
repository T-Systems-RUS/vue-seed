import Vue from 'vue';
import Router from 'vue-router';
import Groups from '../components/root/Groups.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Groups
    }
  ]
});
