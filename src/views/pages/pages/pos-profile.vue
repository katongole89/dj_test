<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Profile</h4>
          <h6>User Profile</h6>
        </div>
      </div>
      <!-- /product list -->
      <div class="card">
        <div class="card-header">
          <h4>Profile</h4>
        </div>
        <div class="card-body profile-body">
          <h5 class="mb-2">
            <i class="ti ti-user text-primary me-1"></i>Basic Information
          </h5>
          <div class="profile-pic-upload image-field">
            <div class="profile-pic p-2">
              <img
                src="@/assets/img/users/user-49.png"
                class="object-fit-cover h-100 rounded-1"
                alt="user"
              />
              <button type="button" class="close rounded-1">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="mb-3">
              <div class="image-upload mb-0 d-inline-flex">
                <input type="file" />
                <div class="btn btn-primary fs-13">Change Image</div>
              </div>
              <p class="mt-2">
                Upload an image below 2 MB, Accepted File format JPG, PNG
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >First Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="Jeffry" />
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Last Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="Jordan" />
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="mb-3">
                <label>Email<span class="text-danger ms-1">*</span></label>
                <input type="email" class="form-control" value="jeffry@example.com" />
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Phone Number<span class="text-danger ms-1">*</span></label
                >
                <input type="text" value="+17468314286" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >User Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="Jeffry Jordan" />
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="mb-3">
                <label class="form-label"
                  >Password<span class="text-danger ms-1">*</span></label
                >
                <div class="pass-group">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    class="pass-input form-control"
                    value="********"
                  />
                  <span @click="toggleShow" class="toggle-password">
                    <i
                      :class="{
                        'fas fa-eye': showPassword,
                        'fas fa-eye-slash': !showPassword,
                      }"
                    ></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-end">
              <a href="javascript:void(0);" class="btn btn-secondary me-2 shadow-none"
                >Cancel</a
              >
              <a href="javascript:void(0);" class="btn btn-primary shadow-none"
                >Save Changes</a
              >
            </div>
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
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
