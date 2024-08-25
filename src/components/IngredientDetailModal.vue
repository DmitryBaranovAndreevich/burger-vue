<template>
  <modal-overlay v-if="dialogVisible" v-model:show="dialogVisible">
    <div class="wrapper">
      <p class="title">Детали ингредиента</p>
      <img :src="element?.image" />
      <p>{{ element?.name }}</p>
      <div class="container">
        <div>
          <p>Калории,ккал</p>
          <p class="center">{{ element?.calories }}</p>
        </div>
        <div>
          <p>Белки, г</p>
          <p class="center">{{ element?.proteins }}</p>
        </div>
        <div>
          <p>Жиры, г</p>
          <p class="center">{{ element?.fat }}</p>
        </div>
        <div>
          <p>Углеводы, г</p>
          <p class="center">{{ element?.carbohydrates }}</p>
        </div>
      </div>
    </div>
  </modal-overlay>
</template>
<script>
export default {
  components: {
    ModalOverlay,
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
    element: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin: 7px 0 60px;
  color: #f2f2f3;
}

.wrapper p {
  padding: 0;
  margin: 0;
}

.center {
  text-align: center;
}

.container {
  display: flex;
  gap: 20px;
}

.title {
  font-size: 36px;
}
</style>
