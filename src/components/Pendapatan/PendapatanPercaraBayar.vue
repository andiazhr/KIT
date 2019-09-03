<template>
  <div>
    <div>
      <strong>
        <h4 style="text-align:left">{{ title }}</h4>
      </strong>
    </div>
    <div class="kolom6 kolom12-m judul maLeft maLeft-m">
      <i class="fa fa-chart-bar"></i> Grafik Laporan Pendapatan Tunai Per Cara Bayar
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
      <i class="fa fa-table"></i> Detail Pendapatan Tunai Per Cara Bayar
    </div>
    <!-- <div v-if="result.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JENIS PASIEN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">TUNAI <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">KARTU KRIDIT <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">CEK/GIRO <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">DEPOSITE <br> (Rp.)</th>
        </tr>
        <tr v-for="(row,no) in result" :key="row.KODEGTRFPT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{ row.NMGTRFPT }} <strong>({{ row.NMINITPT }})</strong></td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYAR | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLTUNAI | numFormat}}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLKRTKRIDIT | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLCEKGIRO | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLDEPOSITE | numFormat}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLBAYAR | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLTUNAI | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLKRTKRIDIT | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLCEKGIRO | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{ResJMLDEPOSITE | numFormat }}</th>
        </tr>
      </table>
    </div> -->
    <div v-if="result2.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JENIS PASIEN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">TUNAI <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">KARTU KRIDIT <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">CEK/GIRO <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">DEPOSITE <br> (Rp.)</th>
        </tr>
        <tr v-for="(row,no) in result2" :key="row.KODEGTRFPT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{ row.NMGTRFPT }} <strong>({{ row.NMINITPT }})</strong></td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYAR | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLTUNAI | numFormat}}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLKRTKRIDIT | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLCEKGIRO | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLDEPOSITE | numFormat}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLBAYAR | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLTUNAI | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLKRTKRIDIT | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLCEKGIRO | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{Res2JMLDEPOSITE | numFormat }}</th>
        </tr>
      </table>
    </div>
    <!-- <div v-else class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JENIS PASIEN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH BAYAR <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">TUNAI <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">KARTU KRIDIT <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">CEK/GIRO <br> (Rp.)</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">DEPOSITE <br> (Rp.)</th>
        </tr>
        <tr v-for="(row,no) in hasil" :key="row.KODEGTRFPT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-left: 5px;">{{ row.NMGTRFPT }} <strong>({{ row.NMINITPT }})</strong></td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLBAYAR | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLTUNAI | numFormat}}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLKRTKRIDIT | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLCEKGIRO | numFormat }}</td>
          <td style="text-align:right; padding-right: 5px;">{{ row.JMLDEPOSITE | numFormat}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLBAYAR | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLTUNAI | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLKRTKRIDIT | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLCEKGIRO | numFormat }}</th>
          <th style="text-align:right; padding-right: 5px;">{{HasJMLDEPOSITE | numFormat }}</th>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<script>
/* eslint-disable */
import DatePick from "vue-date-pick";
import BarChart from "@/js/Pendapatan/pendpTunaiCB.js";
const url = "http://127.0.0.1:8000/api/pendpTunaiCB";
export default {
  components: {
    BarChart,
    DatePick
  },
  data() {
    return {
      tgl: new Date().toISOString().slice(0, 10),
      tgl2: new Date().toISOString().slice(0, 10),
      title: "Pendapatan Tunai Per Cara Bayar",
      hasil: [],
      result: [],
      result2: [],
      loaded: false
    };
  },
  computed: {
    HasJMLBAYAR() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYAR)
      }, 0)
    },
    HasJMLTUNAI() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLTUNAI)
      }, 0)
    },
    HasJMLKRTKRIDIT() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLKRTKRIDIT)
      }, 0)
    },
    HasJMLCEKGIRO() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLCEKGIRO)
      }, 0)
    },
    HasJMLDEPOSITE() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLDEPOSITE)
      }, 0)
    },
    ResJMLBAYAR() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYAR)
      }, 0)
    },
    ResJMLTUNAI() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLTUNAI)
      }, 0)
    },
    ResJMLKRTKRIDIT() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLKRTKRIDIT)
      }, 0)
    },
    ResJMLCEKGIRO() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLCEKGIRO)
      }, 0)
    },
    ResJMLDEPOSITE() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLDEPOSITE)
      }, 0)
    },
    Res2JMLBAYAR() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBAYAR)
      }, 0)
    },
    Res2JMLTUNAI() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLTUNAI)
      }, 0)
    },
    Res2JMLKRTKRIDIT() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLKRTKRIDIT)
      }, 0)
    },
    Res2JMLCEKGIRO() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLCEKGIRO)
      }, 0)
    },
    Res2JMLDEPOSITE() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLDEPOSITE)
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
