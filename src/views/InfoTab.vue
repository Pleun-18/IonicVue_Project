<template>
  <ion-page>

    <ion-content :fullscreen="true">
      
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
// import TopHeader from '@/components/TopHeader'

export default defineComponent({
  name: 'Tab2Page',
  components: { ExploreContainer, IonContent, IonPage }
});
</script>
