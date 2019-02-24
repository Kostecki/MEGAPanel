<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 align-center>
        <v-card color="white">
          <v-card-title>
            <span class="title font-weight-light text-uppercase">Statistics</span>
            <v-spacer></v-spacer>
            <v-icon right medium class="refresh">
              refresh
            </v-icon>
          </v-card-title>

          <v-divider />

          <v-container>
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

            <v-layout row class="my-2">
              <v-flex xs12>
                <DataUsageGraphs />
              </v-flex>
            </v-layout>

            <v-layout row class="my-2">
              <v-flex xs12>
                <DataUsageToday />
              </v-flex>
            </v-layout>

            <v-layout row class="mt-2">
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
import DataUsageGraphs from './DataUsageGraphs.vue'
import DataUsageToday from './DataUsageToday.vue'
import WeeklyBatteryData from './WeeklyBatteryData.vue'

export default {
  components: {
    CurrentBattery,
    Batteries,
    AvgSpeeds,
    DataUsageGraphs,
    DataUsageToday,
    WeeklyBatteryData
  }
}
</script>

<style>

</style>

<style lang="scss" scoped>

</style>
