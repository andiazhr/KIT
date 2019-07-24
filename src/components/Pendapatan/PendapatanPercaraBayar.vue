<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom12 kolom12-m judul"><img src="@/assets/earth.png" width="20px" height="20px"/> Grafik Laporan Pendapatan Tunai Per Cara Bayar</div>
        <bar-chart />
        <div class="kolom12 judul Top"><img src="@/assets/firstaid.png" width="20px" height="20px"/> Detail Pendapatan Tunai Per Cara Bayar</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">KODE GRUP</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA GRUP</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">TUNAI</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">KARTU KRIDIT</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">CEK/GIRO</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">DEPOSITE</th>
          </tr>
          <tr v-for="row in hasil" v-bind:key="row">
            <td style="text-align:left; padding-left: 5px;">{{ row.KODEGTRFPT }}</td>
            <td style="text-align:left; padding-left: 5px;">{{ row.NMGTRFPT }}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYAR | numFormat }}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLTUNAI | numFormat}}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLKRTKRIDIT | numFormat }}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLCEKGIRO | numFormat }}</td>
            <td style="text-align:right; padding-right: 5px;">{{ row.JMLDEPOSITE | numFormat}}</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
const url = 'http://localhost/koneksi/pendapatanTunaiCB.php';// dokumen ada di API folder
import BarChart from '@/components/Chart/Pendapatan/BarChart.vue'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      title: 'Pendapatan Tunai Per Cara Bayar',
      hasil:[]
    }
  },
  mounted() {
    this.axios.get(url).then((response) => {
    console.log(response.data); 
    this.hasil =response.data;
    })
  }
}
</script>

<style>

</style>
