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
            <h2> Current Assigned Reports</h2>
            </ion-title>
        </ion-toolbar>
      </ion-header>

    <form>
      <div class="formPart">
        <div> 
          <select name="name" id="AddInspectionForm" form="InspectionForm">
            <option value="damage">Damage</option>
            <option value="maintenance">Maintenance</option>
            <option value="technical">Technical</option>
            <option value="modify">Modify</option>
          </select>
        </div>
      
        <div>
          <label for="fname">Location:</label>
          <input type="text" id="locationInput" name="locationInput" size="10">
        </div>
      </div>
      
      <div class="formPart">
        <div>
          <label for="lname">Date:</label>
          <input type="text" id="dateInput" name="dateInput" placeholder="2022-07-16" size="10">
        </div>
        <div>
          <select name="new_repeat" id="newRepeat" form="InspectionForm">
            <option value="damage">Yes</option>
            <option value="maintenance">No</option>
          </select>
        </div>
      </div>

      <div class="formPart">
        <div>
          <label for="name">Describe the type of damage:</label>
          <input type="text" id="name" name="name" required
                minlength="20" maxlength="150" size="10">
        </div>
        <div>
          <label for="name">Comments concerning situation:</label>
          <input type="text" id="name" name="name" required
                minlength="20" maxlength="150" size="10">
        </div>
      </div>

        <input type="submit" value="Add">
        <button type="submit"></button>

    </form>

  </div>
</template>

<script>

import { close } from 'ionicons/icons';
import mixins from '/src/mixins/mixins.js'

export default {
    name: 'AddInspection',
    props: ['inspection'],
    mixins: [mixins],
    setup() {
      return {
          close,
      }
    },
}
</script>

<style>

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

</style>


{
    "id": 1,
    "name": "damage",
    "location": "Invanteriestraat 25",
    "date": "2022-07-16",
    "new": true,
    "type": "Violence",
    "action": false,
    "description": "Multiple broken windows...",
    "comment": "Window needs repearing"
},