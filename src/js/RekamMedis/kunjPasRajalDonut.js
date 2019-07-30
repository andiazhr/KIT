import {
  Doughnut,
  mixins
} from 'vue-chartjs'

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart({
      labels: this.chartData.map(entry => entry.KODEBAGIAN),
      datasets: [{
        backgroundColor: '#f87979',
        data: this.chartData.map(entry => entry.JMLPAS)
      }]
    }, this.options)
  }
}
