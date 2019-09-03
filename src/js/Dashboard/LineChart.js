import {
  Line,
  mixins
} from 'vue-chartjs'

export default {
  extends: Line,
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
      labels: this.chartData.map(entry => entry.GRPUNIT),
      datasets: [{
        label: 'Jumlah Pasien',
        borderColor: '#41B883',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        data: this.chartData.map(entry => entry.JMLPAS)
      },
      {
        label: 'Jumlah Laki-Laki',
        borderColor: '#E46651',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        data: this.chartData.map(entry => entry.JMLL)
      },
      {
        label: 'Jumlah Perempuan',
        borderColor: '#00D8FF',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        data: this.chartData.map(entry => entry.JMLP)
      }]
    }, this.options)
  }
}
