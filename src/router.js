import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ProfilePage from "./components/ProfilePage.vue";
import LoginPage from "./components/LoginPage.vue";
import RegisterPage from "./components/RegisterPage.vue";
import BankPage from "./components/BankPage.vue";
import FinancePage from "./components/FinancePage.vue";

const routes = [
  { path: "/", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/Home", component: HomePage },
  { path: "/profile", component: ProfilePage },
  { path: "/bank", component: BankPage },
  { path: "/finance", component: FinancePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
