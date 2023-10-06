<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  /* padding: 20px; */
  background-color: #090d1f;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
