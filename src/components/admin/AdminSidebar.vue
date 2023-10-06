<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <router-link to="/dashboard">
            <a class="nav-link">
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </a>
          </router-link>

          <div class="sb-sidenav-menu-heading">Posts</div>
          <a
            class="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div class="sb-nav-link-icon">
              <i class="fa-brands fa-blogger-b"></i>
            </div>
            Blog Post
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav">
              <router-link to="/dashboard/new-post">
                <a class="nav-link"> Write </a>
              </router-link>
              <router-link to="/dashboard/post">
                <a class="nav-link"> Posts </a>
              </router-link>
            </nav>
          </div>
          <router-link to="/dashboard/category">
            <a class="nav-link">
              <div class="sb-nav-link-icon">
                <i class="fa-solid fa-hashtag"></i>
              </div>
              Categories
            </a>
          </router-link>

          <div class="sb-sidenav-menu-heading">Account</div>
          <router-link to="/dashboard/settings">
            <a class="nav-link">
              <div class="sb-nav-link-icon">
                <i class="fa-solid fa-gear"></i>
              </div>
              Account Settings
            </a>
          </router-link>
          <router-link to="#">
            <a class="nav-link" @click="logout">
              <div class="sb-nav-link-icon">
                <i class="fas fa-right-from-bracket"></i>
              </div>
              Logout
            </a>
          </router-link>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        {{ username }}
      </div>
    </nav>
  </div>
</template>

<script>
import userStorage from "@/utils/user_storage";
import sessionManager from "@/utils/session_manager";

export default {
  data() {
    return {
      username: userStorage.getUser(),
    };
  },
  methods: {
    logout() {
      this.$swal({
        title: "Logout",
        text: "Are you sure you want to logout?",
        icon: "warning",
        confirmButtonText: "Yes, Logout!",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#090d1f",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          userStorage.clearUser();
          sessionManager.clearToken();
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
