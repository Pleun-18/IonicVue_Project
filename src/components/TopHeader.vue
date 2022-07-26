<template>
    <ion-page>

        <ion-header class="header">
            <ion-toolbar class="toolbar">
                <ion-buttons slot="secondary">
                    <ion-button color="primary">
                        <ion-badge color="light">7</ion-badge>
                        <ion-icon slot="icon-only" :icon="notifications"></ion-icon>
                    </ion-button>
                    <ion-button color="primary">
                        <ion-icon :icon="settings"></ion-icon>
                    </ion-button>
                    <section>
                      <router-link to="/login" v-if="!isLoggedIn">
                        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
                      </router-link>
                      <ion-icon href="#" slot="icon-only" v-if="isLoggedIn" @click="logout" :icon="personCircle"></ion-icon>
                    </section>
                </ion-buttons>
                <ion-title>
                    <ion-img class="logo" src="./assets/logo/logo_white.png" />
                </ion-title>
            </ion-toolbar>
        </ion-header>
        
    </ion-page>
</template> 

<script>
// import { defineComponent } from 'vue';
import { IonButton, IonButtons, IonIcon, modalController } from '@ionic/vue';
import { helpCircle, personCircle, settings, notifications } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import ClientLogin from "../views/Login/ClientLogin.vue";
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'TopHeader',
    components: { IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonIcon },
    setup() {
    return {
      settings,
      helpCircle, 
      personCircle,
      notifications
    }
  },
  methods: {
    logout() {
     this.$store.dispatch('logout');
    },
    ...mapActions(["logout"]),

    async openModal() {
      const modal = await modalController
        .create({
          component: ClientLogin,
          cssClass: 'client-login-class'
        })
      return modal.present();
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  getters: {
    ...mapGetters(["isLoggedIn"])
  }
}

</script>

<style scoped>

  .header{
    background: rgb(35, 35, 35);
    padding: 15px 0 15px 0;
  }

</style>