<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom12 kolom12-m judul"><img src="@/assets/earth.png" width="20px" height="20px"/> 10 Besar ICD X Utama</div>
        <pie-chart />
        <div class="kolom12 judul Top"><img src="@/assets/firstaid.png" width="20px" height="20px"/> Detail Pendapatan Tunai Per Cara Bayar</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Kode ICD</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">keterangan</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jml</th>
          </tr>
          <tr>
            <td style="text-align:left; padding-left: 5px;">Umum</td>
            <td style="text-align:left; padding-left: 5px;">9</td>
            <td style="text-align:right; padding-right: 5px;">0</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
import PieChart from '@/components/Chart/RekamMedis/PieChart1.vue'
export default {
  components: {
    PieChart
  },
  data () {
    return {
      title: '10 Besar ICD X Utama'
    }
  }
}
</script>

<style>

</style>
