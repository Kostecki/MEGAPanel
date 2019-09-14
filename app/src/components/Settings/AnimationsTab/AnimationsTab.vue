<template>
  <v-row>
    <v-col cols="12" class="py-0">
      <v-card color="white">
        <CreateNew />

        <v-divider />

        <Animations />
      </v-card>
    </v-col>
  </v-row>
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
