// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import numFormat from 'vue-filter-number-format'
import vuescroll from 'vue-scroll'

import Dashboard from './components/Dashboard.vue'
// Bed Information
import AvailabilityofBeds from './components/BedInformation/AvailabilityofBeds.vue'
import BedInformation from './components/BedInformation/BedInformation.vue'
// Rekam Medis
import BesarICDXUtama from './components/RekamMedis/10BesarICDXUtama.vue'
import BesarPenyakitPerWilayah from './components/RekamMedis/10BesarPenyakitPerWilayah.vue'
import BesarPenyakitWilayahKecamatan from './components/RekamMedis/BesarPenyakitWilayahKecamatan.vue'
import Tindakan from './components/RekamMedis/10Tindakan.vue'
import KunjunganPasienRawatJalanPerJenisPasien from './components/RekamMedis/KunjunganPasienRawatJalanPerJenisPasien.vue'
import KunjunganPasienRawatJalanPerSMF from './components/RekamMedis/KunjunganPasienRawatJalanPerSMF.vue'
import KunjunganPasienRawatJalanPerPoli from './components/RekamMedis/KunjunganPasienRawatJalanPerPoli.vue'
import SensusRanapKelas from './components/RekamMedis/SensusRanapKelas.vue'
import SensusRanapUnit from './components/RekamMedis/SensusRanapUnit.vue'
import BORLOSTOI from './components/RekamMedis/BORLOSTOI.vue'
// Info Antrian
import InfoAntrianIBS from './components/InfoAntrian/InfoAntrianIBS.vue'
import InfoAntrianFarmasi from './components/InfoAntrian/InfoAntrianFarmasi.vue'
import InfoAntrianPoliklinik from './components/InfoAntrian/InfoAntrianPoliklinik.vue'
// Pendapatan
import PendapatanPercaraBayar from './components/pendapatan/PendapatanPercaraBayar.vue'
import PendapatanTunai from './components/pendapatan/PendapatanTunai.vue'
import PendapatanRealisasiKlaim from './components/pendapatan/PendapatanRealisasiKlaim.vue'
import PendapatanRealisasiKlaimPiutang from './components/pendapatan/PendapatanRealisasiKlaimPiutang.vue'

require('./assets/kit.css')

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(VueAxios, axios)
Vue.filter('numFormat', numFormat)
Vue.use(vuescroll)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {// Bed Informatioan
      path: '/AvailabilityofBeds',
      name: 'AvailabilityofBeds',
      component: AvailabilityofBeds
    },
    {
      path: '/BedInformation',
      name: 'BedInformation',
      component: BedInformation
    },
    {// Rekam Medis
      path: '/BesarICDXUtama',
      name: 'BesarICDXUtama',
      component: BesarICDXUtama
    },
    {
      path: '/BesarPenyakitPerWilayah',
      name: 'BesarPenyakitPerWilayah',
      component: BesarPenyakitPerWilayah
    },
    {
      path: '/BesarPenyakitWilayahKecamatan',
      name: 'BesarPenyakitWilayahKecamatan',
      component: BesarPenyakitWilayahKecamatan
    },
    {
      path: '/Tindakan',
      name: 'Tindakan',
      component: Tindakan
    },
    {
      path: '/KunjunganPasienRawatJalanPerJenisPasien',
      name: 'KunjunganPasienRawatJalanPerJenisPasien',
      component: KunjunganPasienRawatJalanPerJenisPasien
    },
    {
      path: '/KunjunganPasienRawatJalanPerSMF',
      name: 'KunjunganPasienRawatJalanPerSMF',
      component: KunjunganPasienRawatJalanPerSMF
    },
    {
      path: '/KunjunganPasienRawatJalanPerPoli',
      name: 'KunjunganPasienRawatJalanPerPoli',
      component: KunjunganPasienRawatJalanPerPoli
    },
    {
      path: '/SensusRanapKelas',
      name: 'SensusRanapKelas',
      component: SensusRanapKelas
    },
    {
      path: '/SensusRanapUnit',
      name: 'SensusRanapUnit',
      component: SensusRanapUnit
    },
    {
      path: '/BORLOSTOI',
      name: 'BORLOSTOI',
      component: BORLOSTOI
    },
    {// Info Antrian
      path: '/InfoAntrianIBS',
      name: 'InfoAntrianIBS',
      component: InfoAntrianIBS
    },
    {
      path: '/InfoAntrianFarmasi',
      name: 'InfoAntrianFarmasi',
      component: InfoAntrianFarmasi
    },
    {
      path: '/InfoAntrianPoliklinik',
      name: 'InfoAntrianPoliklinik',
      component: InfoAntrianPoliklinik
    },
    {// Pendapatan
      path: '/PendapatanPercaraBayar',
      name: 'PendapatanPercaraBayar',
      component: PendapatanPercaraBayar
    },
    {
      path: '/PendapatanTunai',
      name: 'PendapatanTunai',
      component: PendapatanTunai
    },
    {
      path: '/PendapatanRealisasiKlaim',
      name: 'PendapatanRealisasiKlaim',
      component: PendapatanRealisasiKlaim
    },
    {
      path: '/PendapatanRealisasiKlaimPiutang',
      name: 'PendapatanRealisasiKlaimPiutang',
      component: PendapatanRealisasiKlaimPiutang
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
