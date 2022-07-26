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
            <h2> Add report </h2>
            </ion-title>
        </ion-toolbar>
      </ion-header>

    <div class="contentInner">

      <form id="inspectionsForm" name="addInspectionForm" method="post">
          <div id="damage modify maintenance technical"> 
            <label class="labelTitle" for="damageType">Pick a type: </label><br>
            <select v-model="current" name="selectInspection" id="inspectionSelect" form="InspectionsForm" required>
              <option value="DamageForm">Take damage</option>
              <option value="MaintenanceForm">Take maintenance</option>
              <option value="TechnicalForm">Technical inspection</option>
              <option value="ModificationForm">Inventorize modification</option>
            </select>
          </div>   
      </form>
      <KeepAlive>
        <component :is="current"></component>
      </KeepAlive>

    </div>
  </div>
</template>

<script>

import { close } from 'ionicons/icons';
import mixins from '/src/mixins/mixins.js';
import DamageForm from '../forms/DamageForm.vue';
import MaintenanceForm from '../forms/MaintenanceForm.vue';
import TechnicalForm from '../forms/TechnicalForm.vue';
import ModificationForm from '../forms/ModificationForm.vue';


export default {
    name: 'AddInspection',
    props: ['inspection'],
    mixins: [mixins],
    components: {
      DamageForm,
      MaintenanceForm, 
      TechnicalForm, 
      ModificationForm
    },
    data() {
      return {
        current: "DamageForm",
      }
    },
    setup() {
      return {
          close
      }
    }, 
    computed: {

    }
}
</script>

<style>

  .contentInner {
    overflow-y: scroll;
  }

  form {
    display: flex;
    flex: wrap;
    flex-direction: column;
    padding: 15px !important;
  }

  .formPart {
    width: 100%;
  }

  .formPart > div {
    width: 80%;
    padding: 5px;
  }

  .labelTitle {
    font-weight: 800;
  }

  div {
    margin-bottom: 10px;
  }

  .link {
    color: black;
  }

  a {
    text-decoration: none;
    color: black;
  }

</style>
