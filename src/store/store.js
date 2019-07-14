import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myMessage: ""
  },
  getters: {
    getMessage: state => {
      return state.myMessage;
    }
  },
  mutations: {
    updateMessage: (state, payload) => {
      state.myMessage = payload;
    },
    updateMessageStorage: (state, payload) => {
      state.myMessage = payload;
      $vf.createInstance({ storeName: "myStore" }).then(store => {
        store.setItem("myMessage", state.myMessage);
      });
    }
  },
  actions: {
    setMessage: (context, payload) => {
      context.commit("updateMessageStorage", payload);
    },
    setMessageFromStorage: ({ commit }) => {
      $vf.createInstance({ storeName: "myStore" }).then(store => {
        store.getItem("myMessage").then(result => {
          commit("updateMessage", result);
        });
      });
    }
  }
});
