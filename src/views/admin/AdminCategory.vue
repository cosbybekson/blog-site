<template>
  <div>
    <admin-nav />
    <div id="layoutSidenav">
      <admin-sidebar />
      <base-admin-page>
        <div class="row">
          <h3 class="mt-4">Post Category</h3>
          <category-list-table :key="categoriesKey" />
          <div class="col-2"></div>
          <div class="col-md-4 col-lg-4 col-xl-4 col-12 mt-5">
            <div class="card mb-4">
              <div class="card-header">
                <h5>Add Category</h5>
              </div>
              <Form @submit="addCategory">
                <div class="form-group">
                  <label for="category" class="ms-4 mt-2 mb-1">Category</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="category"
                    name="category"
                    placeholder="Category name"
                    v-model.trim="category"
                    :rules="validateCategory"
                  />
                </div>
                <ErrorMessage
                  name="category"
                  class="text-center justify-content-center d-flex text-danger"
                />
                <div class="d-grid gap-2 mb-3 form-btn">
                  <button
                    type="submit"
                    class="btn text-white"
                    :disabled="loading"
                  >
                    <span
                      class="spinner-border spinner-border-sm spinner"
                      v-if="loading"
                    ></span>
                    <span v-if="!loading">Add</span>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </base-admin-page>
    </div>
  </div>
</template>

<script>
import AdminNav from "@/components/admin/AdminNav.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import BaseAdminPage from "@/components/admin/BaseAdminPage.vue";
import CategoryListTable from "@/views/admin/CategoryListTable.vue";

import makeRequest from "@/utils/requester";
import constants from "@/utils/constants";
import strings from "@/utils/app_strings";
import Validator from "@/utils/validator";
import { Form, Field, ErrorMessage } from "vee-validate";

// import sessionManager from "@/utils/session_manager";

export default {
  components: {
    AdminNav,
    AdminSidebar,
    BaseAdminPage,
    CategoryListTable,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      category: "",
      loading: false,
      categoriesKey: 0,
    };
  },
  methods: {
    async addCategory() {
      try {
        this.loading = true;
        const result = await makeRequest(constants.CATEGORY_URL, {
          method: "post",
          data: {
            name: this.category,
          },
        });

        this.loading = false;
        if (result.success) {
          this.$swal({
            icon: "success",
            title: "Success",
            text: result.message,
          });

          this.category = "";
          this.categoriesKey += 1;
        } else {
          this.errorDialog(result.message);
        }
      } catch (error) {
        this.errorDialog(strings.GLOBAL_ERROR);
      }
    },
    errorDialog(message) {
      this.$swal({
        icon: "error",
        title: "Oops...",
        text: message,
      });
    },
    validateCategory() {
      return Validator.validateAlphaNumeric(this.category);
    },
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  background: #090d1f;
  font-size: 24px !important;
}

label {
  text-align: center;
  font-weight: bold;
}

input {
  width: 300px;
  padding: 5px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  border: 1px solid #090d1f;
  border-radius: 4px;
  font-size: 16px;

}

li {
  list-style: none;
}

/* Style for the transparent button */
/* .table-btn {
  padding: 5px 10px;
  margin-left: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
} */
</style>
