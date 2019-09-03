<template>
  <div>
    <div>
      <h4>{{ title }}</h4>
    </div>
    <div class="kolom12">
      <div class="daLeft daLeft-m kolom5 kolom12-m judul1">
        <img src="@/assets/earth.png" width="20px" height="20px" /> 10 Besar ICD X Utama
      </div>
      <pie-chart
        v-if="loaded"
        :chart-data="hasil"
        class="daLeft daLeft-m kolom5 kolom12-m chart chartBorder1 clear"
      ></pie-chart>
      <div class="daLeft daLeft-m kolom5 kolom12-m judul2 TopDash TopDash-m Top-m">
        <img src="@/assets/firstaid.png" width="20px" height="20px" /> Kunjungan Pasien Per Bagian
      </div>
      <bar-chart
        v-if="loaded2"
        :chart-data="hasil2"
        class="daLeft daLeft-m kolom5 kolom12-m chart chartBorder2"
      ></bar-chart>
      <div class="kolom12 kolom12-m judul3 Top Top-m">
        <img src="@/assets/earth.png" width="20px" height="20px" /> Kunjungan Pasien
      </div>
      <line-chart
        v-if="loaded3"
        :chart-data="hasil3"
        :height="300"
        class="kolom12 kolom12-m chart chartBorder3"
      ></line-chart>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import PieChart from "@/js/Dashboard/PieChart.js";
import LineChart from "@/js/Dashboard/LineChart.js";
import BarChart from "@/js/Dashboard/BarChart.js";

const url = "http://127.0.0.1:8000/api/ICDX";
const url2 = "http://127.0.0.1:8000/api/Kunjpasrajal";
const url3 = "http://127.0.0.1:8000/api/pengunjung";
export default {
  components: {
    PieChart,
    BarChart,
    LineChart
  },
  data() {
    return {
      title: "Dashboard",
      hasil: [],
      hasil2: [],
      hasil3: [],
      loaded: false,
      loaded2: false,
      loaded3: false
    };
  },
  mounted() {
    this.requestData();
    this.requestData2();
    this.requestData3();
  },
  methods: {
    requestData() {
      this.axios.get(url).then(response => {
        (this.hasil = response.data), (this.loaded = true);
      });
    },
    requestData2() {
      this.axios.get(url2).then(response => {
        (this.hasil2 = response.data), (this.loaded2 = true);
      });
    },
    requestData3() {
      this.axios.get(url3).then(response => {
        (this.hasil3 = response.data), (this.loaded3 = true);
      });
    }
  }
};
</script>

<style>
.judul1 {
  background-color: rgba(128, 42, 240, 1);
  height: 35px;
  color: white;
  text-align: left;
  font-size: 15px;
  padding: 5px 0 0 10px;
}
.chartBorder1 {
  border-right: 1px solid rgba(128, 42, 240, 1);
  border-bottom: 1px solid rgba(128, 42, 240, 1);
  border-left: 1px solid rgba(128, 42, 240, 1);
  padding: 15px;
}
.judul2 {
  background-color: rgba(15, 154, 204, 1);
  height: 35px;
  color: white;
  text-align: left;
  font-size: 15px;
  padding: 5px 0 0 10px;
}
.chartBorder2 {
  border-right: 1px solid rgba(15, 154, 204, 1);
  border-bottom: 1px solid rgba(15, 154, 204, 1);
  border-left: 1px solid rgba(15, 154, 204, 1);
  padding: 15px;
}
.judul3 {
  background-color: rgba(184, 184, 184, 1);
  height: 35px;
  color: white;
  text-align: left;
  font-size: 15px;
  padding: 5px 0 0 10px;
}
.chartBorder3 {
  border-right: 1px solid rgba(184, 184, 184, 1);
  border-bottom: 1px solid rgba(184, 184, 184, 1);
  border-left: 1px solid rgba(184, 184, 184, 1);
  padding: 15px;
}
</style>
