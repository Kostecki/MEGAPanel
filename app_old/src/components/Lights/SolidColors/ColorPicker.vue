<template>
  <v-row
    row
    wrap>
    <v-col
      cols="12"
      class="pb-0">
      <Chrome
        v-if="lightsConfig.color"
        v-model="lightsConfig.color"
        class="chrome-color-select"
        @input="updateValue" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import { Chrome } from 'vue-color'

export default {
  components: {
    Chrome
  },
  data () {
    return {
      colors: null
    }
  },
  computed: {
    ...mapState('lights', ['lightsConfig'])
  },
  methods: {
    updateValue (value) {
      this.$store.dispatch('lights/lightsConfig', {
        ...this.lightsConfig,
        brightness: value.rgba.a,
        color: {
          r: value.rgba.r,
          g: value.rgba.g,
          b: value.rgba.b,
          a: value.rgba.a
        }
      })
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
