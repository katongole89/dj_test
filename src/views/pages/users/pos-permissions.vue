<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Permission</h4>
            <h6>Manage your permissions</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
              ><img src="@/assets/img/icons/pdf.svg" alt="img"
            /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"
              ><img src="@/assets/img/icons/excel.svg" alt="img"
            /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li>
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Collapse"
              id="collapse-header"
              @click="toggleHeader"
              ><i class="ti ti-chevron-up"></i
            ></a>
          </li>
          <li>
            <div class="page-btn">
              <router-link to="/users/roles-permissions" class="btn btn-primary"
                ><i data-feather="arrow-left" class="me-2"></i> Back to Roles</router-link
              >
            </div>
          </li>
        </ul>
      </div>
      <!-- /product list -->
      <div class="card">
        <div class="card-header">
          <div class="table-top mb-0">
            <div class="search-set">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"
                  ><i class="ti ti-search fs-14 feather-search"></i
                ></a>
                <input
                  type="search"
                  class="form-control form-control-sm"
                  placeholder="Search"
                />
              </div>
            </div>
            <div class="d-flex align-items-center">
              <p class="mb-0 fw-medium text-gray-9 me-1">Role:</p>
              <p>Admin</p>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table datatable">
              <thead class="thead-light">
                <tr>
                  <th class="no-sort">Modules</th>
                  <th>Allow All</th>
                  <th>Read</th>
                  <th>Write</th>
                  <th>Create</th>
                  <th>Delete</th>
                  <th>Import</th>
                  <th>Export</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-gray-9">Employee</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Holidays</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Leaves</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Events</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Sales</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Training</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Reports</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Tickets</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Holidays</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-9">Payroll</td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="py-3">
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- /product list -->
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      filter: false,
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      PermissionSort: ["Sort by Date", "Newest", "Oldest"],
      PermissionRole: ["Choose Role", "Admin", "Shop Owner"],
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
