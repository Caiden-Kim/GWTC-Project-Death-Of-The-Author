import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import SubmitEnding from "./components/SubmitEnding.vue";
import StoryGallery from "./components/StoryGallery.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/submit", component: SubmitEnding },
  { path: "/read", component: StoryGallery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
