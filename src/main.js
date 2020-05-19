import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// 定义全局指令
app.directive('hide', function (el, binding) {
  el.style.display = binding.value ? 'block' : 'none'
})

app.use(router).use(store).mount('#app')
