<template>
  <div>
    <admin-nav />
    <div id="layoutSidenav">
      <admin-sidebar />
      <base-admin-page>
        <h3 class="mt-4">Create New Post</h3>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Write Your Post</li>
        </ol>
        <div>
          <admin-card>
            <Form @submit="postArticle">
              <div class="mb-3">
                <label for="text" class="form-label">Title</label>
                <Field
                  class="form-control"
                  id="title"
                  name="title"
                  v-model="formBody.title"
                  :rules="validateTitle"
                />
                <ErrorMessage
                  name="title"
                  class="text-center justify-content-center d-flex text-danger"
                />
              </div>

              <div class="mb-3">
                <label for="text" class="form-label">Category</label>
                <select class="form-control" v-model="formBody.category">
                  <option disabled value="">Choose..</option>
                  <option
                    v-for="category in categories"
                    :value="category._id"
                    :key="category._id"
                    class="text-capitalize"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label for="post-content" class="form-label">Content</label>
                <Editor
                  class="form-control"
                  placeholder="Write post here"
                  id="post-content"
                  style="height: 250px"
                  v-model="formBody.content"
                  api-key="4z0bmrrlmowod592cpwljxfp3nb0sjacfol0dkt8ehh45ntv"
                  :init="{
                    plugins: 'lists link table code wordcount',
                  }"
                />
              </div>

              <div class="mb-3">
                <label for="imageUpload">Thumbnail</label>
                <input
                  class="form-control"
                  type="file"
                  name="image"
                  accept="image/*"
                  @change="imageChange"
                />
                <div v-if="selectedImg" class="thumbnail mt-3">
                  <img class="img-fluid" :src="selectedImg" alt="" />
                </div>
              </div>
              <div class="mb-5">
                <label for="text" class="form-label">Status</label>
                <select class="form-control" v-model="formBody.status">
                  <option
                    v-for="(option, index) in postStatuses"
                    :value="option.value"
                    :key="index"
                  >
                    {{ option.status }}
                  </option>
                </select>
              </div>
              <button
                type="submit"
                class="btn form-btn btn-lg text-white float-end"
                :disabled="loading"
              >
                <span
                  class="spinner-border spinner-border-sm spinner"
                  v-if="loading"
                ></span>
                <span v-if="!loading"> Create Post </span>
              </button>
            </Form>
          </admin-card>
        </div>
      </base-admin-page>
    </div>
  </div>
</template>

<script>
import AdminNav from "@/components/admin/AdminNav.vue";
import BaseAdminPage from "@/components/admin/BaseAdminPage.vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import AdminCard from "@/components/cards/AdminCard.vue";

import makeRequest from "@/utils/requester";
import constants from "@/utils/constants";
import Validator from "@/utils/validator";
import { Form, Field, ErrorMessage } from "vee-validate";
// import strings from "@/utils/app_strings";

import Editor from "@tinymce/tinymce-vue";

export default {
  created() {
    // Set the initial value after the component has been created
    this.formBody.status = this.postStatuses[0].value;
  },

  mounted() {
    this.getCategories();
  },

  data() {
    return {
      selectedImg: null,
      formBody: {
        title: "",
        category: "",
        content: "",
        image: "",
        status: "",
      },
      postStatuses: [
        { status: "Public", value: "public" },
        { status: "Draft", value: "draft" },
      ],
      categories: [{}],
      loading: false,
    };
  },

  components: {
    AdminNav,
    BaseAdminPage,
    AdminSidebar,
    AdminCard,
    Editor,
    Form,
    Field,
    ErrorMessage,
  },

  methods: {
    imageChange(event) {
      const file = event.target.files[0];
      this.formBody.image = file;

      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImg = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    async postArticle() {
      try {
        const result = await makeRequest(constants.DASHBOARD_URL, {
          method: "post",
          data: {
            title: this.formBody.title,
            category: this.formBody.category,
            content: this.formBody.content,
            image: this.formBody.image,
            status: this.formBody.status,
          },
        });
        if (result.success) {
          const data = result.data;
          console.log(data);

          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getCategories() {
      try {
        const result = await makeRequest(
          `${constants.CATEGORY_URL}?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`,
          {
            method: "get",
          }
        );

        if (result.success) {
          const data = result.data;
          this.categories = data.rows;
        }
      } catch (error) {
        console.log(error);
      }
    },
    validateTitle() {
      return Validator.validateAlphaNumeric(this.formBody.title);
    },
  },
};
</script>

<style scoped>
.thumbnail {
  width: 200px;
  height: 200px;
  border: 2px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.form-btn:hover {
  background: #08171e;
  color: #f0f0f0;
}
</style>
