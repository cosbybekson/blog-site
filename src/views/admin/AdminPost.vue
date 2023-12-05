<template>
  <div>
    <admin-nav />
    <div id="layoutSidenav">
      <admin-sidebar />
      <base-admin-page>
        <div>
          <div class="card mt-4 rmb-3">
            <div class="card-header">
              <h3 class="mt-4">Post</h3>
            </div>
            <div v-if="loading">
              <app-spinner />
            </div>
            <div v-else-if="!loading">
              <div class="card p-3 border">
                <div class="row">
                  <div
                    v-for="post in posts"
                    :key="post._id"
                    class="col-lg-4 col-md-6 col-sm-12 text-dark p-2"
                  >
                    <div class="card h-100 p-2">
                      <blog-item :imageSrc="post.imageUrl" :text="post.title" />
                      <div
                        class="card-header d-grid d-flex justify-content-end gap-2"
                      >
                        <button
                          class="btn btn-danger"
                          @click="deleteCategory(posts._id)"
                          :disabled="loading"
                        >
                          <span
                            class="spinner-border spinner-border-sm spinner"
                            v-if="loading"
                          ></span>
                          <span v-if="!loading">
                            <i class="fas fa-trash"></i>
                          </span>
                        </button>
                        <router-link to="/dashboard/edit-post">
                          <button class="btn btn-warning">
                            <i class="fa fa-pencil text-white"></i>
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-header">
                <div class="d-grid d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    @click="prevPage"
                    :disabled="pageNumber === 1"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-dark"
                    @click="nextPage"
                    :disabled="!hasNextPage"
                  >
                    Next
                  </button>
                </div>
              </div>
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
import BlogItem from "@/components/cards/BlogItem.vue";
import AppSpinner from "@/components/buttons/AppSpinner.vue";

import makeRequest from "@/utils/requester";
import constants from "@/utils/constants";
import strings from "@/utils/app_strings";

export default {
  components: {
    AdminNav,
    AdminSidebar,
    BaseAdminPage,
    AppSpinner,
    BlogItem,
  },
  data() {
    return {
      posts: [],
      pageNumber: 1,
      pageSize: 3,
      loading: false,
    };
  },
  methods: {
    async fetchPost() {
      this.loading = true;

      try {
        const response = await makeRequest(
          `${constants.ARTICLES_URL}?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`,
          {
            method: "get",
          }
        );
        this.loading = false;

        if (response.success) {
          const data = response.data;
          this.posts = data.rows;
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async deleteCategory(id) {
      try {
        const dialogResult = await this.$swal({
          title: "Delete Category?",
          text: "You won't be able to revert this!",
          icon: "warning",
          confirmButtonText: "Yes, Delete it!",
          showCancelButton: true,
          cancelButtonText: "No, Cancel!",
          confirmButtonColor: "#090d1f",
          cancelButtonColor: "#d33",
        });

        if (dialogResult.isConfirmed) {
          const result = await makeRequest(`${constants.CATEGORY_URL}/${id}`, {
            method: "delete",
          });

          if (result.success) {
            this.posts = this.posts.filter((category) => category._id !== id);

            this.$swal({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } else {
            this.errorDialog(result.message);
          }
        }
      } catch (error) {
        this.errorDialog(strings.GLOBAL_ERROR);
      }
    },
    async editCategory(id) {
      try {
        const result = await makeRequest(`${constants.DASHBOARD_URL}/${id}`, {
          method: "get",
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
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-left: 0;
}

.btn-warning:hover {
  background-color: #ffca28;
}
</style>
