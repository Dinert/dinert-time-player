import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'

// 启用 Vue3 Composition API
import DinerTimePlayer from './index'
Vue.use(VueCompositionAPI)

Vue.use(DinerTimePlayer)


new Vue({
    render: h => h(App)
}).$mount('#app')
