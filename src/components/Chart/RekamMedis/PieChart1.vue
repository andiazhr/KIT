<template>
    <div>
    <div class="kolom6 kolom12-m maLeft maLeft-m dateBorder"><date-picker v-model="time3" range :shortcuts="shortcuts" :lang="lang" class="TopDate"></date-picker></div>
    <pie-chart :data='chartData' class='maLeft maLeft-m kolom6 kolom12-m chart chartBorder clear'></pie-chart>
    </div>
</template>

<script>
/* eslint-disable */
import DatePicker from 'vue2-datepicker'
import PieChart from '@/js/Dashboard/PieChart.js'
export default {
  components: {
    PieChart, DatePicker
  },
  data () {
    return {
      time1: '',
      time2: '',
      time3: '',
      // custom lang
      lang: {
        default : 'en'
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.time3 = [ new Date(), new Date() ]
          }
        }
      ],
      timePickerOptions:{
        start: '00:00',
        step: '00:30',
        end: '23:30'
      },
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
