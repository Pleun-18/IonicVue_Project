<template>
  <ion-page>

    <TopHeader />
    
    <ion-content :fullscreen="true">

      <!-- <div> {{ test }} </div> -->

       <ion-list>
        <ion-item v-for="inspection in inspections" :key="inspection.id" @click="selectInspection(inspection.id), showModal()">
          <!-- <ion-checkbox slot="start"></ion-checkbox> -->
          <ion-label type="button" class="btn">
            <p> {{ inspection.date }} </p>
            <h1> {{ inspection.location }} </h1>
            <ion-note> {{ inspection.description }} {{ inspection.comment }} </ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> {{ inspection.name }} </ion-badge>
        </ion-item>
      </ion-list>

      <ModalList v-if="selectedInspection" :inspection="selectedInspection" v-show="isModalVisible" @close="closeModal"></ModalList>

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
  import TopHeader from '@/components/TopHeader';
  import ModalList from '../components/ModalList';
  import MyService from '@/services/my.service.js';

  export default defineComponent({
    name: 'AssignedReports', 
    setup() {
      return {
        add
      }
    },
    components: { TopHeader, IonContent, ModalList },
    /**
     * @description fetches inspectiondata saves it in class and returns data
     * @returns object containing data
     */
    data(){
      return { 
        inspections: [],
        isModalVisible: false,
        selectedInspectionIndex: 0
      }
    },
    // created() {
    //   fetch("http://localhost:3000/inspections")
    //       .then(response => response.json())
    //       .then(data => this.inspections = data)
    //       .catch(err => console.log(err.message))
    // },
    computed: {
      filteredInspections() { 
        const inspections = this.inspections
        console.log(this.inspections);
        if (!inspections) return;
        return inspections.sort(function (a, b) {
          let dateA = new Date(a.date), dateB = new Date(b.date)
          return dateA - dateB
        });
      },
      selectedInspection() {
        console.log('selected Inspection')
        return {
            ...this.inspections[this.selectedInspectionIndex]
        }
      }
    },
    methods: {
      async getInspectionData() {
        console.log('doei');
        const inspectionData = await this.service.myMethod();
        this.inspections = inspectionData;
      },
      
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      selectInspection(inspectionId) {
          this.selectedInspectionIndex = inspectionId - 1;
          console.log(inspectionId);
      }
    },
    mounted() {
      this.service = new MyService();
      this.getInspectionData()
    }
  });

</script>

<style scoped>
</style>
