//The Vue.use(Vuex) like aboth gives an use error
import { createStore } from 'vuex';
import axios from 'axios';

const url = [
    "http://localhost:3000/inspections", 
    "http://localhost:3000/finished",
    "http://localhost:3000/pdfs",
    "http://localhost:3000/creds"
]

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export const store = createStore({
    state () {
        return {
        isLoggedIn: !!localStorage.getItem("token"),
        counter: 0, 
        loadingStatus: 'notLoading', 
        inspections: [],
        finished: [], 
        pdfs: [], 
        creds: [], 
        errors: []
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn
        }
    },
    mutations: {
        LOGIN (state, payload) {
            state.pending = true;
            state.creds = payload;
        },
        LOGIN_SUCCESS (state, payload) {
            state.isLoggedIn = true;
            state.pending = false;
            state.creds = payload;
        },
        SET_CREDS(state, payload) {
            state.creds = payload;
        },
        CLEAR_CREDS(state) {
            state.creds = []
        },
        LOGOUT (state) {
            state.isLoggedIn = false;
        },
        // mutations voor axios/REST inspections
        SET_LOADING_STATUS(state, payload) {
            state.loadingStatus = payload;
        },
        SET_INSPECTIONS(state, payload) {
            state.inspections = payload;
        },
        CLEAR_INSPECTIONS(state) {
            state.inspections = []
        },
        DELETE_INSPECTION(state, id){
            let index = state.inspections.findIndex(inspection => inspection.id == id);
            state.inspections.splice(index, 1);
            axios.delete('http://localhost:3000/inspections/' + id);
            console.log("Deleted Inspections" + id);
        },
        // mutations voor axios/REST finished inspections
        SET_FINISHED(state, payload) {
            state.finished = payload;
        },
        CLEAR_FINISHED(state) {
            state.finished = []
        },
        // mutations voor axios/REST pdfs
        SET_PDFS(state, payload) {
            state.pdfs = payload;
        },
        CLEAR_PDFS(state) {
            state.pdfs = []
        },
        // Mutation voor Error handling
        ADD_ERROR(state, payload) {
            state.errors = [...state.errors, payload]
        }
    },
    actions: {
        // actions voor Login state
        login({ commit }) {
            commit(LOGIN); // show spinner
              setTimeout(() => {
                axios.get(url[3])
                .then(result => {
                    commit('SET_LOADING_STATUS', 'notloading');
                    commit('LOGIN', result.data);
                    console.log(result.data);
                    console.log("login succes")
                    commit(LOGIN_SUCCESS);
                })
                .catch(err => {
                    console.log("error:  " + err);
                })
                }, 1000);
          },
          logout({ commit }) {
            localStorage.removeItem("token");
            commit(LOGOUT);
          },
        fetchCreds(context) {
            // 1. Set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
            setTimeout(() => {
                axios.get(url[3])
                    .then(result => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_CREDS', result.data);
                        console.log(result);
                    })
                    .catch(err => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_CREDS', []);
                        context.commit('ADD_ERROR', err);
                        console.log("error:  " + err);
                    })
            }, 1500);
        },
        // actions voor de fetch inspections API
        fetchInspections(context) {
            // 1. Set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
            setTimeout(() => {
                axios.get(url[0])
                    .then(result => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_INSPECTIONS', result.data);
                        console.log(result);
                    })
                    .catch(err => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_INSPECTIONS', []);
                        context.commit('ADD_ERROR', err);
                        console.log("error:  " + err);
                    })
            }, 1500);
        },
        // deleteInspection ({commit}, id) {
        //     this.$http.delete('http://localhost:3000/inspections/' + id)
        //         .then(() => {              
        //              commit('DELETE_INSPECTION', id);
        //              this.inspections.$remove(id);
        //              axios.delete('http://localhost:3000/inspections/' + id)
        //         });
        // },
        fetchFinished(context) {
            // 1. Set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
            setTimeout(() => {
                axios.get(url[1])
                    .then(result => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_FINISHED', result.data);
                        console.log(result);
                    })
                    .catch(err => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_FINISHED', []);
                        context.commit('ADD_ERROR', err);
                        console.log("error:  " + err);
                    })
            }, 1500);
        },
        fetchPdfs(context) {
            // 1. Set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
            setTimeout(() => {
                axios.get(url[2])
                    .then(result => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_PDFS', result.data);
                        console.log(result);
                    })
                    .catch(err => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_PDFS', []);
                        context.commit('ADD_ERROR', err);
                        console.log("error:  " + err);
                    })
            }, 1500);
        },
        clearInspections(context) {
            context.commit('CLEAR_INSPECTIONS')
        }, 
        clearFinished(context) {
            context.commit('CLEAR_FINISHED')
        }
    }
})