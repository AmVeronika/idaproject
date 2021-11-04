import { createStore } from "vuex";

export default createStore({
  state: {
    goodsList: [], //Список товаров
    searchParameters: ['По умолчанию', 'Цена по возрастанию', 'Цена по убыванию', 'По названию'] // Параметры поиска
  },
  getters: {
    getGoodsList: (state) => state.goodsList,
    getSearchParameters: (state) => state.searchParameters,
  },
  mutations: {
    setGoodsList(state, payload) {
      payload.forEach( el => { // Разделение на тысячных на пробелы
        el.price = el.price.toLocaleString();
      });
      state.goodsList.push(...payload);
    },
  },
  actions: {
    async fetchDataGoodsList({ commit }) {
      const response = await fetch('https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/idaproject.json')
      const res = await response.json();
      // запускаем изменение состояния через commit
      commit('setGoodsList', res);
    }
  },
});
