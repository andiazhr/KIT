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
          label: 'Gawat Darurat',
          backgroundColor: '#FF9900',
          data: this.chartData.map(entry => entry.JMLGD)
        },
        {
          label: 'Rawat Inap',
          backgroundColor: '#FFCC00',
          data: this.chartData.map(entry => entry.JMLRI)
        },
        {
          label: 'Rawat Jalan',
          backgroundColor: '#FFFF00',
          data: this.chartData.map(entry => entry.JMLRJ)
        },
        {
          label: 'Jumlah Pasien',
          backgroundColor: '#FF6600',
          data: this.chartData.map(entry => entry.JMLPAS)
        }]
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
