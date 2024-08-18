<template>
  <modal-overlay v-if="dialogVisible" v-model:show="dialogVisible">
    <div class="wrapper">
      <p class="order">034536</p>
      <p class="text">идентификатор заказа</p>
      <done />
      <p class="text smallColorSize">Ваш заказ начали готовить</p>
      <p class="text smallColorSize darkColor">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  </modal-overlay>
</template>
<script>
import ModalOverlay from "@/components/UI/ModalOverlay";
import Done from "@/images/Done";
export default {
  components: {
    ModalOverlay,
    Done,
  },
  data() {
    return {
      dialogVisible: true,
    };
  },
  props: {
    show: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.order {
  margin: 0;
  font-size: 144px;
  color: #f2f2f3;
  line-height: 100px;
}

.text {
  margin: 0;
  color: #f2f2f3;
  line-height: 0;
  font-size: 24px;
  text-align: center;
}

.smallColorSize {
  font-size: 16px;
}

.darkColor {
  color: #8585ad;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 100px 0;
}
</style>
