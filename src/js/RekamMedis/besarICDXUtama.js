import {
  Pie
} from 'vue-chartjs'

export default {
  extends: Pie,
  props: ['data', 'options'],
  mounted () {
    this.renderPieChart()
  },
  computed: {
    chartData: function () {
      return this.data
    }
  },
  methods: {
    renderPieChart: function () {
      this.renderChart({
        labels: this.chartData.map(entry => entry.CATEGORI),
        datasets: [{
          label: 'Jumlah Pasien',
          backgroundColor: ['#FF0000', '#FF8300', '#BAFF00', '#56FF00', '#00FFB8', '#FF6633', '#FCFF00', '#00A4FF', '#0500FF', '#C600FF'],
          data: this.chartData.map(entry => entry.jml)
        }]
      },
      { responsive: true, maintainAspectRatio: false }
      )
    }
  },
  watch: {
    data: function () {
      this.$data._chart.destroy()
      this.renderPieChart()
    }
  }
}
