import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts';
import dataV from '@jiaminghi/data-view'
import drag from "v-drag"
import 'animate.css';
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.use(dataV)
Vue.use(drag)
new Vue({
  render: h => h(App),
}).$mount('#app')
