<template>
  <v-layout row wrap justify-space-between>
    <div
      class="caption font-weight-light font-italic text-uppercase mb-4"
    >Batteries this week</div>
    <v-flex xs12 style="position: relative">
      <WeeklyBatteryDataChart :chart-data="filterBatteriesWeekly"/>
    </v-flex>
  </v-layout>
</template>

<script>
import WeeklyBatteryDataChart from './WeeklyBatteryDataChart'
import * as moment from 'moment'

export default {
  components: {
    WeeklyBatteryDataChart
  },
  data () {
    return {
      chartData: {
        labels: [
          '04:00',
          '08:00',
          '12:00',
          '16:00',
          '20:00',
          '00:00',
          '04:00',
          '08:00',
          '12:00',
          '16:00',
          '20:00',
          '00:00',
          '04:00',
          '08:00',
          '12:00',
          '16:00',
          '20:00',
          '00:00',
          '04:00',
          '08:00',
          '12:00',
          '16:00',
          '20:00',
          '00:00',
          '04:00',
          '08:00',
          '12:00',
          '16:00',
          '20:00',
          '00:00',
          '04:00',
          '08:00',
          '12:00',
          '16:00',
          '20:00',
          '00:00',
          '04:00',
          '08:00',
          '12:00',
          '16:00',
          '20:00',
          '00:00'
        ],
        datasets: [
          {
            data: null,
            label: 'Voltage',
            yAxisID: 'left-y-axis',
            borderWidth: 5,
            fill: false,
            borderColor: '#ff6702', // Almost primary theme color but nice on the eyes..
            pointHoverBackgroundColor: '#ff6702' // Almost primary theme color but nice on the eyes..
          }
        ]
      },
      // TODO: get this from the store
      BatteryHistoric: {
        Monday: [12.8, 12.5, 12.0, 11.7, 11.3, 11.0],
        Tuesday: [12.8, 12.5, 12.0, 11.7, 11.3, 11.0],
        Wednesday: [12.8, 12.5, 12.0, 11.7, 11.3, 11.0],
        Thursday: [12.8, 12.5, 12.0, 11.7, 11.3, 11.0],
        Friday: [12.8, 12.5, 12.0, 11.7, 11.3, 11.0],
        Saturday: [12.8, 12.5, 12.0, 11.7, 11.3, 11.0],
        Sunday: [12.8, 12.5, 12.0, 11.7, 11.3, 11.0]
      }
    }
  },
  methods: {
    filterBatteriesWeekly () {
      const week = this.BatteryHistoric
      let merged = []

      Object.keys(week).forEach(e => merged.push(...week[e]))

      let filtered = JSON.parse(JSON.stringify(this.chartData))
      filtered.datasets[0].data = merged

      return filtered
    }
  },
  computed: {
    // TODO: this is getting repeated
    today () {
      return moment.weekdays(moment().weekday())
    }
  }
}
</script>

<style>
</style>

<style lang="scss" scoped>
</style>
