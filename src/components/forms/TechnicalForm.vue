<template>
  <div class="container">

    <form id="inspectionsForm" name="addInspectionForm" action="http://localhost:3000/inspections" method="post">

        <div id="technical">
          <label class="labelTitle" for="typeOf">Type: </label>  
          <input type="text" id="typeOf" name="name" value="technical" readonly>
        </div>
        
        <div id="technical">
          <label class="labelTitle" for="location">Adress:</label><br>
          <input type="text" id="locationInput" name="location" size="20" required>
        </div>
        
        <div id="technical">
          <label class="labelTitle" for="date">Date:</label><br>
          <input type="date" id="start" name="date" value="2022-06-22" min="2018-01-01" max="2025-12-31" required>
        </div>
        
        <div id="technical">
          <label class="labelTitle" for="installationType">Kind of installation: </label><br>
          <select name="type" required>
              <option>Cooling</option>
              <option>Heating</option>
              <option>Ventilation</option>
              <option>Electrical</option>
              <option>Security</option>
            </select>
        </div>
        
        <div id="technical">
          <label class="labelTitle" for="name">Reported failures: </label><br>
          <textarea type="text" id="name" name="malfunction" minlength="10" maxlength="150" size="10" required />
        </div>
        
        <div id="technical">
          <label class="labelTitle" for="name">Action required?: </label><br>
          <select name="action">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        
        <div id="technical">
          <label class="labelTitle" for="name">Comments concerning situation:</label><br>
          <textarea type="text" name="comment" minlength="10" maxlength="200" size="20" required />
        </div>
        
        <div>
          <input type="submit" value="Add inspection">
          <button @submit="handleSubmit()" type="submit" id="btnSubmit" class="btn-submit"></button>
        </div>
        
        <div>
          <ion-button class="link">
            <a href="../public/assets/pdfs/02. Handbook on Residential Property Prices.pdf" download>PDF test procedure</a>
          </ion-button>
        </div>

    </form>

  </div>
</template>

<script>

import { close } from 'ionicons/icons';
import mixins from '/src/mixins/mixins.js'


export default {
    name: 'TechnicalForm',
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
