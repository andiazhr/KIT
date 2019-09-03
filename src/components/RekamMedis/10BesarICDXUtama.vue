<template>
  <div>
    <div>
      <strong>
        <h4 style="text-align:left">{{ title }}</h4>
      </strong>
    </div>
    <div class="maLeft maLeft-m kolom6 kolom12-m judul">
      <i class="fa fa-chart-pie"></i> 10 Besar ICD X Utama
    </div>
    <div class="kolom6 kolom12-m maLeft maLeft-m dateBorder">
      <div class="TopDate">
        <date-pick
          v-model="tgl"
          :inputAttributes="{readonly: false}"
          :isDateDisabled="isFutureDate"
        ></date-pick>
      </div>
      <div class="TopDate">
        <date-pick
          v-model="tgl2"
          :inputAttributes="{readonly: false}"
          :isDateDisabled="isFutureDate"
        ></date-pick>
      </div>
      <!-- <div class="TopDate"><date-picker v-model="tgl" :lang="lang"></date-picker><date-picker v-model="tgl2" :lang="lang"></date-picker></div> -->
      <!-- <div class="kolom3 TopDate LeftDate"><input v-model="tgl" type="number" class="form-control"></div>
      <div class="kolom3 TopDate LeftDate"><input v-model="tgl2" type="number" class="form-control"></div>-->
      <v-select
        v-model="pilih"
        :options="options"
        class="kolom5 kolom8-m TopDate leftSelect leftSelect-m"
      ></v-select>
    </div>
    <pie-chart
      v-if="result.length > 0"
      :data="result"
      class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
    ></pie-chart>
    <pie-chart
      v-if="result2.length > 0"
      :data="result2"
      class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
    ></pie-chart>
    <pie-chart
      v-if="result3.length > 0"
      :data="result3"
      class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
    ></pie-chart>
    <div v-else class="kolom12">
      <pie-chart
        v-if="loaded"
        :data="hasil"
        class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
      ></pie-chart>
    </div>
    <div class="kolom12 judul Top">
      <i class="fa fa-table"></i> Detail Pendapatan Tunai Per Cara Bayar
    </div>
    <div v-if="result.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center;">NO</th>
          <th style="text-align:center;">KATEGORI</th>
          <th style="text-align:center;">NAMA UNIT</th>
          <th style="text-align:center;">REMARK</th>
          <th style="text-align:center;">JUMLAH</th>
        </tr>
        <tr v-for="row in result" :key="row.CATEGORI">
          <td style="text-align:center;">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{row.CATEGORI}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.REMARK}}</td>
          <td style="text-align:center;">{{row.jml}}</td>
        </tr>
        <tr>
          <th style="text-align:center;" colspan="4">TOTAL</th>
          <th style="text-align:center;">{{ResJMLPAS}}</th>
        </tr>
      </table>
    </div>
    <div v-else-if="result2.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center;">NO</th>
          <th style="text-align:center;">KATEGORI</th>
          <th style="text-align:center;">NAMA UNIT</th>
          <th style="text-align:center;">REMARK</th>
          <th style="text-align:center;">JUMLAH</th>
        </tr>
        <tr v-for="(row, no) in result2" :key="row.CATEGORI">
          <td style="text-align:center;">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{row.CATEGORI}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.REMARK}}</td>
          <td style="text-align:center;">{{row.jml}}</td>
        </tr>
        <tr>
          <th style="text-align:center;" colspan="4">TOTAL</th>
          <th style="text-align:center;">{{Res2JMLPAS}}</th>
        </tr>
      </table>
    </div>
    <div v-else-if="result3.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center;">NO</th>
          <th style="text-align:center;">KATEGORI</th>
          <th style="text-align:center;">NAMA UNIT</th>
          <th style="text-align:center;">REMARK</th>
          <th style="text-align:center;">JUMLAH</th>
        </tr>
        <tr v-for="(row, no) in result3" :key="row.CATEGORI">
          <td style="text-align:center;">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{row.CATEGORI}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.REMARK}}</td>
          <td style="text-align:center;">{{row.jml}}</td>
        </tr>
        <tr>
          <th style="text-align:center;" colspan="4">TOTAL</th>
          <th style="text-align:center;">{{Res3JMLPAS}}</th>
        </tr>
      </table>
    </div>
    <div v-else class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center;">NO</th>
          <th style="text-align:center;">KATEGORI</th>
          <th style="text-align:center;">NAMA UNIT</th>
          <th style="text-align:center;">REMARK</th>
          <th style="text-align:center;">JUMLAH</th>
        </tr>
        <tr v-for="(row, no) in hasil" :key="row.CATEGORI">
          <td style="text-align:center;">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{row.CATEGORI}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.REMARK}}</td>
          <td style="text-align:center;">{{row.jml}}</td>
        </tr>
        <tr>
          <th style="text-align:center;" colspan="4">TOTAL</th>
          <th style="text-align:center;">{{HasJMLPAS}}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import DatePick from "vue-date-pick";
import PieChart from "@/js/RekamMedis/besarICDXUtama.js";
const url = "http://127.0.0.1:8000/api/ICDX";
export default {
  components: {
    PieChart,
    DatePick
  },
  data() {
    return {
      tgl: new Date().toISOString().slice(0, 10),
      tgl2: new Date().toISOString().slice(0, 10),
      pilih: "Rawat Gawat Darurat",
      options: [
        "Semua Jenis Rawat",
        "Rawat Gawat Darurat",
        "Rawat Inap",
        "Rawat Jalan",
      ],
      title: "Daftar 10 Besar Penyakit ICD X",
      hasil: [],
      result: [],
      result2: [],
      result3: [],
      loaded: false
    };
  },
  computed: {
    HasJMLPAS() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.jml)
      }, 0)
    },
    ResJMLPAS() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.jml)
      }, 0)
    },
    Res2JMLPAS() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.jml)
      }, 0)
    },
    Res3JMLPAS() {
      return this.result3.reduce(function (sum, row) {
        return sum + parseInt(row.jml)
      }, 0)
    }
  },
  watch: {
    tgl(after, before) {
      this.oneDate();
    },
    tgl(after, before) {
      this.twoDate();
    },
    tgl2(after, before) {
      this.twoDate();
    },
    tgl(after, before) {
      this.threeParam();
    },
    tgl2(after, before) {
      this.threeParam();
    },
    pilih(after, before) {
      this.threeParam();
    }
  },
  mounted() {
    this.requestData();
    this.oneDate();
    this.twoDate();
    this.threeParam();
  },
  methods: {
    requestData() {
      this.axios.get(url).then(response => {
        (this.hasil = response.data), (this.loaded = true);
      });
    },
    oneDate() {
      this.axios
        .get(url + "/" + this.tgl)
        .then(response => (this.result = response.data))
        .catch(error => {});
    },
    twoDate() {
      this.axios
        .get(url + "/" + this.tgl + "/" + this.tgl2)
        .then(response => (this.result2 = response.data))
        .catch(error => {});
    },
    threeParam() {
      this.axios
        .get(url + "/" + this.tgl + "/" + this.tgl2 + "/" + this.pilih)
        .then(response => (this.result3 = response.data))
        .catch(error => {});
    },
    isFutureDate(date) {
      const currentDate = new Date();
      return date > currentDate;
    }
  }
};
</script>

<style>
</style>
