// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// echarts
import ECharts from 'vue-echarts/components/ECharts.vue'

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
// import 'echarts-gl'

// 注册组件后即可使用
Vue.component('v-chart', ECharts)

require('@/assets/css/iconfont.css')
require('@/assets/css/reset.css')

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.directive('anchor', {
    inserted: function (el, binding) {
        el.onClick = function () {
            document.documentElement.scrollTop = document.getElementsByClassName('#anchor-' + binding.value).offset().top
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
