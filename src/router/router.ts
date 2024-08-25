import Main from "@/pages/Main.vue"
import Register from "@/pages/Register.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/register",
    component: Register,
  },
]

const router = createRouter({ routes, history: createWebHistory() });

export default router;