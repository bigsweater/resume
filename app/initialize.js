import Vue from 'vue'
import Starfield from 'components/Starfield.vue'

let app = new Vue({
  el: '#vue',

  components: {
    Starfield
  },

  template: '<div><starfield click-to-warp bg-color="#f58220" star-color="#ffffff" :easing="13" :quantity="512"></starfield></div>',

  methods: {

  }
})
