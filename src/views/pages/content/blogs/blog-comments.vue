<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Blog Comments</h4>
            <h6>Manage your blog tags</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
      </div>
      <!-- /product list -->
      <div class="card table-list-card">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
        >
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
          <div
            class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3"
          >
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                Sort By : Latest
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Recently Added</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Ascending</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Desending</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Last Month</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Last 7 Days</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive table-comments">
            <a-table
              class="table datatable thead-light"
              :columns="columns"
              :data-source="data"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Comment'">
                  {{ record.Comment }}
                </template>
                <template v-if="column.key === 'Review'">
                  <span class="text-warning">
                    <i class="ti ti-star-filled ms-1"></i>
                    <i class="ti ti-star-filled ms-1"></i>
                    <i class="ti ti-star-filled ms-1"></i>
                    <i class="ti ti-star-filled ms-1"></i>
                    <i class="ti ti-star-filled ms-1"></i>
                  </span>
                </template>
                <template v-if="column.key === 'Nil'">
                  <div class="dropdown me-3">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      unpublish
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end p-3">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >unpublish</a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          >publish</a
                        >
                      </li>
                    </ul>
                  </div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="action-icon d-inline-flex">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </div>
      <!-- /product list -->
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0 text-gray-9">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- delete modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Comment</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete comment?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button
                type="button"
                class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const data = [
  {
    key: "1",
    Comment: "Thanks for the detailed guide on POS System",
    Created_Date: "24 Dec 2024",
    Blog: "What is a POS System? A Beginner’s Guide",
    By: "Gertrude",
  },
  {
    key: "2",
    Comment: "Thanks for sharing these insights!",
    Created_Date: "10 Dec 2024",
    Blog: "Best POS Systems for Retail Businesses",
    By: "Edward",
  },
  {
    key: "3",
    Comment: "Helpful info on POS features - thank you!",
    Created_Date: "27 Nov 2024",
    Blog: "Key Features of a Modern POS",
    By: "Mark",
  },
  {
    key: "4",
    Comment: "Fantastic content, thank you for sharing!",
    Created_Date: "18 Nov 2024",
    Blog: "Integrating POS with E-Commerce",
    By: "Nidia",
  },
  {
    key: "5",
    Comment: "This really cleared things up, I appreciate it",
    Created_Date: "20 Jul 2024",
    Blog: "AI & the Future of POS Systems",
    By: "Rebecca",
  },
  {
    key: "6",
    Comment: "Awesome post, thanks for sharing!",
    Created_Date: "25 Oct 2024",
    Blog: "Retail vs Restaurant POS: Key Differences",
    By: "Jimmy",
  },
  {
    key: "7",
    Comment: "I learned a lot from thi - thanks!",
    Created_Date: "14 Oct 2024	",
    Blog: "Understanding PCI Compliance for POS",
    By: "Richard",
  },
];
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};
const columns = [
  {
    title: "Comment",
    dataIndex: "Comment",
    key: "Comment",
    sorter: {
      compare: (a, b) => {
        a = a.Comment.toLowerCase();
        b = b.Comment.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
    dataIndex: "Created_Date",
    sorter: {
      compare: (a, b) => {
        a = a.Created_Date.toLowerCase();
        b = b.Created_Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Rating",
    dataIndex: "Review",
    key: "Review",
    sorter: {
      compare: (a, b) => {
        a = a.Review.toLowerCase();
        b = b.Review.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Blog",
    dataIndex: "Blog",
    sorter: {
      compare: (a, b) => {
        a = a.Blog.toLowerCase();
        b = b.Blog.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "By",
    dataIndex: "By",
    sorter: {
      compare: (a, b) => {
        a = a.By.toLowerCase();
        b = b.By.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "Nil",
    sorter: false,
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];

export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
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
