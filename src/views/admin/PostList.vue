<template>
    <div>
      <h1>Post List</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.title }}</td>
            <td>{{ post.category }}</td>
            <td>
              <router-link :to="'/admin/posts/' + post.id">Edit</router-link>
              <button @click="deletePost(post.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [], // Fetch and populate this array with blog posts
      };
    },
    methods: {
      deletePost(postId) {
        // Implement logic to delete the post with the given ID
      },
    },
  };
  </script>
  