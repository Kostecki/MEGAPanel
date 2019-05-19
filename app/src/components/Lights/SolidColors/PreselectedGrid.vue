<template>
  <v-container grid-list-lg fluid class="container-preselected">
    <v-layout row wrap>
      <v-flex v-for="(color, index) in preselectedColors" :key="index">
        <v-card
          class="preselected-grid-color"
          :color="color"
          max-width="100"
          v-ripple
          @click="presetClicked(color)"
        >
          <div v-if="isActiveColor(color)" class="current-color">
            <v-icon x-large>check_circle_outline</v-icon>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { formatColors } from '../../../mixins/formatColors.js'

export default {
  mixins: [formatColors],
  data () {
    return {
      preselectedColors: [
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffff00',
        '#8f34aa',
        '#00ffff',
        '#e25241'
      ]
    }
  },
  methods: {
    presetClicked (color) {
      this.$store.dispatch('lights/lightsConfig', {
        ...this.lightsConfig,
        color: this.hexToRGBA(color, this.lightsConfig.color.a)
      })
    },
    isActiveColor (color) {
      const r = this.lightsConfig.color.r
      const g = this.lightsConfig.color.g
      const b = this.lightsConfig.color.b

      return color === this.rgbToHex(r, g, b).toLowerCase()
    }
  },
  computed: {
    ...mapState({
      lightsConfig: state => state.lights.lightsConfig
    })
  }
}
</script>

<style lang="scss" scoped>
  .container-preselected {
    padding: 0;
    margin: 0 0 25px 0;
  }

  .preselected-grid-color {
    width: 100%;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    .current-color {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      @media screen and (max-width: 662px){
        .material-icons {
          font-size: 20px !important;
        }
      }
    }
  }
</style>
