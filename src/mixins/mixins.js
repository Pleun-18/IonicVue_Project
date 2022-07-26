// // Mixins are global Javascript logic that can be recalled in multiple components
// // Potentially replaces mixins in the future

import { modalController } from '@ionic/vue';

export default { 
    methods: {
        dismissModal() {
            modalController.dismiss({dismissed: true});
        },
        fetchCreds() {
            this.$store.dispatch('fetchCreds')
        }, 
        setTheme(event) {
            // let currentUser = localStorage.getItem("currentUser");
            let checkCreds = this.creds.find(o => o.mode === this.mode);
            console.log(checkCreds);
            // console.log(checkCreds.preferences.splice(1, 1, "dark"))
            if(event.detail.checked){
                document.body.setAttribute('color-theme', 'dark')
                checkCreds.$set(checkCreds.preferences, 1, "dark")
                console.log("Dark Theme Enabled");
            }else{
                document.body.setAttribute('color-theme', 'light');
                console.log("Light Theme Enabled");
            }
        }
    },
    beforeMount() {
        this.fetchCreds();
    }, 
    computed: {
        creds() {
            return this.$store.state.creds;
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
}