<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom12 kolom12-m judul"><img src="@/assets/earth.png" width="20px" height="20px"/> Grafik Sensus Rawat Inap Per Kelas</div>
        <bar-chart />
        <div class="kolom12 judul Top"><img src="@/assets/firstaid.png" width="20px" height="20px"/> Detail Sensus Rawat Inap Per Kelas</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="4">KODE</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="4">NAMA BAGIAN</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="4">JML TT</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="18">PASIEN</th>
          </tr>
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">AWAL</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">MASUK</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">MUTASI</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="6">KELUAR</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">SISA</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">LAMA RAWAT</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">BOR</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">ALOS</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">TOI</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">BTO</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">GDR</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="3">NDR</th>
          </tr>
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">JML</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">HIDUP</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">MASUK</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">APS</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">LARI</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">MATI</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">JML MATI</th>
          </tr>
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">&#706;48</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">&#707;48</th>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  components: {
    
  },
  data () {
    return {
      title: 'Sensus Ranap Kelas'
    }
  }
}
</script>

<style>

</style>
