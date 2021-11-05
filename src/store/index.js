import { createStore } from "vuex";

export default createStore({
  state: {
    goodsList: [], //Список товаров
    searchParameters: [
      "По умолчанию",
      "Цена по возрастанию",
      "Цена по убыванию",
      "По названию",
    ], // Параметры поиска
    selected: "По умолчанию",
  },
  getters: {
    getGoodsList: (state) => state.goodsList,
    getSearchParameters: (state) => state.searchParameters,
    getSelected: (state) => state.selected,
  },
  mutations: {
    setGoodsList(state, payload) {
      state.goodsList.push(...payload);
    },
    addGood(state, payload) {
      state.goodsList.push(payload);
      sessionStorage.setItem(payload.id, JSON.stringify(payload))
    },
    removalGood(state, payload) {
      sessionStorage.removeItem(payload.id);
      let ind = state.goodsList.indexOf(payload);
      state.goodsList.splice(ind, 1);
    },
    changeSelected(state, params) {
      state.selected = params;
    },
  },
  actions: {
    async fetchDataGoodsList({ commit }) {
      const response = await fetch(
        "https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/idaproject.json"
      );
      const res = await response.json();
      // запускаем изменение состояния через commit
      commit("setGoodsList", res);
    },
    fetchSessionStorage({ commit }) {
      const sessionStorageArr = []
      for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        let item = sessionStorage.getItem(key);
        let data = JSON.parse(item);
        sessionStorageArr.push(data)
      }
      commit("setGoodsList", sessionStorageArr);
    }

  },
});
