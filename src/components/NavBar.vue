<template>
  <div class="container">
    <div class="linkItem" v-for="link in links" :key="link.id">
      <nav-bar-item v-bind:title="link.title"><component :is="link.icon" /></nav-bar-item>
    </div>
  </div>
</template>
<script>
import Burger from "@/images/Burger";
import OrderList from "@/images/OrderList";
import NavBarItem from "@/components/NavBarItem";
export default {
  components: { NavBarItem },
  data() {
    return {
      links: [
        { id: 1, title: "Конструктор", icon: Burger },
        { id: 2, title: "Лента заказов", icon: OrderList },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  gap: 30px;
  margin-right: 112px;
}

.link {
  color: #f2f2f3;
}

.linkItem {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
