<template>
  <ion-page>
    
    <TopHeader />

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tasks</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <TaskOverview />
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import TaskOverview from '@/components/TaskOverview.vue';
import TopHeader from '@/components/TopHeader'

export default  defineComponent({
  name: 'Tab1Page',
  components: { TopHeader, TaskOverview, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
