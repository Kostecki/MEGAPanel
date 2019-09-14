<template>
  <v-row>
    <v-col cols="12" class="py-0">
      <v-card color="white">
        <CreateNew />

        <v-divider />

        <Batteries />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CreateNew from './CreateNew.vue'
import Batteries from './Batteries.vue'

export default {
  components: {
    CreateNew,
    Batteries
  }
}
</script>

<style lang="scss">
</style>
