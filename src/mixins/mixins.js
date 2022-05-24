// Mixins are global Javascript logic that can be recalled in multiple components
// Potentially replaces mixins in the future

//Loading de modalController for global use
import { modalController } from '@ionic/vue';

export default { 
    methods: {
        //Closing Global Modals
        closeModal() {
          modalController.dismiss({dismissed: true});
        }
      },
  }