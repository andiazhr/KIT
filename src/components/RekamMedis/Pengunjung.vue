<template>
  <div>
    <div>
      <strong>
        <h4 style="text-align:left">{{ title }}</h4>
      </strong>
    </div>
    <div class="kolom6 kolom12-m judul maLeft maLeft-m">
      <i class="fa fa-chart-bar"></i> Grafik Pengunjung
    </div>

    <div class="kolom6 kolom12-m maLeft maLeft-m dateBorder">
      <div class="TopDate">
        <date-pick
          v-model="tgl"
          :inputAttributes="{readonly: true}"
          :isDateDisabled="isFutureDate"
        ></date-pick>
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
    <!-- <line-chart
      v-if="result.length > 0"
      :data="result"
      :options="{responsive: true, maintainAspectRatio: false}"
      class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
    ></line-chart> -->
    <line-chart
      v-if="result2.length > 0"
      :data="result2"
      :options="{responsive: true, maintainAspectRatio: false}"
      class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
    ></line-chart>
    <!-- <div v-else class="kolom12">
      <line-chart
        v-if="loaded"
        :data="hasil"
        :options="{responsive: true, maintainAspectRatio: false}"
        class="kolom6 kolom12-m chart chartBorder clear maLeft maLeft-m"
      ></line-chart>
    </div> -->
    <div class="kolom12 kolom12-m judul Top">
      <i class="fa fa-table"></i> Detail Pengunjung
    </div>
    <!-- <div v-if="result.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">PELAYANAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">PASIEN BARU</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">PASIEN LAMA</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">JUMLAH PASIEN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">TOTAL <br> PASIEN</th>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">LAKI-LAKI</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PEREMPUAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">LAKI-LAKI</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PEREMPUAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">BARU</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">LAMA</th>
        </tr>
        <tr v-for="(row, no) in result" :key="row.NMGRUNIT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}} <strong>({{row.NMGRUNIT}})</strong></td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLLBR}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPBR}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLLLM}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPLM}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLBR}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLLM}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLLBR}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLPBR}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLLLM}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLPLM}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLBR}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLLM}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{ResJMLPAS}}</th>
        </tr>
      </table>
    </div> -->
    <div v-if="result2.length > 0" class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">PELAYANAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">PASIEN BARU</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">PASIEN LAMA</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">JUMLAH PASIEN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">TOTAL <br> PASIEN</th>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">LAKI-LAKI</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PEREMPUAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">LAKI-LAKI</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PEREMPUAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">BARU</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">LAMA</th>
        </tr>
        <tr v-for="(row, no) in result2" :key="row.NMGRUNIT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}} <strong>({{row.NMGRUNIT}})</strong></td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLLBR}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPBR}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLLLM}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPLM}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLBR}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLLM}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLLBR}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLPBR}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLLLM}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLPLM}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLBR}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLLM}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{Res2JMLPAS}}</th>
        </tr>
      </table>
    </div>
    <!-- <div v-else class="kolom12 Border1" style="overflow-x:auto;">
      <table class="table table-border">
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">NO</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">PELAYANAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">PASIEN BARU</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">PASIEN LAMA</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">JUMLAH PASIEN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px" rowspan="2">TOTAL <br> PASIEN</th>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px">LAKI-LAKI</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PEREMPUAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">LAKI-LAKI</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">PEREMPUAN</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">BARU</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">LAMA</th>
        </tr>
        <tr v-for="(row, no) in hasil" :key="row.NMGRUNIT">
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{no+1}}</td>
          <td style="text-align:left; padding-right:5px; padding-left:5px">{{row.NMGUNIT}} <strong>({{row.NMGRUNIT}})</strong></td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLLBR}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPBR}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLLLM}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPLM}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLBR}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLLM}}</td>
          <td style="text-align:center; padding-right:5px; padding-left:5px">{{row.JMLPAS}}</td>
        </tr>
        <tr>
          <th style="text-align:center; padding-right:5px; padding-left:5px" colspan="2">TOTAL</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLLBR}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLPBR}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLLLM}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLPLM}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLBR}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLLM}}</th>
          <th style="text-align:center; padding-right:5px; padding-left:5px">{{HasJMLPAS}}</th>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<script>
/* eslint-disable */
import DatePick from "vue-date-pick";
import LineChart from "@/js/RekamMedis/pengunjungLine.js";

const url = "http://127.0.0.1:8000/api/pengunjung";
export default {
  components: {
    LineChart,
    DatePick
  },
  data() {
    return {
      tgl: new Date().toISOString().slice(0, 10),
      tgl2: new Date().toISOString().slice(0, 10),
      title: "Pengunjung",
      hasil: [],
      result: [],
      result2: [],
      loaded: false
    };
  },
  computed: {
    HasJMLLBR() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLLBR)
      }, 0)
    },
    HasJMLPBR() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPBR)
      }, 0)
    },
    HasJMLLLM() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLLLM)
      }, 0)
    },
    HasJMLPLM() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPLM)
      }, 0)
    },
    HasJMLBR() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBR)
      }, 0)
    },
    HasJMLLM() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLLM)
      }, 0)
    },
    HasJMLPAS() {
      return this.hasil.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPAS)
      }, 0)
    },
    ResJMLLBR() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLLBR)
      }, 0)
    },
    ResJMLPBR() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPBR)
      }, 0)
    },
    ResJMLLLM() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLLLM)
      }, 0)
    },
    ResJMLPLM() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPLM)
      }, 0)
    },
    ResJMLBR() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBR)
      }, 0)
    },
    ResJMLLM() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLLM)
      }, 0)
    },
    ResJMLPAS() {
      return this.result.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPAS)
      }, 0)
    },
    Res2JMLLBR() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLLBR)
      }, 0)
    },
    Res2JMLPBR() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPBR)
      }, 0)
    },
    Res2JMLLLM() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLLLM)
      }, 0)
    },
    Res2JMLPLM() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLPLM)
      }, 0)
    },
    Res2JMLBR() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLBR)
      }, 0)
    },
    Res2JMLLM() {
      return this.result2.reduce(function (sum, row) {
        return sum + parseInt(row.JMLLM)
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
    requestData: function() {
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
