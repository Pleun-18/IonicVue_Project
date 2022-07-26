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
      <input type="text" placeholder="E-mail" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button type="submit">Login</button>
    </form>

</template>

<script>

import { IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import mixins from '/src/mixins/mixins.js'
import { close } from 'ionicons/icons';
import { defineComponent } from 'vue';
// import ThemeService from '../../services/theme.service'

export default defineComponent({
  name: 'ClientLogin',
  components: { 
    IonHeader, 
    IonTitle, 
    IonToolbar},
  mixins: [mixins],
  setup() {
    return{
      close
    }
  }, 
  data() {
    return {
      email: "",
      password: "",
      registeredUser: []
    }
  },
  beforeMount() {
    this.fetchCreds();
  }, 
  computed: {
      creds() {
          return this.$store.state.creds;
      },
      loading() {
          return this.$store.state.loadingStatus === 'notloading'
      },
      error() {
          return this.$store.state.errors.length > 0;
      },
      errorList() {
          return this.$store.state.errors;
      }
  },
  methods: {
    fetchCreds() {
        this.$store.dispatch('fetchCreds')
    },
    login() {
      let checkCreds = this.creds.find(o => o.email === this.email && o.password === this.password);
      this.$store.dispatch("login", true);
      console.log(checkCreds);
      if (checkCreds) {
        this.$store.dispatch("login", {
          email: this.email,
          password: this.password
        }).then(() => {
          // ThemeService.setTheme(checkCreds.preferences.mode)
          localStorage.setItem("currentUser", checkCreds)
          document.body.setAttribute('color-theme', checkCreds.preferences.mode)
          this.$router.push("/")
        });
      } else {
        alert("Invalid credentials");
      } 
    }
  }
});

</script>

<style scoped>

  input {
    display: block;
    width: 80%;
    box-shadow: inset 0px 0px 8px gray;
    margin-top: 5px;
    border: none;
    padding: 5px;
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

  .loginForm {
    margin-left: 25px;
  }

</style>