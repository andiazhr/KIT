<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom6 kolom12-m judul maLeft maLeft-m"><i class="fa fa-chart-bar"></i> GRAFIK ANTRIAN POLIKLINIK </div>
        <bar-chart />
        <div class="kolom12 judul Top"><i class="fa fa-table"></i> INFO ANTRIAN POLI HARI INI Tanggal {{new Date() | dateFormat('DD-MM-YYYY')}}</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA BAGIAN</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH KUNJUNGAN</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">DILAYANI</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">BELUM DILAYANI</th>
          </tr>
          <tr>
            <td style="text-align:left; padding-left: 5px;">9349</td>
            <td>R. DAHLIA 5</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
import BarChart from '@/components/Chart/InfoAntrian/BarChart3.vue'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      title: 'Info Antrian Poli'
    }
  }
}
</script>

<style>

</style>
