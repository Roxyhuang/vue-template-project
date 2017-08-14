import Vue from 'vue';
import { Button, Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './views/Index';
import router from './router';

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
