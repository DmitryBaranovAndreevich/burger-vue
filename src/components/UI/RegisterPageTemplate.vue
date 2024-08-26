<template>
  <div class="wrapper">
    <div class="root">
      <p class="title">{{ title }}</p>
      <slot></slot>
      <app-button @click="onClick">{{ buttonText }}</app-button>
      <component v-if="botomComponent" :is="botomComponent" />
    </div>
  </div>
</template>
<script>
export default {
  name: "register-page-template",
  props: {
    title: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    botomComponent: {
      type: Object,
    },
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}
.root {
  position: relative;
  margin: auto;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.title {
  color: #f2f2f3;
  font-size: 24px;
  margin: 0;
}
</style>
