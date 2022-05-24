<template>

<div id="container">
    
    <ion-content :fullscreen="true">
    
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col col-6 class="task_img">
            <!-- <router-link to="tab1/assigned" exact> -->
              <div @click="openModal">
                <ion-icon src="./assets/tasks.svg"></ion-icon>
                <p>Assigned reports</p>
              </div>
            <!-- </router-link> -->
          </ion-col>
          <ion-col col-6 class="task_img">
            <div>
              <ion-icon src="../assets/completed.svg"></ion-icon>
              <p>Finished Reports</p>
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col col-6 class="task_img">
            <div>
              <ion-icon src="../assets/knowledge.svg"></ion-icon>
              <p>knowledge base</p>
            </div>
          </ion-col>
          <ion-col col-6 class="task_img">
            <div>
              <ion-icon src="../assets/settings.svg"></ion-icon>
              <p>Settings</p>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonContent, modalController } from '@ionic/vue';
import AssignedReports from './AssignedReports.vue'

export default  defineComponent({
  name: 'TaskOverview',
  components: { IonContent }, 
  methods: {
    async openModal() {
      const modal = await modalController
        .create({
          component: AssignedReports,
          cssClass: 'client-login-class'
        })
      return modal.present();
    },
  },
})
</script>

<style scoped>

  ion-icon{
    font-size: 100px !important;
    color: rgb(35, 35, 35);
  }

  .task_img{
    margin: 10px !important;
    cursor: pointer;
  }

  ion-col{
    box-shadow: 0px 2px 6px gray;
    border-radius: 5px;
    text-align: center;
  }
</style>