<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom6 kolom12-m judul maLeft maLeft-m"><i class="fa fa-chart-bar"></i> Grafik Laporan Pendapatan Tunai</div>
        <div class="kolom6 kolom12-m maLeft maLeft-m dateBorder"><date-picker v-model="time3" range :shortcuts="shortcuts" :lang="lang" class="TopDate"></date-picker></div>
        <bar-chart v-if='loaded' :chart-data='hasil' class='kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m'></bar-chart>
        <div class="kolom12 judul Top"><i class="fa fa-table"></i> Detail Pendapatan Tunai</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA GRUP</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR RAWAT JALAN</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR RAWAT DARURAT</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR RAWAT INAP</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR RAWAT P M</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR RAWAT N M</th>
          </tr>
          <tr v-for="row in hasil" v-bind:key="row">
            <td style="text-align:left; padding-left: 5px;">{{ row.NMGTRFPT }}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYAR | numFormat }}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRJ | numFormat }}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRD | numFormat}}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRI | numFormat }}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARPM | numFormat }}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARNM | numFormat}}</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
const url = 'http://127.0.0.1:8000/api/pendpTunai';// dokumen ada di API folder
import DatePicker from 'vue2-datepicker'
import BarChart from '@/js/Pendapatan/pendpTunai.js'
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
      title: 'Pendapatan Tunai',
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
