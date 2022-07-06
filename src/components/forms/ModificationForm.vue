<template>
  <div class="container">

    <form id="inspectionsForm" name="addInspectionForm" action="http://localhost:3000/inspections" method="post">

        <div id="damage">
          <label class="labelTitle" for="typeOf">Type: </label>  
          <input type="text" id="typeOf" name="name" value="modify" readonly>
        </div>
        
        <div id="modify">
          <label class="labelTitle" for="location">Adress:</label><br>
          <input type="text" id="locationInput" name="location" size="20" required>
        </div>

        <div id="modify">
          <label class="labelTitle" for="date">Date:</label><br>
          <input type="date" id="start" name="date" value="2022-06-22" min="2018-01-01" max="2025-12-31" required>
        </div>

        <div id="modify">
          <label class="labelTitle">Carried out by: </label><br>
          <input type="radio" name="performer" value="tenant">
          <label for="tenant">Tenant</label><br>
          <input type="radio" name="performer" value="owner">
          <label for="owner">Owner</label><br>
          <input type="radio" name="performer" value="unknown">
          <label for="unknown">Unknown</label><br>
        </div>
        
        <div id="modify">
          <label class="labelTitle" for="name">Description concerning situation:</label><br>
          <textarea type="text" id="name" name="description" minlength="10" maxlength="200" size="20" required />
        </div>
        
        <div id="modify">
          <label class="labelTitle" for="actionType">Type of needed action: </label><br>
          <select name="type" form="InspectionForm">
              <option>Accept</option>
              <option>Check up</option>
              <option>Remove</option>
              <option>Change</option>
              <option>Modify and check</option>
            </select>
        </div>
        
        <div id="modify">
          <label class="labelTitle" for="name">Comments concerning situation:</label><br>
          <textarea type="text" id="name" name="comment" minlength="10" maxlength="200" size="20" required />
        </div>
        
        <div>
          <input type="submit" value="Add inspection">
          <button @submit="handleSubmit()" type="submit" id="btnSubmit" class="btn-submit"></button>
        </div>

        <div>
          <ion-button class="link">
            <a href="../public/assets/pdfs/03. Technical information.pdf" download>Current situation / modifications</a>
          </ion-button>
        </div>

    </form>

  </div>
</template>

<script>

import { close } from 'ionicons/icons';
import mixins from '/src/mixins/mixins.js'


export default {
    name: 'ModificationForm',
    mixins: [mixins],
    data() {
      return {
        
      }
    },
    setup() {
      return {
          close,
      }
    },
    methods: {
      handleSubmit: function(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        console.log({ value });
      }, 
      
    }, 
    computed: {

    }
}
</script>

<style scoped>

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
