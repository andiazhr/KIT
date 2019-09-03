import {
  Bar,
  mixins
} from 'vue-chartjs'

export default {
  extends: Bar,
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
      labels: this.chartData.map(entry => entry.NMPOLI),
      datasets: [{
        label: 'Jumlah Pasien',
        backgroundColor: '#00A4FF',
        data: this.chartData.map(entry => entry.JMLPAS)
      }]
    }, this.options)
  }
}
