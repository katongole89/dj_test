<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content settings-content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Settings</h4>
            <h6>Manage your settings on portal</h6>
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
      <div class="row">
        <div class="col-xl-12">
            <div class="settings-wrapper d-flex">
            <settings-sidebar></settings-sidebar>
            <div class="card flex-fill mb-0">
              <div class="card-header">
                <h4 class="fs-18 fw-bold">Profile</h4>
              </div>
              <div class="card-body">
                <form action="#">
                  <div class="card-title-head">
                    <h6 class="fs-16 fw-bold mb-3">
                      <span class="fs-16 me-2"><i class="ti ti-user"></i></span> 
                      Basic Information
                    </h6>
                  </div>
                  <div class="profile-pic-upload">
                    <div class="profile-pic">
                      <span>
                        <i class="ti ti-circle-plus mb-1 fs-16"></i> Add Image
                      </span>
                    </div>
                    <div class="new-employee-field">
                      <div class="mb-0">
                        <div class="image-upload mb-0">
                          <input type="file">
                          <div class="image-uploads">
                            <h4>Upload Image</h4>
                          </div>
                        </div>
                        <span class="fs-13 fw-medium mt-2">
                          Upload an image below 2 MB, Accepted File format JPG, PNG
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label class="form-label">
                          First Name <span class="text-danger">*</span>
                        </label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label class="form-label">
                          Last Name <span class="text-danger">*</span>
                        </label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label class="form-label">
                          User Name <span class="text-danger">*</span>
                        </label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label class="form-label">
                          Phone Number <span class="text-danger">*</span>
                        </label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="mb-3">
                        <label class="form-label">
                          Email <span class="text-danger">*</span>
                        </label>
                        <input type="email" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="card-title-head">
                    <h6 class="fs-16 fw-bold mb-3">
                      <span class="fs-16 me-2"><i class="ti ti-map-pin"></i></span> 
                      Address Information
                    </h6>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">
                          Address <span class="text-danger">*</span>
                        </label>
                        <input type="email" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">
                          Country <span class="text-danger">*</span>
                        </label>
                        <vue-select :options="Austa" id="austa" placeholder="Select" />
                        
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">
                          State <span class="text-danger">*</span>
                        </label>
                        <vue-select :options="Tasmania" id="tasmania" placeholder="Select" />
                        
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">
                          City <span class="text-danger">*</span>
                        </label>
                        <vue-select :options="Anchorage" id="anchorage" placeholder="Select" />  
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">
                          Postal Code <span class="text-danger">*</span>
                        </label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="text-end settings-bottom-btn mt-0">
                    <button type="button" class="btn btn-secondary me-2">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">{{ new Date().getFullYear() }} © DreamsPOS. All Right Reserved</p>
      <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Austa : ["Select","USA","India","French","Australia"],
      Tasmania : ["Select","Alaska","Mexico","Tasmania"],
      Anchorage : ["Select","Anchorage","Tijuana","Hobart"],
    }
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
