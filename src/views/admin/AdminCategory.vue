<template>
  <div>
    <admin-nav />
    <div id="layoutSidenav">
      <admin-sidebar />
      <base-admin-page>
        <div class="row">
          <h3 class="mt-4">Post Category</h3>
          <div class="col-md-6 col-lg-6 col-xl-6 col-12 mt-5">
            <div class="card mb-4">
              <div class="card-header">
                <h5>All Categories</h5>
              </div>
              <div class="card-body">
                <table id="datatablesSimple">
                  <thead>
                    <tr>
                      <th class="col-1">#</th>
                      <th class="col-9">Category</th>
                      <th class="col-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Otto</td>
                      <td>
                        <button class="btn btn-danger">
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Thornton</td>
                      <td>
                        <button class="btn btn-danger">
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>@twitter</td>
                      <td>
                        <button class="btn btn-danger">
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-header">
                <div class="d-grid d-flex justify-content-end gap-2">
                  <button type="button" class="btn btn-outline-dark">
                    Prev
                  </button>
                  <button type="button" class="btn btn-outline-dark">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2"></div>
          <div class="col-md-4 col-lg-4 col-xl-4 col-12 mt-5">
            <div class="card mb-4">
              <div class="card-header">
                <h5>Add Category</h5>
              </div>
              <form class="">
                <div class="form-group">
                  <label for="name" class="ms-4 mt-2 mb-2">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>

                <div class="d-grid gap-2 mb-3 form-btn">
                  <button type="submit" class="btn text-white">Add</button>
                </div>
              </form>
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
// import AdminCard from "@/components/cards/AdminCard.vue";
// import AppButton from "@/components/buttons/AppButton.vue";
export default {
  components: { AdminNav, AdminSidebar, BaseAdminPage},
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
  background: transparent;
  color: #fff;
}

li {
  list-style: none;
}

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

/* Style for the transparent button */
/* .table-btn {
  padding: 5px 10px;
  margin-left: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
} */
</style>
