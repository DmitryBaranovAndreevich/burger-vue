<template>
  <div class="root">
    <input
      class="input"
      :placeholder="placeholder"
      @input="updateInput"
      :value="modelValue"
      :type="type"
    />
    <div class="icon">
      <aye v-if="type === 'password'" />
    </div>
  </div>
</template>
<script>
import Aye from "@/images/Aye";
export default {
  name: "app-input",
  components: {
    Aye,
  },
  props: {
    placeholder: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
<style scoped>
.root {
  width: 100%;
  position: relative;
}

.input {
  width: 100%;
  padding: 20px 24px;
  background: #2f2f37;
  border: none;
  border-radius: 40px;
  box-sizing: border-box;
  outline: none;
  color: #8585ad;
  font-size: 16px;
}

.icon {
  position: absolute;
  top: 17px;
  right: 20px;
}
</style>
