<template>
  <v-layout row wrap justify-space-between fill-height>
    <v-flex xs12 sm3 style="position: relative">
      <div class="caption font-weight-light font-italic text-uppercase">{{showDataInterval('hour')}}</div>
      <DataUsageGraph class="graph" :chart-data="filterUpDownHour" range="hour" />
      <div class="text-inside-doughnut">
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_upward</v-icon> {{getUpDownValue('hour', 'upload')}}</div>
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_downward</v-icon> {{getUpDownValue('hour', 'download')}}</div>
      </div>
    </v-flex>
    <v-flex xs12 sm3 style="position: relative">
      <div class="caption font-weight-light font-italic text-uppercase">{{showDataInterval('day')}}</div>
      <DataUsageGraph class="graph" :chart-data="filterUpDownDay" range="day" />
      <div class="text-inside-doughnut">
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_upward</v-icon> {{getUpDownValue('day', 'upload')}}</div>
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_downward</v-icon> {{getUpDownValue('day', 'download')}}</div>
      </div>
    </v-flex>
    <v-flex xs12 sm3 style="position: relative">
      <div class="caption font-weight-light font-italic text-uppercase">{{showDataInterval('week')}}</div>
      <DataUsageGraph class="graph" :chart-data="filterUpDownWeek" range="week" />
      <div class="text-inside-doughnut">
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_upward</v-icon> {{getUpDownValue('week', 'upload')}}</div>
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_downward</v-icon> {{getUpDownValue('week', 'download')}}</div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import * as moment from 'moment'
import DataUsageGraph from './DataUsageGraph'

export default {
  components: {
    DataUsageGraph
  },
  data () {
    return {
      chartData: {
        labels: ['Upload', 'Download'],
        datasets: [
          {
            data: [],
            backgroundColor: [
              '#616774',
              '#46BFBD'
            ],
            hoverBackgroundColor: [
              '#6a707f',
              '#5AD3D1'
            ]
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
  methods: {
    showDataInterval (range) {
      const startOfWeek = moment().startOf('isoweek').format('D.')
      const endOfWeek = moment().endOf('isoweek').format('D. MMMM')

      if (range === 'hour') {
        return moment().format('HH:00') + '-' + moment().format('HH:59')
      }

      if (range === 'day') {
        return moment().format('dddd, D. MMMM')
      }

      if (range === 'week') {
        return startOfWeek + '-' + endOfWeek
      }
    },

    filterUpDownHour () {
      const upload = this.DataWeek[this.today][this.currentHour].Up
      const download = this.DataWeek[this.today][this.currentHour].Down

      let filtered = JSON.parse(JSON.stringify(this.chartData))
      filtered.datasets[0].data.push(upload.toFixed(2))
      filtered.datasets[0].data.push(download.toFixed(2))

      return filtered
    },
    filterUpDownDay () {
      let today = this.DataWeek[this.today]
      let upload = 0
      let download = 0

      today.forEach((e, i) => {
        upload += today[i].Up
        download += today[i].Down
      })

      let filtered = JSON.parse(JSON.stringify(this.chartData))
      filtered.datasets[0].data.push(upload.toFixed(2))
      filtered.datasets[0].data.push(download.toFixed(2))

      return filtered
    },
    filterUpDownWeek () {
      moment.locale('en-ie') // Force weekdays to start at 'monday' but keep it in english
      const weekdays = moment.weekdays(true)
      const week = this.DataWeek

      let upload = 0
      let download = 0

      weekdays.forEach((day, i) => {
        week[day].forEach((hour, j) => {
          upload += hour.Up
          download += hour.Down
        })
      })

      let filtered = JSON.parse(JSON.stringify(this.chartData))
      filtered.datasets[0].data.push(upload.toFixed(2))
      filtered.datasets[0].data.push(download.toFixed(2))

      return filtered
    },
    getUpDownValue (range, directionInput) {
      const direction = directionInput === 'upload' ? 0 : 1

      const funcs = {
        hour: this.filterUpDownHour(),
        day: this.filterUpDownDay(),
        week: this.filterUpDownWeek()
      }

      return this.formatDataUnit(funcs[range].datasets[0].data[direction])
    }
  },
  computed: {
    today () {
      return moment.weekdays(moment().weekday())
    },
    currentHour () {
      return moment().format('h')
    }
  }
}
</script>

<style>
</style>

<style lang="scss" scoped>
  .graph {
    max-height: 130px;

    @media (max-width: 599px) {
      margin-bottom: 25px;
    }
  }

  .text-inside-doughnut {
    position: absolute;
    bottom: 28px;
    left: -5px;
    right: 0;
    text-align: center;

    @media (max-width: 599px) {
      bottom: 35px;
    }
  }
</style>
