<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 align-center>
        <v-card color="white">
          <v-card-title>
            <span class="title font-weight-light text-uppercase">Statistics</span>
            <v-spacer></v-spacer>
            <v-icon
              right
              medium
              class="refresh"
              :class="animated ? 'refreshAnimation' : null"
              @transitionend="animated = false"
              @animationend="animated = false"
              @click="() => animated = true">
              refresh
            </v-icon>
          </v-card-title>

          <v-divider />

          <v-container style="margin-bottom: 75px">
            <v-layout row wrap justify-space-between class="mb-2">
              <v-flex xs12 sm3 class="mb-3">
                <CurrentBattery />
              </v-flex>
              <v-flex xs12 sm3 class="mb-3">
                <Batteries />
              </v-flex>
              <v-flex xs12 sm3>
                <AvgSpeeds />
              </v-flex>
            </v-layout>

            <v-divider />

            <v-layout row class="mt-3">
              <v-flex xs12>
                <DataUsageGraphs />
              </v-flex>
            </v-layout>

            <v-divider />

            <v-layout row class="my-3">
              <v-flex xs12>
                <DataUsageToday />
              </v-flex>
            </v-layout>

            <v-divider />

            <v-layout row class="mt-3 weekly-battery-data-container">
              <v-flex xs12>
                <WeeklyBatteryData />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CurrentBattery from './CurrentBattery.vue'
import Batteries from './Batteries.vue'
import AvgSpeeds from './AvgSpeeds.vue'
import DataUsageGraphs from './DataUsageGraphs/DataUsageGraphs.vue'
import DataUsageToday from './DataUsageToday/DataUsageToday.vue'
import WeeklyBatteryData from './WeeklyBatteryData/WeeklyBatteryData.vue'

export default {
  components: {
    CurrentBattery,
    Batteries,
    AvgSpeeds,
    DataUsageGraphs,
    DataUsageToday,
    WeeklyBatteryData
  },
  data () {
    return {
      animated: false
    }
  },
  methods: {
    animate () {
      this.animated = true
    }
  }
}
</script>

<style lang="scss">
</style>
