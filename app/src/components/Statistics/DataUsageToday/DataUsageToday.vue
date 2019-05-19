<template>
  <v-layout
    row
    wrap
    justify-space-between>
    <div class="caption font-weight-light font-italic text-uppercase mb-4">
      Today in details
    </div>
    <v-flex
      xs12
      style="position: relative">
      <DataUsageTodayChart :chart-data="filterUpDownDaily()" />
    </v-flex>
  </v-layout>
</template>

<script>
import DataUsageTodayChart from './DataUsageTodayChart'
import * as moment from 'moment'

export default {
  components: {
    DataUsageTodayChart
  },
  data () {
    return {
      chartData: {
        labels: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00'
        ],
        datasets: [
          {
            label: 'Upload',
            backgroundColor: '#616774',
            hoverBorderColor: '#6a707f',
            data: null
          },
          {
            label: 'Download',
            backgroundColor: '#ff6702', // Almost primary theme color but nice on the eyes..
            hoverBorderColor: '#5AD3D1',
            data: null
          }
        ]
      },
      // TODO: get this from the store
      DataWeek: {
        Monday: [
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 }
        ],
        Tuesday: [
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 }
        ],
        Wednesday: [
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 }
        ],
        Thursday: [
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 }
        ],
        Friday: [
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 }
        ],
        Saturday: [
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 }
        ],
        Sunday: [
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 75.9, Down: 34.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 },
          { Up: 11.0, Down: 12.0 },
          { Up: 11.1, Down: 12.1 },
          { Up: 11.3, Down: 12.3 },
          { Up: 11.4, Down: 12.4 },
          { Up: 11.5, Down: 12.5 },
          { Up: 11.6, Down: 12.6 }
        ]
      }
    }
  },
  computed: {
    // TODO: this is getting repeated
    today () {
      return moment.weekdays(moment().weekday())
    }
  },
  methods: {
    filterUpDownDaily () {
      const today = this.DataWeek[this.today]
      let upload = []
      let download = []

      today.forEach((e, i) => {
        upload.push(e.Up.toFixed(2))
        download.push(e.Down.toFixed(2))
      })

      let filtered = JSON.parse(JSON.stringify(this.chartData))
      filtered.datasets[0].data = upload
      filtered.datasets[1].data = download

      return filtered
    }
  }
}
</script>

<style lang="scss">
</style>
