<template>
    <ion-button color="dark" class="button">
        <slot>Button</slot>
    </ion-button>
</template>

<script lang="js">
    import { defineComponent } from 'vue';
    import { IonButton } from '@ionic/vue';

    export default defineComponent({
    components: { IonButton }
    });
</script>

<style scoped>
    
</style>