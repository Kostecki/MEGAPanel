<template>
  <v-card color="white">
    <v-card-title>
      <span class="title font-weight-light text-uppercase">Colors</span>
    </v-card-title>

    <v-divider />

    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <PreselectedGrid />
        </v-flex>
        <v-flex xs12>
          <ColorPicker />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import PreselectedGrid from './PreselectedGrid.vue'
import ColorPicker from './ColorPicker.vue'

export default {
  components: {
    PreselectedGrid,
    ColorPicker
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .selected-color {
    width: 100%;
    max-width: 220px;

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
</style>
