<template>
  <div class="ingredientWrapper" :ref="drag">
    <span class="counter">10</span>
    <img :src="element.image" />
    <p class="price">{{ element.price }}<coin /></p>
    <p class="title">{{ element.name }}</p>
  </div>
</template>

<script setup>
import { useDrag } from "vue3-dnd";
import { INGREDIENT_DND } from "@/types";

// eslint-disable-next-line vue/valid-define-props
const props = defineProps({
  element: Object,
});

const [collect, drag] = useDrag(() => ({
  type: INGREDIENT_DND,
  item: { name: props.element.name },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
  }),
}));
</script>

<script>
import Coin from "@/images/Coin";

export default {
  components: {
    Coin,
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.ingredientWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 240px;
  position: relative;
}

.counter {
  position: absolute;
  border-radius: 50%;
  background: #4c4cff;
  padding: 10px 10px;
  right: 0;
}

.ingredientWrapper:hover {
  cursor: pointer;
}

.price {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 28px;
  margin: 15px 0;
}

.title {
  font-size: 16px;
}
</style>
