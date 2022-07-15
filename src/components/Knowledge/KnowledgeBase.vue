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
              <h2> Knowledge base </h2>
            </ion-title>
        </ion-toolbar>
      </ion-header>

      <br>

        <!--Loading indicator/spinner-->
        <div v-if="!loading" style="text-align: center;">
            <img src="../assets/spinner.svg" alt="Loading indicator...">
        </div>

        <!--Oh no, something bad happened! -->
        <div v-if="error" class="alert alert-danger">
            <h3>Error!</h3>
            <div>{{ errorList }}</div>
        </div>

        <!--List with pdf data-->
        <ion-list class="list-group" v-if="pdfs && pdfs.length">
            <ion-item class="list-group-item"
                 v-for="pdf in pdfs"
                :key="pdf.id">
                    <img :src="pdf.img" :alt="pdf.name">
                    <h1> {{ pdf.name }} </h1>
                    <a :href="pdf.src" :download="pdf.name">
                        <ion-icon :icon="download"></ion-icon>
                    </a>
            </ion-item>
        </ion-list>

    </div>
</template>

<script>
  import mixins from '/src/mixins/mixins.js'
  import { download, close } from 'ionicons/icons';

    export default {
        name: "KnowledgeBase",
        setup() {
            return {
                download, 
                close, 
            }
        },
        mixins: [mixins],
        data() {
            return {
                selectedPdfIndex: 0
            }
        },
        methods: {
            // 1. fetch all pdfs from the store
            fetchPdfs() {
                this.$store.dispatch('fetchPdfs')
            }
        },
        computed: {
            pdfs() {
                return this.$store.state.pdfs;
            },
            loading() {
                return this.$store.state.loadingStatus === 'notloading'
            },
            error() {
                return this.$store.state.errors.length > 0;
            },
            errorList() {
                return this.$store.state.errors;
            }
        }, 
        beforeMount() {
            this.fetchPdfs();
        }
    }
</script>

<style scoped>

    .list-group-item {
        display: flex;
        flex: wrap;
        justify-content: space-between;
        flex-direction: column;
    }

    ion-icon {
        width: 35px;
        height: 35px;
    }

    img {
        width: 20%;
        margin: 5px;
    }

</style>
