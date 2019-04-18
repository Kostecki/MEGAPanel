import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
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
              const value = dataset.data[tooltipItems.index]

              return `${value} Volt`
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: null
            },
            id: 'left-y-axis',
            type: 'linear',
            position: 'left'
          }]
        }
      },
      suggestedMinReducer: 0
    }
  },
  created () {
    this.options.scales.yAxes[0].ticks.suggestedMin = this.findLowestValue(
      this.chartData.datasets[0].data
    )
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    findLowestValue (data) {
      return Math.min(...data) - this.suggestedMinReducer
    }
  }
}
