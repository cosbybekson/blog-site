<template>
  <div class="alert alert-danger mb-2 text-capitalize m-auto width" role="alert">
    <div>{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    error: String,
  },
};
</script>

<style scoped>
.width {
  max-width: 40rem;
}
</style>
