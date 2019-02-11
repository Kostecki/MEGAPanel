<template>
  <v-container text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 align-center>
        <v-card>
          <v-tabs v-model="active" fixed-tabs slider-color="primary">
            <v-tab>General</v-tab>
            <v-tab-item :transition="false" :reverse-transition="false">
              <GeneralTab />
            </v-tab-item>

            <v-tab>Animations</v-tab>
            <v-tab-item :transition="false" :reverse-transition="false">
              <AnimationsTab />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import GeneralTab from './GeneralTab.vue'
import AnimationsTab from './AnimationsTab.vue'

export default {
  components: {
    GeneralTab,
    AnimationsTab
  },
  data () {
    return {
      active: null
    }
  }
}
</script>

<style>

</style>

<style lang="scss" scoped>

</style>
