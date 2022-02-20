// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import palette from '@/components/dev/palette.vue'
import mContainer1 from '@/components/general/sectionContainer1.vue'
import mContainer2 from '@/components/general/sectionContainer2.vue'
import mContainer3 from '@/components/general/sectionContainer3.vue'
import mContainer4 from '@/components/general/sectionContainer4.vue'
import ccanvas from '@/components/components3d/canvas.vue'
import com from '@/components/components3d/comcomponent.vue'
import mheader from '@/components/general/header.vue'
import mfooter from '@/components/general/footer.vue'

Vue.component('palette',palette)
Vue.component('mContainer1',mContainer1)
Vue.component('mContainer2',mContainer2)
Vue.component('mContainer3',mContainer3)
Vue.component('mContainer4',mContainer4)
Vue.component('mheader',mheader)
Vue.component('mfooter',mfooter)
Vue.component('ccanvas',ccanvas)
//Vue.component('com',com)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})