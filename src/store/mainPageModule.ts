import { ingredientsService } from "@/API";
import { Ingredient } from "@/types";
import { ActionContext } from "vuex";
import { constructorModule } from "./constructorModule";

interface IMainPageState {
  ingredients: Ingredient[];
  dialogVisible: boolean;
}

export const mainPageModule = {
  state: (): IMainPageState => ({
    ingredients: [],
    dialogVisible: true,
  }),
  modules: {
    constructor: constructorModule,
  },
  getters: {
    getTabs(state: IMainPageState) {
      return [
        {
          id: 0,
          title: "Булки",
          data: state.ingredients.filter((el) => el.type === "bun"),
        },
        {
          id: 1,
          title: "Соусы",
          data: state.ingredients.filter((el) => el.type === "sauce"),
        },
        {
          id: 2,
          title: "Начинки",
          data: state.ingredients.filter((el) => el.type === "main"),
        },
      ];
    },
    getAllIngredients(state: IMainPageState) {
      return state.ingredients;
    },
  },
  mutations: {
    setIngredients(state: IMainPageState, ingredients: Ingredient[]) {
      state.ingredients = ingredients;
    },
    setDialogVisible(state: IMainPageState, isVisible: boolean) {
      state.dialogVisible = isVisible;
    },
  },
  actions: {
    async fetchIngredients({
      commit,
    }: ActionContext<IMainPageState, any>) {
      try {
        const response = await ingredientsService.getAllIngredients();
        commit("setIngredients", response.data);
        commit(
          "constructor/setBuns",
          response.data.find((el) => el.type === "bun", { root: true }),
        );
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
