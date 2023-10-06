<template>
  <div>
    <admin-nav />
    <div id="layoutSidenav">
      <admin-sidebar />
      <base-admin-page>
        <h3 class="mt-4">Dashboard</h3>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
        <div class="row">
          <div class="col-xl-3 col-md-6">
            <div class="card bg-primary text-white mb-4">
              <div class="card-body">Primary Card</div>
              <div
                class="card-footer d-flex align-items-center justify-content-between"
              >
                <a class="small text-white stretched-link" href="#"
                  >View Details</a
                >
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card bg-warning text-white mb-4">
              <div class="card-body">Warning Card</div>
              <div
                class="card-footer d-flex align-items-center justify-content-between"
              >
                <a class="small text-white stretched-link" href="#"
                  >View Details</a
                >
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card bg-success text-white mb-4">
              <div class="card-body">Success Card</div>
              <div
                class="card-footer d-flex align-items-center justify-content-between"
              >
                <a class="small text-white stretched-link" href="#"
                  >View Details</a
                >
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card bg-danger text-white mb-4">
              <div class="card-body">Danger Card</div>
              <div
                class="card-footer d-flex align-items-center justify-content-between"
              >
                <a class="small text-white stretched-link" href="#"
                  >View Details</a
                >
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            DataTable Example
          </div>
          <div class="card-body">
            <table id="datatablesSimple">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
              </tbody>
            </table>
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
export default {
  components: { AdminNav, AdminSidebar, BaseAdminPage },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px 12px;
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
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Style for fixed admin-nav */
</style>
