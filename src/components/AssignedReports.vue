<template>

  <div id="container">
    <ion-page>
      
      <ion-content :fullscreen="true" scroll-y="false">
        <ion-refresher slot="fixed">

        <!-- <ion-buttons>
          <ion-button @click="closeModal()">
            <ion-icon :icon="close" />
          </ion-button>
        </ion-buttons> -->

        <ion-list>
          <ion-item v-for="inspection in this.sortedInspections" :key="inspection.id" :data-inspection-id="inspection.id" @click="selectInspection(inspection.id), showModal()">
            <!-- <ion-checkbox slot="start"></ion-checkbox> -->
            <ion-label type="button" class="btn">
              <p> {{ inspection.date }} </p>
              <h1> {{ inspection.location }} </h1>
            </ion-label>
            <ion-badge color="success" slot="end"> {{ inspection.name }} </ion-badge>
          </ion-item>
        </ion-list>

      </ion-refresher>

        <ModalList v-if="selectedInspection" :inspection="selectedInspection" v-show="isModalVisible" @close="closeModal"></ModalList>
        
      </ion-content>
    </ion-page>
  </div>
</template>

<script lang="js">
  import { defineComponent } from 'vue';
  // import { add } from 'ionicons/icons';
  import { IonContent } from '@ionic/vue';
  import mixins from '../mixins/mixins.js';
  // import { close } from 'ionicons/icons';
  // import TopHeader from '@/components/TopHeader';
  import ModalList from '../components/ModalList';
  import MyService from '@/services/my.service.js';

  export default defineComponent({
    name: 'AssignedReports', 
    // setup() {
    //   return {
    //     add, 
    //     close
    //   }
    // },
    components: { IonContent, ModalList },
    /**
     * @description fetches inspectiondata saves it in class and returns data
     * @returns object containing data
     */
    data(){
      //return the initial reactive state foor the component instance
      return { 
        inspections: [],
        sortedInspections: [],
        isModalVisible: false,
        selectedInspectionIndex: 0
      };
    },
    mixins: [mixins],
    computed: {
      //returned information aftering clicking
      selectedInspection() {
        console.log('Inspection selected')
        return {
            ...this.inspections[this.selectedInspectionIndex]
        }
      }
    },
    methods: {
      //filtering before getting cloned data in Mounted
      filteredInspections() {
        console.log(this.inspections);
        if (!this.inspections) return;
        this.sortedInspections = [...this.inspections];
        console.log(this.sortedInspections);
        this.sortedInspections.sort(function (a, b) {
          let dateA = new Date(a.date);
          let dateB = new Date(b.date);
          return dateA - dateB;
        });
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      //select the inspection on-clicking
      selectInspection(inspectionId) {
        // const modalContent = Object.entries();
        this.selectedInspectionIndex = inspectionId - 1;
        console.log(inspectionId);
      }
    },
    mounted() {
      //fetching the json from the service
      const assignedReports = new MyService();
      assignedReports.myMethod()
        .then((data) => {
          this.inspections = data;
        }) //sorting the inspections
        .then(this.filteredInspections);
     }
  });

</script>

<style scoped>
</style>
