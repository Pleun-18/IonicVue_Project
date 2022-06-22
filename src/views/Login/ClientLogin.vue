<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
      </ion-buttons>
      <ion-title>Login screen</ion-title>
      <ion-item>Login with your credentials.</ion-item>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <br>
    <form @submit.prevent="login({ email, password })">
      <input type="text" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Login</button>
    </form>

  </ion-content>

</template>

<script>

import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import mixins from '/src/mixins/mixins.js'
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClientLogin',
  components: { IonContent, IonHeader, IonTitle, IonToolbar},
  mixins: [mixins],
  setup() {
    return{
      close
    }
  }, 
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push("/")
      });
    }
  }
});

</script>