<template>
  <div class="container">
    <three-dots :class="{ hidden: type !== 'middle' }" />
    <div
      class="wrapper"
      :class="{ upComponent: type === 'up', bottomComponent: type === 'bottom' }"
    >
      <img :src="element.image" />
      <p class="title">{{ element.name }}</p>
      <div class="priceContainer">
        <p>{{ element.price }}</p>
        <coin />
      </div>
      <button class="deleteButton">
        <delete-icon />
      </button>
    </div>
  </div>
</template>
<script>
import Coin from "@/images/Coin";
import ThreeDots from "@/images/ThreeDots";
import DeleteIcon from "@/images/DeleteIcon";
export default {
  components: {
    Coin,
    DeleteIcon,
    ThreeDots,
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "middle",
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  padding: 16px 24px;
  align-items: center;
  background: #1c1c21;
  border-radius: 88px;
  gap: 20px;
}

.hidden {
  opacity: 0;
}

.priceContainer {
  display: flex;
  align-items: center;
  font-size: 28px;
  gap: 10px;
}

.priceContainer p {
  margin: 0;
}

.deleteButton {
  background: transparent;
  border: none;
}

.deleteButton:hover {
  cursor: pointer;
}

.image {
  max-width: 80px;
  max-height: 40px;
}

.title {
  font-size: 16px;
  flex: 1;
}

.container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
}

.upComponent {
  border-radius: 88px 88px 40px 40px;
}

.bottomComponent {
  border-radius: 40px 40px 88px 88px;
}
</style>
