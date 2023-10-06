<template>
  <div>
    <nav class="navbar navbar-expand-lg py-3">
      <div class="container">
        <div class="navbar-brand d-flex">
          <h3 class="text-white"><router-link to="/">BlogPost</router-link></h3>
        </div>
        <!-- <div class="d-flex">
          <router-link to="/login">
            <app-button
              type="button"
              class="btn btn-primary"
              @click="toggleAuth"
              v-if="loggedIn"
            >
              Login
            </app-button>
          </router-link>

          <router-link to="/sign-up">
            <app-button
              type="button"
              class="btn btn-primary"
              @click="toggleAuth"
              v-if="!loggedIn"
            >
              Sign Up
            </app-button>
          </router-link>
        </div> -->

        <!-- <div class="d-flex">
          <router-link to="/login">
            <app-button
              type="button"
              class="btn btn-primary"
              @click="toggleAuth"
            >
              {{ loggedIn ? "Sign Up" : "Login" }}
            </app-button>
          </router-link>
        </div> -->

        <div class="d-flex">
          <router-link v-if="!loggedIn" to="/login">
            <app-button
              type="button"
              class="btn btn-primary"
              @click="toggleAuth"
            >
              Login
            </app-button>
          </router-link>

          <router-link v-if="loggedIn" to="/sign-up">
            <app-button
              type="button"
              class="btn btn-primary"
              @click="toggleAuth"
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
  computed: {
    loggedIn() {
      if (this.$route.path.includes("login")) {
        return true;
      }
      return false;
    },
  },
  methods: {
    toggleAuth() {
      if (!this.loggedIn) {
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
