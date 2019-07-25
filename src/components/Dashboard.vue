<template>
    <div>
        <div><h4>{{ title }}</h4></div>
        <div class="kolom12">
        <div class="daLeft daLeft-m kolom5 kolom12-m judul1"><img src="@/assets/earth.png" width="20px" height="20px"/> 10 Besar ICD X Utama</div>
        <pie-chart />
        <div class="daLeft daLeft-m kolom5 kolom12-m judul2 TopDash TopDash-m Top-m"><img src="@/assets/firstaid.png" width="20px" height="20px"/> Kunjungan Pasien Per Bagian</div>
        <bar-chart />
        <line-chart />
        </div>
        </div>
</template>

<script>
import PieChart from '../components/Chart/Dashboard/PieChart.vue'
import BarChart from '../components/Chart/Dashboard/BarChart.vue'
import LineChart from '../components/Chart/Dashboard/LineChart.vue'
export default {
  components: {
    PieChart, BarChart, LineChart
  },
  data () {
    return {
      title: 'Dashboard'
    }
  }
}
</script>

<style>
.judul1{
background-color: rgba(128, 42, 240, 1);
height: 35px;
color: white;
text-align: left;
font-size: 15px;
padding: 5px 0 0 10px;
}
.chartBorder1{
border-right: 1px solid rgba(128, 42, 240, 1);
border-bottom: 1px solid rgba(128, 42, 240, 1);
border-left: 1px solid rgba(128, 42, 240, 1);
padding-bottom: 15px;
}
.judul2{
background-color: rgba(15, 154, 204, 1);
height: 35px;
color: white;
text-align: left;
font-size: 15px;
padding: 5px 0 0 10px;
}
.chartBorder2{
border-right: 1px solid rgba(15, 154, 204, 1);
border-bottom: 1px solid rgba(15, 154, 204, 1);
border-left: 1px solid rgba(15, 154, 204, 1);
padding-bottom: 15px;
}
.judul3{
background-color: rgba(184, 184, 184, 1);
height: 35px;
color: white;
text-align: left;
font-size: 15px;
padding: 5px 0 0 10px;
}
.chartBorder3{
border-right: 1px solid rgba(184, 184, 184, 1);
border-bottom: 1px solid rgba(184, 184, 184, 1);
border-left: 1px solid rgba(184, 184, 184, 1);
padding-bottom: 15px;
}
</style>
