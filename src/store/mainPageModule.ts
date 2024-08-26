import { ingredientsService } from "@/API";
import { Ingredient } from "@/types"
import { ActionContext } from "vuex";

interface IMainPageState {
  ingredients: {
    id: string,
    title: string,
    data: Ingredient[]
  }[],
  dialogVisible: boolean,
}

export const mainPageModule = {
  state: (): IMainPageState => ({
    ingredients: [],
    dialogVisible: true,
  }),
  getters: {},
  mutations: {
    setIngredients(state: IMainPageState, ingredients: IMainPageState["ingredients"]) {
      state.ingredients = ingredients
    },
    setDialogVisible(state: IMainPageState, isVisible: boolean) {
      state.dialogVisible = isVisible
    },
  },
  actions: {
    async fetchIngredients({ commit }: ActionContext<IMainPageState, any>) {
      try {
        const response = await ingredientsService.getAllIngredients();
        const ingredients = [
          {
            id: 0,
            title: "Булки",
            data: response.data.filter((el) => el.type === "bun"),
          },
          {
            id: 1,
            title: "Соусы",
            data: response.data.filter((el) => el.type === "sauce"),
          },
          {
            id: 2,
            title: "Начинки",
            data: response.data.filter((el) => el.type === "main"),
          },
        ];
        commit("setIngredients", ingredients)
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
}