<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content settings-content">
      <div class="page-header settings-pg-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Settings</h4>
            <h6>Manage your settings on portal</h6>
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
      <div class="row">
        <div class="col-xl-12">
          <div class="settings-wrapper d-flex">
            <settings-sidebar></settings-sidebar>
            <div class="card flex-fill mb-0">
              <div class="card-header">
                <h4 class="fs-18 fw-bold">System Settings</h4>
              </div>
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <span class="avatar avatar-lg bg-light border me-2">
                              <img
                                src="@/assets/img/icons/fb-icon.svg"
                                class="w-auto h-auto"
                                alt="Img"
                              />
                            </span>
                            <div>
                              <h5>Facebook</h5>
                            </div>
                          </div>
                          <span class="badge bg-outline-success">Connected</span>
                        </div>
                        <p class="border-bottom pb-3 mb-3">
                          Connect with friends, family and share updates, photos, moments
                          with people you know.
                        </p>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-outline-secondary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#fb-connect"
                              ><i class="ti ti-tool me-1"></i>View Integration</a
                            >
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user1" class="check" checked />
                            <label for="user1" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <span class="avatar avatar-lg bg-light border me-2">
                              <img
                                src="@/assets/img/icons/twitter-icon.svg"
                                class="w-auto h-auto"
                                alt="Img"
                              />
                            </span>
                            <div>
                              <h5>Twitter</h5>
                            </div>
                          </div>
                          <span class="badge bg-outline-light">Not connected</span>
                        </div>
                        <p class="border-bottom pb-3 mb-3">
                          Communicate and stay connected through the exchange of quick,
                          frequent messages
                        </p>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-outline-secondary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#twitter-connect"
                              ><i class="ti ti-tool me-1"></i>View Integration</a
                            >
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user2" class="check" checked />
                            <label for="user2" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <span class="avatar avatar-lg bg-light border me-2">
                              <img
                                src="@/assets/img/icons/linkedin-icon.svg"
                                class="w-auto h-auto"
                                alt="Img"
                              />
                            </span>
                            <div>
                              <h5>Linkedin</h5>
                            </div>
                          </div>
                          <span class="badge bg-outline-success">Connected</span>
                        </div>
                        <p class="border-bottom pb-3 mb-3">
                          Network with people and professional organizations in your
                          industry.
                        </p>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-outline-secondary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#linkedin-connect"
                              ><i class="ti ti-tool me-1"></i>Connect Now</a
                            >
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user3" class="check" checked />
                            <label for="user3" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
                    <div class="card">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <span class="avatar avatar-lg bg-light border me-2">
                              <img
                                src="@/assets/img/icons/google-icon.svg"
                                class="w-auto h-auto"
                                alt="Img"
                              />
                            </span>
                            <div>
                              <h5>Google</h5>
                            </div>
                          </div>
                          <span class="badge bg-outline-success">Connected</span>
                        </div>
                        <p class="border-bottom pb-3 mb-3">
                          Google has many special features to help you find exactly what
                          you're looking for.
                        </p>
                        <div class="d-flex align-items-center justify-content-between">
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-outline-secondary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#google-connect"
                              ><i class="ti ti-tool me-1"></i>View Integration</a
                            >
                          </div>
                          <div
                            class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2"
                          >
                            <input type="checkbox" id="user4" class="check" checked />
                            <label for="user4" class="checktoggle"> </label>
                          </div>
                        </div>
                      </div>
                    </div>
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
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <social-modal></social-modal>
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
