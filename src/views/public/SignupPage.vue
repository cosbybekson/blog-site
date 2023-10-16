<template>
  <nav-header />
  <div class="container my-0">
    <error-card v-if="error" :error="error"></error-card>

    <base-card>
      <h1 class="my-5 text-center text-white text-uppercase fw-bolder">
        Signup
      </h1>
      <div class="signup">
        <Form @submit="signup">
          <div>
            <Field
              v-model.trim="username"
              id="username"
              name="username"
              placeholder="Enter Username"
              :rules="validateUsername"
            />
            <ErrorMessage
              name="username"
              class="text-center justify-content-center d-flex text-danger"
            />
          </div>

          <div class="mt-4">
            <Field
              v-model.trim="password"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              :rules="validatePassword"
            />
            <ErrorMessage
              name="password"
              class="text-center justify-content-center d-flex text-danger"
            />
          </div>

          <div class="d-grid gap-2 mt-4 form-btn">
            <button type="submit" :disabled="loading" class="btn text-white">
              <span v-if="!loading">Signup</span>
              <circular-progress v-if="loading" />
            </button>
          </div>
        </Form>
      </div>
      <p class="mt-3 sign-up text-center text-white mb-5">
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </base-card>
  </div>
  <footer-page />
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import ErrorCard from "@/components/ErrorCard.vue";
import BaseCard from "@/components/cards/BaseCard.vue";
import FooterPage from "@/components/FooterPage.vue";
import CircularProgress from "@/components/buttons/CircularProgress.vue";

import makeRequest from "@/utils/requester";
import constants from "@/utils/constants";
import sessionManager from "@/utils/session_manager";
import Validator from "@/utils/validator";
import userStorage from "@/utils/user_storage";

import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    BaseCard,
    NavHeader,
    FooterPage,
    Form,
    Field,
    ErrorMessage,
    ErrorCard,
    CircularProgress,
  },

  data() {
    return {
      username: "",
      password: "",
      error: null,
      loading: false,
    };
  },

  methods: {
    async signup() {
      try {
        this.startLoading();
        const result = await makeRequest(constants.SIGNUP_URL, {
          method: "post",
          data: {
            username: this.username,
            password: this.password,
          },
        });

        this.stopLoading();
        if (result.success) {
          const dataResponse = result.data;
          sessionManager.saveToken(dataResponse.accessToken);
          userStorage.saveUser(dataResponse.user);
          this.$router.push("/dashboard");
        } else {
          this.error = result.message;
        }
      } catch (error) {
        console.log(error);
        this.error = "Something went wrong";
      }
    },

    validateUsername() {
      return Validator.validateAlphaNumeric(this.username);
    },

    validatePassword() {
      return Validator.validatePassword(this.password);
    },

    startLoading() {
      this.error = null;
      this.loading = true;
    },

    stopLoading() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.signup input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

button {
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
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

.sign-up a {
  font-weight: 600;
  font-size: 16px;
  text-decoration: underline;
}
</style>
