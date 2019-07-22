<template>
    <div id="demo" :class="[{'collapsed' : collapsed}]">
      <div class="demo">
        <div class="container">
        <sidebar-menu :menu="menu" class="sidebar"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @collapse="onCollapse"
        @item-click="onItemClick"/>
        <img src="./assets/KIT.png" class="imgHeader"/>
        <div class="selTheme">
          Select theme:
          <select v-model="selectedTheme">
            <option
              v-for="(theme, index) in themes"
              :key="index"
            >
              {{ theme == '' ? 'default-theme' : theme }}
            </option>
          </select>
        </div>
        <div><h3>{{ msg }}</h3></div>
        <router-view />
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome To Dashboard Krakatau Information Technology',
      menu: [
        {
          header: true,
          title: 'Krakatau Information Technology'
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-bar-chart'
        },
        {
          href: '',
          title: 'Bed Information',
          icon: 'fa fa-bed',
          child: [
            {
              href: '/AvailabilityofBeds',
              title: '1.1 Ketersedian Tempat Tidur'
            },
            {
              href: '/BedInformation',
              title: '1.2 Informasi Tempat Tidur'
            }
          ]
        },
        {
          href: '',
          title: 'Rekam Medis',
          icon: 'fa fa-list-ul',
          child: [
            {
              href: '/BesarICDXUtama',
              title: '2.1 10 Besar ICD X Utama'
            },
            {
              href: '/BesarPenyakitPerWilayah',
              title: '2.2 10 Besar Penyakit (ICD-10) Per Wilayah'
            },
            {
              href: '/BesarPenyakitWilayahKecamatan',
              title: '2.3 Besar Penyakit (ICD-10) Per Wilayah Per Kecamatan'
            },
            {
              href: '/Tindakan',
              title: '2.4 10 Tindakan (ICD-9CM)'
            },
            {
              href: '/KunjunganPasienRawatJalanPerJenisPasien',
              title: '2.5 Kunjungan Pasien Rawat Jalan Per Jenis Pasien'
            },
            {
              href: '/KunjunganPasienRawatJalanPerSMF',
              title: '2.6 Kunjungan Pasien Rawat Jalan Per SMF'
            },
            {
              href: '/KunjunganPasienRawatJalanPerPoli',
              title: '2.7 Kunjungan Pasien Rawat Jalan Per Poli'
            },
            {
              href: '/SensusRanapKelas',
              title: '2.8 Sensus Ranap Kelas'
            },
            {
              href: '/SensusRanapUnit',
              title: '2.9 Sensus Ranap Unit'
            },
            {
              href: '/BORLOSTOI',
              title: '2.10 BOR, LOS, TOI'
            }
          ]
        },
        {
          href: '',
          title: 'Info Antrian',
          icon: 'fa fa-pencil-square',
          child: [
            {
              href: '/InfoAntrianIBS',
              title: '3.1 Info Antrian IBS'
            },
            {
              href: '/InfoAntrianFarmasi',
              title: '3.2 Info Antrian Farmasi'
            },
            {
              href: '/InfoAntrianPoliklinik',
              title: '3.3 Info Antrian Poliklinik'
            }
          ]
        },
        {
          href: '',
          title: 'Pendapatan',
          icon: 'fa fa-money',
          child: [
            {
              href: '/PendapatanPercaraBayar',
              title: '4.1 Pendapatan Percara Bayar'
            },
            {
              href: '/PendapatanRealisasiKlaim',
              title: '4.2 Pendapatan Realisasi Klaim'
            },
            {
              href: '/PendapatanRealisasiKlaimPiutang',
              title: '4.3 Pendapatan Realisasi Klaim & Piutang'
            }
          ]
        }
      ],
      collapsed: false,
      themes: ['', 'white-theme'],
      selectedTheme: 'white-theme'
    }
  },
  methods: {
    onCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
      // console.log(event)
      // console.log(item)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css');
body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #f2f4f7;
}

#demo {
  text-align: center;
}
.sidebar{
  text-align: left;
}
#demo.collapsed {
  padding-left: 0;
}

.demo {
  padding: 10px 10px 0 10px;
}

.container {
  max-width: 1200px;
  padding-bottom: 40px;
  padding-left: 65px;
}

pre {
  color: #2a2a2e;
  background: #fff;
  border-radius: 2px;
  padding: 10px;
  overflow: auto;
}

.imgHeader{
   width: 230px;
   height: 60px;
}

.selTheme{
    margin-top: 10px;
}

table {
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
}
</style>
