<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom12 kolom12-m judul"><img src="@/assets/earth.png" width="20px" height="20px"/> Grafik Laporan Pendapatan Tunai Per Cara Bayar</div>
        <bar-chart />
        <div class="kolom12 judul Top"><img src="@/assets/firstaid.png" width="20px" height="20px"/> Detail Pendapatan Tunai Per Cara Bayar</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JENIS PASIEN</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">TOTAL</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">TUNAI</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">KARTU KRIDIT</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">CEK/GIRO</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">DEPOSITE</th>
          </tr>
          <tr>
            <td style="text-align:left; padding-left: 5px;">Umum</td>
            <td style="text-align:right; padding-right: 5px;">9</td>
            <td style="text-align:right; padding-right: 5px;">0</td>
            <td style="text-align:right; padding-right: 5px;">0</td>
            <td style="text-align:right; padding-right: 5px;">0</td>
            <td style="text-align:right; padding-right: 5px;">9</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
import BarChart from '@/components/Chart/Pendapatan/BarChart.vue'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      title: 'Pendapatan Tunai Per Cara Bayar'
    }
  }
}
</script>

<style>

</style>
