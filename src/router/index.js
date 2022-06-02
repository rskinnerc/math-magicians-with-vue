import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Calculator from "../pages/Calculator.vue";
import Quote from "../pages/Quote.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/calculator",
      name: "calculator",
      component: Calculator,
    },
    {
      path: "/quote",
      name: "quote",
      component: Quote,
    },
  ],
});

export default router;
