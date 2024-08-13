<template>
  <div class="wrapper">
    <component :is="img" />
    <p>{{ title }}</p>
    <div>
      <p>{{ price }} <coin /></p>
      <delete-icon />
    </div>
    <button></button>
  </div>
</template>
<script>
import Coin from "@/images/Coin";
import DeleteIcon from "@/images/DeleteIcon";
export default {
  components: {
    Coin,
    DeleteIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  display: flex;
}
</style>
