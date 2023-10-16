<template>
  <div class="col-md-6 col-lg-6 col-xl-6 col-12 mt-5">
    <div class="card mb-4">
      <div class="card-header">
        <h5>All Categories</h5>
      </div>
      <div class="card-body">
        <div v-if="loading">
          <circular-progress />
        </div>
        <div v-else-if="isCategoriesEmpty && !loading" class="empty-state">
          <p>No categories available. Add a category.</p>
        </div>
        <table v-else id="datatablesSimple">
          <thead>
            <tr>
              <th class="col-1">#</th>
              <th class="col-9">Category</th>
              <th class="col-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="category._id">
              <td>{{ index + 1 }}</td>
              <td class="text-capitalize">{{ category.name }}</td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="deleteCategory(category._id)"
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-header" v-if="!isCategoriesEmpty">
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
</template>

<script>
import makeRequest from "@/utils/requester";
import constants from "@/utils/constants";
import strings from "@/utils/app_strings";

import CircularProgress from "@/components/buttons/CircularProgress.vue";

export default {
  components: { CircularProgress },

  mounted() {
    this.getCategories();
  },
  data() {
    return {
      loading: false,
      name: "",
      categories: [],
      pageNumber: 1,
      pageSize: 5,
      totalCount: null,
    };
  },
  methods: {
    async getCategories() {
      try {
        this.startLoading();

        const result = await makeRequest(
          `${constants.CATEGORY_URL}?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`,
          {
            method: "get",
          }
        );

        this.stopLoading();
        if (result.success) {
          const data = result.data;
          this.categories = data.rows;
        }
      } catch (error) {
        this.errorDialog(strings.GLOBAL_ERROR);
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
            this.categories = this.categories.filter(
              (category) => category._id !== id
            );

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
    errorDialog(message) {
      this.$swal({
        icon: "error",
        title: "Oops...",
        text: message,
      });
    },

    startLoading() {
      this.loading = true;
    },

    stopLoading() {
      this.loading = false;
    },

    async prevPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
        await this.getCategories();
      }
    },

    async nextPage() {
      this.pageNumber+=1;
      await this.getCategories();
    },
  },
  computed: {
    isCategoriesEmpty() {
      return this.categories.length == 0;
    },
    hasNextPage() {
      const nextPageStartIndex = this.pageNumber * this.pageSize;
      return nextPageStartIndex < this.totalCount;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  /* Style for table header */
  thead th {
    background-color: #f2f2f2;
  }

  /* Style for table footer */
  tfoot th {
    background-color: #f2f2f2;
  }

  /* Style for alternating rows */
  /* tbody tr:nth-child(even) {
  background-color: #f2f2f2;
} */

  /* .table {
  width: 500px;
  height: 40px;
  border: 1px;
  margin: 10px;
}

th,
td {
  border: 1px solid #090d1f;
  padding: 8px;
  text-align: start;
  color: #090d1f;
} */

  .table th:nth-child(1),
  .table td:nth-child(1) {
    width: 10%;
  }

  .table th:nth-child(2),
  .table td:nth-child(2) {
    width: 80%;
  }

  .table th:nth-child(3),
  .table td:nth-child(3) {
    width: 10%;
  }

  /* Responsive column widths for smaller screens */
  @media (max-width: 768px) {
    .table th:nth-child(1),
    .table td:nth-child(1),
    .table th:nth-child(2),
    .table td:nth-child(2) {
      width: auto; /* Allow first and second columns to expand as needed */
    }

    .table th:nth-child(3),
    .table td:nth-child(3) {
      /* display: table-cell; Display the third column as a table cell on smaller screens */
      width: 5%; /* Set a specific width for the third column on smaller screens */
    }
  }

  /* Style for the table footer */
  .table-footer {
    width: 100%;
    background: #090d1f;
    text-align: right;
    padding: 10px;
  }
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

/* Style for table header */
thead th {
  background-color: #f2f2f2;
}

/* Style for table footer */
tfoot th {
  background-color: #f2f2f2;
}

/* Style for alternating rows */
/* tbody tr:nth-child(even) {
  background-color: #f2f2f2;
} */

/* .table {
  width: 500px;
  height: 40px;
  border: 1px;
  margin: 10px;
}

th,
td {
  border: 1px solid #090d1f;
  padding: 8px;
  text-align: start;
  color: #090d1f;
} */

.table th:nth-child(1),
.table td:nth-child(1) {
  width: 10%;
}

.table th:nth-child(2),
.table td:nth-child(2) {
  width: 80%;
}

.table th:nth-child(3),
.table td:nth-child(3) {
  width: 10%;
}

/* Responsive column widths for smaller screens */
@media (max-width: 768px) {
  .table th:nth-child(1),
  .table td:nth-child(1),
  .table th:nth-child(2),
  .table td:nth-child(2) {
    width: auto; /* Allow first and second columns to expand as needed */
  }

  .table th:nth-child(3),
  .table td:nth-child(3) {
    /* display: table-cell; Display the third column as a table cell on smaller screens */
    width: 5%; /* Set a specific width for the third column on smaller screens */
  }
}

/* Style for the table footer */
.table-footer {
  width: 100%;
  background: #090d1f;
  text-align: right;
  padding: 10px;
}

.empty-state {
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  margin-top: 20px;
  background-color: #f2f2f2;
}
</style>
