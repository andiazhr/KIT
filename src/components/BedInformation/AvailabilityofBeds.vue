<template>
    <div>
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
            <td style="text-align:left; padding-left: 5px;">{{row.first_name}}</td>
            <td style="text-align:left; padding-left: 5px;">R. DAHLIA 5</td>
            <td>0</td>
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
export default {
  data:()=>({
    hasil:[]
  }),
  mounted() {
    this.axios.get('http://localhost/latihan/json.php').then((response) => {
    console.log(response.data); 
    this.hasil =response.data;
})
  }
}
</script>

<style>

</style>
