<template>
    <div>
      <bar-chart :data='chartData' class='daLeft daLeft-m kolom5 kolom12-m chart chartBorder2'></bar-chart>
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
        labels: ['JAminan kesehatan', 'BPJS', 'JAMKESDA', 'PERUSAHAAN', 'UMUM'],
        datasets: [
          {
            label: 'JMLPAS',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10]
          },
          {
            label: 'JMLRJ',
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
