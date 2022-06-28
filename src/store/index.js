import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gallery:[]
  },
  getters: {
    getGallery:(state)=>state.gallery
  },
  actions: {
    getPicturesFromAPI({commit}){
      return axios("https://frozen-badlands-81895.herokuapp.com/getPicture",{method:"GET"}).then((response)=>{commit("setPicToState",response.data)})
    }
  },
  mutations: {
    setPicToState(state,data){
      state.gallery=data
    }

  }
})
