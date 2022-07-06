<template>
  <div class="container">

    <form id="inspectionsForm" name="addInspectionForm" action="http://localhost:3000/inspections" method="post">

        <div id="maintenance">
          <label class="labelTitle" for="typeOf">Type: </label>  
          <input type="text" id="typeOf" name="name" value="mainenance" readonly>
        </div>
        
        <div id="maintenance">
          <label class="labelTitle" for="location">Adress:</label><br>
          <input type="text" id="locationInput" name="location" size="20" required>
        </div>
        
        <div id="maintenance">
          <label class="labelTitle" for="date">Date:</label><br>
          <input type="date" id="start" name="date" value="2022-06-22" min="2018-01-01" max="2025-12-31" required>
        </div>
        
        <div id="maintenance">
          <label class="labelTitle" for="maintenanceType">Type of maintenance: </label><br>
          <select name="type" required>
              <option>Painting</option>
              <option>Wood rot</option>
              <option>Electric</option>
              <option>Piping</option>
              <option>Glazing</option>
            </select>
        </div>
        
        <div id="maintenance">
          <label class="labelTitle">Costs indication: </label><br>
          <input type="radio" name="costs" value="0-500">
          <label for="low">0 tot 500</label><br>
          <input type="radio" name="costs" value="500-1500">
          <label for="middle">500 tot 1500</label><br>
          <input type="radio" name="costs" value="1500+">
          <label for="high">Meer dan 1500</label><br>
        </div>
        
        <div id="maintenance">
          <label class="labelTitle" for="name">Action required?: </label><br>
          <select name="action">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div id="maitenance">
          <label class="labelTitle" for="name">Comments concerning situation:</label><br>
          <textarea type="text" name="comment" minlength="10" maxlength="200" size="20" required />
        </div>
        
        <div>
          <input type="submit" value="Add inspection">
          <button @submit="handleSubmit()" type="submit" id="btnSubmit" class="btn-submit"></button>
        </div>
        
    </form>

  </div>
</template>

<script>

import { close } from 'ionicons/icons';
import mixins from '/src/mixins/mixins.js'


export default {
    name: 'MaintenanceForm',
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
