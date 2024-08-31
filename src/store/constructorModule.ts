import { Ingredient } from "@/types";
import { ActionContext } from "vuex";

interface IConstructorState {
  buns?: Ingredient;
  components: Ingredient[];
}

export const constructorModule = {
  state: (): IConstructorState => ({
    components: [],
  }),
  getters: {
    getBuns(state: IConstructorState) {
      return state.buns;
    },
    getComponents(state: IConstructorState) {
      return state.components;
    },
  },
  mutations: {
    setBuns(state: IConstructorState, payload: Ingredient) {
      state.buns = payload;
    },
    setComponents(state: IConstructorState, payload: Ingredient[]) {
      state.components = payload;
    },
  },
  actions: {
    initBuns(
      { commit }: ActionContext<IConstructorState, any>,
      payload: Ingredient,
    ) {
      commit("setBuns", payload);
    },
  },
  namespaced: true,
};
