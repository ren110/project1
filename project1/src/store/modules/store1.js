import Vue from 'vue';
// 此处的this指向store
let that = new Vue();
export default {
  namespaced: true,
  state: Vue.observable({
    rowDetail:{},
    orgList:[],
  }),
  mutations: {
    getRowDetail(state,data){
      state.rowDetail=data
    },
    getorgList(state, data) {
      state.orgList = [];
      for (let i = 0; i < data.length; i++) {
        that.$set(state.orgList, i, data[i]);
      }
    }
  },
  actions: {
    async getorgList({ commit }){
      await that.$https.fetchPost(that.$url.userInfo.getTeamList, {}, that, false, false).then((res) => {
        commit('getorgList', res)
      })
    }
  }
};
