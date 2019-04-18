<template>
  <v-layout row>
    <v-flex xs12>
      <v-card color="white">
        <CreateNew />

        <v-divider />

        <Batteries />
      </v-card>
    </v-flex>
  </v-layout>
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