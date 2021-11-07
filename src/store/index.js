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
      sessionStorage.setItem("goods", JSON.stringify(state.goodsList));
    },
    removalGood(state, payload) {
      let ind = state.goodsList.indexOf(payload);
      state.goodsList.splice(ind, 1);
      sessionStorage.setItem("goods", JSON.stringify(state.goodsList));
    },
    changeSelected(state, params) {
      state.selected = params;
    },
  },
  actions: {
    async fetchDataGoodsList({ commit }) {
      // для отображения новых данных при перезагрузке страницы
      let goods = sessionStorage.getItem("goods");
      let data = JSON.parse(goods);
      let res;
      if (data) {
        res = data;
      } else {
        const response = await fetch(
          "https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/idaproject.json"
        );
        res = await response.json();
        sessionStorage.setItem("goods", JSON.stringify(res));
      }
      commit("setGoodsList", res);
    },
  },
});
