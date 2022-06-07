//The Vue.use(Vuex) like aboth gives an use error
import { createStore } from 'vuex';
import axios from 'axios';
// import MyService from '@/services/my.service.js';

const url = "http://localhost:3000/inspections"

export const store = createStore({
  state () {
    return {
      counter: 0, 
      loadingStatus: 'notLoading', 
      inspections: [], 
      errors: []
    }
  },
  getters: {
  },
  mutations: {
    // mutations voor axios/REST countries
    SET_LOADING_STATUS(state, payload) {
        state.loadingStatus = payload;
    },
    SET_INSPECTIONS(state, payload) {
        state.inspections = payload;
    },
    CLEAR_INSPECTIONS(state) {
        state.inspections = []
    },
    ADD_ERROR(state, payload) {
        state.errors = [...state.errors, payload]
    }
},
actions: {
    // actions voor de RestCountries API
    fetchInspections(context) {
        // 1. Set loading status
        context.commit('SET_LOADING_STATUS', 'loading');
        // 2. Make http-request - optional you can simulate a delay by wrapping it in a setTimeOut
        //setTimeout(() => {
            axios.get(url)
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
        //}, 1500);
    },
    clearInspections(context) {
        context.commit('CLEAR_INSPECTIONS')
    }
    }
})