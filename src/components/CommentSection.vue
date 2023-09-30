<template>
  <div class="comment-section">
    <h2 class="comment-title">{{ title }}</h2>
    <h6 class="comment-date">{{ createAt }}</h6>
    <h1 class="comment-text">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    createAt: String,
    text: String,
  },
};
</script>

<style scoped>
.comment-title {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.comment-text {
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
}

.comment-date {
  color: var(--Muted, rgba(255, 255, 255, 0.6));
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
