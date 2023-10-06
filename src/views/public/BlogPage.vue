<template>
  <div>
    <nav-header />

    <page-header badge="pages" :title="post.title" />

    <div class="container">
      <p class="blog-item-title text-center text-white mb-5 mt-5">
        {{ formattedCreatedAt(post.createdAt) }} - {{ post.author }}
      </p>
      <blog-item
        :imageSrc="post.imgUrl"
        :title="post.title"
        :content="post.body"
      />
    </div>
    <div class="container">
      <h2 class="recommendation text-start">other people's recommendation</h2>
      <div class="row">
        <div class="col">
          <blog-item
            imageSrc="1691957827051110860855.jpg"
            title="SEO tricks that can increase the traffic of your website"
            content="People have been using wrong SEO techniques on their websites."
          />
        </div>
        <div class="col">
          <blog-item
            imageSrc="1691957827051110860855.jpg"
            title="SEO tricks that can increase the traffic of your website"
            content="People have been using wrong SEO techniques on their websites."
          />
        </div>
        <div class="col">
          <blog-item
            imageSrc="1691957827051110860855.jpg"
            title="SEO tricks that can increase the traffic of your website"
            content="People have been using wrong SEO techniques on their websites."
          />
        </div>
      </div>
      <hr />
    </div>
    <div class="container">
      <page-header title="Responses" />
      <div class="comments mt-5">
        <div v-for="comment in comments" :key="comment.id" class="text-start">
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
        <form>
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
            <app-button type="button" class="btn btn-primary"
              >Post Comment</app-button
            >
          </div>
        </form>
      </base-card>
    </div>
    <footer-page />
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import PageHeader from "@/components/PageHeader.vue";
import BaseCard from "@/components/cards/BaseCard.vue";
import BlogItem from "@/components/cards/BlogItem.vue";
import { formatDate } from "@/utils/function";
import CommentSection from "@/components/CommentSection.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  components: {
    PageHeader,
    BlogItem,
    BaseCard,
    CommentSection,
    NavHeader,
    FooterPage,
  },
  data() {
    return {
      post: {},
      comments: [],
    };
  },
  methods: {
    async fetchPostById(postId) {
      try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`);
        const data = await response.json();
        this.post = data;
        this.comments = data.comments;
        console.log(data);
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
    console.log(this.$route.name);
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
