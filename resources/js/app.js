require('./bootstrap');
window.Vue = require('vue');
import router from './router'
import common from './common';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.mixin(common);

Vue.component('app', require('./components/mainapp.vue').default)

const app = new Vue({
    el: '#app',
    router
})
