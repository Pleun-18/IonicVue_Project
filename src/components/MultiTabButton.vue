<template>
    
    <!-- fab placed in the center of the content with a list on each side -->
    <ion-fab vertical="end" horizontal="end">
        <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
        <ion-fab-button><ion-icon :icon="logoVimeo"></ion-icon></ion-fab-button>
        </ion-fab-list>
        <ion-fab-list side="bottom">
        <ion-fab-button><ion-icon :icon="logoFacebook"></ion-icon></ion-fab-button>
        </ion-fab-list>
        <ion-fab-list side="start">
        <ion-fab-button><ion-icon :icon="logoInstagram"></ion-icon></ion-fab-button>
        </ion-fab-list>
    </ion-fab>

</template>

<script lang="js">
    import { defineComponent } from 'vue';
    import { IonButton } from '@ionic/vue';

    export default defineComponent({
    name: 'multiTabButton'
    components: { IonButton }
    });
</script>

<style scoped>
    
</style>