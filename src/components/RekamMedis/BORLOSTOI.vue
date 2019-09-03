<template>
  <div>
    <div>
      <strong>
        <h4 style="text-align:left">{{ title }}</h4>
      </strong>
    </div>
    <div class="kolom12 judul">
      <img src="@/assets/firstaid.png" width="20px" height="20px" /> GRAFIK REKAPITULASI BOR LOS TOI
    </div>
    <bar-chart />
    <div class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Bulan</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Pas. Awal</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Pas. Masuk</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Pas. Pindahan</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Jml. Masuk</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Pas. Kel. Hidup</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Pas. Kel. Mati</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Pas. Mutasi</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Jml. Keluar</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Sisa Dirawat</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Lama Rawat Fin</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Lama Rawat BOR</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Jml Lama Rawat</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">BOR</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">ALOS</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">TOI</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">BTO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NDR</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">GDR,</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Jml. Hari</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Jml. TT</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Pas. Mati &#706;48</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Pas. Mati &#707;48</th>
        </tr>
        <tr>
          <td style="text-align:left; padding-left: 5px;">9349</td>
          <td style="text-align:right; padding-right: 5px;">9</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
          <td style="text-align:right; padding-right: 5px;">9</td>
          <td style="text-align:right; padding-right: 5px;">9</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
          <td style="text-align:right; padding-right: 5px;">9</td>
          <td style="text-align:right; padding-right: 5px;">9</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
          <td style="text-align:right; padding-right: 5px;">9</td>
          <td style="text-align:right; padding-right: 5px;">9</td>
          <td style="text-align:right; padding-right: 5px;">0</td>
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
/* eslint-disable */
export default {
  components: {},
  data() {
    return {
      title: "Laporan BOR, LOS & TOI"
    };
  }
};
</script>

<style>
</style>
