<template>
  <v-container grid-list-lg fluid class="container-preselected">
    <v-layout row wrap>
      <v-flex v-for="(color, index) in preselectedColors" :key="index">
        <v-card
          class="preselected-grid-color"
          :color="color"
          max-width="100"
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
export default {
  props: [
    'colorConf',
    'setActiveColorConfigHandler'
  ],
  data () {
    return {
      preselectedColors: [
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffff00',
        '#8F34AA',
        '#00ffff',
        '#E25241'
      ]
    }
  },
  methods: {
    hexToRGBA(colorHex, a) {
      let hex = colorHex.replace('#', '')

      let rgbObj = {
        a: this.colorConf.brightness,
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
      }

      return rgbObj
    },
    presetClicked (color) {
      let colorConf = JSON.parse(JSON.stringify(this.colorConf))
      colorConf.color = this.hexToRGBA(color)

      this.setActiveColorConfigHandler(colorConf)
    },
    isActiveColor(color) {
      let selected = JSON.stringify(this.hexToRGBA(color))
      let current = JSON.stringify(this.colorConf.color)

      return selected === current
    }
  }
}
</script>

<style lang="scss" scoped>
  .container-preselected {
    padding: 0;
    margin: 10px 0 25px 0;
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
