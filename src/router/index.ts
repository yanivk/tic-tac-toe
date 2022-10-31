import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TicTacToeView from "@/views/TicTacToeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/play",
      name: "play",
      component: TicTacToeView,
    },
  ],
});

export default router;
