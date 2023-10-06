<template>
    <div class="hero-section text-center">
      <h2 class="hero-badge color-green text-uppercase">{{ badge }}</h2>
      <h1 class="hero-title px-100">{{ title }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      badge: String,
      title: String,
    },
  };
  </script>
  
  <style scoped>
  .hero-badge {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 1.6px;
  }
  .hero-title {
    color: #fff;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px;
  }
  </style>