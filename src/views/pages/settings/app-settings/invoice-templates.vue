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
              <form @submit.prevent="submitForm">
                <div class="card-header">
                  <h4>Invoice Templates</h4>
                </div>
                <div class="card-body pb-0">
                  <div
                    class="d-flex flex-wrap justify-content-between align-items-center mb-3"
                  >
                    <ul
                      class="nav nav-pills low-stock-tab d-flex me-2 mb-0"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Invoices
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Purchases
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-profile-tab2"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile2"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile2"
                          aria-selected="false"
                        >
                          Receipts
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div class="row gx-3">
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 1</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 2</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 3</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 4</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 5</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div class="row gx-3">
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 1</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 2</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 3</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 4</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-01.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">General Invoice 5</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile2"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab2"
                    >
                      <div class="row gx-3">
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-02.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Receipt Invoice 1</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-02.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Receipt Invoice 2</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-02.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Receipt Invoice 3</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-mg-6">
                          <div class="card bg-light invoice-card">
                            <div class="card-body p-2">
                              <span class="d-block mb-2"
                                ><img
                                  src="@/assets/img/invoice/invoice-02.svg"
                                  class="w-100"
                                  alt="Img"
                              /></span>
                              <div
                                class="d-flex align-items-center justify-content-between"
                              >
                                <p class="mb-0">Receipt Invoice 4</p>
                                <a
                                  href="#"
                                  class="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                  ><i class="ti ti-star"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014 - 2025 &copy; DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed by
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
    submitForm() {
      this.$router.push("/app-settings/invoice-settings");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
