import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: ""
  },
  getters: {
    getState: state => {
      return state.name;
    }
  },
  mutations: {
    updateState: (state, payload) => {
      state.name = payload;
    },
    updateStateStorage: (state, payload) => {
      state.name = payload.value;
      $vf.createInstance({ storeName: payload.store }).then(store => {
        store.setItem(payload.key, state.name);
      });
    }
  },
  actions: {
    setState: (context, payload) => {
      context.commit("updateStateStorage", payload);
    },
    setStateFromStorage: ({ commit }, payload) => {
      commit("updateState", payload);
      $vf.createInstance({ storeName: payload.store }).then(store => {
        store.getItem(payload.key).then(result => {
          commit("updateState", result);
        });
      });
    }
  }
});
