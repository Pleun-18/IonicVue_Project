<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="dismissModal">
          <ion-icon :icon="close" />
        </ion-button>
      </ion-buttons>
      <ion-title>Client Login Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
        <ion-label>Edit</ion-label>
    </ion-item>
    <ion-item>
        <ion-label position="stacked">Employee Nr.</ion-label>
        <ion-input></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="stacked">Password</ion-label>
        <ion-input></ion-input>
    </ion-item>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import mixins from '/src/mixins/mixins.js'
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClientLogin',
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  mixinx: [mixins],
  setup() {
    return{
      close
    }
  }
});
</script>



<!-- <template>

    <ion-page>
        <ion-item>
            <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
            <ion-label>Edit</ion-label>
        </ion-item>

        <ion-item>
            <ion-label position="stacked">Employee Nr.</ion-label>
            <ion-input></ion-input>
        </ion-item>

        <ion-item>
            <ion-label position="stacked">Password</ion-label>
            <ion-input></ion-input>
        </ion-item>

    </ion-page>
    
</template> -->
