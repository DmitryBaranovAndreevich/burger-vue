<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "app-button",
  methods: {
    onClick() {
      this.$emit("update:click");
    },
  },
};
</script>
<style>
.button {
  font-size: 16px;
  padding: 20px 40px;
  border-radius: 64px;
  border: 2px solid #4c4cff;
  background-image: linear-gradient(#801ab2, #4c4cff);
  color: #f2f2f3;
}
</style>
