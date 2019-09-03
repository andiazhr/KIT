import {
  Bar
} from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderBarChart()
  },
  computed: {
    chartData: function () {
      return this.data
    }
  },
  methods: {
    renderBarChart: function () {
      this.renderChart({
        labels: this.chartData.map(entry => entry.NMGTRFPT),
        datasets: [{
          label: 'Jumlah Bayar',
          backgroundColor: '#FF6F00',
          data: this.chartData.map(entry => entry.JMLBAYAR)
        },
        {
          label: 'Rawat Jalan',
          backgroundColor: '#FF8F00',
          data: this.chartData.map(entry => entry.JMLBAYARRJ)
        },
        {
          label: 'Rawat Darurat',
          backgroundColor: '#FFA000',
          data: this.chartData.map(entry => entry.JMLBAYARRD)
        },
        {
          label: 'Rawat Inap',
          backgroundColor: '#FFB300',
          data: this.chartData.map(entry => entry.JMLBAYARRI)
        },
        {
          label: 'Rawat Penunjang Medis',
          backgroundColor: '#FFC107',
          data: this.chartData.map(entry => entry.JMLBAYARPM)
        },
        {
          label: 'Rawat Penunjang Non Medis',
          backgroundColor: '#FFD54F',
          data: this.chartData.map(entry => entry.JMLBAYARNM)
        }]
      },
      {
        legend: { // hides the legend
          display: true
        },
        scales: { // hides the y axis
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              // Return an empty string to draw the tick line but hide the tick label
              // Return `null` or `undefined` to hide the tick line entirely
              userCallback: function (value, index, values) {
                // Convert the number to a string and splite the string every 3 charaters from the end
                value = value.toString()
                value = value.split(/(?=(?:...)*$)/)

                // Convert the array to a string and format the output
                value = value.join('.')
                return value
              }
            }
          }]
        }
      },
      { responsive: true, maintainAspectRatio: false }
      )
    }
  },
  watch: {
    data: function () {
      this.$data._chart.destroy()
      this.renderBarChart()
    }
  }
}
