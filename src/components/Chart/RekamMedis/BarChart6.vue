<template>
    <div>
      <bar-chart :data='chartData' class='kolom12 kolom12-m chart chartBorder'></bar-chart>
    </div>
</template>

<script>
import BarChart from '@/js/Dashboard/BarChart.js'
export default {
  components: {
    BarChart
  }
}
</script>

<style lang="">

</style>
