<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Variant Attributes</h4>
            <h6>Manage your variant attributes</h6>
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
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
        <div class="page-btn">
          <a
            href="javascript:void(0);"
            class="btn btn-added"
            data-bs-toggle="modal"
            data-bs-target="#add-units"
            ><vue-feather type="plus-circle" class="me-2"></vue-feather> Add New
            Variant</a
          >
        </div>
      </div>
      <!-- /product list -->
      <div class="card table-list-card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <div class="search-set">
            <div class="search-input">
              <a href="#" class="btn-searchset"><i data-feather="search" class="feather-search"></i></a>
              <input type="search" class="form-control form-control-sm" placeholder="Search">
            </div>
          </div>
          <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
              Variant
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Lenovo</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Beats</a>
                </li>
              </ul>
            </div>				
            <div class="dropdown me-2">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Status
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Computers</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Shoe</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Electronics</a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                Sort By : Last 7 Days
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <a-table
              class="table datanew table-hover table-center mb-0"
              :columns="columns"
              :data-source="data"
              :row-selection="{}"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Status'">
                  <span class="badge table-badge bg-success fw-medium fs-10">{{
                    record.Status
                  }}</span></template
                >
                <template v-else-if="column.key === 'action'">
                  <div class="action-table-data">
                    <div class="edit-delete-action">
                      <a
                        class="me-2 p-2"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-units"
                      >
                        <i data-feather="edit" class="feather-edit"></i>
                      </a>
                      <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
                        <i data-feather="trash-2" class="feather-trash-2"></i>
                      </a>
                    </div>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
      <!-- /product list -->
    </div>
  </div>
  <varriant-attributes-modal></varriant-attributes-modal>
</template>
<script>
const columns = [
  {
    title: "Variant",
    dataIndex: "Variant",
    sorter: {
      compare: (a, b) => {
        a = a.Variant.toLowerCase();
        b = b.Variant.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Values",
    dataIndex: "Values",
    sorter: {
      compare: (a, b) => {
        a = a.Values.toLowerCase();
        b = b.Values.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created On",
    dataIndex: "CreatedOn",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedOn.toLowerCase();
        b = b.CreatedOn.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    Variant: "Size (T-shirts)",
    Values: "S,M,L,XL",
    CreatedOn: "25 May 2024",
    Status: "Active",
  },
  {
    Variant: "Size (Shoes)",
    Values: "5,6,7,8,9",
    CreatedOn: "24 Jun 2024",
    Status: "Active",
  },
  {
    Variant: "Color",
    Values: "Red, Blue, Green",
    CreatedOn: "23 Jul 2024",
    Status: "Active",
  },
  {
    Variant: "Memory",
    Values: "64 GB, 128 GB, 512 GB",
    CreatedOn: "22 Aug 2024",
    Status: "Active",
  },
  {
    Variant: "Storage",
    Values: "250GB, 1TB",
    CreatedOn: "21 Sep 2024",
    Status: "Active",
  },
];
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      filter: false,
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      VariantSort: ["Sort by Date", "Newest", "Oldest"],
      ChooseVariant: ["Choose Variant", "Size(T-shirts)", "Size(Shoes)", "Color"],
      VariantStatus: ["Choose Status", "Active", "Inactive"],
      data,
      columns,
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
