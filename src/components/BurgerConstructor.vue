<template>
  <div class="root">
    <burger-constructor-item title="test" price="20" type="up" />
    <div class="constructor">
      <burger-constructor-item
        title="test"
        price="20"
        v-for="index in arr"
        :key="index"
      />
    </div>
    <burger-constructor-item title="test" price="20" type="bottom" />
    <div class="footer">
      <div class="price">610<coin /></div>
      <app-button>Оформить заказ</app-button>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/UI/AppButton";
import BurgerConstructorItem from "@/components/BurgerConstructorItem";
import Coin from "@/images/Coin";
export default {
  components: {
    AppButton,
    BurgerConstructorItem,
    Coin,
  },
  data() {
    return {
      arr: new Array(10),
    };
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
  max-height: 40vh;
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
