<template>
  <v-layout row>
    <v-flex xs12>
      <v-card color="white">
        <CreateNew />

        <v-divider />

        <Animations />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import CreateNew from './CreateNew.vue'
import Animations from './Animations'

export default {
  components: {
    CreateNew,
    Animations
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>

</style>
