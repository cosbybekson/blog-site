<template>
      <nav-header/>

  <div class="container my-0">
    <base-dialog
      v-if="error !== ''"
      class="alert alert-danger my-4"
      role="alert"
    >
      {{ error }}
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <h1 class="my-5 text-center text-white">Signup</h1>
      <div class="signup">
        <form>
          <input type="text" v-model="name" required placeholder="Enter Name" />
          <input
            type="email"
            v-model="email"
            required
            placeholder="Enter Email"
          />
          <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
            required
          />
        </form>
      </div>
      <log-button to="/">Login</log-button>
      <p class="mt-3 sign-up text-center text-white">
        Already have an account?
        <router-link to="/login" class="text-primary">Login</router-link>
      </p>
    </base-card>
    <footer-page/>

  </div>

</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import BaseCard from "@/components/cards/BaseCard.vue";
import LogButton from "@/components/buttons/LogButton.vue";
import FooterPage from "@/components/FooterPage.vue";
import { isEmpty } from "@/utils/function.js";
import axios from "axios";

export default {
  components: { BaseCard, LogButton, NavHeader, FooterPage },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async signUp(e) {
      if (isEmpty(this.name) || isEmpty(this.password) || isEmpty(this.email)) {
        this.error = "Error";
        e.preventDefault();
        return;
      }

      try {
        let response = await axios.post("http://localhost:3000/post", {
          email: this.email,
          password: this.password,
          name: this.name,
        });

        if (response.status === 201) {
          let data = response.data; 
          localStorage.setItem("user-info", JSON.stringify(data));
          this.$router.push({ name: "home" });
        }
      } catch (error) {
        console.error("Error signing up:", error);
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.signup input {
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
