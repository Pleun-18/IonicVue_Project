<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="js">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style>

  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 12%;
    transform: translateY(-50%);
  }
  .logo{
    width: 180px;
    z-index: 99;
  }
  
  .toolbar{
    --background: rgb(35, 35, 35);
  }

  ion-tab-bar{
    --background: #00AAA2;
  }

</style>