<template>
  <div class="mb-5 mt-5">
    <div class="project-img">
      <img class="img-fluid" :src="toInternetImage()" alt="" />
    </div>
    <div class="project-body">
      <h2 class="project-body-title mt-4">{{ title }}</h2>
      <div class="project-body-content mt-2" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { toInternetImage } from "@/utils/function";
export default {
  data() {
    return {
      loading: false,
    };
  },
  props: {
    imageSrc: String,
    title: String,
    content: {
      type: String,
      required: true,
    },
  },
  methods: {
    toImageRes() {
      console.log(this.imageRes);
      return require(`@/assets/${this.imageSrc}`);
    },
    toInternetImage() {
      return toInternetImage(this.imageSrc);
    },
  },
};
</script>

<style scoped>
.project-body-title {
  color: #fff;
  /* text-align: start; */
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
}
.project-body-content {
  color: var(--muted, rgba(255, 255, 255, 0.6));
  /* text-align: start; */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
}
</style>
