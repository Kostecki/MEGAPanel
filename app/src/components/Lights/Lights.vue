<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 align-center>
        <SolidColors
          :colorConf="colorConf"
          :setActiveColorConfigHandler="setActiveColorConfig"
        />
      </v-flex>

      <v-flex xs12>
        <Animations
          :colorConf="colorConf"
          :setActiveColorConfigHandler="setActiveColorConfig"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SolidColors from './SolidColors/SolidColors.vue'
import Animations from './Animations/Animations.vue'

export default {
  components: {
    SolidColors,
    Animations
  },
  data () {
    return {
      colorConf: {
        animation: 'solid',
        color: {
          r: 255,
          g: 0,
          b: 0,
          a: 0.5
        },
        speed: 0
      }
    }
  },
  methods: {
    setActiveColorConfig (payload) {
      this.colorConf = payload
    },
    updateLights () {
      // console.log(this.colorConf)
      // this.axios.post('/setlights', this.colorConf)
      //   .then(response => console.log('Response:', response.data.response))
      //   .catch(error => console.log('Error', error))
    }
  },
  watch: {
    colorConf: {
      handler: function (newVal, oldVal) {
        this.updateLights()
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
