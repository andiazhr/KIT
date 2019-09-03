<template>
  <div>
    <div>
      <strong>
        <h4 style="text-align:left">{{ title }}</h4>
      </strong>
    </div>
    <div class="kolom6 kolom12-m judul maLeft maLeft-m">
      <i class="fa fa-chart-bar"></i> Grafik Kunjungan Pasien Rawat Jalan per jenis pasien
    </div>

    <div class="kolom6 kolom12-m maLeft maLeft-m dateBorder">
      <div class="TopDate">
        <date-pick v-model="tgl" :inputAttributes="{readonly: true}" :isDateDisabled="isFutureDate"></date-pick>
      </div>
      <div class="TopDate">
        <date-pick
          v-model="tgl2"
          :inputAttributes="{readonly: true}"
          :isDateDisabled="isFutureDate"
        ></date-pick>
      </div>
      <!-- <div class="kolom3 TopDate LeftDate"><input v-model="tgl" type="number" class="form-control"></div>
      <div class="kolom3 TopDate LeftDate"><input v-model="tgl2" type="number" name="plhtanggal2" class="form-control"></div>-->
    </div>
    <!-- <bar-chart
      v-if="result.length > 0"
      :data="result"
      class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
    ></bar-chart> -->
    <bar-chart
      v-if="result2.length > 0"
      :data="result2"
      class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
    ></bar-chart>
    <!-- <div v-else class="kolom12">
      <bar-chart
        v-if="loaded"
        :data="hasil"
        class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
      ></bar-chart>
    </div> -->
    <div class="kolom12 kolom12-m judul Top">
      <i class="fa fa-table"></i> Detail Kunjungan Pasien Rawat Jalan per jenis pasien
    </div>
    <!-- <div v-if="result.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA GRUP</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">GAWAT DARURAT</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT INAP</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT JALAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH PASIEN</th>
        </tr>
        <tr v-for="(row,no) in result" :key="row.NMGTRFPT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGTRFPT}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLGD}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLRI}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLRJ}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLGD}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLRI}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLRJ}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLPAS}}</th>
        </tr>
      </table>
    </div> -->
    <div v-if="result2.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA GRUP</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">GAWAT DARURAT</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT INAP</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT JALAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH PASIEN</th>
        </tr>
        <tr v-for="(row,no) in result2" :key="row.NMGTRFPT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGTRFPT}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLGD}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLRI}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLRJ}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLGD}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLRI}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLRJ}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLPAS}}</th>
        </tr>
      </table>
    </div>
    <!-- <div v-else class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA GRUP</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">GAWAT DARURAT</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT INAP</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT JALAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH PASIEN</th>
        </tr>
        <tr v-for="(row,no) in hasil" :key="row.NMGTRFPT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGTRFPT}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLGD}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLRI}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLRJ}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLGD}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLRI}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLRJ}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLPAS}}</th>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<script>
/* eslint-disable */
import DatePick from "vue-date-pick";
import BarChart from "@/js/RekamMedis/kunjPasienBar.js";
import LineChart from "@/js/RekamMedis/kunjPasienLine.js";

const url = "http://127.0.0.1:8000/api/Kunjpasien";
export default {
  components: {
    BarChart,
    LineChart,
    DatePick
  },
  data() {
    return {
      tgl: new Date().toISOString().slice(0, 10),
      tgl2: new Date().toISOString().slice(0, 10),
      title: "Kunjungan Pasien Rawat Jalan Per Jenis Pasien",
      hasil: [],
      result: [],
      result2: [],
      loaded: false
    };
  },
  computed: {
    HasJMLGD() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLGD)
      }, 0)
    },
    HasJMLRI() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLRI)
      }, 0)
    },
    HasJMLRJ() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLRJ)
      }, 0)
    },
    HasJMLPAS() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPAS)
      }, 0)
    },
    ResJMLGD() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLGD)
      }, 0)
    },
    ResJMLRI() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLRI)
      }, 0)
    },
    ResJMLRJ() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLRJ)
      }, 0)
    },
    ResJMLPAS() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPAS)
      }, 0)
    },
    Res2JMLGD() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLGD)
      }, 0)
    },
    Res2JMLRI() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLRI)
      }, 0)
    },
    Res2JMLRJ() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLRJ)
      }, 0)
    },
    Res2JMLPAS() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPAS)
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
    }
  },
  mounted() {
    this.requestData();
    this.oneDate();
    this.twoDate();
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
    isFutureDate(date) {
      const currentDate = new Date();
      return date > currentDate;
    }
  }
};
</script>

<style>
</style>
