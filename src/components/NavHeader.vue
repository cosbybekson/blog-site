<template>
  <div>
    <nav class="navbar navbar-expand-lg py-5">
      <div class="container">
        <div class="navbar-brand d-flex">
          <h3 class="text-white"><a href="#" to="/">BlogPost</a></h3>
        </div>
        <div class="d-flex">
          <router-link to="/login">
            <app-button
              type="button"
              class="btn btn-primary"
              @click="login"
              v-if="!loggedIn"
            >
              Login
            </app-button>
          </router-link>

          <router-link to="/sign-up">
            <app-button
              type="button"
              class="btn btn-primary"
              @click="signUp"
              v-if="loggedIn"
            >
              Sign Up
            </app-button>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    login() {
      this.loggedIn = true;
    },
    signUp() {
      this.loggedIn = false;
    },
  },
};
</script>

<style scoped>
h3 a {
  text-decoration: none;
  font-size: 24px;
}
</style>
