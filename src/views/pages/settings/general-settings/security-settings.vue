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
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
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
                <h4 class="fs-18 fw-bold">Security</h4>
              </div>
              <div class="card-body">
                <div>
                  <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg border bg-light fs-24 me-2">
                        <i class="ti ti-eye-off text-gray-900 fs-18"></i>
                      </span>
                      <div>
                        <h5 class="fs-16 fw-medium mb-1">Password</h5>
                        <p class="fs-16">Last Changed 22 Dec 2024, 10:30 AM</p>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#change-password">Change Password</a>
                  </div>
                  <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg border bg-light fs-24 me-2">
                        <i class="ti ti-shield text-gray-900 fs-18"></i>
                      </span>
                      <div>
                        <h5 class="fs-16 fw-medium mb-1">Two Factor Authentication</h5>
                        <p class="fs-16">Receive codes via SMS or email every time you login</p>
                      </div>
                    </div>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user3" class="check" checked>
                      <label for="user3" class="checktoggle">	</label>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg border bg-light fs-24 me-2">
                        <i class="ti ti-brand-google text-gray-900 fs-18"></i>
                      </span>
                      <div>
                        <h5 class="fs-16 fw-medium mb-1">Google Authentication</h5>
                        <p class="fs-16">Connect to Google</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="badge bg-outline-success">Connected</span>
                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-3">
                        <input type="checkbox" id="user4" class="check" checked>
                        <label for="user4" class="checktoggle">	</label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg border bg-light fs-24 me-2">
                        <i class="ti ti-phone text-gray-900 fs-18"></i>
                      </span>
                      <div>
                        <h5 class="fs-16 fw-medium mb-1">Phone Number Verification</h5>
                        <p class="fs-16">Verified Mobile Number : +81699799974</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="fs-20 text-success me-3">
                        <i class="ti ti-circle-check-filled"></i>
                      </span>
                      <a href="javascript:void(0);" class="btn btn-primary mt-0" data-bs-toggle="modal" data-bs-target="#phone-verification">Change</a>
                      <a href="javascript:void(0);" class="btn btn-secondary ms-3">Remove</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg border bg-light fs-24 me-2">
                        <i class="ti ti-mail text-gray-900 fs-18"></i>
                      </span>
                      <div>
                        <h5 class="fs-16 fw-medium mb-1">Email Verification</h5>
                        <p class="fs-16">Verified Email : info@example.com</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="fs-20 text-success me-3">
                        <i class="ti ti-circle-check-filled"></i>
                      </span>
                      <a href="javascript:void(0);" class="btn btn-primary mt-0" data-bs-toggle="modal" data-bs-target="#email-verification">Change</a>
                      <a href="javascript:void(0);" class="btn btn-secondary ms-3">Remove</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg border bg-light fs-24 me-2">
                        <i class="ti ti-tool text-gray-900 fs-18"></i>
                      </span>
                      <div>
                        <h5 class="fs-16 fw-medium mb-1">Device Management</h5>
                        <p class="fs-16">Manage devices associated with the account</p>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-primary mt-0" data-bs-toggle="modal" data-bs-target="#device-management">Manage</a>
                  </div>
                  <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg border bg-light fs-24 me-2">
                        <i class="ti ti-activity text-gray-900 fs-18"></i>
                      </span>
                      <div>
                        <h5 class="fs-16 fw-medium mb-1">Account Activity</h5>
                        <p class="fs-16">Manage activities associated with the account</p>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-primary mt-0" data-bs-toggle="modal" data-bs-target="#account-activity">View</a>
                  </div>
                  <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg border bg-light fs-24 me-2">
                        <i class="ti ti-ban text-gray-900 fs-18"></i>
                      </span>
                      <div>
                        <h5 class="fs-16 fw-medium mb-1">Deactivate Account</h5>
                        <p class="fs-16">This will shutdown your account. Your account will be reactive when you sign in again</p>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-primary mt-0">Deactivate</a>
                  </div>
                  <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg border bg-light fs-24 me-2">
                        <i class="ti ti-trash text-gray-900 fs-18"></i>
                      </span>
                      <div>
                        <h5 class="fs-16 fw-medium mb-1">Delete Account</h5>
                        <p class="fs-16">Your account will be permanently deleted</p>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-account">Delete</a>
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
      <p class="mb-0">{{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <security-settings-modal></security-settings-modal>
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
