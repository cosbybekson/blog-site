<template>
  <div>
    <nav-header/>
    <page-header badge="Blog" title="Get precise knowledge wherever you are" />
    <div class="container">
      <hr />
      <div class="row blog-content-pd">
        <div
          v-for="post in posts"
          :key="post.id"
          class="col-lg-4 col-md-6 col-sm-12"
        >
          <router-link :to="`/blogs/${post.id}`" class="router-link">
            <blog-item
              :imageSrc="post.imgUrl"
              :title="post.title"
              :content="post.shortDes"
            />
          </router-link>
        </div>
        <div class="mt-1 d-flex justify-content-center">
          <app-button type="button" class="btn btn-primary"
            >Load more</app-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import BlogItem from "@/components/cards/BlogItem.vue";

export default {
  components: { PageHeader, BlogItem,NavHeader },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPost() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        this.posts = data;
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },

  async mounted() {
    this.fetchPost();
  },
};
</script>

<style scoped>
hr {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0;
  margin-top: 80px;
  height: 1px;
}

.router-link {
  text-decoration: none;
}
</style>
