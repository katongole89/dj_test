<template>
  <!-- Add Plan -->
  <div class="modal fade" id="add_plans">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Plan</h4>
          <button
            type="button"
            class="btn-close custom-btn-close p-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <img
                      src="@/assets/img/profiles/avatar-30.jpg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="profile-upload">
                    <div class="mb-2">
                      <h6 class="mb-1">Upload Profile Image</h6>
                      <p class="fs-12">Image should be below 4 mb</p>
                    </div>
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-secondary btn-sm"
                        >Cancel</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Name<span class="text-danger"> *</span></label
                  >
                  <vue-select :options="PlanName" id="plan-basic" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Type<span class="text-danger"> *</span></label
                  >
                  <vue-select :options="PlanType" id="plan-month" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Position<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanPosition"
                    id="plan-position"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Currency<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanCurrency"
                    id="plan-amount"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <label class="form-label"
                      >Plan Currency<span class="text-danger"> *</span></label
                    >
                    <span class="text-primary"
                      ><i class="fa-solid fa-circle-exclamation me-2"></i>Set 0 for
                      free</span
                    >
                  </div>
                  <vue-select :options="PlanFree" id="plan-free" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Type<span class="text-danger"> *</span></label
                  >
                  <div class="pass-group">
                    <vue-select
                      :options="DiscountType"
                      id="discount-type"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount<span class="text-danger"> *</span></label
                  >
                  <div class="pass-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Limitations Invoices</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Max Customers</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Product</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Supplier</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h6>Plan Modules</h6>
                  <div class="form-check d-flex align-items-center">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Select All
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Employees
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Invoices
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Reports
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Contacts
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Clients
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Estimates
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Goals
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Deals
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Projects
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Payments
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Assets
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Leads
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Tickets
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Taxes
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Activities
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Pipelines
                    </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 me-2 text-dark fw-medium">
                      Access Trial
                    </label>
                    <div class="form-check form-switch me-2">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center gx-3">
                <div class="col-md-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="flex-fill">
                      <label class="form-label">Trial Days</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="d-block align-items-center ms-3">
                    <label class="form-check-label mt-0 me-2 text-dark">
                      Is Recommended
                    </label>
                    <div class="form-check form-switch me-2">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="mb-3">
                    <label class="form-label"
                      >Status<span class="text-danger"> *</span></label
                    >
                    <vue-select
                      :options="Status"
                      id="status-active"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Plan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Plan -->

  <!-- Edit Plan -->
  <div class="modal fade" id="edit_plans">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Plan</h4>
          <button
            type="button"
            class="btn-close custom-btn-close p-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4"
                >
                  <div
                    class="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames"
                  >
                    <img
                      src="@/assets/img/profiles/avatar-30.jpg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="profile-upload">
                    <div class="mb-2">
                      <h6 class="mb-1">Upload Profile Image</h6>
                      <p class="fs-12">Image should be below 4 mb</p>
                    </div>
                    <div class="profile-uploader d-flex align-items-center">
                      <div class="drag-upload-btn btn btn-sm btn-primary me-2">
                        Upload
                        <input type="file" class="form-control image-sign" multiple="" />
                      </div>
                      <a href="javascript:void(0);" class="btn btn-secondary btn-sm"
                        >Cancel</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Name<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanName"
                    id="plans-basic"
                    placeholder="Advanced"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Type<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanType"
                    id="plans-month"
                    placeholder="Monthly"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Position<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanPosition"
                    id="plans-position"
                    placeholder="1"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Plan Currency<span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="PlanCurrency"
                    id="plans-amount"
                    placeholder="EURO"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <label class="form-label"
                      >Plan Currency<span class="text-danger"> *</span></label
                    >
                    <span class="text-primary"
                      ><i class="fa-solid fa-circle-exclamation me-2"></i>Set 0 for
                      free</span
                    >
                  </div>
                  <vue-select :options="PlanFree" id="plans-free" placeholder="Fixed" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount Type<span class="text-danger"> *</span></label
                  >
                  <div class="pass-group">
                    <vue-select
                      :options="DiscountType"
                      id="discount-types"
                      placeholder="Percentage"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label class="form-label"
                    >Discount<span class="text-danger"> *</span></label
                  >
                  <div class="pass-group">
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Limitations Invoices</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Max Customers</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Product</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label class="form-label">Supplier</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h6>Plan Modules</h6>
                  <div class="form-check d-flex align-items-center">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Select All
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Employees
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Invoices
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Reports
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Contacts
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Clients
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Estimates
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Goals
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Deals
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Projects
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Payments
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Assets
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Leads
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Tickets
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Taxes
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Activities
                    </label>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="form-check d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 text-dark fw-medium">
                      <input class="form-check-input" type="checkbox" />
                      Pipelines
                    </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center mb-3">
                    <label class="form-check-label mt-0 me-2 text-dark fw-medium">
                      Access Trial
                    </label>
                    <div class="form-check form-switch me-2">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center gx-3">
                <div class="col-md-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="flex-fill">
                      <label class="form-label">Trial Days</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="d-block align-items-center ms-3">
                    <label class="form-check-label mt-0 me-2 text-dark">
                      Is Recommended
                    </label>
                    <div class="form-check form-switch me-2">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="mb-3">
                    <label class="form-label"
                      >Status<span class="text-danger"> *</span></label
                    >
                    <vue-select
                      :options="Status"
                      id="status-inactive"
                      placeholder="Active"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Plan -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <span
            class="avatar avatar-xl bg-danger-transparent rounded-circle text-danger mb-3"
          >
            <i class="ti ti-trash-x fs-36"></i>
          </span>
          <h4 class="mb-1">Confirm Delete</h4>
          <p class="mb-3">
            You want to delete all the marked items, this cant be undone once you delete.
          </p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-secondary me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="/super-admin/packages" class="btn btn-primary"
              >Yes, Delete</router-link
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
  data() {
    return {
      PlanName: ["Select", "Advanced", "Basic", "Enterprise"],
      PlanType: ["Select", "Monthly", "Yearly"],
      PlanPosition: ["Select", "1", "2", "3"],
      PlanCurrency: ["Select", "USD", "EURO"],
      PlanFree: ["Select", "Fixed", "Percentage"],
      DiscountType: ["Select", "Fixed", "Percentage"],
      Status: ["Select", "Active", "Inactive"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/super-admin/packages");
    },
  },
};
</script>
