import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"; // Import Bootstrap CSS<router-link to="/blog">Blog</router-link>
import "@/assets/css/admin.css";

import "@/assets/css/main.css";
import HomePage from "./views/public/HomePage.vue";
import BlogPage from "./views/public/BlogPage.vue";
import LoginPage from "./views/public/LoginPage.vue";
import SignupPage from "./views/public/SignupPage.vue";
import AdminDashBoard from "./views/admin/AdminDashboard.vue";
import AdminPost from "./views/admin/AdminPost.vue";
import AdminSettings from "./views/admin/AdminSettings.vue";
import AdminNewPost from "./views/admin/AdminNewPost.vue";
import AdminCategory from "./views/admin/AdminCategory.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    {
      path: "/blog",
      component: BlogPage,
      children: [
        {
          name: "blog-page",
          path: "/blogs/:postId",
          component: BlogPage,
          props: true,
        },
      ],
    },
    { path: "/login", component: LoginPage },
    { path: "/sign-up", component: SignupPage },
    { path: "/admin/dashboard", component: AdminDashBoard },
    { path: "/admin/post", component: AdminPost },
    { path: "/admin/settings", component: AdminSettings },
    { path: "/admin/new-post", component: AdminNewPost },
    { path: "/admin/category", component: AdminCategory },
  ],
});

createApp(App).use(router).mount("#app");
