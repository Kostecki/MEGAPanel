<template>
  <v-card color="white" class="animations-container">
    <v-card-title>
      <span class="title font-weight-light text-uppercase">Animations</span>
    </v-card-title>

    <v-divider />

    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs4>
          <span
            class="left body-2 font-weight-light text-uppercase font-italic"
            @click="() => speed = 0"
          >Speed ({{speed}})</span>
          <br>
          <v-slider
            v-model="speed"
            :disabled="disableSpeedControl"
            min="0"
            max="255"
            hide-details
            class="left speed-slider"
            @change="speedChanged"
          />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="padding-top:0">
      <v-layout row wrap class="animation-cards-container">
        <v-flex v-for="(animation, index) in animations" :key="index">
          <v-card
            class="animation-card"
            :class="selectedAnimation === animation.value ? 'selected' : null"
            @click="animationClicked(animation.value)"
          >
            {{animation.name}}
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: [
    'colorConf',
    'setActiveColorConfigHandler'
  ],
  data () {
    return {
      speed: 0,
      selectedAnimation: 'solid',
      disableSpeedControl: true,
      animations: [
        { name: 'BPM', value: 'bpm', speedControl: false },
        { name: 'Candy Cane', value: 'candycane', speedControl: false },
        { name: 'Confetti', value: 'confetti', speedControl: true },
        { name: 'Dots', value: 'dots', speedControl: false },
        { name: 'Fire', value: 'fire', speedControl: false },
        { name: 'Glitter', value: 'glitter', speedControl: true },
        { name: 'Juggle', value: 'juggle', speedControl: false },
        { name: 'Lightning', value: 'lightning', speedControl: false },
        { name: 'Noise', value: 'noise', speedControl: false },
        { name: 'Police All', value: 'policeall', speedControl: true },
        { name: 'Police One', value: 'policeone', speedControl: true },
        { name: 'Rainbow', value: 'rainbow', speedControl: false },
        { name: 'Rainbow With Glitter', value: 'rainbowwithglitter', speedControl: true },
        { name: 'Ripple', value: 'ripple', speedControl: true },
        { name: 'Sinelon', value: 'sinelon', speedControl: false },
        { name: 'Twinkle', value: 'twinkle', speedControl: false }
      ]
    }
  },
  methods: {
    speedChanged() {
      let colorConf = JSON.parse(JSON.stringify(this.colorConf))
      colorConf.speed = this.speed

      this.setActiveColorConfigHandler(colorConf)
    },
    animationClicked(animation) {
      if (!this.animations.find(e => e.value === animation && e.speedControl)) {
        this.disableSpeedControl = true
        this.speed = 0
      } else {
        this.disableSpeedControl = false
      }

      if (this.selectedAnimation === animation) {
        this.selectedAnimation = 'solid'
      } else {
        this.selectedAnimation = animation
      }      

      let colorConf = JSON.parse(JSON.stringify(this.colorConf))
      colorConf.animation = this.selectedAnimation

      this.setActiveColorConfigHandler(colorConf)
    }
  },
  filteredAnimations() {

  }
}
</script>

<style>
  .animations-container {
    margin-top: 25px;
    margin-bottom: 75px;
  }
</style>

<style lang="scss" scoped>
  .speed-slider {
    margin: 0;
  }

  .animation-cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    justify-items: stretch;
    align-items: stretch;

    @media screen and (max-width: 662px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .animation-card {
    padding: 15px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    }

    @media screen and (max-width: 662px) {
      font-size: 10px;
    }
  }

  .selected {
    box-shadow: 0 0 1px 2px rgba(0, 128, 0, 0.5) !important;
  }
</style>
