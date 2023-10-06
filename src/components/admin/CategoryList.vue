<template>
    <div>
      <h1>Category List</h1>
      
      <!-- Add a button to navigate to the "CategoryCreate" component to create new categories -->
      <router-link to="/admin/categories/create" class="btn btn-primary mb-3">Create Category</router-link>
  
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through categories and display them -->
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.name }}</td>
            <td>{{ category.description }}</td>
            <td>
              <router-link :to="'/admin/categories/edit/' + category.id" class="btn btn-sm btn-warning">Edit</router-link>
              <button @click="deleteCategory(category.id)" class="btn btn-sm btn-danger">Delete</button>
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
        categories: [
          // You can populate this array with categories fetched from your API or database
          { id: 1, name: 'Category 1', description: 'Description for Category 1' },
          { id: 2, name: 'Category 2', description: 'Description for Category 2' },
          // Add more categories as needed
        ],
      };
    },
    methods: {
      deleteCategory(categoryId) {
        // Implement logic to delete the category with the given ID
        // You might want to confirm the deletion with a confirmation dialog
        if (window.confirm('Are you sure you want to delete this category?')) {
          // Delete the category and update the categories array
          // Example:
          // this.categories = this.categories.filter(category => category.id !== categoryId);
        }
      },
    },
  };
  </script>
  