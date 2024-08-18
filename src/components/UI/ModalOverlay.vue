<template>
  <div class="dialog" @click="hideDialog">
    <div @click.stop class="dialogContent">
      <button class="close" @click="hideDialog"><close-icon /></button>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import CloseIcon from "@/images/CloseIcon";
export default {
  components: {
    CloseIcon,
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scoped>
.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 2;
}

.dialogContent {
  padding: 0 100px;
  position: relative;
  border-radius: 40px;
  margin: auto;
  background: #1c1c21;
}

.close {
  position: absolute;
  background: transparent;
  border: none;
  right: 20px;
  top: 20px;
}

.close:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
