<template>
  <!-- Add Country -->
  <div class="modal fade" id="add-country">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Country</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="mb-3">
                <label class="form-label"
                  >Country Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Country Code <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div
                class="status-toggle modal-status d-flex justify-content-between align-items-center"
              >
                <span class="status-label">Status</span>
                <input type="checkbox" id="users6" class="check" checked />
                <label for="users6" class="checktoggle mb-0"></label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">
              Add Country
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Country -->

  <!-- Edit Country -->
  <div class="modal fade" id="edit-country">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Edit Country</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body">
            <div class="row">
              <div class="mb-3">
                <label class="form-label"
                  >Country Name <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" value="United States" />
              </div>
              <div class="mb-3">
                <label class="form-label"
                  >Country Code <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" value="US" />
              </div>
              <div
                class="status-toggle modal-status d-flex justify-content-between align-items-center"
              >
                <span class="status-label">Status</span>
                <input type="checkbox" id="users5" class="check" checked />
                <label for="users5" class="checktoggle mb-0"></label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Country -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-5">
        <div class="modal-body text-center p-0">
          <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
            ><i class="ti ti-trash fs-24 text-danger"></i
          ></span>
          <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Country</h4>
          <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete country?</p>
          <div class="d-flex justify-content-center mt-3">
            <a
              class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/locations/countries"
              class="btn btn-primary fs-13 fw-medium p-2 px-3"
              >Yes Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>

<script>
export default {
  methods: {
    submitForm() {
      this.$router.push("/locations/countries");
    },
  },
};
</script>
