<template>
  <div>
    <div>
      <strong>
        <h4 style="text-align:left">{{ title }}</h4>
      </strong>
    </div>
    <div class="kolom6 kolom12-m judul maLeft maLeft-m">
      <i class="fa fa-chart-bar"></i> Grafik Laporan Pendapatan Realisasi Klaim
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
      <div class="kolom3 TopDate LeftDate"><input v-model="tgl2" type="number" class="form-control"></div>-->
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
    <div class="kolom12 judul Top">
      <i class="fa fa-table"></i> Detail Pendapatan Realisasi Klaim
    </div>
    <!-- <div v-if="result.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA GRUP</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR <br> (Rp.)</th>
          <th
            style="text-align:center; padding-right:5px; padding-left:5px"
          >RAWAT JALAN <br> (Rp.)</th>
          <th
            style="text-align:center; padding-right:5px; padding-left:5px"
          >RAWAT DARURAT <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT INAP <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PENUNJANG MEDIS <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PENUNJANG NON MEDIS <br> (Rp.)</th>
        </tr>
        <tr v-for="(row,no) in result" :key="row.NMGTRFPT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{ row.NMGTRFPT }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYAR | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRJ | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRD | numFormat}}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRI | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARPM | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARNM | numFormat}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLBAYAR | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLBAYARRJ | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLBAYARRD | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLBAYARRI | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLBAYARPM | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLBAYARNM | numFormat }}</th>
        </tr>
      </table>
    </div> -->
    <div v-if="result2.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
       <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">Jenis Pasien</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR <br> (Rp.)</th>
          <th
            style="text-align:center; padding-right:5px; padding-left:5px"
          >RAWAT JALAN <br> (Rp.)</th>
          <th
            style="text-align:center; padding-right:5px; padding-left:5px"
          >RAWAT DARURAT <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT INAP <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PENUNJANG MEDIS <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PENUNJANG NON MEDIS <br> (Rp.)</th>
        </tr>
        <tr v-for="(row,no) in result2" :key="row.NMGTRFPT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{ row.NMGTRFPT }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYAR | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRJ | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRD | numFormat}}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRI | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARPM | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARNM | numFormat}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLBAYAR | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLBAYARRJ | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLBAYARRD | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLBAYARRI | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLBAYARPM | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLBAYARNM | numFormat }}</th>
        </tr>
      </table>
    </div>
    <!-- <div v-else class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JENIS PASIEN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PENDAPATAN KLAIM <br> (Rp.)</th>
          <th
            style="text-align:center; padding-right:5px; padding-left:5px"
          >RAWAT JALAN <br> (Rp.)</th>
          <th
            style="text-align:center; padding-right:5px; padding-left:5px"
          >RAWAT DARURAT <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">RAWAT INAP <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PENUNJANG MEDIS <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PENUNJANG NON MEDIS <br> (Rp.)</th>
        </tr>
        <tr v-for="(row,no) in hasil" :key="row.NMGTRFPT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{ row.NMGTRFPT }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYAR | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRJ | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRD | numFormat}}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARRI | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARPM | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYARNM | numFormat}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLBAYAR | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLBAYARRJ | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLBAYARRD | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLBAYARRI | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLBAYARPM | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLBAYARNM | numFormat }}</th>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<script>
/* eslint-disable */
import DatePick from "vue-date-pick";
import BarChart from "@/js/Pendapatan/pendpKlaim.js";
const url = "http://127.0.0.1:8000/api/pendpKlaim";
export default {
  components: {
    BarChart,
    DatePick
  },
  data() {
    return {
      tgl: new Date().toISOString().slice(0, 10),
      tgl2: new Date().toISOString().slice(0, 10),
      title: "Pendapatan Realisasi Klaim",
      hasil: [],
      result: [],
      result2: [],
      loaded: false,
      loaded2: false
    };
  },
  computed: {
    HasJMLBAYAR() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYAR)
      }, 0)
    },
    HasJMLBAYARRJ() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARRJ)
      }, 0)
    },
    HasJMLBAYARRD() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARRD)
      }, 0)
    },
    HasJMLBAYARRI() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARRI)
      }, 0)
    },
    HasJMLBAYARPM() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARPM)
      }, 0)
    },
    HasJMLBAYARNM() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARNM)
      }, 0)
    },
    ResJMLBAYAR() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYAR)
      }, 0)
    },
    ResJMLBAYARRJ() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARRJ)
      }, 0)
    },
    ResJMLBAYARRD() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARRD)
      }, 0)
    },
    ResJMLBAYARRI() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARRI)
      }, 0)
    },
    ResJMLBAYARPM() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARPM)
      }, 0)
    },
    ResJMLBAYARNM() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARNM)
      }, 0)
    },
    Res2JMLBAYAR() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYAR)
      }, 0)
    },
    Res2JMLBAYARRJ() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARRJ)
      }, 0)
    },
    Res2JMLBAYARRD() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARRD)
      }, 0)
    },
    Res2JMLBAYARRI() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARRI)
      }, 0)
    },
    Res2JMLBAYARPM() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARPM)
      }, 0)
    },
    Res2JMLBAYARNM() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYARNM)
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
        .then(response => (this.result2 = response.data), (this.loaded2 = true))
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
