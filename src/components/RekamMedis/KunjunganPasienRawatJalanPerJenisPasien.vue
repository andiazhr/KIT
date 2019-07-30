<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom6 kolom12-m judul maLeft maLeft-m"><i class="fa fa-chart-bar"></i> Grafik Kunjungan Pasien Rawat Jalan per jenis pasien</div>
        <div class="kolom6 kolom12-m maLeft maLeft-m dateBorder"><date-picker v-model="time3" range :shortcuts="shortcuts" :lang="lang" class="TopDate"></date-picker></div>
        <bar-chart v-if='loaded' :chart-data='hasil' class='kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m'></bar-chart>
        <div class="kolom12 kolom12-m judul Top"><i class="fa fa-table"></i> Grafik Kunjungan Pasien Rawat Jalan per jenis pasien</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Nama Grup</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jumlah Pasien</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jumlah Gawat Darurat</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jumlah Rawat Inap</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jumlah Rawat Jalan</th>
          </tr>
          <tr v-for="row in hasil" v-bind:key="row">
            <td style="text-align:left; padding-left: 5px;">{{row.NMGTRFPT}}</td>
            <td style="text-align:center;">{{row.JMLPAS}}</td>
            <td style="text-align:center;">{{row.JMLGD}}</td>
            <td style="text-align:center;">{{row.JMLRI}}</td>
            <td style="text-align:center;">{{row.JMLRJ}}</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
const url = 'http://127.0.0.1:8000/api/Kunjpasien';
import DatePicker from 'vue2-datepicker'
import BarChart from '@/js/RekamMedis/kunjPasienBar.js'
import LineChart from '@/js/RekamMedis/kunjPasienLine.js'
export default {
  components: {
    BarChart, LineChart, DatePicker
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
      title: 'Kunjungan Pasien Rawat Jalan Per Jenis Pasien',
      hasil:[],
      loaded: false
    }
  },
   mounted () {
    this.requestData()
  },
  methods: {
    requestData () {
      this.axios.get(url)
        .then(response => {
          this.hasil = response.data,
          this.loaded = true
        })
    }
  }
}
</script>

<style>

</style>
