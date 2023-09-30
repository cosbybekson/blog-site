<template>
  <div>
    <admin-nav />
    <!-- <div class="container">
      <h1>Posts</h1>
    </div> -->
  </div>
</template>

<script>
import AdminNav from "@/components/admin/AdminNav.vue";
export default {
  components: { AdminNav },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-left: 0;
}
</style>
