<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 align-center>
        <SolidColors />
      </v-flex>

      <v-flex xs12>
        <Animations />
      </v-flex>
    </v-layout>
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
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
