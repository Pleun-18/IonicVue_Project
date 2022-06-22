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
              <h2> Overview Finished Reports</h2>
              <p> Je moet hier de reports kunnen inzien en aanpassen</p>
            </ion-title>
        </ion-toolbar>
      </ion-header>
        <div class="choiceBar">
            <ion-button @click="fetchFinished()" class="btn btn-success">Fetch</ion-button>
            <ion-button class="btn">A/Z</ion-button>
            <!-- Searchbar with a custom debounce -->
            <ion-searchbar animated></ion-searchbar>
        </div>

        <!--Loading indicator/spinner-->
        <div v-if="!loading">
            <h3 style="margin: 0 auto;">Loading...</h3>
            <img src="../assets/spinner.svg" alt="Loading indicator...">
        </div>

        <!--Oh no, something bad happened! -->
        <div v-if="error" class="alert alert-danger">
            <h3>Error!</h3>
            <div>{{ errorList }}</div>
        </div>

        <!--List with finished inspection data-->
        <ion-list class="list-group" v-if="finished && finished.length">
            <ion-item class="list-group-item"
                @click="selectFinished(finshed.id)"
                v-for="finished in finished"
                :key="finished.location">
                <!-- <ion-checkbox slot="start"></ion-checkbox> -->
                <ion-label @click="showModal()" type="button" class="btn">
                    <div class="labelInfo">
                        <ion-badge color="success" slot="end"> {{ finished.name }} </ion-badge>
                        <p> {{ finished.date }} </p>
                    </div>
                    <h1> {{ finished.location }} </h1>
                </ion-label>
                <ion-fab-button>
                    <ion-icon :icon="create" style="color: white;"></ion-icon>
                </ion-fab-button>
            </ion-item>
        </ion-list>


        <!-- <ModalList v-if="selectedInspection" :inspection="selectedInspection" v-show="isModalVisible" @close="closeModal"></ModalList> -->

    </div>
</template>

<script>
  import mixins from '/src/mixins/mixins.js'
  import { add, close, create, trash } from 'ionicons/icons';
//   import ModalList from '../components/ModalList';
//   import ActionButton from '../components/ActionButton.vue'
  import { IonFabButton } from '@ionic/vue';

    export default {
        name: "FinishedReports",
        setup() {
            return {
                add, 
                close, 
                create, 
                trash
            }
        },
        mixins: [mixins],
        components: { IonFabButton },
        data() {
            return {
                sortedInspections: [], 
                isModalVisible: false, 
                selectedFinishedIndex: 0
            }
        },
        methods: {
            // 1. fetch all Inspections from the store
            fetchFinished() {
                this.$store.dispatch('fetchFinished')
            },
            // 2. clear inspections from the store
            clearFinished() {
                this.$store.dispatch('clearFinished')
            }, 
            //filtering before getting cloned data in Mounted
            filteredInspections() {
                console.log(this.inspections);
                if (!this.inspections) return;
                this.sortedInspections = [...this.finished];
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
            selectFinished(finishedId) {
                // const modalContent = Object.entries();
                this.selectedFinishedIndex = finishedId - 1;
                console.log(finishedId);
            }
        },
        computed: {
            finished() {
                return this.$store.state.finished;
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
            selectedFinished() {
                console.log('Finished inspection selected')
                return {
                    ...this.finished[this.selectedFinishedIndex]
                }
            }
        }
    }
</script>

<style scoped>
    ion-fab-button {
        width: 35px;
        height: 35px; 
        margin: 5px;
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
