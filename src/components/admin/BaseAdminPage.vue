<template>
  <div id="layoutSidenav_content" class="bg-white">
    <main>
      <div class="container-fluid px-4">
        <slot></slot>
      </div>
    </main>
    <footer class="py-4 bg-light mt-auto">
      <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
          <div class="text-muted">
            Copyright &copy; Blog Site {{ copyrightYear }}
          </div>
          <div class="text-danger">
            <a href="#">Privacy Policy</a>
            &middot;
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  computed: {
    // Create a computed property to dynamically update the year
    copyrightYear() {
      return this.year;
    }
  },
};
</script>

<style scoped>
a{
  color: blue !important;
}
</style>
