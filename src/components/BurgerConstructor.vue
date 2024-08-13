<template>
  <div class="root">
    <div class="constructor">
      <BurgerConstructorItem title="test" price="20" :img="bun1" />
    </div>
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
import Bun1 from "@/images/buns/Bun2";
export default {
  components: {
    AppButton,
    BurgerConstructorItem,
    Coin,
    Bun1,
  },
};
</script>
<style scoped>
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.constructor {
  height: 100px;
  flex: 1 0;
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
