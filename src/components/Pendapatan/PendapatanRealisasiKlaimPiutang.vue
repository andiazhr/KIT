<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom6 kolom12-m judul maLeft maLeft-m"><i class="fa fa-chart-bar"></i> Grafik Laporan Pendapatan Realisasi Klaim & Piutang</div>
        <bar-chart />
        <div class="kolom12 judul Top"><i class="fa fa-table"></i> Detail Pendapatan Realisasi Klaim</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JENIS PASIEN</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">TOTAL</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT JALAN</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT DARURAT</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT INAP</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">PENUNJANG MEDIS</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">NON PELAYANAN</th>
          </tr>
          <tr>
            <td style="text-align:left; padding-left: 5px;">BPJS</td>
            <td style="text-align:right; padding-right: 5px;">9</td>
            <td style="text-align:right; padding-right: 5px;">0</td>
            <td style="text-align:right; padding-right: 5px;">0</td>
            <td style="text-align:right; padding-right: 5px;">0</td>
            <td style="text-align:right; padding-right: 5px;">9</td>
            <td style="text-align:right; padding-right: 5px;">0</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
import BarChart from '@/components/Chart/Pendapatan/BarChart4.vue'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      title: 'Pendapatan Realisasi Klaim & Piutang'
    }
  }
}
</script>

<style>

</style>
