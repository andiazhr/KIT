<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div class="kolom12 kolom12-m judul"><img src="@/assets/earth.png" width="20px" height="20px"/> Grafik Kunjungan Pasien Rawat Jalan per jenis pasien</div>
        <div class="kolom12 kolom12-m judul"><img src="@/assets/earth.png" width="20px" height="20px"/> Grafik Kunjungan Pasien Rawat Jalan per jenis pasien</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Nama Grup</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jumlah Rawat Jalan</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jumlah Gawat Darurat</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jumlah Rawat Inap</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Jumlah Pasien</th>
          </tr>
          <tr v-for="row in hasil" v-bind:key="row">
            <td style="text-align:left; padding-left: 5px;">{{row.NMGTRFPT}}</td>
            <td style="text-align:center;">{{row.JMLRJ}}</td>
            <td style="text-align:center;">{{row.JMLGD}}</td>
            <td style="text-align:center;">{{row.JMLRI}}</td>
            <td style="text-align:center;">{{row.JMLPAS}}</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
const url = 'http://localhost/koneksi/koneksi.php';
export default {
  data () {
    return {
      title: 'Kunjungan Pasien Rawat Jalan Per Jenis Pasien',
      hasil: []
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
