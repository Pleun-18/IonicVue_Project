<template>
    <div class="container">
        <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="dismissModal()">
              <ion-icon :icon="close" />
            </ion-button>
          </ion-buttons>
            <ion-title>
              <h2> App settings </h2>
              <p> Accountgegevens: avatar, wachtwoord, licht/donker interface, meldingen + geluiden </p>
            </ion-title>
        </ion-toolbar>
      </ion-header>

    <div class="userOverview">
      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
          </ion-avatar>
          <!-- <ion-label>{{ creds.name }}</ion-label> -->
          <ion-label>{{  }}</ion-label>
          <ion-label>Noob</ion-label>
        </ion-item>
      </ion-list>

      <div class="userInfo">
        <ion-item>
          <ion-label>Uw notificaties</ion-label>
          <ion-badge color="light">7</ion-badge>
          <ion-icon slot="icon-only" :icon="notifications"></ion-icon>
        </ion-item>

        <ion-item>
          <!-- <ion-icon slot="start" name="moon"></ion-icon> -->
          <ion-label>Toggle Dark Theme</ion-label>
          <ion-toggle slot="end" @ionChange="setTheme($event)" v-model="selected"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Notification sound</ion-label>
          <ion-icon :icon="radio"></ion-icon>
        </ion-item>
      </div>
    </div>

      <br>

      <div class="userSettings">
        <h3>User credentials</h3>
        <ion-item>
          <form class="credsOverview" >
            <div>
              <label for="email">Your email:</label>
              <input type="text" placeholder="E-mail" v-model="email" readonly>
            </div>
            <div>
              <label for="password">Change your password:</label>
              <input type="password" placeholder="Password" v-model="password" readonly>
            </div>
            <div>
              <label for="password">Repeat password:</label>
              <input type="password" placeholder="Password" v-model="password" readonly>
            </div>
            <button type="submit">Change credentials</button>
          </form>
        </ion-item>
      </div>

    </div>
</template>

<script>
  import mixins from '/src/mixins/mixins.js'
  import { add, close, create, trash, notifications, radio} from 'ionicons/icons';
  import { IonLabel, IonList, IonItem, IonToggle } from '@ionic/vue';

    export default {
        name: "KnowledgeBase",
        components: { IonLabel, IonList, IonItem, IonToggle },
        props: ['creds'],
        setup() {
            return {
                add, 
                close, 
                create, 
                trash, 
                notifications, 
                radio
            }
        },
        mixins: [mixins],
        methods: {
          // checkUser: function() {
          //     localStorage.getItem()
          // }
          addSound: function() {
            let audio = new Audio('file.mp3')
            audio
          }
        }
    }
</script>

<style scoped>
    ion-fab-button {
        width: 35px;
        height: 35px; 
        margin: 5px;
    }

    .choiceBar{
        display: flex;
        justify-content: space-around;
        margin: 5px;
    }

    .labelInfo{
        display: flex;
        flex-direction: row;
    }
    .userInfo {
      margin: 0 50px;
    }

    .userSettings {
      margin: 0 20px;
      border-top: 2px solid black;
    }

    form div{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }


</style>
