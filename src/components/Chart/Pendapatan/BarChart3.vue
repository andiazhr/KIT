<template>
    <div>
      <bar-chart :data='chartData' class='kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m'></bar-chart>
    </div>
</template>

<script>
import BarChart from '@/js/Dashboard/BarChart.js'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      title: 'Dashboard',
      chartData: {
        labels: ['null', 'BPJS', 'JAMKESDA', 'PERUSAHAAN', 'UMUM'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10]
          },
          {
            label: 'GitHub unCommits',
            backgroundColor: '#3392FF',
            data: [40, 20, 12, 39, 10]
          }
        ]
      }
    }
  }
}
</script>

<style lang="">

</style>
