<template>
  <v-card
    color="white"
    class="animations-container">
    <v-container class="py-0">
      <v-card-title class="px-0">
        <span class="title font-weight-light text-uppercase">Animations</span>
      </v-card-title>
    </v-container>

    <v-divider />

    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="4"
          class="py-0">
          <span
            class="left body-2 font-weight-light text-uppercase font-italic"
            @click="() => speed = 0">Speed ({{ speed }})</span>
          <br>
          <v-slider
            v-model="speed"
            :disabled="disableSpeedControl"
            min="0"
            max="255"
            hide-details
            class="left speed-slider"
            @change="speedChanged" />
        </v-col>
      </v-row>
    </v-container>

    <v-container
      fluid
      style="padding-top:0">
      <v-row
        v-if="loading"
        class="text-center">
        <v-col>
          <v-progress-circular
            indeterminate
            color="primary"
            :width="3"
            class="spinner" />
        </v-col>
      </v-row>
      <v-col class="py-0">
        <v-row
          class="animation-cards-container">
          <v-col
            v-for="(animation, index) in animations"
            :key="index"
            class="pa-0">
            <v-card
              v-ripple
              class="animation-card text-center"
              :class="selectedAnimation === animation.value ? 'selected' : null"
              @click="animationClicked(animation.value)">
              {{ animation.name }}
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      speed: 0,
      selectedAnimation: null,
      disableSpeedControl: true
    }
  },
  computed: {
    ...mapState('shared', ['loading']),
    ...mapState('lights', ['animations', 'lightsConfig'])
  },
  watch: {
    lightsConfig (newVal, oldVal) {
      if (newVal.animation !== oldVal.animation) {
        this.selectedAnimation = newVal.animation
      }
      if (newVal.speed !== oldVal.speed) {
        this.speed = newVal.speed
      }
    },
    deep: true
  },
  methods: {
    speedChanged () {
      this.$store.dispatch('lights/lightsConfig', {
        ...this.lightsConfig,
        speed: this.speed
      })
    },
    animationClicked (animation) {
      this.toggleAnimations(animation)

      this.$store.dispatch('lights/lightsConfig', {
        ...this.lightsConfig,
        animation: this.selectedAnimation,
        speed: this.speed
      })
    },
    toggleAnimations (animation) {
      this.speed = 0
      this.disableSpeedControl = !this.animations.find(e => {
        return e.value === animation && e.speedControl
      })

      if (this.selectedAnimation === animation) {
        this.selectedAnimation = 'solid'
        this.speed = 0
      } else {
        this.selectedAnimation = animation
      }
    }
  }
}
</script>

<style lang="scss">
  .animations-container {
    margin-bottom: 75px;

    .v-card__title {
      padding: 16px 0;
    }
  }
</style>

<style lang="scss" scoped>
  .title {
    line-height: 1;
  }

  .speed-slider {
    margin: 0;
    width: 100%;
  }

  .spinner {
    margin-bottom: 20px;
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
    font-size: 14px;
    border-radius: 2px;
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
