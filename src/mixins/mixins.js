// // Mixins are global Javascript logic that can be recalled in multiple components
// // Potentially replaces mixins in the future

import { modalController } from '@ionic/vue';

export default { 
    methods: {
        dismissModal() {
            modalController.dismiss({dismissed: true});
        }
    }
  }