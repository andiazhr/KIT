<template>
    <div id="demo" :class="[{'collapsed' : collapsed}]">
      <div class="demo">
        <div v-scroll="onScroll" class="container">
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
        <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        <router-view @authenticated="setAuthenticated" />
      </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
                mockAccount: {
                    username: "123",
                    password: "123"
                },
      msg: 'Welcome To Dashboard Krakatau Information Technology',
      menu: [
        {
          header: true,
          title: 'Krakatau Information Technology'
        },
        {
          href: '/Login',
          title: 'Login',
          icon: 'fa fa-sign-out-alt'
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-chart-area'
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
          icon: 'fa fa-file',
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
              title: '2.5 Kunj Pasien Rawat Jalan Per Jenis Pasien'
            },
            {
              href: '/KunjunganPasienRawatJalanPerSMF',
              title: '2.6 Kunj Pasien Rawat Jalan Per SMF'
            },
            {
              href: '/KunjunganPasienRawatJalanPerPoli',
              title: '2.7 Kunj Pasien Rawat Jalan Per Poli'
            },
            {
              href: '/Pengunjung',
              title: '2.8 Pengunjung'
            },
            {
              href: '/SensusRanapKelas',
              title: '2.9 Sensus Ranap Kelas'
            },
            {
              href: '/SensusRanapUnit',
              title: '2.10 Sensus Ranap Unit'
            },
            {
              href: '/BORLOSTOI',
              title: '2.11 BOR, LOS, TOI'
            }
          ]
        },
        {
          href: '',
          title: 'Info Antrian',
          icon: 'fa fa-pen-square',
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
          icon: 'fa fa-money-bill-wave',
          child: [
            {
              href: '/PendapatanPercaraBayar',
              title: '4.1 Pendapatan Percara Bayar'
            },
            {
              href: '/PendapatanTunai',
              title: '4.3 Pendapatan Tunai'
            },
            {
              href: '/PendapatanRealisasiKlaim',
              title: '4.3 Pendapatan Realisasi Klaim'
            },
            {
              href: '/PendapatanRealisasiKlaimPiutang',
              title: '4.4 Pendapatan Realisasi Klaim & Piutang'
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
    },
    onScroll: function(e, position) {
      this.position = position;
    },
    setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
    // logout(){
    //   localStorage.removeItem('login');
    //   location.reload();
    // }
  },
  mounted() {
            if(!this.authenticated) {
                this.$router.push('/');
            }
        },
  computed: {
    greeting(){
      return 'Welcome' + this.$store.state.username;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css');
@import url('//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');
body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #fff;
}

#demo {
  text-align: center;
}
.sidebar{
  text-align: left;
  font-size: 10px !important;
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
