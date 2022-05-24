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
                    <ion-button color="primary" @click="openModal">
                        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>
                    <ion-img class="logo" src="./assets/logo_white.png" />
                </ion-title>
            </ion-toolbar>
        </ion-header>
        
    </ion-page>
</template> 

<script>
import { defineComponent } from 'vue';
import { IonButton, IonButtons, IonIcon, modalController } from '@ionic/vue';
import { helpCircle, personCircle, settings, notifications } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import ClientLogin from "./ClientLogin.vue"

export default defineComponent ({
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
    async openModal() {
      const modal = await modalController
        .create({
          component: ClientLogin,
          cssClass: 'client-login-class'
        })
      return modal.present();
    },
  },
})

</script>

<style scoped>

  .header{
    background: rgb(35, 35, 35);
    padding: 15px 0 15px 0;
  }

</style>