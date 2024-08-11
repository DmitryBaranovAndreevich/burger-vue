<template>
  <div class="body">
    <AppHeader />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      likes: 15,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
  },
};
</script>

<style>
.body {
  background: #131316;
  height: 100vh;
}
</style>
