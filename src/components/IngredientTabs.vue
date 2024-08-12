<template>
  <div class="root">
    <div class="optionsWrapper">
      <div class="option" v-for="option in options" :key="option.id">
        <label
          class="label"
          :class="{ activeOption: option.id === activeTab }"
          @click="() => setTab(option.id)"
          >{{ option.title }}</label
        >
      </div>
    </div>
    <div class="optionsWrapper dataWrapper">
      <div v-for="ingredient in options[activeTab].data" :key="ingredient">
        <burger-ingredients :element="ingredient" />
      </div>
    </div>
  </div>
</template>

<script>
import BurgerIngredients from "@/components/BurgerIngredients";
export default {
  components: { BurgerIngredients },
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    setTab(id) {
      console.log(id);
      this.activeTab = id;
    },
  },
};
</script>

<style scoped>
.root {
  width: 100%;
  color: #f2f2f3;
}

.optionsWrapper {
  display: flex;
  justify-content: space-between;
}

.dataWrapper {
  flex-wrap: wrap;
  padding: 0 3vw;
  overflow: auto;
  height: 60vh;
  margin-top: 24px;
}

.dataWrapper::-webkit-scrollbar {
  width: 8px;
  background-color: #131316;
}

.dataWrapper::-webkit-scrollbar-thumb {
  background-color: #8585ad;
}

.option {
  width: 100%;
  flex: 1 0;
}

.activeOption {
  border-bottom: 2px solid #4c4cff;
}

.label:hover {
  cursor: pointer;
}

.label {
  display: block;
  text-align: center;
}

.ingredientWrapper {
  max-width: 240px;
}
</style>
