<template>
  <div>
    <nav-header />
    <page-header badge="Blog" title="Get precise knowledge wherever you are" />
    <div class="container">
      <hr />
      <div class="row blog-content-pd">
        <div
          v-for="post in posts"
          :key="post._id"
          class="col-lg-4 col-md-6 col-sm-12"
        >
          <router-link :to="`/blogs/${post._id}`" class="router-link">
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

import makeRequest from "@/utils/requester";
import constants from "@/utils/constants";

export default {
  components: { PageHeader, BlogItem, NavHeader },
  data() {
    return {
      posts: [],
      pageNumber: 1,
      pageSize: 12,
    };
  },
  methods: {
    async fetchPost() {
      try {
        const response = await makeRequest(
          `${constants.ARTICLES_URL}?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`,
          {
            method: "get",
          }
        );

        if (response.success) {
          const data = response.data;
          this.posts = data.rows;
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },

  mounted() {
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
.router-link :hover {
  color: var(--muted, rgba(240, 215, 215, 0.6));
}
</style>
