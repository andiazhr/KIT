import {
  Line
} from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    this.renderLineChart()
  },
  computed: {
    chartData: function () {
      return this.data
    }
  },
  methods: {
    renderLineChart: function () {
      this.renderChart({
        labels: this.chartData.map(entry => entry.NMGRUNIT),
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
      },
      { responsive: true, maintainAspectRatio: false }
      )
    }
  },
  watch: {
    data: function () {
      this.$data._chart.destroy()
      this.renderLineChart()
    }
  }
}
