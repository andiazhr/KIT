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
        labels: this.chartData.map(entry => entry.NMINITPT),
        datasets: [{
          label: 'Jumlah Bayar',
          backgroundColor: '#B71C1C',
          data: this.chartData.map(entry => entry.JMLBAYAR)
        },
        {
          label: 'Tunai',
          backgroundColor: '#D32F2F',
          data: this.chartData.map(entry => entry.JMLTUNAI)
        },
        {
          label: 'Kartu Kridit',
          backgroundColor: '#E53935',
          data: this.chartData.map(entry => entry.JMLKRTKRIDIT)
        },
        {
          label: 'CekGiro',
          backgroundColor: '#EF5350',
          data: this.chartData.map(entry => entry.JMLCEKGIRO)
        },
        {
          label: 'Deposite',
          backgroundColor: '#EF9A9A',
          data: this.chartData.map(entry => entry.JMLDEPOSITE)
        }]
      },
      {
        legend: { // hides the legend
          display: true,
          position: 'top',
          align: 'start'
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
