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
        label: 'Tunai',
        data: this.chartData.map(entry => entry.JMLTUNAI)
      },
      {
        label: 'Kartu Kridit',
        data: this.chartData.map(entry => entry.JMLKRTKRIDIT)
      },
      {
        label: 'CekGiro',
        data: this.chartData.map(entry => entry.JMLCEKGIRO)
      },
      {
        label: 'Deposite',
        data: this.chartData.map(entry => entry.JMLDEPOSITE)
      }]
    }, this.options)
  }
}
