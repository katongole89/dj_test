<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Pricing</h4>
            <h6>Manage your pricing</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh">
              <i class="ti ti-refresh"></i>
            </a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
      </div>
      <!-- Pricing -->
      <div class="card">
        <div class="card-body pb-1">
          <div class="d-flex justify-content-center align-items-center mb-4">
            <p class="mb-0 me-2">Monthly</p>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
            <p>Yearly</p>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="card bg-light mb-3">
                <div class="card-body">
                  <p class="mb-1">Basic Plan</p>
                  <div class="d-flex align-items-center mb-2">
                    <h4>$29.00</h4>
                    <span class="d-inline-flex ms-1">/ Per Month</span>
                  </div>
                  <p class="mb-3">Feature for upto 10 users</p>
                  <a href="#" class="btn btn-secondary w-100 mb-3">Subscribe Now</a>
                  <span class="d-block mb-1">Features</span>
                  <p class="mb-2">Includes in this basic plan</p>
                  <ul>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Customer Profiles
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Inventory Management
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Discounts & Promotions
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span
                        class="pricing-check bg-secondary-transparent rounded-circle me-2"
                      >
                        <i class="ti ti-check fs-10"></i> </span
                      >24/7 Email & Chat Support
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span
                        class="pricing-check bg-secondary-transparent rounded-circle me-2"
                      >
                        <i class="ti ti-check fs-10"></i> </span
                      >API Access & Integrations
                    </li>
                    <li class="d-flex align-items-center">
                      <span
                        class="pricing-check bg-secondary-transparent rounded-circle me-2"
                      >
                        <i class="ti ti-check fs-10"></i> </span
                      >Reports & Analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="card pricing-active Position-relative mb-3">
                <span class="badge bg-pink badge-top">Recommended</span>
                <div class="card-body">
                  <p class="mb-1">Business Plan</p>
                  <div class="d-flex align-items-center mb-2">
                    <h4>$69.00</h4>
                    <span class="d-inline-flex ms-1">/ Per Month</span>
                  </div>
                  <p class="mb-3">Feature for upto 22 users</p>
                  <a href="#" class="btn btn-secondary w-100 mb-3">Subscribe Now</a>
                  <span class="d-block mb-1">Features</span>
                  <p class="mb-2">Includes in this business plan</p>
                  <ul>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Customer Profiles
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Inventory Management
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Discounts & Promotions
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >24/7 Email & Chat Support
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span
                        class="pricing-check bg-secondary-transparent rounded-circle me-2"
                      >
                        <i class="ti ti-check fs-10"></i> </span
                      >API Access & Integrations
                    </li>
                    <li class="d-flex align-items-center">
                      <span
                        class="pricing-check bg-secondary-transparent rounded-circle me-2"
                      >
                        <i class="ti ti-check fs-10"></i> </span
                      >Reports & Analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="card bg-light mb-3">
                <div class="card-body">
                  <p class="mb-1">Premium Plan</p>
                  <div class="d-flex align-items-center mb-2">
                    <h4>$99.00</h4>
                    <span class="d-inline-flex ms-1">/ Per Month</span>
                  </div>
                  <p class="mb-3">Feature for upto 33 users</p>
                  <a href="#" class="btn btn-secondary w-100 mb-3">Subscribe Now</a>
                  <span class="d-block mb-1">Features</span>
                  <p class="mb-2">Includes in this premium plan</p>
                  <ul>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Customer Profiles
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Inventory Management
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Discounts & Promotions
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >24/7 Email & Chat Support
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >API Access & Integrations
                    </li>
                    <li class="d-flex align-items-center">
                      <span
                        class="pricing-check bg-secondary-transparent rounded-circle me-2"
                      >
                        <i class="ti ti-check fs-10"></i> </span
                      >Reports & Analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="card bg-light mb-3">
                <div class="card-body">
                  <p class="mb-1">Enterprise Plan</p>
                  <div class="d-flex align-items-center mb-2">
                    <h4>$199.00</h4>
                    <span class="d-inline-flex ms-1">/ Per Month</span>
                  </div>
                  <p class="mb-3">Feature for upto Unlimited users</p>
                  <a href="#" class="btn btn-secondary w-100 mb-3">Subscribe Now</a>
                  <span class="d-block mb-1">Features</span>
                  <p class="mb-2">Includes in this enterprise plan</p>
                  <ul>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Customer Profiles
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Inventory Management
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Discounts & Promotions
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >24/7 Email & Chat Support
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >API Access & Integrations
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="pricing-check bg-success rounded-circle me-2">
                        <i class="ti ti-check fs-10"></i> </span
                      >Reports & Analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Pricing -->
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">{{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved</p>
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
