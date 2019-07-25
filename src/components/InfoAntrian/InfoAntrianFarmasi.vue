<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom6 kolom12-m judul maLeft maLeft-m"><img src="@/assets/firstaid.png" width="20px" height="20px"/> GRAFIK ANTRIAN FARMASI</div>
        <bar-chart />
        <div class="kolom12 judul Top"><img src="@/assets/firstaid.png" width="20px" height="20px"/> INFO ANTRIAN FARMASI HARI INI Tanggal </div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">LOKET</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">ANTRIAN</th>
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
import BarChart from '@/components/Chart/InfoAntrian/BarChart2.vue'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      title: 'Info Antrian Farmasi'
    }
  }
}
</script>

<style>

</style>
