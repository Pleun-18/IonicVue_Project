<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="dismissModal">
          <ion-icon :icon="close" />
        </ion-button>
      </ion-buttons>
      <ion-title>Primary menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-list>
      <ion-item>Profile</ion-item>
      <ion-item>Settings</ion-item>
    </ion-list>
    <ion-list class="navbar-nav mr-auto">
        <ion-item v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </ion-item>
        <ion-item v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </ion-item>
        <ion-item class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </ion-item>
      </ion-list>
      <ion-list v-if="!currentUser" class="navbar-nav ml-auto">
        <ion-item class="nav-item">
          <router-link to="/tab1/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </ion-item>
        <ion-item class="nav-item">
          <router-link to="/tab1/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </ion-item>
      </ion-list>
      <ion-list v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </ion-list>
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }
      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
});

</script>



<!-- <template>

    <ion-page>
        <ion-item>
            <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
            <ion-label>Edit</ion-label>
        </ion-item>

        <ion-item>
            <ion-label position="stacked">Employee Nr.</ion-label>
            <ion-input></ion-input>
        </ion-item>

        <ion-item>
            <ion-label position="stacked">Password</ion-label>
            <ion-input></ion-input>
        </ion-item>

    </ion-page>
    
</template> -->
