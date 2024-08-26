<template>
  <div class="root">
    <app-header />
    <div class="wrapper">
      <div class="column">
        <h1 class="title">Соберите бургер</h1>
        <ingredient-tabs >
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
import { mapActions } from "vuex";
import AppHeader from "@/components/AppHeader";
import BurgerIngredients from "@/components/BurgerIngredients";
import BurgerConstructor from "@/components/BurgerConstructor";
import IngredientTabs from "@/components/IngredientTabs";
// import IngredientDetailModal from "@/components/IngredientDetailModal";
export default {
  components: {
    AppHeader,
    BurgerConstructor,
    IngredientTabs,
    BurgerIngredients,
    // IngredientDetailModal,
  },
  methods: {
    ...mapActions({
      fetchIngredients: "mainPage/fetchIngredients",
    }),
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
