<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Add Employee</h4>
            <h6>Create new Employee</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
          <li>
            <div class="page-btn">
              <router-link to="/hrm/employees-list" class="btn btn-secondary"
                ><vue-feather type="arrow-left" class="me-2"></vue-feather>Back to
                List</router-link
              >
            </div>
          </li>
        </ul>
      </div>
      <!-- /product list -->
      <form action="#">
        <div class="accordion-card-one accordion" id="accordionExample">
          <div class="accordion-item">
            <div class="accordion-header p-3" id="headingOne">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-controls="collapseOne"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i class="ti ti-users text-primary me-2"></i
                    ><span>Employee Information</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="new-employee-field">
                  <div class="profile-pic-upload">
                    <div class="profile-pic">
                      <span
                        ><i class="ti ti-circle-plus me-1"></i> Profile
                        Photo</span
                      >
                    </div>
                    <div class="input-blocks mb-0">
                      <div class="image-upload mb-0">
                        <input type="file" />
                        <div class="image-uploads">
                          <h4>Change Image</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >First Name<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Last Name<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Email<span class="text-danger ms-1">*</span></label
                        >
                        <input type="email" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Contact Number<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Emp Code<span class="text-danger ms-1">*</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="input-blocks">
                        <label class="form-label"
                          >Date of Birth<span class="text-danger ms-1">*</span></label
                        >
                        <div class="input-groupicon calender-input">
                          <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Gender<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select
                          :options="Empmale"
                          id="empmale"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Nationality<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select :options="EmpNat" id="empnat" placeholder="Choose" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="input-blocks">
                        <label>Joining Date<span class="text-danger ms-1">*</span></label>
                        <div class="input-groupicon calender-input">
                          <a-date-picker v-model:value="value1" class="datetimepicker form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <div class="add-newplus">
                          <label class="form-label"
                            >Shift<span class="text-danger ms-1">*</span></label
                          >
                          <a href="#"
                            ><span
                              ><vue-feather
                                type="plus-circle"
                                class="plus-down-add"
                              ></vue-feather
                              >Add new</span
                            ></a
                          >
                        </div>
                        <vue-select :options="ChoEmp" id="choemp" placeholder="Choose" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Department<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select :options="DepEmp" id="depemp" placeholder="Choose" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Designation<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select :options="DesEmp" id="desemp" placeholder="Choose" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Blood Group<span class="text-danger ms-1">*</span></label
                        >
                        <vue-select
                          :options="BloodEmp"
                          id="bloodemp"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- Editor -->
                  <div class="col-lg-12">
                    <div class="input-blocks summer-description-box transfer mb-3">
                      <label>About</label>
                      <div id="summernote">
                        <ckeditor
                          :editor="editor"
                          v-model="editorData"
                          :config="editorConfig"
                        ></ckeditor>
                      </div>
                      <p class="mt-1">Maximum 60 Characters</p>
                    </div>
                  </div>
                  <!-- /Editor -->
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header p-3" id="headingThree">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-controls="collapseThree"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i data-feather="map-pin" class="feather-edit text-primary me-2"></i
                    ><span>Address Information</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseThree"
              class="accordion-collapse collapse show"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="other-info">
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Address</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Country</label>
                        <vue-select
                          :options="ChooseEmpCou"
                          id="chooseempcou"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">State</label>
                        <vue-select
                          :options="ChooseEmpSta"
                          id="chooseempsta"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">City</label>
                        <vue-select
                          :options="ChooseEmpCity"
                          id="chooseempcity"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Zipcode</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header p-3" id="heading4">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-controls="collapseFour"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i data-feather="info" class="feather-edit text-primary me-2"></i
                    ><span>Emergency Information</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseFour"
              class="accordion-collapse collapse show"
              aria-labelledby="heading4"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="other-info">
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Emergency Contact Number 1</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Relation</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Emergency Contact Number 2</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Relation</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header p-3" id="heading5">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-controls="collapseFive"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i class="ti ti-building-bank feather-edit text-primary me-2"></i
                    ><span>Bank Information</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseFive"
              class="accordion-collapse collapse show"
              aria-labelledby="heading5"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="other-info">
                  <div class="row">
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Bank Name</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Account Number</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">IFSC</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Branch</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header p-3" id="heading6">
              <div
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-controls="collapseTwo"
              >
                <div
                  class="addproduct-icon d-flex align-items-center justify-content-between flex-fill"
                >
                  <h5 class="d-inline-flex align-items-center">
                    <i data-feather="info" class="feather-edit text-primary me-2"></i
                    ><span>Password</span>
                  </h5>
                  <a href="javascript:void(0);"
                    ><i data-feather="chevron-down" class="chevron-down-add"></i
                  ></a>
                </div>
              </div>
            </div>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse show"
              aria-labelledby="heading6"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="pass-info">
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="input-blocks mb-md-0 mb-sm-3">
                        <label>Password</label>
                        <div class="pass-group">
                          <input type="password" class="pass-input" />
                          <span class="fas toggle-password fa-eye-slash"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="input-blocks mb-0">
                        <label>Confirm Password</label>
                        <div class="pass-group">
                          <input type="password" class="pass-inputa" />
                          <span class="fas toggle-passworda fa-eye-slash"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /product list -->

        <div class="text-end mb-3">
          <button type="button" class="btn btn-secondary me-2">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Employee</button>
        </div>
      </form>
    </div>

    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
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
      ChooseEmpCou: ["Choose", "United Kingdom", "USA"],
      BloodEmp: ["Choose", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      DesEmp: ["Choose", "Designer", "Developer", "Tester"],
      DepEmp: ["Choose", "UI/UX", "Support", "HR", "Enginnering"],
      ChoEmp: ["Choose", "Regular"],
      EmpNat: ["Choose", "United Kingdom", "India"],
      Empmale: ["Choose", "Male", "Female"],
      ChooseEmpCity: ["Choose", "Los Angeles", "New Jersey"],
      ChooseEmpSta: ["Choose", "California", "Paris"],
      value1,
      value2,
      editor: ClassicEditor,
      editorData: " ",
      editorConfig: {},
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
