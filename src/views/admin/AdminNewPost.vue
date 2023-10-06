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
            <form>
              <div class="mb-3">
                <label for="text" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="textHelp"
                />
              </div>
              <div class="mb-3">
                <label for="text" class="form-label">Category</label>
                <select class="form-control">
                  <option selected>Choose..</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="post-content" class="form-label">Content</label>
                <textarea
                  class="form-control"
                  placeholder="write post here"
                  id="post-content"
                  style="height: 100px"
                ></textarea>
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
                <select class="form-control">
                  <option selected>Public</option>
                  <option value="1">Draft</option>
                  <option value="2">Pending</option>
                </select>
              </div>
              <button
                type="submit"
                class="btn form-btn btn-lg text-white float-end"
              >
                Create Post
              </button>
            </form>
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
export default {
  components: { AdminNav, BaseAdminPage, AdminSidebar, AdminCard },
  data() {
    return {
      selectedImg: null,
    };
  },
  methods: {
    imageChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImg = e.target.result;
        };
        reader.readAsDataURL(file);
      }
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
