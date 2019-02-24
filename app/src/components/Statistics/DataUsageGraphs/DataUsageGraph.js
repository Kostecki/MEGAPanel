import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  data () {
    return {
      options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        cutoutPercentage: 80,
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        tooltips: {
          backgroundColor: 'black',
          callbacks: {
            label: (tooltipItems, data) => {
              const direction = data.labels[tooltipItems.index]
              const value = data.datasets[0].data[tooltipItems.index]
              return `${direction}: ${this.formatDataUnit(value)}`
            }
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData(), this.options)
  }
}
