<template>
  <v-layout row wrap justify-space-between>
    <v-flex xs12 sm3 style="position: relative">
      <div class="caption font-weight-light font-italic text-uppercase">{{generateDataInterval('hour')}}</div>
      <DataUsageGraph class="graph" :chartData="filterUpDownHour" />
      <div class="text-inside-doughnut">
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_upward</v-icon> 11.60 KB</div>
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_downward</v-icon> 12.60 KB</div>
      </div>
    </v-flex>
    <v-flex xs12 sm3 style="position: relative">
      <div class="caption font-weight-light font-italic text-uppercase">{{generateDataInterval('day')}}</div>
      <DataUsageGraph class="graph" :chartData="chartData" />
      <div class="text-inside-doughnut">
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_upward</v-icon> 271.60 KB</div>
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_downward</v-icon> 295.60 KB</div>
      </div>
    </v-flex>
    <v-flex xs12 sm3 style="position: relative">
      <div class="caption font-weight-light font-italic text-uppercase">{{generateDataInterval('week')}}</div>
      <DataUsageGraph class="graph" :chartData="chartData" />
      <div class="text-inside-doughnut">
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_upward</v-icon> 1.59 MB</div>
        <div class="caption font-italic font-weight-light"><v-icon small>arrow_downward</v-icon> 1.73 MB</div>
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
  created () {
    
  },
  data () {
    return {
      chartData: {
        labels: ['Upload', 'Download'],
        datasets: [
          {
            data: [], // TODO: get this from the store
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
    generateDataInterval (range) {
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

      let filtered = Object.assign({}, this.chartData)
      filtered.datasets[0].data.push(upload)
      filtered.datasets[0].data.push(download)

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

      let filtered = Object.assign({}, this.chartData)
      filtered.datasets[0].data.push(upload)
      filtered.datasets[0].data.push(download)

      return filtered
    },
  },
  computed: {
    today () {
      return moment.weekdays(moment().weekday())
    },
    currentHour () {
      return moment().format('h')
    },
    filterUpDownWeek () {

    }
  }
}
</script>

<style>

</style>

<style lang="scss" scoped>
  .graph {
    margin-top: -30px;
    max-height: 127px;
  }

  .text-inside-doughnut {
    position: absolute;
    bottom: 3px;
    left: -5px;
    right: 0;
    text-align: center;
  }
</style>
