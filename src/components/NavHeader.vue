<template>
  <div>
    <nav class="navbar navbar-expand-lg py-3">
      <div class="container">
        <div class="navbar-brand d-flex">
          <h3 class="text-white"><router-link to="/">BlogPost</router-link></h3>
        </div>

        <div class="d-flex">
          <div v-if="!isAuthenticated">
            <router-link v-if="!isOnLoginRoute" to="/login">
              <app-button
                type="button"
                class="btn btn-primary"
                @click="onNavBtnClick"
              >
                Login
              </app-button>
            </router-link>

            <router-link v-if="isOnLoginRoute" to="/sign-up">
              <app-button
                type="button"
                class="btn btn-primary"
                @click="onNavBtnClick"
              >
                Sign Up
              </app-button>
            </router-link>
          </div>
          <div v-else>
            <router-link to="/dashboard" class="btn btn-primary">
              Go to Dashboard
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import sessionManager from "@/utils/session_manager";

export default {
  computed: {
    isOnLoginRoute() {
      if (this.$route.path.includes("login")) {
        return true;
      }
      return false;
    },

    isAuthenticated() {
      return sessionManager.isAuthenticated(); // You need to implement this function
    },
  },
  methods: {
    onNavBtnClick() {
      if (!this.isOnLoginRoute) {
        // Redirect to Login page
        this.$router.push("/login");
      } else {
        // Redirect to Sign Up page
        this.$router.push("/sign-up");
      }
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
