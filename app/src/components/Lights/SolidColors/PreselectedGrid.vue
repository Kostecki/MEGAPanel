<template>
  <v-container grid-list-lg fluid class="container-preselected">
    <v-layout row wrap>
      <v-flex v-for="(color, index) in preselectedColors" :key="index">
        <v-card
          class="preselected-grid-color"
          :color="color"
          max-width="100"
          @click="presetClicked(color)"
        />
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
    presetClicked (color) {
      let colorConf = JSON.parse(JSON.stringify(this.colorConf))

      let hex = color.replace('#', '')
      colorConf.color = {
        a: this.colorConf.color.a,
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
      }

      this.setActiveColorConfigHandler(colorConf)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container-preselected {
    margin-top: 10px;
    padding: 16px 0;
  }

  .preselected-grid-color {
    width: 100%;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
</style>
