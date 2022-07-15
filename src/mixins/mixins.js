// // Mixins are global Javascript logic that can be recalled in multiple components
// // Potentially replaces mixins in the future

import { modalController } from '@ionic/vue';

export default { 
    methods: {
        dismissModal() {
            modalController.dismiss({dismissed: true});
        }, 
        setTheme(event) {
            let mode = document.body.setAttribute('color-theme', 'dark')
            if(event.detail.checked){
                document.body.setAttribute('color-theme', 'dark')
                console.log("Dark Theme Enabled");
                return localStorage.setItem("mode", (localStorage.getAttribute("currentMode", mode)))
            }else{
                document.body.setAttribute('color-theme', 'light')
                console.log("Light Theme Enabled");
                return localStorage.setItem("mode", (localStorage.getAttribute("currentMode", mode)))
            }
        }
    }
}