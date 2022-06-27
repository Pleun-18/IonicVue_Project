<template>
  <ion-page>

    <ion-content :fullscreen="true">
      
      <InfoContainer name="Info about RealEstateCare" />
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import InfoContainer from '@/components/TabViews/InfoContainer.vue';
// import TopHeader from '@/components/TopHeader'

export default defineComponent({
  name: 'Tab2Page',
  components: { InfoContainer, IonContent, IonPage }
});
</script>
