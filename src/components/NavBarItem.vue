<template>
  <div class="linkItem" :class="[childClass]">
    <slot></slot>
    <a class="link">{{ title }}</a>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    childClass: {
      type: String,
    },
  },
};
</script>
<style scoped>
.link {
  color: #f2f2f3;
}

.linkItem {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
