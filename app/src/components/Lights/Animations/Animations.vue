<template>
  <v-card color="white" class="animations-container">
    <v-container class="py-0">
      <v-card-title class="px-0">
        <span class="title font-weight-light text-uppercase">Animations</span>
      </v-card-title>
    </v-container>

    <v-divider />

    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm4>
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
      <v-layout v-if="loading" row wrap>
        <v-flex class="text-xs-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :width="3"
            class="spinner"
          ></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="animation-cards-container">
        <v-flex v-for="(animation, index) in animations" :key="index">
          <v-card
            v-ripple
            class="animation-card"
            :class="selectedAnimation === animation.value ? 'selected' : null"
            @click="animationClicked(animation.value)"
          >
            {{ animation.name }}
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      speed: 0,
      selectedAnimation: 'solid',
      disableSpeedControl: true
    }
  },
  methods: {
    speedChanged () {
      this.$store.dispatch('lightsConfig', {
        ...this.lightsConfig,
        speed: this.speed
      })
    },
    animationClicked (animation) {
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

      this.$store.dispatch('lightsConfig', {
        ...this.lightsConfig,
        animation: this.selectedAnimation,
        speed: this.speed
      })
    }
  },
  computed: {
    ...mapState({
      loading: state => state.shared.loading,
      animations: state => state.lights.animations,
      lightsConfig: state => state.lights.lightsConfig
    })
  },
  watch: {
    lightsConfig: function(newVal, oldVal) {
      if (newVal.animation !== oldVal.animation) {
        // Wait for animations to be ready in animationClicked ¯\_(ツ)_/¯
        setTimeout(() => this.animationClicked(newVal.animation), 200)
      }
    }, deep: true
  }
}
</script>

<style lang="scss">
  .animations-container {
    margin-top: 25px;
    margin-bottom: 75px;
  }
</style>

<style lang="scss" scoped>
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
