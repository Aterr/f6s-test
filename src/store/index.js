import Vue from 'vue'
import Vuex from 'vuex'

import { currentUser, conversation } from "@/data/mockup.js";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    currentUser: {}
  },
  mutations: {
    SET_MESSAGES(state, arr) {
      state.messages = arr
    },
    SET_CURRENT_USER(state, obj) {
      state.currentUser = obj
    },
    SET_NEW_MESSAGE(state, obj) {
      state.messages.push(obj)
    }
  },
  actions: {
    GET_INFO({ commit }) {
      commit('SET_MESSAGES', JSON.parse(conversation))
      commit('SET_CURRENT_USER', JSON.parse(currentUser))
    }
  },
  getters: {
    GET_MESSAGES: state => {
      return state.messages
    },
    GET_CURRENT_USER: state => {
      return state.messages
    },
  }
})
