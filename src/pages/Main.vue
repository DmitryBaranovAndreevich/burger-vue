<template>
  <div class="root">
    <app-header />
    <ingredient-detail-modal
      :v-if="ingredients[1]?.data[0]"
      v-model:show="dialogVisible"
      :element="ingredients[1]?.data[0]"
    />
    <div class="wrapper">
      <div class="column">
        <h1 class="title">Соберите бургер</h1>
        <ingredient-tabs :options="ingredients">
          <burger-ingredients />
        </ingredient-tabs>
      </div>
      <div class="column">
        <burger-constructor />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import BurgerIngredients from "@/components/BurgerIngredients";
import BurgerConstructor from "@/components/BurgerConstructor";
import IngredientTabs from "@/components/IngredientTabs";
import { ingredientsService } from "@/API";
import IngredientDetailModal from "@/components/IngredientDetailModal";
export default {
  components: {
    AppHeader,
    BurgerConstructor,
    IngredientTabs,
    BurgerIngredients,
    IngredientDetailModal,
  },
  data() {
    return {
      ingredients: [],
      dialogVisible: true,
      input: "",
    };
  },
  methods: {
    async fetchIngredients() {
      try {
        const response = await ingredientsService.getAllIngredients();
        this.ingredients = [
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
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchIngredients();
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.column {
  width: 100%;
  max-width: 36vw;
  color: #f2f2f3;
}

.title {
  font-size: 36px;
  margin-bottom: 20px;
}
</style>
