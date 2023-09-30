<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <router-link to="/admin/dashboard">
            <a class="nav-link" href="index.html">
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
              <router-link to="/admin/new-post">
                <a class="nav-link" href="layout-static.html"> Write </a>
              </router-link>
              <router-link to="/admin/post">
                <a class="nav-link" href="layout-sidenav-light.html"> Posts </a>
              </router-link>
            </nav>
          </div>
          <router-link to="/admin/category">
            <a class="nav-link" href="charts.html">
              <div class="sb-nav-link-icon">
                <i class="fa-solid fa-hashtag"></i>
              </div>
              Categories
            </a>
          </router-link>

          <div class="sb-sidenav-menu-heading">Account</div>
          <router-link to="/admin/settings">
            <a class="nav-link" href="charts.html">
              <div class="sb-nav-link-icon">
                <i class="fa-solid fa-gear"></i>
              </div>
              Account Settings
            </a>
          </router-link>
          <a class="nav-link" href="tables.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-right-from-bracket"></i>
            </div>
            Logout
          </a>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Anumaaba
      </div>
    </nav>
  </div>
</template>

<script>
// import AdminPost from "@/views/admin/AdminPost.vue";
// import AdminSettings from "@/views/admin/AdminSettings.vue";
// import AdminNewPost from "@/views/admin/AdminNewPost.vue";
export default {
  // components: { AdminPost, AdminSettings, AdminNewPost },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
