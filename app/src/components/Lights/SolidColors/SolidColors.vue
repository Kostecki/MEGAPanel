<template>
  <v-card color="white">
    <v-container class="py-0">
      <v-card-title class="px-0 ">
        <span class="title font-weight-light text-uppercase">Colors</span>
      </v-card-title>
    </v-container>

    <v-divider />

    <v-container fluid>
      <v-row>
        <v-col cols="12" class="py-0">
          <PreselectedGrid />
        </v-col>
        <v-col cols="12" class="py-0">
          <ColorPicker />
        </v-col>
      </v-row>
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
  .v-card__title {
    padding: 16px 0;
  }
  
  .title {
    line-height: 1;  
  }

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
