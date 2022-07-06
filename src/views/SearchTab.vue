<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      
      <SearchContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import SearchContainer from '@/components/TabViews/SearchContainer.vue';
// import TopHeader from '@/components/TopHeader'

export default defineComponent({
  name: 'Tab3Page',
  components: { SearchContainer, IonContent, IonPage }
});
</script>
