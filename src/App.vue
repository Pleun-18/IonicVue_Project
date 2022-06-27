<template>
  <ion-app>
    <!-- <router-link to="/login" v-if="!isLoggedIn">
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
    </router-link>    -->

    <ion-page v-if="!isLoggedIn">
      <TopHeader />
      <ClientLogin />
    </ion-page>
    <ion-page v-if="isLoggedIn">
      <TopHeader />
      <ion-router-outlet />
    </ion-page>
  </ion-app>
</template>

<script lang="js">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import TopHeader from '@/components/TopHeader';
import { mapGetters, mapActions } from 'vuex'
import ClientLogin from "./views/Login/ClientLogin.vue";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet, 
    TopHeader, 
    ClientLogin
  }, 
  methods: {
    logout() {
     this.$store.dispatch('logout');
    },
    ...mapActions(["logout"])
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  getters: {
    ...mapGetters(["isLoggedIn"])
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Titillium+Web:wght@300;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Titillium+Web:wght@300;600&display=swap');

  h1 {
    font-size: 30px;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 700;
  }

  h2 {
    font-size: 24px;
    font-family: 'Titillium Web', sans-serif;
  }

  h3 {
    font-size: 16px;
    line-height: 1.4;
    text-align: left;
  }

  p {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    line-height: 1.4;
  }

  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 14%;
    transform: translateY(-50%);
  }
  .logo{
    width: 180px;
    z-index: 99;
  }
  
  .toolbar{
    --background: rgb(35, 35, 35);
  }

  ion-tab-bar{
    --background: #00AAA2;
  }

</style>