import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSignalR from '@latelier/vue-signalr'

Vue.config.productionTip = false
Vue.use(VueSignalR, 'https://localhost:8080/')
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
