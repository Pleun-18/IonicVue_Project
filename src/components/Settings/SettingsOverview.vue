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
    </div>
</template>

<script>
  import mixins from '/src/mixins/mixins.js'
  import { add, close, create, trash } from 'ionicons/icons';

    export default {
        name: "KnowledgeBase",
        setup() {
            return {
                add, 
                close, 
                create, 
                trash
            }
        },
        mixins: [mixins],
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

    ion-badge, div > p {
        margin-right: 5px;
    }

    ion-searchbar {
        width: 200px;
        padding: 0;
        margin: 0;
    }


</style>
