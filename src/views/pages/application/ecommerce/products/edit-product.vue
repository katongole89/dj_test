<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4 class="fw-bold">Edit Product</h4>
            <h6>Edit Your product</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
          </li>
          <li>
            <a
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Collapse"
              id="collapse-header"
              ><i class="ti ti-chevron-up"></i
            ></a>
          </li>
          <li>
            <div class="page-btn mt-0">
              <router-link to="/inventory/product-list" class="btn btn-secondary"
                ><i data-feather="arrow-left" class="me-2"></i>Back to
                Product</router-link
              >
            </div>
          </li>
        </ul>
      </div>
      <!-- /add -->
      <form @submit.prevent="submitForm" class="edit-product">
        <div class="card border-0 bg-transparent">
          <div class="card-body add-product pb-0">
            <div class="accordion-card-one accordion" id="accordionExample">
              <div class="accordion-item">
                <div class="accordion-header" id="headingOne">
                  <div
                    class="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-controls="collapseOne"
                  >
                    <div class="addproduct-icon">
                      <h5>
                        <i data-feather="info" class="add-info"></i
                        ><span>Product Information</span>
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
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <div class="mb-3 add-product">
                          <label class="form-label"
                            >Store<span class="text-danger ms-1">*</span></label
                          >
                          <vue-select
                            :options="Store"
                            id="edit-store"
                            placeholder="Electro Mart"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3 add-product">
                          <label class="form-label"
                            >Warehouse<span class="text-danger ms-1">*</span></label
                          >
                          <vue-select
                            :options="Warehouse"
                            id="edit-warehouse"
                            placeholder="Lavish Warehouse"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <div class="mb-3 add-product">
                          <label class="form-label"
                            >Product Name<span class="text-danger ms-1">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            value="Lenovo 3rd Generation"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3 add-product">
                          <label class="form-label"
                            >Slug<span class="text-danger ms-1">*</span></label
                          >
                          <input type="text" class="form-control" value="computers" />
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3 add-product list position-relative">
                          <label class="form-label"
                            >SKU<span class="text-danger ms-1">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control list"
                            placeholder="Enter SKU"
                            value="LNV-IP3-8GB-256SSD-BLK"
                          />
                          <button type="submit" class="btn btn-primaryadd">
                            Generate
                          </button>
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3 add-product">
                          <label class="form-label"
                            >Selling Type<span class="text-danger ms-1">*</span></label
                          >
                          <vue-select
                            :options="Selling"
                            id="edit-selling"
                            placeholder="Online"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="addservice-info">
                      <div class="row">
                        <div class="col-sm-6 col-12">
                          <div class="mb-3 add-product">
                            <div class="add-newplus">
                              <label class="form-label"
                                >Category<span class="text-danger ms-1">*</span></label
                              >
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#add-units-category"
                                ><i class="ti ti-circle-plus me-1"></i
                                ><span>Add New</span>
                              </a>
                            </div>
                            <vue-select
                              :options="Category"
                              id="edit-lenovo"
                              placeholder="Computers"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-12">
                          <div class="mb-3 add-product">
                            <label class="form-label"
                              >Sub Category<span class="text-danger ms-1">*</span></label
                            >
                            <vue-select
                              :options="Subcategory"
                              id="edit-lenovo1"
                              placeholder="Laptop"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="add-product-new">
                      <div class="row">
                        <div class="col-sm-6 col-12">
                          <div class="mb-3 add-product">
                            <div class="add-newplus">
                              <label class="form-label"
                                >Brand<span class="text-danger ms-1">*</span></label
                              >
                            </div>
                            <vue-select
                              :options="Brand"
                              id="edit-brand1"
                              placeholder="Lenova"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-12">
                          <div class="mb-3 add-product">
                            <div class="add-newplus">
                              <label class="form-label"
                                >Unit<span class="text-danger ms-1">*</span></label
                              >
                            </div>
                            <vue-select
                              :options="Unit"
                              id="edit-unit1"
                              placeholder="Pcs"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <div class="mb-3 add-product">
                          <label class="form-label"
                            >Barcode Symbology<span class="text-danger ms-1"
                              >*</span
                            ></label
                          >
                          <vue-select
                            :options="Barcode"
                            id="edit-barcode1"
                            placeholder="Code34"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6 col-12">
                        <div class="mb-3 add-product list position-relative">
                          <label class="form-label"
                            >Item Code<span class="text-danger ms-1">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control list"
                            placeholder="PT001"
                          />
                          <button type="submit" class="btn btn-primaryadd">
                            Generate
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <!-- Editor -->
                      <div class="col-lg-12">
                        <div class="form-group summer-description-box transfer mb-3">
                          <label class="form-label">Description</label>
                          <div id="summernote3">
                            <ckeditor
                              :editor="editor"
                              v-model="editorData"
                              :config="editorConfig"
                            ></ckeditor>
                          </div>
                          <p>Maximum 60 Characters</p>
                        </div>
                      </div>
                      <!-- /Editor -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-card-one accordion" id="accordionExample2">
              <div class="accordion-item">
                <div class="accordion-header" id="headingTwo">
                  <div
                    class="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-controls="collapseTwo"
                  >
                    <div class="text-editor add-list">
                      <div class="addproduct-icon list icon">
                        <h5>
                          <i data-feather="life-buoy" class="add-info"></i
                          ><span>Pricing & Stocks</span>
                        </h5>
                        <a href="javascript:void(0);"
                          ><i data-feather="chevron-down" class="chevron-down-add"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    <div class="mb-3 add-products">
                      <label class="form-label"
                        >Product Type<span class="text-danger ms-1">*</span></label
                      >
                      <div class="single-pill-product">
                        <ul class="nav nav-pills" id="pills-tab1" role="tablist">
                          <li class="nav-item" role="presentation">
                            <span
                              class="custom_radio me-4 mb-0 active"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-home"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              <input type="radio" class="form-control" name="payment" />
                              <span class="checkmark"></span> Single Product</span
                            >
                          </li>
                          <li class="nav-item" role="presentation">
                            <span
                              class="custom_radio me-2 mb-0"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              <input type="radio" class="form-control" name="sign" />
                              <span class="checkmark"></span> Variable Product</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div class="row">
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3 add-product">
                              <label class="form-label"
                                >Quantity<span class="text-danger ms-1">*</span></label
                              >
                              <input type="text" class="form-control" value="20" />
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3 add-product">
                              <label class="form-label"
                                >Price<span class="text-danger ms-1">*</span></label
                              >
                              <input type="text" class="form-control" value="650" />
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3 add-product">
                              <label class="form-label"
                                >Tax Type<span class="text-danger ms-1">*</span></label
                              >
                              <vue-select
                                :options="Tax"
                                id="edit-tax1"
                                placeholder="Sales"
                              />
                            </div>
                          </div>

                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3 add-product">
                              <label class="form-label"
                                >Discount Type<span class="text-danger ms-1"
                                  >*</span
                                ></label
                              >
                              <vue-select
                                :options="Discount"
                                id="edit-type1"
                                placeholder="Percentage"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3 add-product">
                              <label class="form-label"
                                >Discount Value<span class="text-danger ms-1"
                                  >*</span
                                ></label
                              >
                              <input type="text" placeholder="10" class="form-control" />
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-6 col-12">
                            <div class="mb-3 add-product">
                              <label class="form-label"
                                >Quantity Alert<span class="text-danger ms-1"
                                  >*</span
                                ></label
                              >
                              <input type="text" class="form-control" value="15" />
                            </div>
                          </div>
                        </div>
                        <div class="accordion-card-one accordion" id="accordionExample3">
                          <div class="accordion-item">
                            <div class="accordion-header" id="headingThree">
                              <div
                                class="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-controls="collapseThree"
                              >
                                <div class="addproduct-icon list">
                                  <h5>
                                    <i data-feather="image" class="add-info"></i
                                    ><span>Images</span>
                                  </h5>
                                  <a href="javascript:void(0);"
                                    ><i
                                      data-feather="chevron-down"
                                      class="chevron-down-add"
                                    ></i
                                  ></a>
                                </div>
                              </div>
                            </div>
                            <div
                              id="collapseThree"
                              class="accordion-collapse collapse show"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample3"
                            >
                              <div class="accordion-body">
                                <div class="text-editor add-list add">
                                  <div class="col-lg-12">
                                    <div class="add-choosen">
                                      <div class="mb-3">
                                        <div class="image-upload">
                                          <input type="file" />
                                          <div class="image-uploads">
                                            <i
                                              data-feather="plus-circle"
                                              class="plus-down-add me-0"
                                            ></i>
                                            <h4>Add Images</h4>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="phone-img">
                                        <img
                                          src="@/assets/img/products/phone-add-2.png"
                                          alt="image"
                                        />
                                        <a href="javascript:void(0);"
                                          ><i
                                            data-feather="x"
                                            class="x-square-add remove-product"
                                          ></i
                                        ></a>
                                      </div>

                                      <div class="phone-img">
                                        <img
                                          src="@/assets/img/products/phone-add-1.png"
                                          alt="image"
                                        />
                                        <a href="javascript:void(0);"
                                          ><i
                                            data-feather="x"
                                            class="x-square-add remove-product"
                                          ></i
                                        ></a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div class="row select-color-add">
                          <div class="col-lg-6 col-sm-6 col-12">
                            <div class="mb-3 add-product">
                              <label class="form-label">Variant Attribute</label>
                              <div class="row">
                                <div class="col-lg-10 col-sm-10 col-10">
                                  <vue3-tags-input
                                    class="input-tags form-control"
                                    type="text"
                                    data-role="tagsinput"
                                    name="specialist"
                                    id="specialist"
                                    :tags="tags"
                                  />
                                </div>
                                <div class="col-lg-2 col-sm-2 col-2 ps-0">
                                  <div class="add-icon tab">
                                    <a
                                      class="btn btn-filter"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add-units"
                                      ><i class="feather feather-plus-circle"></i
                                    ></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="selected-hide-color" id="input-show">
                              <div class="row align-items-center">
                                <div class="col-lg-10 col-sm-10 col-10">
                                  <div class="mb-3">
                                    <input
                                      class="input-tags form-control"
                                      id="inputBox"
                                      type="text"
                                      data-role="tagsinput"
                                      name="specialist"
                                      value="red, black"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 col-2 ps-0">
                                  <div class="mb-3">
                                    <a href="javascript:void(0);" class="remove-color"
                                      ><i class="far fa-trash-alt"></i
                                    ></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="modal-body-table variant-table" id="variant-table">
                          <div class="table-responsive">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Variantion</th>
                                  <th>Variant Value</th>
                                  <th>SKU</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th class="no-sort"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="add-product">
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="color"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div class="add-product">
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="Black"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div class="add-product">
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="LNV-IP3-8GB-256SSD-GRY"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div class="product-quantity">
                                      <span class="quantity-btn"
                                        ><i
                                          data-feather="minus-circle"
                                          class="feather-search"
                                        ></i
                                      ></span>
                                      <input
                                        type="text"
                                        class="quntity-input form-control"
                                        value="2"
                                      />
                                      <span class="quantity-btn"
                                        >+<i
                                          data-feather="plus-circle"
                                          class="plus-circle"
                                        ></i
                                      ></span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="add-product">
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="600"
                                      />
                                    </div>
                                  </td>
                                  <td class="action-table-data">
                                    <div class="edit-delete-action">
                                      <div class="input-block add-lists">
                                        <label class="checkboxs">
                                          <input type="checkbox" checked />
                                          <span class="checkmarks"></span>
                                        </label>
                                      </div>
                                      <a
                                        class="me-2 p-2"
                                        href="javascript:void(0);"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-variation"
                                      >
                                        <i data-feather="plus" class="feather-edit"></i>
                                      </a>
                                      <a
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete-modal"
                                        class="p-2"
                                        href="javascript:void(0);"
                                      >
                                        <i
                                          data-feather="trash-2"
                                          class="feather-trash-2"
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="add-product">
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="color"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div class="add-product">
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="black"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div class="add-product">
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="2345"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div class="product-quantity">
                                      <span class="quantity-btn"
                                        ><i
                                          data-feather="minus-circle"
                                          class="feather-search"
                                        ></i
                                      ></span>
                                      <input
                                        type="text"
                                        class="quntity-input form-control"
                                        value="3"
                                      />
                                      <span class="quantity-btn"
                                        >+<i
                                          data-feather="plus-circle"
                                          class="plus-circle"
                                        ></i
                                      ></span>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="add-product">
                                      <input
                                        type="text"
                                        class="form-control"
                                        value="50000"
                                      />
                                    </div>
                                  </td>
                                  <td class="action-table-data">
                                    <div class="edit-delete-action">
                                      <div class="input-block add-lists">
                                        <label class="checkboxs">
                                          <input type="checkbox" checked />
                                          <span class="checkmarks"></span>
                                        </label>
                                      </div>
                                      <a
                                        class="me-2 p-2"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-units"
                                      >
                                        <i data-feather="plus" class="feather-edit"></i>
                                      </a>
                                      <a
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete-modal"
                                        class="p-2"
                                        href="javascript:void(0);"
                                      >
                                        <i
                                          data-feather="trash-2"
                                          class="feather-trash-2"
                                        ></i>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-card-one accordion" id="accordionExample4">
              <div class="accordion-item">
                <div class="accordion-header" id="headingFour">
                  <div
                    class="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-controls="collapseFour"
                  >
                    <div class="text-editor add-list">
                      <div class="addproduct-icon list">
                        <h5>
                          <i data-feather="list" class="add-info"></i
                          ><span>Custom Fields</span>
                        </h5>
                        <a href="javascript:void(0);"
                          ><i data-feather="chevron-down" class="chevron-down-add"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample4"
                >
                  <div class="accordion-body">
                    <div class="text-editor add-list add">
                      <div class="custom-filed">
                        <div class="input-block add-lists">
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>Warranties
                          </label>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>Manufacturer
                          </label>
                          <label class="checkboxs">
                            <input type="checkbox" />
                            <span class="checkmarks"></span>Expiry
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6 col-12">
                          <div class="mb-3 add-product">
                            <label class="form-label"
                              >Discount Type<span class="text-danger ms-1">*</span></label
                            >
                            <vue-select
                              :options="Discounttype"
                              id="edits-type1"
                              placeholder="Replacement Warranty"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-12">
                          <div class="mb-3 add-product">
                            <label class="form-label"
                              >Manufacturer<span class="text-danger ms-1">*</span></label
                            >
                            <input type="text" class="form-control" value="Lenovo" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6 col-12">
                          <div class="mb-3">
                            <label class="form-label"
                              >Manufactured Date<span class="text-danger ms-1"
                                >*</span
                              ></label
                            >
                            <div class="input-groupicon calender-input">
                              <i data-feather="calendar" class="info-img"></i>
                              <input
                                type="text"
                                class="datetimepicker form-control"
                                placeholder="20 Dec 2024"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6 col-12">
                          <div class="mb-3">
                            <label class="form-label"
                              >Expiry On<span class="text-danger ms-1">*</span></label
                            >

                            <div class="input-groupicon calender-input">
                              <i data-feather="calendar" class="info-img"></i>
                              <input
                                type="text"
                                class="datetimepicker form-control"
                                placeholder="18 Dec 2034"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="btn-addproduct mb-4">
            <button type="button" class="btn btn-secondary me-2">Cancel</button>
            <button type="submit" class="btn btn-primary">Save Product</button>
          </div>
        </div>
      </form>
      <!-- /add -->
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      Store: ["Thomas", "Rasmussen", "Fred john"],
      Warehouse: ["Legendary", "Determined", "Sincere"],
      Selling: ["Transactional selling", "Solution selling"],
      Category: ["Lenovo", "Electronics"],
      Subcategory: ["Lenovo", "Electronics"],
      Brand: ["Nike", "Bolt"],
      Unit: ["Kg", "Pc"],
      Barcode: ["Code34", "Code35", "Code36"],
      Tax: ["Exclusive", "Sales Tax"],
      Discount: ["Percentage", "Cash"],
      tags: ["Red", "Black"],
      Warranty: ["Percentage", "Cash"],
      DiscountType: ["Replacement Warranty", "Cash"],
      editor: ClassicEditor,
      editorData: " ",
      editorConfig: {},
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/ecommerce/edit-product");
    },
  },
};
</script>
