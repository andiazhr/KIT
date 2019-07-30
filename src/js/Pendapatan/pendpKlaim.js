import {
  Bar,
  mixins
} from 'vue-chartjs'

export default {
  extends: Bar,
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
        label: 'Jumlah Bayar',
        backgroundColor: '#f87979',
        data: this.chartData.map(entry => entry.JMLBAYAR)
      },
      {
        label: 'JMLBAYARRJ',
        data: this.chartData.map(entry => entry.JMLBAYARRJ)
      },
      {
        label: 'JMLBAYARRD',
        data: this.chartData.map(entry => entry.JMLBAYARRD)
      },
      {
        label: 'JMLBAYARRI',
        data: this.chartData.map(entry => entry.JMLBAYARRI)
      },
      {
        label: 'JMLBAYARPM',
        data: this.chartData.map(entry => entry.JMLBAYARPM)
      },
      {
        label: 'JMLBAYARNM',
        data: this.chartData.map(entry => entry.JMLBAYARNM)
      }]
    }, this.options)
  }
}
