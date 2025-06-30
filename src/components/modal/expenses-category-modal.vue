<template>
  <!-- Add Expense Category-->
  <div class="modal fade" id="add-expense-category">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Add Expense Category</h4>
              </div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Category<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 summer-description-box">
                      <label class="form-label">Description</label>
                      <div id="summernote">
                        <ckeditor
                          :editor="editor"
                          v-model="editorData"
                          :config="editorConfig"
                        ></ckeditor>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div
                      class="status-toggle modal-status d-flex justify-content-between align-items-center"
                    >
                      <span class="status-label">Status</span>
                      <input type="checkbox" id="user1" class="check" checked />
                      <label for="user1" class="checktoggle"> </label>
                    </div>
                  </div>
                </div>
              </form>
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
                Add Expense Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Expense Category-->

  <!-- Edit Expense Category-->
  <div class="modal fade" id="edit-expense-category">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Edit Expense Category</h4>
              </div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label"
                        >Category<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="Utilities" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3 summer-description-box">
                      <label class="form-label">Description</label>
                      <div id="summernote2">
                        <ckeditor
                          :editor="editor"
                          v-model="editorData"
                          :config="editorConfig"
                        ></ckeditor>
                      </div>
                      <p class="mt-1">Maximum 60 Words</p>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div
                      class="status-toggle modal-status d-flex justify-content-between align-items-center"
                    >
                      <span class="status-label">Status</span>
                      <input type="checkbox" id="user2" class="check" checked />
                      <label for="user2" class="checktoggle"> </label>
                    </div>
                  </div>
                </div>
              </form>
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Expense -->

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Expense Category</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete expense category?</p>
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: " ",
      editorConfig: {},
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/expenses/expense-category");
    },
  },
};
</script>
