<template>
  <div>
    <div class="container">
      <hr />
      <div class="text-center py-3">
        <h3 class="text-white">BlogPost</h3>
        <p class="footer-content">
          Copyright © {{ copyrightYear }} Design By AnuMaaBa
        </p>
      </div>
    </div>
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
    },
  },
};
</script>

<style scoped>
.footer-text {
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.4px;
}
.footer-content {
  color: var(--muted, rgba(255, 255, 255, 0.6)) !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  list-style: none;
}

hr {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 30px;
}
</style>
