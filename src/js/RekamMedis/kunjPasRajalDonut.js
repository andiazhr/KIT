import {
  Doughnut
} from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    this.renderDoughnutChart()
  },
  computed: {
    chartData: function () {
      return this.data
    }
  },
  methods: {
    renderDoughnutChart: function () {
      this.renderChart({
        labels: this.chartData.map(entry => entry.KODEBAGIAN),
        datasets: [{
          backgroundColor: ['#FF1700', '#FF4500', '#FF8300', '#FFB900', '#FCFF00', '#DDFF00', '#BAFF00', '#94FF00', '#56FF00', '#11FF00', '#00FF67', '#00FFB8', '#00FFF5', '#00D3FF', '#00A4FF', '#006EFF', '#0040FF', '#0500FF', '#4B00FF', '#8800FF', '#C600FF', '#EC00FF', '#FF00E7', '#FF1700', '#FF4500', '#FF8300', '#FFB900', '#FCFF00', '#DDFF00', '#BAFF00', '#94FF00', '#56FF00', '#11FF00', '#00FF67', '#00FFB8', '#00FFF5', '#00D3FF', '#00A4FF', '#006EFF', '#0040FF', '#0500FF', '#4B00FF', '#8800FF', '#C600FF', '#EC00FF', '#FF00E7', '#FF1700', '#FF4500', '#FF8300', '#FFB900', '#FCFF00', '#DDFF00', '#BAFF00', '#94FF00', '#56FF00', '#11FF00', '#00FF67', '#00FFB8', '#00FFF5', '#00D3FF', '#00A4FF', '#006EFF', '#0040FF', '#0500FF', '#4B00FF', '#8800FF', '#C600FF', '#EC00FF', '#FF00E7', '#FF1700', '#FF4500', '#FF8300', '#FFB900', '#FCFF00', '#DDFF00', '#BAFF00', '#94FF00', '#56FF00', '#11FF00', '#00FF67', '#00FFB8', '#00FFF5', '#00D3FF', '#00A4FF', '#006EFF', '#0040FF', '#0500FF', '#4B00FF', '#8800FF', '#C600FF', '#EC00FF', '#FF00E7'],
          data: this.chartData.map(entry => entry.JMLPAS)
        }]
      }, { responsive: true, maintainAspectRatio: false }
      )
    }
  },
  watch: {
    data: function () {
      this.$data._chart.destroy()
      this.renderDoughnutChart()
    }
  }
}
