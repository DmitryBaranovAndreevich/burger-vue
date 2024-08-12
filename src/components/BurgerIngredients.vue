<template>
  <div class="ingredientWrapper">
    <span class="counter">10</span>
    <component :is="element.img" />
    <p class="price">{{ element.price }}<coin /></p>
    <p class="title">{{ element.title }}</p>
  </div>
</template>

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
