<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom6 kolom12-m judul maLeft maLeft-m"><img src="@/assets/firstaid.png" width="20px" height="20px"/> GRAFIK ANTRIAN IBS </div>
        <bar-chart />
        <div class="kolom12 judul Top"><img src="@/assets/firstaid.png" width="20px" height="20px"/> INFO ANTRIAN IBS ( Sampai hari ini) Tanggal </div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">ANTRIAN IBS</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">SIAP DIPANGGIL</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">SUDAH DIJADWALKAN</th>
          </tr>
          <tr>
            <td>15</td>
            <td>27</td>
            <td>17</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
import BarChart from '@/components/Chart/InfoAntrian/BarChart.vue'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      title: 'Info Antrian IBS'
    }
  }
}
</script>

<style>

</style>
