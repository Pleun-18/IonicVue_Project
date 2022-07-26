<template>

<div id="container">
    
    <ion-content :fullscreen="true">

      <h2>Information about Real Estate Care</h2>
    
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="11">
              <ion-icon :icon="help" />
              <p>RealEstateCare is a service oraganization that maintains, improves and inspects homes for various clients such as housing 
                cooperatives and real estate developers. Traditionally this was done with specific forms, but a few years ago the switch was made to a specific web application for the workflow. 
                Inspectors were able to make their own reports and upload digital photographs from their own workstations via the web application.
                </p>
          </ion-col>
          <ion-col size="11">
              <ion-icon :icon="information" />
              <p>One aspect of these business processes is inspecting a building on location and recording the damage:
                overdue maintenance, obsolete installations, fire hazards and modifications, unwanted or not, made by tenants.
                Traditionally this was done with specific forms, but a few years ago the switch was made to a specific web application for the workflow. 
                Inspectors were able to make their own reports and upload digital photographs from their own workstations via the web application.
                </p>
          </ion-col>
        </ion-row>

        <div>
            <h2>For more information:</h2>
            <ion-row>
              <ion-col size="11" size-sm>
                <div class="contactInfo">
                  <ion-icon :icon="navigate" />
                  <h3>Our adress:</h3>
                </div>
                <ion-list>
                  <ion-item>
                    <ion-label>The Netherlands</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Schuttingstraat 34</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>877SL Waardingen</ion-label>
                  </ion-item>
                </ion-list>
              </ion-col>
              <ion-col size="5" size-sm>
                <div class="contactInfo">
                  <ion-icon :icon="call" />
                  <h3>By Phone:</h3>
                </div>
                <p>You can contact us by phone 24/7. We will always be there.
                  For emergency call you can call: +31 994 3029 91
                </p>
              </ion-col>
              <ion-col size="5" size-sm>
                <div class="contactInfo">
                  <ion-icon :icon="mail" />
                  <h3>By Mail:</h3>
                </div>
                <p>If you have no phone nearby, but your mail is open, please mail to:
                  realestatecare@gmail.com
                </p>
              </ion-col>
            </ion-row>
          </div>

      </ion-grid>

    </ion-content>
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonContent } from '@ionic/vue';
import { information, mail, call, folder, help, navigate } from 'ionicons/icons';

export default  defineComponent({
  name: 'InfoContainer',
  components: { IonContent }, 
  setup() {
            return {
                information, 
                mail, 
                call, 
                folder, 
                help, 
                navigate
            }
        },
  
})
</script>

<style scoped>

  ion-icon{
    font-size: 50px !important;
    color: rgb(35, 35, 35);
    width: 100%;
  }

  ion-col{
    box-shadow: 0px 2px 6px gray;
    border-radius: 5px;
    width: 33.3%;
    text-align: center;
    margin: 15px;
    padding: 15px;
  }

  ion-col div {
    display: flex;
    flex-direction: row;
  }

  ion-col p {
    text-align: left;
  }

  .contactInfo ion-icon {
    width: 20%;
  }

  .contactInfo {
    align-content: center;
  }

</style>