<template>
  <div>
    <div>
      <strong>
        <h4 style="text-align:left">{{ title }}</h4>
      </strong>
    </div>
    <div class="kolom6 kolom12-m judul maLeft maLeft-m">
      <i class="fa fa-dot-circle"></i> Grafik Semua Kunjungan Pasien Rawat Jalan Per Poli
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
      <div class="kolom2 TopDate leftSelect2">
        <input type="number" class="form-control" v-model="jumlah" />
      </div>
      <div class="kolom12">
        <p style="color: red;">*Kosongkan atau Isi 0 untuk menampilkan semua data</p>
      </div>
    </div>
    <!-- <div v-if="result.length > 0">
      <dougnut
        v-if="result.length > 0"
        :data="result"
        class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
      ></dougnut>
    </div>
    <div v-if="result2.length > 0">
      <dougnut
        v-if="result2.length > 0"
        :data="result2"
        class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
      ></dougnut>
    </div> -->
    <div v-if="result3.length > 0">
      <dougnut
        v-if="result3.length > 0"
        :data="result3"
        class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
      ></dougnut>
    </div>
    <!-- <div v-else class="kolom12">
      <dougnut
        v-if="loaded"
        :data="hasil"
        class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
      ></dougnut>
    </div> -->
    <div class="kolom12 kolom12-m judul Top">
      <i class="fa fa-table"></i> Detail Semua Kunjungan Pasien Rawat Jalan Per Poli
    </div>
    <!-- <div v-if="result.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA UNIT</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">KODE BAGIAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA BAGIAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH PASIEN</th>
        </tr>
        <tr v-for="(row,no) in result" :key="row.GRPUNIT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.KODEBAGIAN}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NAMABAGIAN}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="4">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLPAS}}</th>
        </tr>
      </table>
    </div> -->
    <!-- <div v-else-if="result2.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA UNIT</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">KODE BAGIAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA BAGIAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH PASIEN</th>
        </tr>
        <tr v-for="(row,no) in result2" :key="row.GRPUNIT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.KODEBAGIAN}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NAMABAGIAN}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="4">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLPAS}}</th>
        </tr>
      </table>
    </div> -->
    <div v-if="result3.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA UNIT</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">KODE BAGIAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA BAGIAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH PASIEN</th>
        </tr>
        <tr v-for="(row,no) in result3" :key="row.KODEBAGIAN">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.KODEBAGIAN}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NAMABAGIAN}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="4">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res3JMLPAS}}</th>
        </tr>
      </table>
    </div>
    <!-- <div v-else class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA UNIT</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">KODE BAGIAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">NAMA BAGIAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">JUMLAH PASIEN</th>
        </tr>
        <tr v-for="(row,no) in hasil" :key="row.GRPUNIT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.KODEBAGIAN}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NAMABAGIAN}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="4">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLPAS}}</th>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<script>
/* eslint-disable */
import DatePick from "vue-date-pick";
import Dougnut from "@/js/RekamMedis/kunjPasRajalDonut.js";
import LineChart from "@/js/RekamMedis/kunjPasRajalPie.js";

const url = "http://127.0.0.1:8000/api/Kunjpasrajal";
export default {
  components: {
    Dougnut,
    LineChart,
    DatePick
  },
  data() {
    return {
      tgl: new Date().toISOString().slice(0, 10),
      tgl2: new Date().toISOString().slice(0, 10),
      jumlah: null,
      title: "Kunjungan Pasien Rawat Jalan Per Poli",
      hasil: [],
      result: [],
      result2: [],
      result3: [],
      loaded: false,
      loaded2: false,
      loaded3: false,
      loaded4: false
    };
  },
  computed: {
    HasJMLPAS() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPAS)
      }, 0)
    },
    ResJMLPAS() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPAS)
      }, 0)
    },
    Res2JMLPAS() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPAS)
      }, 0)
    },
    Res3JMLPAS() {
      return this.result3.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPAS)
      }, 0)
    },
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
      this.jumlahData();
    },
    tgl2(after, before) {
      this.jumlahData();
    },
    jumlah(after, before) {
      this.jumlahData();
    }
  },
  mounted() {
    this.requestData();
    this.oneDate();
    this.twoDate();
    this.jumlahData();
  },
  methods: {
    requestData() {
      this.axios.get(url).then(response => {
        this.hasil = response.data;
        this.loaded = true;
      });
    },
    oneDate() {
      this.axios.get(url + "/" + this.tgl).then(response => {
        this.result = response.data;
        this.loaded2 = true;
      });
    },
    twoDate() {
      this.axios.get(url + "/" + this.tgl + "/" + this.tgl2).then(response => {
        this.result2 = response.data;
        this.loaded3 = true;
      });
    },
    jumlahData() {
      this.axios
        .get(url + "/" + this.tgl + "/" + this.tgl2 + "/" + this.jumlah)
        .then(response => {
          this.result3 = response.data;
          this.loaded4 = true;
        });
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
