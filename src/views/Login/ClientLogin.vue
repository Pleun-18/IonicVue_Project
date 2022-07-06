<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
      </ion-buttons>
      <ion-title>Login screen</ion-title>
    </ion-toolbar>
  </ion-header>
    <br>
    <ion-item>Login with your credentials.</ion-item>
    <form class="loginForm" @submit.prevent="login({ email, password })" action="db.json/creds" method="post">
      <input type="text" placeholder="email" v-model="emailLogin">
      <input type="password" placeholder="password" v-model="passwordLogin">
      <button type="submit">Login</button>
    </form>

    <ion-toolbar>
      <ion-buttons slot="start">
      </ion-buttons>
      <ion-item>Or make a new account</ion-item>
    </ion-toolbar>
    <br>
    <form class="signupForm" @submit.prevent="login({ email, password })">
      <label for="avatar">Choose a profile picture:</label>
      <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg">

      <input type="text" placeholder="email" v-model="emailSignup">
      <input type="password" placeholder="password" v-model="passwordSignup">
      <button type="submit">Sign in</button>
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
    width: 80%;
    border: 3px solid gray;
    box-shadow: 2px 2px 2px gray;
    margin-top: 5px;
  }
  
  label {
    display: block;
    width: 80%;
  }

  button {
    display: block;
    width: 50%;
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