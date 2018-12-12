import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import VueI18n from 'vue-i18n'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'


// require styles
import 'swiper/dist/css/swiper.css'
import './assets/css/bootstrap.css'
import './assets/css/tooplate-style.css'
import './assets/css/font-awesome.min.css'
import './assets/css/hover.css'
import './assets/css/ihover.css'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false;
Vue.use(VueFullPage);
Vue.use(VueI18n);
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper/* { default global options } */);


// Ready translated locale messages
const messages = {
  zh_cn: require('./lang/app_zh.json'),
  en: require('./lang/app_en.json')
}


const i18n = new VueI18n({
  locale: 'zh_cn', // set locale
  messages, // set locale messages
})

new Vue({ i18n,render: h => h(App)}).$mount('#app')
