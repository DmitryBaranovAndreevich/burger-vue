<template>
  <DndProvider :backend="HTML5Backend" >
    <div class="body">
      <router-view></router-view>
    </div>
  </DndProvider>
</template>

<script setup>
import { DndProvider } from "vue3-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
</script>

<style>
.body,
body {
  background: #131316;
  height: 100vh;
  box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
}
</style>
