<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div>
          <router-link to="/hrm/employees-list" class="d-inline-flex align-items-center"
            ><i class="ti ti-chevron-left me-2"></i>Back to List</router-link
          >
        </div>
        <ul class="table-top-head">
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-xl-4 theiaStickySidebar">
          <div class="card rounded-0 border-0">
            <div class="card-header rounded-0 bg-primary d-flex align-items-center">
              <span
                class="avatar avatar-xl avatar-rounded flex-shrink-0 border border-white border-3 me-3"
              >
                <img src="@/assets/img/users/user-32.jpg" alt="Img" />
              </span>
              <div class="me-3">
                <h6 class="text-white mb-1">Stephan Peralt</h6>
                <span class="badge bg-purple-transparent text-purple">Designer</span>
              </div>
              <div>
                <a href="#" class="btn btn-white">Edit Profile</a>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <span class="d-inline-flex align-items-center">
                  <i class="ti ti-id me-2"></i>
                  Employee ID
                </span>
                <p class="text-dark">EMP-0001</p>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-2">
                <span class="d-inline-flex align-items-center">
                  <i class="ti ti-star me-2"></i>
                  Team
                </span>
                <p class="text-dark">UI/UX Design</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <span class="d-inline-flex align-items-center">
                  <i class="ti ti-calendar-check me-2"></i>
                  Date Of Join
                </span>
                <p class="text-dark">1st Jan 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card rounded-0 border-0">
            <div
              class="card-header border-0 rounded-0 bg-light d-flex align-items-center"
            >
              <h6>Basic information</h6>
            </div>
            <div class="card-body pb-0">
              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Phone</p>
                    <span class="text-gray-900 fs-13">+1 458 7877 879</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Email</p>
                    <span class="text-gray-900 fs-13">perralt12@example.com</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Gender</p>
                    <span class="text-gray-900 fs-13">Male</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Birdthday</p>
                    <span class="text-gray-900 fs-13">24th July 1990</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Address</p>
                    <span class="text-gray-900 fs-13">1861 Bayonne Ave, Manchester</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Nationality</p>
                    <span class="text-gray-900 fs-13">Indian</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Blood Group</p>
                    <span class="text-gray-900 fs-13">O+ve</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Shift</p>
                    <span class="text-gray-900 fs-13">Mid Shift</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-0 border-0">
            <div
              class="card-header border-0 rounded-0 bg-light d-flex align-items-center"
            >
              <h6>About Employee</h6>
            </div>
            <div class="card-body pb-0">
              <p>
                As an award winning designer, I deliver exceptional quality work and bring
                value to your brand! With 10 years of experience and 350+ projects
                completed worldwide with satisfied customers, I developed the 360° brand
                approach, which helped me to create numerous brands that are relevant,
                meaningful and loved.Phone
              </p>
            </div>
          </div>
          <div class="card rounded-0 border-0">
            <div
              class="card-header border-0 rounded-0 bg-light d-flex align-items-center"
            >
              <h6>Bank Information</h6>
            </div>
            <div class="card-body pb-0">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Bank Name</p>
                    <span class="text-gray-900 fs-13">Swizz International</span>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Bank account No</p>
                    <span class="text-gray-900 fs-13">350501501690</span>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">IFSC</p>
                    <span class="text-gray-900 fs-13">SW7994</span>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Branch</p>
                    <span class="text-gray-900 fs-13">Alabama USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-0 border-0">
            <div
              class="card-header border-0 rounded-0 bg-light d-flex align-items-center"
            >
              <h6>Emergency Contact Number</h6>
            </div>
            <div class="card-body pb-0">
              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Name</p>
                    <span class="text-gray-900 fs-13">Andrea Jermiah</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Relation</p>
                    <span class="text-gray-900 fs-13">Mother</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <p class="fs-13 mb-2">Phone Number</p>
                    <span class="text-gray-900 fs-13">+1 43566 67788</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
