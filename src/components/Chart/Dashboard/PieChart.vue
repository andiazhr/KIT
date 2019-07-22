<template>
    <div>
    <pie-chart :data='chartData' class='kolom6 kolom12-m chart chartBorder1'  style="clear: left; float:left"></pie-chart>
    </div>
</template>

<script>
import PieChart from '@/js/Dashboard/PieChart.js'
export default {
  components: {
    PieChart
  },
  data () {
    return {
      title: 'Dashboard',
      chartData: {
        labels: ['Green', 'Red', 'Blue'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [1, 10, 5]
          }
        ]
      }
    }
  }
}
</script>

<style lang="">

</style>
