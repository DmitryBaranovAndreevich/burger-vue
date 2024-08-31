<template>
  <div class="root" v-if="buns" :ref="drop" role="Dustbin">
    <burger-constructor-item :element="buns" type="up" />
    <div class="constructor" v-if="ingredients?.length > 0">
      <burger-constructor-item
        v-for="ingredient in ingredients"
        :element="ingredient"
        :key="ingredient.id"
      />
    </div>
    <burger-constructor-item :element="buns" type="bottom" />
    <div class="footer">
      <div class="price">610<coin /></div>
      <app-button>Оформить заказ</app-button>
    </div>
  </div>
</template>
<script setup>
import { useDrop } from "vue3-dnd";
import { INGREDIENT_DND } from "@/types";
import store from "@/store";

const onDrop = (item) => {
  const constructorComponents =  store.getters["mainPage/constructor/getComponents"]
  store.commit(
    "mainPage/constructor/setComponents",
    [...constructorComponents, item],
  );
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [collect, drop] = useDrop(() => ({
  accept: INGREDIENT_DND,
  drop: onDrop,
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}));
</script>

<script>
import AppButton from "@/components/UI/AppButton";
import BurgerConstructorItem from "@/components/BurgerConstructorItem";
import Coin from "@/images/Coin";
import { mapGetters } from "vuex";
export default {
  components: {
    AppButton,
    BurgerConstructorItem,
    Coin,
  },
  computed: {
    ...mapGetters({
      ingredients: "mainPage/constructor/getComponents",
      buns: "mainPage/constructor/getBuns",
    }),
  },
};
</script>
<style scoped>
.root {
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  gap: 20px;
}

.constructor {
  max-height: 25vh;
  flex: 1 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
}

.constructor::-webkit-scrollbar {
  width: 8px;
  background-color: #131316;
}

.constructor::-webkit-scrollbar-thumb {
  background-color: #8585ad;
}

.footer {
  display: flex;
  gap: 30px;
  justify-content: flex-end;
}

.price {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 36px;
  margin-right: 10px;
}
</style>
