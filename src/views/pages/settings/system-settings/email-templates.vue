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
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
              ><i class="ti ti-refresh"></i
            ></a>
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
                <h4>Email Template</h4>
              </div>
              <div class="card-body pb-0">
                <div class="accordion-card-one accordion" id="accordionExample">
                  <div class="accordion-item pb-3">
                    <div class="accordion-header" id="headingOne">
                      <div
                        class="accordion-button p-3 pb-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-controls="collapseOne"
                      >
                        <div
                          class="addproduct-icon d-flex align-items-center justify-content-between w-100"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="status-toggle modal-status d-flex justify-content-between align-items-center me-2"
                            >
                              <input type="checkbox" id="user1" class="check" checked />
                              <label for="user1" class="checktoggle"> </label>
                            </div>
                            <h5><span>Welcome Email</span></h5>
                          </div>
                          <a href="javascript:void(0);" class="ms-auto"
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
                      <div class="accordion-body border-0 pb-0">
                        <div class="row gy-4">
                          <div class="col-xl-7">
                            <div class="card mb-3">
                              <div class="card-body">
                                <textarea
                                  class="form-control"
                                  cols="5"
                                  style="height: 300px"
                                >
																		Hi <span class="text-orange">{Customer Name}</span>,<br> Welcome to <span class="text-orange">{Company Name}</span>!
																		We’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.
																		At <span class="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.
																		If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.
																		Thank you again for trusting <span class="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.
																		Best, The <span class="text-orange">{Company Name}</span> Team
																	</textarea
                                >
                              </div>
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                              <a href="#" class="btn bg-cyan me-2">Save Template</a>
                              <a href="#" class="btn btn-secondary me-2"
                                >Default Template</a
                              >
                              <a
                                href="#"
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#email-detail"
                                >Preview Template</a
                              >
                            </div>
                          </div>
                          <div class="col-xl-5">
                            <div class="card mb-0">
                              <div class="card-body">
                                <h5 class="mb-2">Tags</h5>
                                <div>
                                  <p class="fs-12 text-orange mb-1">{Customer Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Company Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Invoice ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Receipt ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Login Link}</p>
                                  <p class="fs-12 text-orange mb-1">{Support Email}</p>
                                  <p class="fs-12 text-orange mb-1">
                                    {Password Reset Link}
                                  </p>
                                  <p class="fs-12 text-orange mb-1">{Product Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Total}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Date}</p>
                                  <p class="fs-12 text-orange mb-1">{Delivery Date}</p>
                                  <p class="fs-12 text-orange">{Discount Code}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-card-one accordion" id="accordionExample2">
                  <div class="accordion-item pb-3">
                    <div class="accordion-header" id="heading2">
                      <div
                        class="accordion-button p-3 pb-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-controls="collapse2"
                      >
                        <div
                          class="addproduct-icon d-flex align-items-center justify-content-between w-100"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="status-toggle modal-status d-flex justify-content-between align-items-center me-2"
                            >
                              <input type="checkbox" id="user2" class="check" checked />
                              <label for="user2" class="checktoggle"> </label>
                            </div>
                            <h5><span>Order Confirmation</span></h5>
                          </div>
                          <a href="javascript:void(0);" class="ms-auto"
                            ><i data-feather="chevron-down" class="chevron-down-add"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse2"
                      class="accordion-collapse collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionExample2"
                    >
                      <div class="accordion-body border-0 pb-0">
                        <div class="row gy-4">
                          <div class="col-xl-7">
                            <div class="card mb-3">
                              <div class="card-body">
                                <textarea
                                  class="form-control"
                                  cols="5"
                                  style="height: 300px"
                                >
																		Hi <span class="text-orange">{Customer Name}</span>,<br> Welcome to <span class="text-orange">{Company Name}</span>!
																		We’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.
																		At <span class="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.
																		If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.
																		Thank you again for trusting <span class="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.
																		Best, The <span class="text-orange">{Company Name}</span> Team
																	</textarea
                                >
                              </div>
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                              <a href="#" class="btn bg-cyan me-2">Save Template</a>
                              <a href="#" class="btn btn-secondary me-2"
                                >Default Template</a
                              >
                              <a href="#" class="btn btn-primary">Preview Template</a>
                            </div>
                          </div>
                          <div class="col-xl-5">
                            <div class="card mb-0">
                              <div class="card-body">
                                <h5 class="mb-2">Tags</h5>
                                <div>
                                  <p class="fs-12 text-orange mb-1">{Customer Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Company Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Invoice ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Receipt ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Login Link}</p>
                                  <p class="fs-12 text-orange mb-1">{Support Email}</p>
                                  <p class="fs-12 text-orange mb-1">
                                    {Password Reset Link}
                                  </p>
                                  <p class="fs-12 text-orange mb-1">{Product Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Total}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Date}</p>
                                  <p class="fs-12 text-orange mb-1">{Delivery Date}</p>
                                  <p class="fs-12 text-orange">{Discount Code}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-card-one accordion" id="accordionExample3">
                  <div class="accordion-item pb-3">
                    <div class="accordion-header" id="heading3">
                      <div
                        class="accordion-button p-3 pb-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-controls="collapse3"
                      >
                        <div
                          class="addproduct-icon d-flex align-items-center justify-content-between w-100"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="status-toggle modal-status d-flex justify-content-between align-items-center me-2"
                            >
                              <input type="checkbox" id="user3" class="check" checked />
                              <label for="user3" class="checktoggle"> </label>
                            </div>
                            <h5><span>Invoice Receipt</span></h5>
                          </div>
                          <a href="javascript:void(0);" class="ms-auto"
                            ><i data-feather="chevron-down" class="chevron-down-add"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse3"
                      class="accordion-collapse collapse"
                      aria-labelledby="heading3"
                      data-bs-parent="#accordionExample3"
                    >
                      <div class="accordion-body border-0 pb-0">
                        <div class="row gy-4">
                          <div class="col-xl-7">
                            <div class="card mb-3">
                              <div class="card-body">
                                <textarea
                                  class="form-control"
                                  cols="5"
                                  style="height: 300px"
                                >
																		Hi <span class="text-orange">{Customer Name}</span>,<br> Welcome to <span class="text-orange">{Company Name}</span>!
																		We’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.
																		At <span class="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.
																		If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.
																		Thank you again for trusting <span class="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.
																		Best, The <span class="text-orange">{Company Name}</span> Team
																	</textarea
                                >
                              </div>
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                              <a href="#" class="btn bg-cyan me-2">Save Template</a>
                              <a href="#" class="btn btn-secondary me-2"
                                >Default Template</a
                              >
                              <a href="#" class="btn btn-primary">Preview Template</a>
                            </div>
                          </div>
                          <div class="col-xl-5">
                            <div class="card mb-0">
                              <div class="card-body">
                                <h5 class="mb-2">Tags</h5>
                                <div>
                                  <p class="fs-12 text-orange mb-1">{Customer Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Company Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Invoice ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Receipt ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Login Link}</p>
                                  <p class="fs-12 text-orange mb-1">{Support Email}</p>
                                  <p class="fs-12 text-orange mb-1">
                                    {Password Reset Link}
                                  </p>
                                  <p class="fs-12 text-orange mb-1">{Product Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Total}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Date}</p>
                                  <p class="fs-12 text-orange mb-1">{Delivery Date}</p>
                                  <p class="fs-12 text-orange">{Discount Code}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-card-one accordion" id="accordionExample4">
                  <div class="accordion-item pb-3">
                    <div class="accordion-header" id="heading4">
                      <div
                        class="accordion-button p-3 pb-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-controls="collapse4"
                      >
                        <div
                          class="addproduct-icon d-flex align-items-center justify-content-between w-100"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="status-toggle modal-status d-flex justify-content-between align-items-center me-2"
                            >
                              <input type="checkbox" id="user4" class="check" checked />
                              <label for="user4" class="checktoggle"> </label>
                            </div>
                            <h5><span>Subscription Renewal Reminder</span></h5>
                          </div>
                          <a href="javascript:void(0);" class="ms-auto"
                            ><i data-feather="chevron-down" class="chevron-down-add"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse4"
                      class="accordion-collapse collapse"
                      aria-labelledby="heading4"
                      data-bs-parent="#accordionExample4"
                    >
                      <div class="accordion-body border-0 pb-0">
                        <div class="row gy-4">
                          <div class="col-xl-7">
                            <div class="card mb-3">
                              <div class="card-body">
                                <textarea
                                  class="form-control"
                                  cols="5"
                                  style="height: 300px"
                                >
																		Hi <span class="text-orange">{Customer Name}</span>,<br> Welcome to <span class="text-orange">{Company Name}</span>!
																		We’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.
																		At <span class="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.
																		If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.
																		Thank you again for trusting <span class="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.
																		Best, The <span class="text-orange">{Company Name}</span> Team
																	</textarea
                                >
                              </div>
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                              <a href="#" class="btn bg-cyan me-2">Save Template</a>
                              <a href="#" class="btn btn-secondary me-2"
                                >Default Template</a
                              >
                              <a href="#" class="btn btn-primary">Preview Template</a>
                            </div>
                          </div>
                          <div class="col-xl-5">
                            <div class="card mb-0">
                              <div class="card-body">
                                <h5 class="mb-2">Tags</h5>
                                <div>
                                  <p class="fs-12 text-orange mb-1">{Customer Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Company Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Invoice ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Receipt ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Login Link}</p>
                                  <p class="fs-12 text-orange mb-1">{Support Email}</p>
                                  <p class="fs-12 text-orange mb-1">
                                    {Password Reset Link}
                                  </p>
                                  <p class="fs-12 text-orange mb-1">{Product Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Total}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Date}</p>
                                  <p class="fs-12 text-orange mb-1">{Delivery Date}</p>
                                  <p class="fs-12 text-orange">{Discount Code}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-card-one accordion" id="accordionExample5">
                  <div class="accordion-item pb-3">
                    <div class="accordion-header" id="heading5">
                      <div
                        class="accordion-button p-3 pb-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse5"
                        aria-controls="collapse5"
                      >
                        <div
                          class="addproduct-icon d-flex align-items-center justify-content-between w-100"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="status-toggle modal-status d-flex justify-content-between align-items-center me-2"
                            >
                              <input type="checkbox" id="user5" class="check" checked />
                              <label for="user5" class="checktoggle"> </label>
                            </div>
                            <h5><span>Seasonal Promotion</span></h5>
                          </div>
                          <a href="javascript:void(0);" class="ms-auto"
                            ><i data-feather="chevron-down" class="chevron-down-add"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse5"
                      class="accordion-collapse collapse"
                      aria-labelledby="heading5"
                      data-bs-parent="#accordionExample5"
                    >
                      <div class="accordion-body border-0 pb-0">
                        <div class="row gy-4">
                          <div class="col-xl-7">
                            <div class="card mb-3">
                              <div class="card-body">
                                <textarea
                                  class="form-control"
                                  cols="5"
                                  style="height: 300px"
                                >
																		Hi <span class="text-orange">{Customer Name}</span>,<br> Welcome to <span class="text-orange">{Company Name}</span>!
																		We’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.
																		At <span class="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.
																		If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.
																		Thank you again for trusting <span class="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.
																		Best, The <span class="text-orange">{Company Name}</span> Team
																	</textarea
                                >
                              </div>
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                              <a href="#" class="btn bg-cyan me-2">Save Template</a>
                              <a href="#" class="btn btn-secondary me-2"
                                >Default Template</a
                              >
                              <a href="#" class="btn btn-primary">Preview Template</a>
                            </div>
                          </div>
                          <div class="col-xl-5">
                            <div class="card mb-0">
                              <div class="card-body">
                                <h5 class="mb-2">Tags</h5>
                                <div>
                                  <p class="fs-12 text-orange mb-1">{Customer Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Company Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Invoice ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Receipt ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Login Link}</p>
                                  <p class="fs-12 text-orange mb-1">{Support Email}</p>
                                  <p class="fs-12 text-orange mb-1">
                                    {Password Reset Link}
                                  </p>
                                  <p class="fs-12 text-orange mb-1">{Product Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Total}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Date}</p>
                                  <p class="fs-12 text-orange mb-1">{Delivery Date}</p>
                                  <p class="fs-12 text-orange">{Discount Code}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-card-one accordion" id="accordionExample6">
                  <div class="accordion-item pb-3">
                    <div class="accordion-header" id="heading6">
                      <div
                        class="accordion-button p-3 pb-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse6"
                        aria-controls="collapse6"
                      >
                        <div
                          class="addproduct-icon d-flex align-items-center justify-content-between w-100"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="status-toggle modal-status d-flex justify-content-between align-items-center me-2"
                            >
                              <input type="checkbox" id="user6" class="check" checked />
                              <label for="user6" class="checktoggle"> </label>
                            </div>
                            <h5><span>System Update</span></h5>
                          </div>
                          <a href="javascript:void(0);" class="ms-auto"
                            ><i data-feather="chevron-down" class="chevron-down-add"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse6"
                      class="accordion-collapse collapse"
                      aria-labelledby="heading6"
                      data-bs-parent="#accordionExample6"
                    >
                      <div class="accordion-body border-0 pb-0">
                        <div class="row gy-4">
                          <div class="col-xl-7">
                            <div class="card mb-3">
                              <div class="card-body">
                                <textarea
                                  class="form-control"
                                  cols="5"
                                  style="height: 300px"
                                >
																		Hi <span class="text-orange">{Customer Name}</span>,<br> Welcome to <span class="text-orange">{Company Name}</span>!
																		We’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.
																		At <span class="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.
																		If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.
																		Thank you again for trusting <span class="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.
																		Best, The <span class="text-orange">{Company Name}</span> Team
																	</textarea
                                >
                              </div>
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-3">
                              <a href="#" class="btn bg-cyan me-2">Save Template</a>
                              <a href="#" class="btn btn-secondary me-2"
                                >Default Template</a
                              >
                              <a href="#" class="btn btn-primary">Preview Template</a>
                            </div>
                          </div>
                          <div class="col-xl-5">
                            <div class="card mb-0">
                              <div class="card-body">
                                <h5 class="mb-2">Tags</h5>
                                <div>
                                  <p class="fs-12 text-orange mb-1">{Customer Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Company Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Invoice ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Receipt ID}</p>
                                  <p class="fs-12 text-orange mb-1">{Login Link}</p>
                                  <p class="fs-12 text-orange mb-1">{Support Email}</p>
                                  <p class="fs-12 text-orange mb-1">
                                    {Password Reset Link}
                                  </p>
                                  <p class="fs-12 text-orange mb-1">{Product Name}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Total}</p>
                                  <p class="fs-12 text-orange mb-1">{Order Date}</p>
                                  <p class="fs-12 text-orange mb-1">{Delivery Date}</p>
                                  <p class="fs-12 text-orange">{Discount Code}</p>
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
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">
        {{ new Date().getFullYear() }} &copy; DreamsPOS. All Right Reserved
      </p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- Php Mail -->
  <div class="modal fade" id="email-detail">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Welcome Email</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <p>
              Hi <span class="text-orange">{Customer Name}</span>,<br />
              Welcome to <span class="text-orange">{Company Name}</span>! We’re thrilled
              to have you as part of our community and are eager to support you in
              optimizing your operations. Thank you for choosing us – we appreciate your
              trust and confidence. At <span class="text-orange">{Company Name}</span>,
              our mission is to make your experience seamless and efficient. From managing
              day-to-day tasks to improving workflows, we’re here to help you get the most
              out of our solutions. If you have any questions or need assistance, our
              dedicated support team is always ready to assist you. Feel free to reach out
              anytime – we’re committed to ensuring your success. Thank you again for
              trusting <span class="text-orange">{Company Name}</span>. We’re excited to
              be part of your journey and look forward to supporting you every step of the
              way. Best, The <span class="text-orange">{Company Name}</span> Team
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Php Mail -->
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
