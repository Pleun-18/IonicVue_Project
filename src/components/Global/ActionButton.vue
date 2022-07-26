<template>
    <!-- fab placed to the (vertical) center and end -->
    <ion-fab vertical="end" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
</template>

<script>
import { defineComponent } from 'vue';
import { IonFabButton } from '@ionic/vue';
import { add } from 'ionicons/icons';

export default defineComponent({
  name: "ActionButton",
  components: { 
    IonFabButton
  },
  setup() {
    return {
      add,
    }
  }
});
</script>

<style scoped>

ion-fab-button {
    width: 35px;
    height: 35px; 
    margin: 5px;
}

</style>