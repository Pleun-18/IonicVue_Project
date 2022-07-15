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
                <p>Je kunt ze hier ook toevoegen</p>
                </ion-title>
            </ion-toolbar>
      </ion-header>
      <div class="spaceBetween">
        
      </div>
        <div class="choiceBar">
            <ion-button @click="fetchInspections()" class="btn btn-success">Fetch</ion-button>
            <!-- <ion-button @click="clearInspections()" class="btn btn-danger">Clear</ion-button> -->
            <ion-button class="btn">A/Z</ion-button>
            <!-- Searchbar with a custom debounce -->
            <ion-searchbar animated></ion-searchbar>
        </div>

        <!--Loading indicator/spinner-->
        <div v-if="!loading" style="text-align: center;">
            <h3>Loading...</h3>
            <img src="../assets/spinner.svg" alt="Loading indicator...">
        </div>

        <!--Oh no, something bad happened! -->
        <div v-if="error" class="alert alert-danger">
            <h3>Error!</h3>
            <div>{{ errorList }}</div>
        </div>

        <!--List with inspection data-->
        <ion-list class="list-group" v-if="inspections && inspections.length">
            <ion-item class="list-group-item" v-for="inspection in inspections" :key="inspection.location">
                <!-- <ion-checkbox slot="start"></ion-checkbox> -->
                <ion-label @click="selectInspection(inspection.id), showModal()" type="button" class="btn">
                    <div class="labelInfo">
                        <ion-badge color="danger" slot="end"> {{ inspection.name }} </ion-badge>
                        <p> {{ inspection.date }} </p>
                    </div>
                    <h1> {{ inspection.location }} </h1>
                </ion-label>
                <ion-fab-button>
                    <ion-icon @click="deleteInspection(inspection.id)" :icon="trash" style="color: white;"></ion-icon>
                </ion-fab-button>
            </ion-item>
        </ion-list>

        <ShowInspection v-if="selectedInspection" :inspection="selectedInspection" v-show="isModalVisible" @close="closeModal"></ShowInspection>
        
        <ion-fab-button class="add">
            <ion-icon :icon="add" @click="addInspection" style="color: #00AAA2;"></ion-icon>
        </ion-fab-button>
    </div>
</template>

<script>
  import mixins from '/src/mixins/mixins.js'
  import { add, close, create, trash } from 'ionicons/icons';
  import ShowInspection from './ShowInspection';
  import AddInspection from './AddInspection';
//   import ActionButton from '../components/ActionButton.vue'
  import { IonFabButton, modalController } from '@ionic/vue';

    export default {
        name: "InspectionsStore",
        setup() {
            return {
                add, 
                close, 
                create, 
                trash
            }
        },
        mixins: [mixins],
        components: { ShowInspection, IonFabButton },
        data() {
            return {
                sortedInspections: [], 
                isModalVisible: false, 
                selectedInspectionIndex: 0
            }
        },
         methods: {
            // 1. fetch all Inspections from the store
            fetchInspections() {
                this.$store.dispatch('fetchInspections')
            },
            // 2. clear inspections from the store
            clearInspections() {
                this.$store.dispatch('clearInspections')
            }, 
            //filtering before getting cloned data in Mounted
            filteredInspections() {
                console.log(this.inspections);
                if (!this.inspections) return;
                this.sortedInspections = [...this.inspections];
                console.log("these are sorted: " + this.sortedInspections);
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
            }, 
            async addInspection() {
            const modal = await modalController
                .create({
                component: AddInspection,
                cssClass: 'inspections-class'
                })
            return modal.present();
            },
            //Remove inspection-object from array
            deleteInspection(inspection) {
                this.$store.commit('DELETE_INSPECTION', inspection);
            }
        },
        computed: {
            inspections() {
                return this.$store.state.inspections;
            },
            loading() {
                return this.$store.state.loadingStatus === 'notloading'
            },
            error() {
                return this.$store.state.errors.length > 0;
            },
            errorList() {
                return this.$store.state.errors;
            }, 
            selectedInspection() {
                console.log('Inspection selected')
                return {
                    ...this.inspections[this.selectedInspectionIndex]
                }
            }
        }
    }
</script>

<style scoped>

    .container {
        overflow-y: scroll;
        height: 100%;
    }

    .spaceBetween {
        padding: 50px;
    }

    ion-header{
        position: fixed;
    }

    ion-fab-button {
        width: 35px;
        height: 35px; 
        margin: 5px;
    }

    .add {
        float: right;
        width: 50px;
        height: 50px;
    }

    .choiceBar{
        display: flex;
        justify-content: space-around;
        margin: 5px;
    }

    .labelInfo{
        display: flex;
        flex-direction: row;
    }

    ion-badge, div > p {
        margin-right: 5px;
    }

    ion-searchbar {
        width: 200px;
        padding: 0;
        margin: 0;
    }

</style>
