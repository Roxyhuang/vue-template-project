import Vue from 'vue';
import { Button, Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
import './views/Detail.scss';
import App from './views/Detail';

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
