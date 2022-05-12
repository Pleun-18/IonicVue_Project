<template>
  <ion-page>

      <TaskOverview />

  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import TaskOverview from '@/components/TaskOverview.vue';
// import TopHeader from '@/components/TopHeader'

export default  defineComponent({
  name: 'Tab1Page',
  components: { TaskOverview, IonPage }
});
</script>
