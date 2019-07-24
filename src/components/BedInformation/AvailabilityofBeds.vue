<template>
    <div>
        <div><strong><h4 style="text-align:left">{{ title }}</h4></strong></div>
        <div><strong><h4 style="text-align:left"></h4></strong></div>
        <div class="kolom12 judul"><img src="@/assets/hospitalbed.png" width="20px" height="20px"/> Ketersedian Tempat Tidur Kosong</div>
        <div class="kolom12 Border1" style="overflow-x:auto;">
        <table class="table table-border">
          <tr>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Kode</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Ruang Perawatan</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">VIP</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">I</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">II</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">III</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">Isolasi</th>
            <th style="text-align:center; padding-right:5px; padding-left:5px">HND</th>
          </tr>
          <tr v-for="row in hasil" v-bind:key="row">
            <td style="text-align:left; padding-left: 5px;">{{row.NMGTRFPT}}</td>
            <td style="text-align:left; padding-left: 5px;">{{row.JMLRJ}}</td>
            <td>{{row.JMLGD}}</td>
            <td>0</td>
            <td>0</td>
            <td>9</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
const url = 'http://localhost/koneksi/koneksi.php';
export default {
  data:()=>({
    title: 'Ketersedian Tempat Tidur',
    hasil:[]
  }),
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
