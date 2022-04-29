<template>
  <ion-page>

    <TopHeader />
    
    <ion-content :fullscreen="true">

      <!-- <div> {{ test }} </div> -->

       <ion-list>
        <ion-item v-for="inspection in filteredInspections" :key="inspection.id">
          <!-- <ion-checkbox slot="start"></ion-checkbox> -->
          <ion-label type="button" class="btn" @click="showModal(index)">
            <p> {{ inspection.date }} </p>
            <h1> {{ inspection.location }} </h1>
            <ion-note> {{ inspection.description }} {{ inspection.comment }} </ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> {{ inspection.type }} </ion-badge>
        </ion-item>
      </ion-list>

      <ModalList v-show="isModalVisible" @close="closeModal" v-for="inspection in inspections" :key="inspection.id"> 
        
        <template v-slot:header>
          <div style="display: flex; justify-content: space-between;">
            <ion-badge color="success" class="badge-pill"> {{ inspection.type }} </ion-badge>
            <ion-badge color="danger"> {{ inspection.sort }} </ion-badge>
          </div>
          <p>{{ inspection.date }}</p>
          <h1> {{ inspection.location }} </h1>
        </template>

        <template v-slot:body>
          {{ inspection.description }}
          <ion-badge color="danger"> {{ inspection.costs }} </ion-badge>
        </template>

      </ModalList>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      
    </ion-content>
  </ion-page>
</template>

<script lang="js">
  import { defineComponent } from 'vue';
  import { add } from '@ionic/vue';
  import { IonContent } from '@ionic/vue';
  import TopHeader from '@/components/TopHeader'
  import ModalList from '../components/ModalList'
  // import myService from '@/services/myJsonService.js';

  export default defineComponent({
    name: 'AssignedReports', 
    setup() {
      return {
        add
      }
    },
    data(){
      return { 
        inspections: [],
        isModalVisible: false,
        selectedInspectionIndex: 0 
        // test: myService.myMethod()
      }
    },
    components: { TopHeader, IonContent, ModalList },
    async created() {
      fetch("http://localhost:3000/inspections")
          .then(response => response.json())
          .then(data => this.inspections = data)
          .catch(err => console.log(err.message))
    },
    computed: {
      filteredInspections() { 
        let inspections = this.inspections
        return inspections.sort(function (a, b) {
          let dateA = new Date(a.date), dateB = new Date(b.date)
          return dateA - dateB
        });
      },
      selectedCountry() {
        return {
            ...this.inspections[this.selectedInspectionIndex]
        }
      }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      selectCountry(index) {
          this.selectedInspectionIndex = index;
      }
    }
  });

</script>

<style scoped>
</style>
