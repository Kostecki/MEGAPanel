import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        categoryPercentage: 0.5,
        legend: { display: false },
        tooltips: {
          backgroundColor: 'black',
          callbacks: {
            label: (tooltipItems, data) => {
              const dataset = data.datasets[tooltipItems.datasetIndex]
              const direction = dataset.label
              const value = dataset.data[tooltipItems.index]
              
              return `${direction}: ${this.formatDataUnit(value)}`
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: null
            }
          }]
        }
      },
      suggestedMinReducer: 2
    }
  },
  created () {
    this.options.scales.yAxes[0].ticks.suggestedMin = this.findLowestValue(
      this.chartData().datasets[0].data,
      this.chartData().datasets[1].data
    )
  },
  mounted () {
    this.renderChart(this.chartData(), this.options)
  },
  methods: {
    findLowestValue (upload, download) {
      let combined = [...upload, ...download]
      return Math.min(...combined) - this.suggestedMinReducer
    }
  },
  computed: {
    test () {
      return 8
    }
  }
}
