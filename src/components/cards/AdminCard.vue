<template>
  <div class="card p-4">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  margin: 2rem auto;
  max-width: 40rem;
  border: 1px solid #ced4da;
}
</style>
