//import * as api from "@/api/syncld";

const state = () => ({
    // toaster: {},
    current: null,
    // // user: null,
    history: [],
  });
  
  const mutations = {
    setcurrent(state, c) {
      state.current = c;
      c != null ? this.commit("core/pushToHistory", c) : "";
      console.log("current", state.current, state.history);
    },
    setToast(state, t) {
      state.toaster = t;
    },
    pushToHistory(state, n) {
      let history = state.history.filter((element) => element != n);
      history.unshift(n);
      state.history = history
      console.log(state.history)
    },
    // updateNode(n){
    //   console.log("todo find node byId and update",n)
    // }
  };
  
  const actions = {
    //   create(/*{ commit, state },*/ item) {
    //     api.create(item);
    //   },
  };
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations,
  };
  