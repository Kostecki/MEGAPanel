<template>
  <v-layout row wrap>
    <v-flex xs12>
      <Chrome v-if="colors" v-model="colors" @input="updateValue" class="chrome-color-select" />
    </v-flex>
  </v-layout>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  components: {
    Chrome
  },
  created () {
    this.colors = this.lightsConf.color
  },
  data () {
    return {
      colors: null
    }
  },
  methods: {
    updateValue (value) {
      let newLightsConf = { ...this.lightsConf }
      newLightsConf.color = {
        r: value.rgba.r,
        g: value.rgba.g,
        b: value.rgba.b,
        a: value.rgba.a
      }
      newLightsConf.brightness = value.rgba.a

      this.$store.dispatch('updateLightsConf', newLightsConf)
    }
  },
  computed: {
    lightsConf () {
      return this.$store.getters.lightsConf
    }
  },
  watch: {
    lightsConf (newLightsConf, oldLightsConf) {
      this.colors = newLightsConf.color
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

      @media screen and (max-width: 662px) {
        display: none;
      }
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
