<template>
  <div class="container">
    <nav-bar />
    <app-logo />
    <nav-bar-item title="Личный кабинет" childClass="userProfile">
      <personal-icon />
    </nav-bar-item>
  </div>
</template>
<script>
import AppLogo from "@/components/AppLogo";
import NavBar from "@/components/NavBar";
import PersonalIcon from "@/images/PersonalIcon";
import NavBarItem from "@/components/NavBarItem";
export default {
  components: {
    AppLogo,
    NavBar,
    PersonalIcon,
    NavBarItem,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1c1c21;
  box-shadow: 0 0 1px 0 #000 4%, 0 4px 8px 0 #000 4%;
  padding: 16px;
}

.userProfile {
  margin-left: 280px;
}
</style>
