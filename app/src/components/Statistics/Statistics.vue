<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 align-center>
        <v-card color="white">
          <v-container class="py-0">
            <v-card-title class="px-0">
              <span class="title font-weight-light text-uppercase">Statistics</span>
            </v-card-title>
          </v-container>

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

            <v-layout row class="my-3">
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
    }
  }
}
</script>

<style lang="scss">
</style>
