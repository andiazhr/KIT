<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom6 kolom12-m judul maLeft maLeft-m"><i class="fa fa-chart-bar"></i> Grafik Semua Kunjungan Pasien Rawat Jalan Per Poli</div>
        <div class="kolom6 kolom12-m maLeft maLeft-m dateBorder"><date-picker v-model="time3" range :shortcuts="shortcuts" :lang="lang" class="TopDate"></date-picker></div>
        <dougnut v-if='loaded' :chart-data='hasil' class='kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m'></dougnut>
        <div class="kolom12 kolom12-m judul Top"><i class="fa fa-table"></i> Grafik Semua Kunjungan Pasien Rawat Jalan Per Poli</div>
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Grup Unit</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Nama Unit</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Kode Bagian</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Nama Bagian</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jumlah Pasien</th>
          </tr>
          <tr v-for="row in hasil" v-bind:key="row">
            <td style="text-align:center;">{{row.GRPUNIT}}</td>
            <td style="text-align:center;">{{row.NMGUNIT}}</td>
            <td style="text-align:center;">{{row.KODEBAGIAN}}</td>
            <td style="text-align:center;">{{row.NAMABAGIAN}}</td>
            <td style="text-align:center;">{{row.JMLPAS}}</td>
          </tr>
        </table>
    </div>
</template>

<script>
const url = 'http://127.0.0.1:8000/api/Kunjpasrajal';
import DatePicker from 'vue2-datepicker'
import Dougnut from '@/js/RekamMedis/kunjPasRajalDonut.js'
import LineChart from '@/js/RekamMedis/kunjPasRajalPie.js'
export default {
  components: {
    Dougnut, LineChart, DatePicker
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
      title: 'Kunjungan Pasien Rawat Jalan Per Poli',
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
