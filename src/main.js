import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"; // Import Bootstrap CSS<router-link to="/blog">Blog</router-link>
import "@/assets/css/admin.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

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
import EditPost from "./components/cards/EditPost.vue"
import store from "./utils/store";
import sessionManager from "@/utils/session_manager";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
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
    { path: "/dashboard", component: AdminDashBoard },
    { path: "/dashboard/post", component: AdminPost },
    { path: "/dashboard/settings", component: AdminSettings },
    { path: "/dashboard/new-post", component: AdminNewPost },
    { path: "/dashboard/category", component: AdminCategory },
    {path: "/dashboard/edit-post", component: EditPost}
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionManager.isAuthenticated();
  const toPath = to.path;

  if (
    (isAuthenticated && toPath == "/login") ||
    (toPath == "/sign-up" && isAuthenticated)
  ) {
    // Redirect to login if trying to access a protected route without authentication
    next("/dashboard");
  } else if (toPath.includes("dashboard") && !isAuthenticated) {
    // Redirect to dashboard if trying to access the login page while already authenticated
    next("/login");
  } else {
    // Continue with the navigation
    next();
  }
});

app.use(VueSweetalert2).use(router).use(store).mount("#app");
