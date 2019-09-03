import {
  Pie,
  mixins
} from 'vue-chartjs'

export default {
  extends: Pie,
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
      labels: this.chartData.map(entry => entry.NMGTRFPT),
      datasets: [{
        label: 'Jumlah Pasien',
        backgroundColor: '#f87979',
        data: this.chartData.map(entry => entry.JMLPAS)
      },
      {
        label: 'Jumlah Gawat Darurat',
        data: this.chartData.map(entry => entry.JMLGD)
      },
      {
        label: 'Jumlah Rawat Inap',
        data: this.chartData.map(entry => entry.JMLRI)
      },
      {
        label: 'Jumlah Rawat Jalan',
        data: this.chartData.map(entry => entry.JMLRJ)
      }]
    }, this.options)
  }
}
