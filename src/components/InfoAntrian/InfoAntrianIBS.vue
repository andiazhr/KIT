<template>
  <div>
    <div>
      <strong>
        <h4 style="text-align:left">{{ title }}</h4>
      </strong>
    </div>
    <div class="kolom6 kolom12-m judul maLeft maLeft-m">
      <i class="fa fa-chart-bar"></i> GRAFIK ANTRIAN IBS
    </div>
    <bar-chart />
    <div class="kolom12 judul Top">
      <i class="fa fa-table"></i>
      INFO ANTRIAN IBS ( Sampai hari ini) Tanggal {{new Date() | dateFormat('DD-MM-YYYY')}}
    </div>
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
/* eslint-disable */
export default {
  components: {},
  data() {
    return {
      title: "Info Antrian IBS"
    };
  }
};
</script>

<style>
</style>
