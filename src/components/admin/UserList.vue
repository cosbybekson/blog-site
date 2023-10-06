<template>
    <div>
      <h1>User List</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button @click="editUser(user.id)">Edit</button>
              <button @click="deleteUser(user.id)">Delete</button>
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
        users: [], // Fetch and populate this array with user data
      };
    },
    methods: {
      editUser(userId) {
        // Implement logic to edit user details
      },
      deleteUser(userId) {
        // Implement logic to delete user
      },
    },
  };
  </script>
  