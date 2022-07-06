<template>
  <div class="container">

    <form id="inspectionsForm" name="addInspectionForm" action="http://localhost:3000/inspections" method="post">

        <div id="damage">
          <label class="labelTitle" for="typeOf">Type: </label>  
          <input type="text" id="typeOf" name="name" value="damage" readonly>
        </div>
        
        <div id="damage">
          <label class="labelTitle" for="location">Adress:</label>
          <input type="text" id="locationInput" name="location" size="20" required>
        </div>
        
        <div id="damage">
          <label class="labelTitle" for="date">Date:</label><br>
          <input type="date" id="start" name="date" value="2022-06-22" min="2018-01-01" max="2025-12-31" required>
        </div>
        
        <div id="damage">
          <label class="labelTitle">New damage: </label><br>
          <input type="radio" name="new" value="yes">
          <label for="yes">Yes</label><br>
          <input type="radio" name="new" value="no">
          <label for="no">No</label><br>
        </div>
        
        <div id="damage">
           <label class="labelTitle" for="intentType">Kind of damage: </label><br>
          <select name="type" required>
              <option>Willfully</option>
              <option>Waste</option>
              <option>Violence</option>
              <option>Normal use</option>
              <option>Calamity</option>
              <option>Other...</option>
            </select>
        </div>
        
        <div id="damage">
          <label class="labelTitle" for="name">Action required?: </label><br>
          <select name="action" required>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        
        <div id="damage">
          <label class="labelTitle" for="name">Description concerning situation:</label><br>
          <input type="text" id="name" name="description" required
                minlength="10" maxlength="200" size="20">
        </div>
        
        <div>
          <input type="submit" value="Add inspection">
          <button @submit="handleFormSubmit()" type="submit" id="btnSubmit" class="btn-submit"></button>
        </div>
        
    </form>

  </div>
</template>

<script>

import { close } from 'ionicons/icons';
import mixins from '/src/mixins/mixins.js'


export default {
    name: 'DamageForm',
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
      handleFormSubmit: function(event) {
        event.preventDefault();
        
        const data = new FormData(event.target);
        
        const formJSON = Object.fromEntries(data.entries());

        // for multi-selects, we need special handling
        formJSON.snacks = data.getAll('snacks');
        
        const results = document.querySelector('.results pre');
        results.innerText = JSON.stringify(formJSON, null, 2);
      }
      
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
