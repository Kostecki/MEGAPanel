<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        align-self="center">
        <v-card color="white">
          <v-container class="py-0">
            <v-card-title class="px-0">
              <span class="title font-weight-light text-uppercase">Statistics</span>
            </v-card-title>
          </v-container>

          <v-divider />

          <v-container style="margin-bottom: 75px">
            <v-row
              justify="space-between"
              class="mb-2">
              <v-col
                cols="12"
                sm="3"
                class="mb-2 py-0 pr-0">
                <CurrentBattery />
              </v-col>
              <v-col
                cols="12"
                sm="3"
                class="mb-2 pa-0">
                <Power />
              </v-col>
              <v-col
                cols="12"
                sm="3"
                class="mb-2 py-0 pl-0">
                <Batteries />
              </v-col>
            </v-row>

            <v-divider />

            <v-row
              class="my-3">
              <v-col
                cols="12"
                style="opacity: 0.2">
                <DataUsageGraphs />
              </v-col>
            </v-row>

            <v-divider />

            <v-row
              class="my-3">
              <v-col
                cols="12"
                style="opacity: 0.2">
                <DataUsageToday />
              </v-col>
            </v-row>

            <v-divider />

            <v-row
              class="mt-3 weekly-battery-data-container">
              <v-col
                cols="12"
                style="opacity: 0.2">
                <WeeklyBatteryData />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CurrentBattery from './CurrentBattery.vue'
import Batteries from './Batteries.vue'
import Power from './Power.vue'
import DataUsageGraphs from './DataUsageGraphs/DataUsageGraphs.vue'
import DataUsageToday from './DataUsageToday/DataUsageToday.vue'
import WeeklyBatteryData from './WeeklyBatteryData/WeeklyBatteryData.vue'

export default {
  components: {
    CurrentBattery,
    Batteries,
    Power,
    DataUsageGraphs,
    DataUsageToday,
    WeeklyBatteryData
  },
  created () {
    this.$store.dispatch('statistics/currentBatteryVoltage')
    this.$store.dispatch('statistics/batteries')
    this.$store.dispatch('statistics/getAmps')
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
</style>
