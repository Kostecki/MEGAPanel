<template>
  <v-row class="container-preselected">
    <v-col
      v-for="(color, index) in preselectedColors"
      :key="index"
      class="single-color-wrap">
      <v-card
        v-ripple
        class="preselected-grid-color"
        :color="color"
        max-width="100"
        @click="presetClicked(color)">
        <div
          v-if="isActiveColor(color)"
          class="current-color">
          <v-icon x-large>
            check_circle_outline
          </v-icon>
        </div>
      </v-card>
    </v-col>
  </v-row>
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
  computed: {
    ...mapState('lights', ['lightsConfig'])
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
  }
}
</script>

<style lang="scss" scoped>
  .container-preselected {
    padding: 0;
  }

  .single-color-wrap {
    padding-left:8px;
    padding-right: 8px;
    padding-top: 0;

    &:first-of-type {
      padding-left: 12px;
    }

    &:last-of-type {
      padding-right: 12px;
    }

    .preselected-grid-color {
      width: 100%;
      border-radius: 0;
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
  }
</style>
