<template>
  <ion-page>

    <TopHeader />

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Info</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import TopHeader from '@/components/TopHeader'

export default defineComponent({
  name: 'Tab2Page',
  components: { TopHeader, ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
