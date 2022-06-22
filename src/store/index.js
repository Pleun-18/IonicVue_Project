//The Vue.use(Vuex) like aboth gives an use error
import { createStore } from 'vuex';
import axios from 'axios';

const url = [
    "http://localhost:3000/inspections", 
    "http://localhost:3000/finished",
    "http://localhost:3000/pdfs",
    "http://localhost:3000/credentials"
]

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export const store = createStore({
    state () {
        return {
        isLoggedIn: localStorage.getItem("token"),
        counter: 0, 
        loadingStatus: 'notLoading', 
        inspections: [],
        finished: [], 
        pdfs: [], 
        credentials: [], 
        errors: []
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn
        }
    },
    mutations: {
        // mutations voor axios/REST LOGIN (credentials)
        [LOGIN] (state) {
        state.pending = true;
        },
        [LOGIN_SUCCESS] (state) {
        state.isLoggedIn = true;
        state.pending = false;
        },
        [LOGOUT](state) {
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
            return new Promise(resolve => {
              setTimeout(() => {
                localStorage.setItem("token", "JWT");
                console.log("login succes")
                commit(LOGIN_SUCCESS);
                resolve();
              }, 1000);
            });
          },
          logout({ commit }) {
            localStorage.removeItem("token");
            commit(LOGOUT);
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
        fetchCredentials(context) {
            // 1. Set loading status
            context.commit('SET_LOADING_STATUS', 'loading');
            // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
            setTimeout(() => {
                axios.get(url[3])
                    .then(result => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_CREDENTIALS', result.data);
                        console.log(result);
                    })
                    .catch(err => {
                        context.commit('SET_LOADING_STATUS', 'notloading');
                        context.commit('SET_CREDENTIALS', []);
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