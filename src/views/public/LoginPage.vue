<template>
  <nav-header />

  <div class="container my-5">
    <base-card>
      <div v-if="error" class="alert alert-danger mb-4" role="alert">
        {{ error }}
      </div>
      <h1 class="my-5 text-center text-white">Login</h1>
      <div class="login">
        <form @submit.prevent="login">
          <input
            type="username"
            v-model.trim="username"
            required
            placeholder="Enter Username"
          />
          <input
            type="password"
            v-model.trim="password"
            placeholder="Enter Password"
            required
          />
          <div class="d-grid gap-2 mb-3 form-btn">
            <button type="submit" class="btn text-white">Login</button>
          </div>
        </form>
      </div>
      <p class="mt-3 sign-up text-center text-white">
        Don't have an account?
        <router-link to="/sign-up" class="text-primary">Sign Up</router-link>
      </p>
    </base-card>
  </div>
  <footer-page />
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import BaseCard from "@/components/cards/BaseCard.vue";
// import LogButton from "@/components/buttons/LogButton.vue";
import FooterPage from "@/components/FooterPage.vue";
import makeRequest from "@/utils/requester";
import constants from "@/utils/constants";
// import storage from "@/utils/storage";

export default {
  components: { BaseCard, NavHeader, FooterPage },
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const result = await makeRequest(constants.LOGIN_URL, {
          method: "post",
          data: {
            username: this.username,
            password: this.password,
          },
        });

        console.log(result);

        if (result.status == true) {
          console.log(result);
          // storage.saveToken(JSON.stringify(result.data[0]))
          // this.$router.push({ name: "/" });
        } else {
          this.error = result.message
        }
      } catch (error) {
        this.error = "Something went wrong!"
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

button {
  width: 300px;
  height: 40px;
  padding: 10px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  border: none;
}

button:hover {
  background: rgba(0, 0, 0, 0.1);
}

.sign-up {
  font-weight: 600;
  font-size: 18px;
}
</style>
