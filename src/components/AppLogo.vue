<template>
  <div class="container">
    <span class="text">STELLAR</span>
    <logo />
    <span class="text">BURGERS</span>
  </div>
</template>
<script>
import Logo from "@/images/Logo";
export default {
  components: {
    Logo,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  color: #f2f2f3;
  font-size: 20px;
}
</style>
