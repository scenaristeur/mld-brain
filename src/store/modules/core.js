//import * as api from "@/api/syncld";

const state = () => ({
    // toaster: {},
    // coreCurrent: null,
    // // user: null,
    // history: [],
  });
  
  const mutations = {
    // setCoreCurrent(state, c) {
    //   state.coreCurrent = c;
    //   c != null ? this.commit("core/pushToHistory", c) : "";
    // },
    // setToast(state, t) {
    //   state.toaster = t;
    // },
    // pushToHistory(state, n) {
   
    //   let history = state.history.filter((todo) => todo["id"] != n["id"]);
    //    history.unshift({
    //     "id": n["id"],
    //     "name": n["name"],
    //     "group": n["group"],
    //   });
    //   state.history = history;
    // },
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
  