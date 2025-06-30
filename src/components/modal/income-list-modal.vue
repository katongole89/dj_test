<template>
  <!-- Add income-->
  <div class="modal fade" id="add-income">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Add Income</h4>
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
                        >Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label class="form-label"
                      >Category<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select
                      :options="Category"
                      id="income-category"
                      placeholder="Select"
                    />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label class="form-label"
                      >Store<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select :options="Store" id="income-store" placeholder="Select" />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label class="form-label"
                      >Amount<span class="text-danger ms-1">*</span></label
                    >
                    <input type="text" class="form-control" value="$200" />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label class="form-label"
                      >Account<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select
                      :options="Account"
                      id="income-account"
                      placeholder="Approved"
                    />
                  </div>
                  <div class="col-lg-12">
                    <div class="summer-description-box">
                      <label class="form-label">Description</label>
                      <div id="summernote">
                        <ckeditor
                          :editor="editor"
                          v-model="editorData"
                          :config="editorConfig"
                        ></ckeditor>
                      </div>
                      <p class="mt-1">Maximum 60 Words</p>
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
                Add Income
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add income-->

  <!-- Edit income-->
  <div class="modal fade" id="edit-income">
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
                        >Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value2" class="datetimepicker form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label class="form-label"
                      >Category<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select
                      :options="Category"
                      id="income-category1"
                      placeholder="Select"
                    />
                  </div>
                  <div class="col-lg-12 mb-3">
                    <label class="form-label"
                      >Store<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select
                      :options="Store"
                      id="income-store1"
                      placeholder="Select"
                    />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label class="form-label"
                      >Amount<span class="text-danger ms-1">*</span></label
                    >
                    <input type="text" class="form-control" value="$200" />
                  </div>
                  <div class="col-lg-6 mb-3">
                    <label class="form-label"
                      >Account<span class="text-danger ms-1">*</span></label
                    >
                    <vue-select
                      :options="Account"
                      id="income-account1"
                      placeholder="Select"
                    />
                  </div>
                  <div class="col-lg-12">
                    <div class="summer-description-box">
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
  <!-- /Edit income -->

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Income</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete income?</p>
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
import { ref } from "vue";
const value1 = ref();
const value2 = ref();

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      value1,
      value2,
      Category: ["select", "Foreign investment", "Product Export"],
      Store: ["select", "Foreign investment", "Product Export"],
      Account: ["Approved", "Approved"],
      editor: ClassicEditor,
      editorData: " ",
      editorConfig: {},
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/income/income-list");
    },
  },
};
</script>
