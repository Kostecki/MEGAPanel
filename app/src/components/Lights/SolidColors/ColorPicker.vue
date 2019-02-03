<template>
  <v-layout row wrap>
    <v-flex xs12>
      <Chrome :value="colors" @input="updateValue" class="chrome-color-select" />
    </v-flex>
  </v-layout>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  props: [
    'colorConf',
    'setActiveColorConfigHandler'
  ],
  components: {
    Chrome
  },
  data () {
    return {
      colors: Object.assign({}, this.colorConf.color)
    }
  },
  methods: {
    updateValue (value) {
      console.log(this.colorConf)
      let colorConf = JSON.parse(JSON.stringify(this.colorConf))
      colorConf.color = {
        r: value.rgba.r,
        g: value.rgba.g,
        b: value.rgba.b,
        a: value.rgba.a
      }
      colorConf.brightness = value.rgba.a

      this.setActiveColorConfigHandler(colorConf)
    }
  },
  watch: {
    colorConf: {
      handler: function (newVal) {
        this.colors = {
          r: newVal.color.r,
          g: newVal.color.g,
          b: newVal.color.b,
          a: newVal.color.a
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
  .chrome-color-select {
    width: 100% !important;
    box-shadow: 0 0 2px rgba(0,0,0,.1), 0 4px 8px rgba(0,0,0,.1) !important;

    .vc-chrome-saturation-wrap {
      padding-bottom: 30%;
    }

    .vc-chrome-hue-wrap,
    .vc-chrome-alpha-wrap {
      height: 20px;
    }

    .vc-hue-picker,
    .vc-alpha-picker {
      width: 21px !important;
      height: 21px !important;
      border-radius: 50% !important;
    }

    .vc-chrome-fields-wrap,
    .vc-checkerboard {
      display: none;
    }

    .vc-chrome-active-color {
      width: 48px;
      height: 100%;
      border-radius: 0;
    }

    .vc-chrome-sliders {
      padding-left: 27px;
    }
  }
</style>
