<template>
  <div class="root">
    <AppHeader />
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
import Bun1 from "@/images/buns/Bun1";
import Bun2 from "@/images/buns/Bun2";
import Souse1 from "@/images/souses/Souse1";
import Souse2 from "@/images/souses/Souse2";
import Souse3 from "@/images/souses/Souse3";
import Souse4 from "@/images/souses/Souse4";
export default {
  components: {
    AppHeader,
    BurgerConstructor,
    IngredientTabs,
    BurgerIngredients,
  },
  data() {
    return {
      ingredients: [
        {
          id: 0,
          title: "Булки",
          data: [
            { title: "Краторная булка N-200i", price: 20, img: Bun1 },
            { title: "Флюоресцентная булка R2-D3", price: 30, img: Bun2 },
            { title: "Краторная булка N-200i", price: 20, img: Bun1 },
            { title: "Флюоресцентная булка R2-D3", price: 30, img: Bun2 },
            { title: "Краторная булка N-200i", price: 20, img: Bun1 },
            { title: "Флюоресцентная булка R2-D3", price: 30, img: Bun2 },
            { title: "Краторная булка N-200i", price: 20, img: Bun1 },
            { title: "Флюоресцентная булка R2-D3", price: 30, img: Bun2 },
          ],
        },
        {
          id: 1,
          title: "Соусы",
          data: [
            { title: "Соус Spicy-X", price: 20, img: Souse1 },
            { title: "Соус фирменный Space Sauce", price: 30, img: Souse2 },
            { title: "Соус Spicy-X", price: 20, img: Souse1 },
            { title: "Соус фирменный Space Sauce", price: 30, img: Souse2 },
            { title: "Соус Spicy-X", price: 20, img: Souse1 },
            { title: "Соус фирменный Space Sauce", price: 30, img: Souse2 },
            { title: "Соус Spicy-X", price: 20, img: Souse1 },
            { title: "Соус фирменный Space Sauce", price: 30, img: Souse2 },
          ],
        },
        {
          id: 2,
          title: "Начинки",
          data: [
            { title: "Плоды Фалленианского дерева", price: 20, img: Souse3 },
            { title: "Хрустящие минеральные кольца", price: 30, img: Souse4 },
            { title: "Плоды Фалленианского дерева", price: 20, img: Souse3 },
            { title: "Хрустящие минеральные кольца", price: 30, img: Souse4 },
            { title: "Плоды Фалленианского дерева", price: 20, img: Souse3 },
            { title: "Хрустящие минеральные кольца", price: 30, img: Souse4 },
            { title: "Плоды Фалленианского дерева", price: 20, img: Souse3 },
            { title: "Хрустящие минеральные кольца", price: 30, img: Souse4 },
            { title: "Плоды Фалленианского дерева", price: 20, img: Souse3 },
            { title: "Хрустящие минеральные кольца", price: 30, img: Souse4 },
          ],
        },
      ],
    };
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
