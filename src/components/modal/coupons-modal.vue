<template>
  <!-- Add coupons -->
  <div class="modal fade" id="add-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Add Coupon</h4>
              </div>
              <button
                type="button"
                class="close bg-danger text-white fs-16"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Coupon Name<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Coupon Code<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Type<span class="text-danger ms-1">*</span></label
                      >
                      <vue-select
                        :options="Type"
                        id="coupons-type"
                        placeholder="Choose Type"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Discount<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">
                        Limit<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                      <span class="unlimited-text fs-12">Enter 0 for Unlimited</span>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Start Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value1" class="datetimepicker form-control p-2" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >End Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value1" class="datetimepicker form-control p-2" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 mb-3">
                    <div
                      class="status-toggle modal-status d-flex justify-content-between align-items-center mb-2"
                    >
                      <span class="status-label"
                        >Product<span class="text-danger ms-1">*</span></span
                      >
                      <div class="d-flex align-items-center">
                        <input type="checkbox" id="user4" class="check" />
                        <label for="user4" class="checktoggle mb-0 me-1"></label>
                        <span class="customer-toggle">Once Per Customer</span>
                      </div>
                    </div>
                    <vue-select :options="Once" id="coupons-per" placeholder="Choose" />
                  </div>

                  <div class="mb-3 summer-description-box">
                    <label class="form-label">Description</label>
                    <div id="summernote2">
                      <ckeditor
                          :editor="editor"
                          v-model="editorData"
                          :config="editorConfig"
                        ></ckeditor>
                    </div>
                    <p>Maximum 60 Words</p>
                  </div>

                  <div class="m-0">
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
                Add Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Coupons -->

  <!-- Edit coupons -->
  <div class="modal fade" id="edit-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Edit Coupon</h4>
              </div>
              <button
                type="button"
                class="close bg-danger text-white fs-16"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Coupon Name<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="New Year Blast" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Coupon Code<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="NEWYEAR30" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Type<span class="text-danger ms-1">*</span></label
                      >
                      <vue-select
                        :options="Type"
                        id="type-coupons"
                        placeholder="Percentage"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Discount<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="30" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">
                        Limit<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" value="01" />
                      <span class="unlimited-text fs-12">Enter 0 for Unlimited</span>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Start Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value1" class="datetimepicker form-control p-2" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >End Date<span class="text-danger ms-1">*</span></label
                      >

                      <div class="input-groupicon calender-input">
                        <a-date-picker v-model:value="value1" class="datetimepicker form-control p-2" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 mb-3">
                    <div
                      class="status-toggle modal-status d-flex justify-content-between align-items-center mb-2"
                    >
                      <span class="status-label"
                        >Product<span class="text-danger ms-1">*</span></span
                      >
                      <div class="d-flex align-items-center">
                        <input type="checkbox" id="user5" class="check" />
                        <label for="user5" class="checktoggle mb-0 me-1"></label>
                        <span class="customer-toggle">Once Per Customer</span>
                      </div>
                    </div>
                    <vue-select :options="Once" id="per-coupons" placeholder="All" />
                  </div>

                  <div class="mb-3 summer-description-box">
                    <label class="form-label">Description</label>
                    <div id="summernote">
                      <ckeditor
                        :editor="editor"
                        v-model="editorData"
                        :config="editorConfig"
                      ></ckeditor>
                      </div>
                    <p>Maximum 60 Words</p>
                  </div>

                  <div class="m-0">
                    <div
                      class="status-toggle modal-status d-flex justify-content-between align-items-center"
                    >
                      <span class="status-label">Status</span>
                      <input type="checkbox" id="user3" class="check" checked />
                      <label for="user3" class="checktoggle"> </label>
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
                Add Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Coupons -->

  <div class="modal fade" id="delete-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"
              ><i class="ti ti-trash fs-24 text-danger"></i
            ></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Coupon</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete coupon?</p>
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
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      Type: ["Choose Type", "Fixed", "Percentage"],
      Once: ["Choose", "Nike Jordan", "Amazon Echo Dot"],
      editor: ClassicEditor,
      editorData: " ",
      editorConfig: {},
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/coupons");
    },
  },
};
</script>
