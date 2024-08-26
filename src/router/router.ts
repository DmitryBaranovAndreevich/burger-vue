import Main from "@/pages/Main.vue"
import Register from "@/pages/Register.vue"
import Login from "@/pages/Login.vue"
import ForgotPassword from "@/pages/ForgotPassword.vue"
import ResetPassword from "@/pages/ResetPassword.vue"
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
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
  },
]

const router = createRouter({ routes, history: createWebHistory() });

export default router;