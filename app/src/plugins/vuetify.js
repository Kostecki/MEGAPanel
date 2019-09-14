import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FF3D02'
      }
    }
  },
  icons: {
    iconfont: 'md'
  }
})
