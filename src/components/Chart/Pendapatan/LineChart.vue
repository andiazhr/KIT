<template>
    <div>
      <div class="kolom12 judul3"><img src="@/assets/earth.png" width="20px" height="20px"/> Kunjungan Pasien</div>
      <line-chart :data='chartData' :height="150" class='kolom12 kolom12-m chart chartBorder3'></line-chart>
    </div>
</template>

<script>
import LineChart from '@/js/Dashboard/LineChart.js'
export default {
  components: {
    LineChart
  },
  data () {
    return {
      title: 'Dashboard',
      chartData: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [
          {
            label: 'Data One',
            borderColor: '#41B883',
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            data: [1, 2, 5]
          },
          {
            label: 'Data two',
            borderColor: '#E46651',
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            data: [4, 8, 1]
          },
          {
            label: 'Data three',
            borderColor: '#00D8FF',
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            data: [10, 5, 6]
          }
        ]
      }
    }
  }
}
</script>

<style lang="">

</style>
