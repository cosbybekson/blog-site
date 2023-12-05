<template>
  <div>
    <nav-header />
    <div>
      <div v-if="loading">
        <circular-progress />
      </div>
      <div v-else-if="!loading">
        <page-header :badge="post.category.name" :title="post.title" />

        <div class="container">
          <p
            class="blog-item-title text-uppercase text-center text-white mb-5 mt-5"
          >
            {{ formattedCreatedAt(post.createdAt) }} - {{ post.user.username }}
          </p>
          <blog-item :imageSrc="post.imageUrl" :content="post.content" />
        </div>
        <div class="container">
          <h2 class="recommendation text-start">
            other people's recommendation
          </h2>
          <div class="row">
            <div class="col">
              <router-link to="item-list">
                <blog-item
                  imageSrc="1691957827051110860855.jpg"
                  title="SEO tricks that can increase the traffic of your website"
                  content="People have been using wrong SEO techniques on their websites."
                />
              </router-link>
            </div>
            <div class="col">
              <router-link to="item-list">
                <blog-item
                  imageSrc="1691957827051110860855.jpg"
                  title="SEO tricks that can increase the traffic of your website"
                  content="People have been using wrong SEO techniques on their websites."
                />
              </router-link>
            </div>
            <div class="col">
              <router-link to="item-list">
                <blog-item
                  imageSrc="1691957827051110860855.jpg"
                  title="SEO tricks that can increase the traffic of your website"
                  content="People have been using wrong SEO techniques on their websites."
                />
              </router-link>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <page-header title="Responses" />
          <div class="comments mt-5">
            <div
              v-for="comment in comments"
              :key="comment.id"
              class="text-start"
            >
              <comment-section
                :title="comment.name"
                :createdAt="new Date(comment.createdAt).toLocaleDateString()"
                :text="comment.comment"
              />
              <hr />
            </div>
          </div>
        </div>
        <div class="container">
          <base-card>
            <form class="p-5">
              <div class="row text-start justify-content-center">
                <div class="form-group col">
                  <label for="name">Name:</label>
                  <input type="text" id="name" required />
                </div>
                <div class="form-group col">
                  <label for="email">Email:</label>
                  <input type="email" id="email" required />
                </div>
              </div>
              <div class="form-group">
                <label for="comment">Comment:</label>
                <textarea id="comment" rows="4" required></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <app-button
                  type="button"
                  class="btn btn-primary"
                  :disabled="loading"
                >
                  <span
                    class="spinner-border spinner-border-sm spinner"
                    v-if="loading"
                  ></span>
                  <span v-if="!loading"> Post Comment </span>
                </app-button>
              </div>
            </form>
          </base-card>
        </div>
      </div>
    </div>

    <footer-page />
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import BaseCard from "@/components/cards/BaseCard.vue";
import BlogItem from "@/components/cards/BlogItem.vue";
import CommentSection from "@/components/CommentSection.vue";
import FooterPage from "@/components/FooterPage.vue";
import CircularProgress from "@/components/buttons/CircularProgress.vue";

import makeRequest from "@/utils/requester";
import constants from "@/utils/constants";
import { formatDate } from "@/utils/function";

export default {
  components: {
    PageHeader,
    BlogItem,
    BaseCard,
    CommentSection,
    NavHeader,
    FooterPage,
    CircularProgress,
  },
  data() {
    return {
      loading: false,
      post: {
        category: {
          name: "",
        },
        user: {
          username: "",
        },
      },
      comments: [],
    };
  },
  methods: {
    async fetchPostById(postId) {
      this.loading = true;
      try {
        const response = await makeRequest(
          `${constants.ARTICLES_URL}/${postId}`,
          {
            method: "get",
          }
        );
        this.loading = false;
        if (response.success) {
          const data = response.data;
          this.post = data;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    formattedCreatedAt(dateStr) {
      return formatDate(dateStr);
    },
  },
  mounted() {
    const postId = this.$route.params.postId;
    this.fetchPostById(postId);
  },
};
</script>

<style scoped>
.blog-item-title {
  color: var(--Muted, rgba(255, 255, 255, 0.6));
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.recommendation {
  color: #fff;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
}

.form-group {
  margin-bottom: 30px;
}
label {
  color: var(--Muted, rgba(255, 255, 255, 0.6));
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  outline: 0;
  color: #fff;
  background: transparent;
  font-size: 15px;
  border-radius: 3px;
  border: 1px solid var(--Button-Light, rgba(255, 255, 255, 0.1));
}
.row {
  display: flex;
}
hr {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0;
  margin-top: 20px;
  margin-bottom: 80px;
  height: 1px;
}
.comments {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>
