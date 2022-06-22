<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
      </ion-buttons>
      <ion-title>Login screen</ion-title>
      <ion-item>Login with your credentials.</ion-item>
    </ion-toolbar>
  </ion-header>
    <br>
    <form @submit.prevent="login({ email, password })">
      <input type="text" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Login</button>
    </form>

</template>

<script>

import { IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import mixins from '/src/mixins/mixins.js'
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClientLogin',
  components: { IonHeader, IonTitle, IonToolbar},
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

<style scoped>

  input {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    border: 3px solid gray;
    box-shadow: 2px 2px 2px gray;
    margin-top: 5px;
  }

  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    background: var(--ion-color-secondary);
    opacity: 0.6;
    padding: 10px 15px;
    margin-top: 5px;
  }

  button:hover {
    background: var(--ion-color-secondary);
    opacity: 1;
    scale: 1.1;
  }

</style>