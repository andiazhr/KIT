<template>
    <div>
      <div class="kolom6 kolom12-m maLeft maLeft-m dateBorder"><date-picker v-model="time3" range :shortcuts="shortcuts" :lang="lang" class="TopDate"></date-picker></div>
      <bar-chart :data='chartData' class='kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m'></bar-chart>
    </div>
</template>

<script>
/* eslint-disable */
import DatePicker from 'vue2-datepicker'
import BarChart from '@/js/Dashboard/BarChart.js'
export default {
  components: {
    BarChart, DatePicker
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
