<template>
  <!-- <nav-header /> -->
  <router-view />
  <!-- <footer-page /> -->
</template>

<script>
// import HomePage from "./views/HomePage.vue";
// import NavHeader from "./components/NavHeader.vue";
// import FooterPage from "./components/FooterPage.vue";
export default {
  name: "App",
  // components: { NavHeader, FooterPage },
};
</script>

<style>
#app {
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgba(11, 11, 34, 0.9);
  backdrop-filter: blur(87.5px);
}
</style>
