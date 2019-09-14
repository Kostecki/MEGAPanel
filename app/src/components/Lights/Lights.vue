<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        class="pt-0">
        <SolidColors />
      </v-col>

      <v-col cols="12">
        <Animations />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SolidColors from './SolidColors/SolidColors.vue'
import Animations from './Animations/Animations.vue'

export default {
  components: {
    SolidColors,
    Animations
  },
  created () {
    this.$store.dispatch('lights/getLightsConfig')
    this.$store.dispatch('lights/animations')
  }
}
</script>

<style lang="scss">
</style>
