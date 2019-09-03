import {
  Pie,
  mixins
} from 'vue-chartjs'

export default {
  extends: Pie,
  props: ['chartData'],
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
      labels: this.chartData.map(entry => entry.CATEGORI),
      datasets: [{
        label: 'Jumlah Pasien',
        backgroundColor: ['#FF0000', '#FF8300', '#BAFF00', '#56FF00', '#00FFB8', '#FF6633', '#FCFF00', '#00A4FF', '#0500FF', '#C600FF'],
        data: this.chartData.map(entry => entry.jml)
      }]
    }, this.options)
  }
}
