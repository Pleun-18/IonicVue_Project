<template>
    <ion-page>

        <ion-header class="header">
            <ion-toolbar class="toolbar">
                <ion-buttons slot="secondary">
                    <ion-button color="primary">
                        <ion-icon slot="icon-only" :icon="notifications"></ion-icon>
                    </ion-button>
                    <ion-button color="primary">
                        <ion-icon :icon="settings"></ion-icon>
                    </ion-button>
                    <ion-button color="primary">
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
import { IonButton, IonButtons, IonIcon } from '@ionic/vue';
import { helpCircle, personCircle, settings, notifications } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default defineComponent({
    name: 'TopHeader',
    components: { IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonIcon },
    setup() {
    return {
      settings,
      helpCircle, 
      personCircle,
      notifications
    }
  }
})
</script>

<style scoped>

</style>