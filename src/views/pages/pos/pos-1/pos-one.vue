<template>
  <pos-header></pos-header>

  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper pos-pg-wrapper ms-0">
    <div class="content pos-design p-0">
      <div class="row pos-wrapper">
        <!-- Products -->
        <div class="col-md-12 col-lg-7 col-xl-8 d-flex">
          <div class="pos-categories tabs_wrapper p-0 flex-fill">
            <div class="content-wrap">
              <div class="tab-wrap">
                <ul class="tabs owl-carousel pos-category5">
                  <div class="owl-item">
                    <template v-for="item in posCarousel" :key="item.id">
                      <li
                        :id="item.IdName"
                        :class="{ active: activeTab === item.IdName }"
                        @click="setActiveTab(item.IdName)"
                        class="owl-item"
                      >
                        <a href="javascript:void(0);">
                          <img
                            :src="require(`@/assets/img/categories/${item.Image}`)"
                            alt="Categories"
                          />
                        </a>
                        <h6>
                          <a href="javascript:void(0);">{{ item.Title }}</a>
                        </h6>
                      </li>
                    </template>
                  </div>
                </ul>
              </div>
              <div class="tab-content-wrap">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap mb-2"
                >
                  <div class="mb-3">
                    <h5 class="mb-1">Welcome, Wesley Adrian</h5>
                    <p>December 24, 2024</p>
                  </div>
                  <div class="d-flex align-items-center flex-wrap mb-2">
                    <div class="input-icon-start search-pos position-relative mb-2 me-3">
                      <span class="input-icon-addon">
                        <i class="ti ti-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Product"
                      />
                    </div>
                    <a href="#" class="btn btn-sm btn-dark mb-2 me-2"
                      ><i class="ti ti-tag me-1"></i>View All Brands</a
                    >
                    <a href="#" class="btn btn-sm btn-primary mb-2"
                      ><i class="ti ti-star me-1"></i>Featured</a
                    >
                  </div>
                </div>
                <div class="pos-products">
                  <div class="tabs_container">
                    <div
                      class="tab_content active"
                      data-tab="all"
                      v-if="activeTab === 'all'"
                      :style="{ display: activeTab === 'all' ? 'block' : 'none' }"
                    >
                      <all-pos1></all-pos1>
                    </div>
                    <div
                      class="tab_content"
                      data-tab="headphones"
                      v-if="activeTab === 'headphones'"
                      :style="{ display: activeTab === 'headphones' ? 'block' : 'none' }"
                    >
                      <headphones-pos1></headphones-pos1>
                    </div>
                    <div
                      class="tab_content"
                      data-tab="shoes"
                      v-if="activeTab === 'shoes'"
                      :style="{ display: activeTab === 'shoes' ? 'block' : 'none' }"
                    >
                      <shoes-pos1></shoes-pos1>
                    </div>
                    <div
                      class="tab_content"
                      data-tab="mobiles"
                      v-if="activeTab === 'mobiles'"
                      :style="{ display: activeTab === 'mobiles' ? 'block' : 'none' }"
                    >
                      <mobiles-pos1></mobiles-pos1>
                    </div>
                    <div
                      class="tab_content"
                      data-tab="watches"
                      v-if="activeTab === 'watches'"
                      :style="{ display: activeTab === 'watches' ? 'block' : 'none' }"
                    >
                      <watches-pos1></watches-pos1>
                    </div>
                    <div
                      class="tab_content"
                      data-tab="laptops"
                      v-if="activeTab === 'laptops'"
                      :style="{ display: activeTab === 'laptops' ? 'block' : 'none' }"
                    >
                      <laptops-pos1></laptops-pos1>
                    </div>
                    <div
                      class="tab_content"
                      data-tab="appliances"
                      v-if="activeTab === 'appliances'"
                      :style="{ display: activeTab === 'appliances' ? 'block' : 'none' }"
                    >
                      <appliances-pos1></appliances-pos1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Products -->

        <!-- Order Details -->
        <div class="col-md-12 col-lg-5 col-xl-4 ps-0 theiaStickySidebar d-lg-flex">
          <aside class="product-order-list bg-secondary-transparent flex-fill">
            <div class="card">
              <div class="card-body">
                <div
                  class="order-head d-flex align-items-center justify-content-between w-100"
                >
                  <div>
                    <h3>Order List</h3>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    <span class="badge badge-dark fs-10 fw-medium badge-xs">#ORD123</span>
                    <a class="link-danger fs-16" href="javascript:void(0);"
                      ><i class="ti ti-trash-x-filled"></i
                    ></a>
                  </div>
                </div>
                <div class="customer-info block-section">
                  <h5 class="mb-2">Customer Information</h5>
                  <div class="d-flex align-items-center gap-2">
                    <div class="flex-grow-1">
                      <vue-select
                        :options="Information"
                        id="pos-information"
                        placeholder="Walk in Customer"
                      />
                    </div>
                    <a
                      href="#"
                      class="btn btn-teal btn-icon fs-20"
                      data-bs-toggle="modal"
                      data-bs-target="#create"
                      ><i class="ti ti-user-plus"></i
                    ></a>
                    <a
                      href="#"
                      class="btn btn-info btn-icon fs-20"
                      data-bs-toggle="modal"
                      data-bs-target="#barcode"
                      ><i class="ti ti-scan"></i
                    ></a>
                  </div>
                  <div
                    class="customer-item border border-orange bg-orange-100 d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3"
                  >
                    <div>
                      <h6 class="fs-16 fw-bold mb-1">James Anderson</h6>
                      <div class="d-inline-flex align-items-center gap-2 customer-bonus">
                        <p class="fs-13 d-inline-flex align-items-center gap-1">
                          Bonus :<span class="badge bg-cyan fs-13 fw-bold p-1">148</span>
                        </p>
                        <p class="fs-13 d-inline-flex align-items-center gap-1">
                          Loyality :<span class="badge bg-teal fs-13 fw-bold p-1"
                            >$20</span
                          >
                        </p>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-orange btn-sm">Apply</a>
                    <a href="javascript:void(0);" class="close-icon"
                      ><i class="ti ti-x"></i
                    ></a>
                  </div>
                </div>
                <div class="product-added block-section">
                  <div
                    class="head-text d-flex align-items-center justify-content-between mb-3"
                  >
                    <div class="d-flex align-items-center">
                      <h5 class="me-2">Order Details</h5>
                      <div
                        class="badge bg-light text-gray-9 fs-12 fw-semibold py-2 border rounded"
                      >
                        Items : <span class="text-teal">3</span>
                      </div>
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="d-flex align-items-center clear-icon fs-10 fw-medium"
                      >Clear all</a
                    >
                  </div>
                  <div class="product-wrap">
                    <div class="empty-cart">
                      <div class="fs-24 mb-1">
                        <i class="ti ti-shopping-cart"></i>
                      </div>
                      <p class="fw-bold">No Products Selected</p>
                    </div>
                    <div class="product-list border-0 p-0">
                      <div class="table-responsive">
                        <table class="table table-borderless">
                          <thead>
                            <tr>
                              <th class="fw-bold bg-light">Item</th>
                              <th class="fw-bold bg-light">QTY</th>
                              <th class="fw-bold bg-light text-end">Cost</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <a
                                    class="delete-icon"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    <i class="ti ti-trash-x-filled"></i>
                                  </a>
                                  <h6 class="fs-13 fw-normal">
                                    <a
                                      href="#"
                                      class="link-default"
                                      data-bs-toggle="modal"
                                      data-bs-target="#products"
                                      >iPhone 14 64GB</a
                                    >
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div class="qty-item m-0">
                                  <pos-counter></pos-counter>
                                </div>
                              </td>
                              <td class="fs-13 fw-semibold text-gray-9 text-end">
                                $15800
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <a
                                    class="delete-icon"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    <i class="ti ti-trash-x-filled"></i>
                                  </a>
                                  <h6 class="fs-13 fw-normal">
                                    <a
                                      href="#"
                                      class="link-default"
                                      data-bs-toggle="modal"
                                      data-bs-target="#products"
                                      >Red Nike Angelo</a
                                    >
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div class="qty-item m-0">
                                  <pos-counter></pos-counter>
                                </div>
                              </td>
                              <td class="fs-13 fw-semibold text-gray-9 text-end">$398</td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <a
                                    class="delete-icon"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    <i class="ti ti-trash-x-filled"></i>
                                  </a>
                                  <h6 class="fs-13 fw-normal">
                                    <a
                                      href="#"
                                      class="link-default"
                                      data-bs-toggle="modal"
                                      data-bs-target="#products"
                                      >Tablet 1.02 inch</a
                                    >
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div class="qty-item m-0">
                                  <pos-counter></pos-counter>
                                </div>
                              </td>
                              <td class="fs-13 fw-semibold text-gray-9 text-end">
                                $3000
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="d-flex align-items-center">
                                  <a
                                    class="delete-icon"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    <i class="ti ti-trash-x-filled"></i>
                                  </a>
                                  <h6 class="fs-13 fw-normal">
                                    <a
                                      href="#"
                                      class="link-default"
                                      data-bs-toggle="modal"
                                      data-bs-target="#products"
                                      >IdeaPad Slim 3i</a
                                    >
                                  </h6>
                                </div>
                              </td>
                              <td>
                                <div class="qty-item m-0">
                                  <pos-counter></pos-counter>
                                </div>
                              </td>
                              <td class="fs-13 fw-semibold text-gray-9 text-end">
                                $3000
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    class="discount-item d-flex align-items-center justify-content-between bg-purple-transparent mt-3 flex-wrap gap-2"
                  >
                    <div class="d-flex align-items-center">
                      <span class="bg-purple discount-icon br-5 flex-shrink-0 me-2">
                        <img src="@/assets/img/icons/discount-icon.svg" alt="img" />
                      </span>
                      <div>
                        <h6 class="fs-14 fw-bold text-purple mb-1">Discount 5%</h6>
                        <p class="mb-0">For $20 Minimum Purchase, all Items</p>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="close-icon"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </div>
                <div class="order-total bg-total bg-white p-0">
                  <h5 class="mb-3">Payment Summary</h5>
                  <table class="table table-responsive table-borderless">
                    <tr>
                      <td>Shipping<a href="#" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#shipping-cost"><i class="ti ti-edit"></i></a></td>
                      <td class="text-gray-9 text-end">$40.21</td>
                    </tr>
                    <tr>
                      <td>Tax<a href="#" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#order-tax"><i class="ti ti-edit"></i></a></td>
                      <td class="text-gray-9 text-end">$25</td>
                    </tr>
                    <tr>
                      <td>Coupon<a href="#" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#coupon-code"><i class="ti ti-edit"></i></a></td>
                      <td class="text-gray-9 text-end">$25</td>
                    </tr>
                    <tr>												
                      <td><span class="text-danger">Discount</span><a href="#" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#discount"><i class="ti ti-edit"></i></a></td>
                      <td class="text-danger text-end">$15.21</td>
                    </tr>
                    <tr>												
                      <td>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="round" checked>
                          <label class="form-check-label" for="round">Roundoff</label>
                        </div>
                      </td>
                      <td class="text-gray-9 text-end">+0.11</td>
                    </tr>
                    <tr>
                      <td>Sub Total</td>
                      <td class="text-gray-9 text-end">$60,454</td>
                    </tr>
                    <tr>
                      <td class="fw-bold border-top border-dashed">Total Payable</td>
                      <td class="text-gray-9 fw-bold text-end border-top border-dashed">$56590</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="card payment-method">
              <div class="card-body">
                <h5 class="mb-3">Select Payment</h5>
                <div class="row align-items-center methods g-2">
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#payment-cash"
                    >
                      <img
                        src="@/assets/img/icons/cash-icon.svg"
                        class="me-2"
                        alt="img"
                      />
                      <p class="fs-14 fw-medium">Cash</p>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#payment-card"
                    >
                      <img src="@/assets/img/icons/card.svg" class="me-2" alt="img" />
                      <p class="fs-14 fw-medium">Card</p>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#payment-points"
                    >
                      <img src="@/assets/img/icons/points.svg" class="me-2" alt="img" />
                      <p class="fs-14 fw-medium">Points</p>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#payment-deposit"
                    >
                      <img src="@/assets/img/icons/deposit.svg" class="me-2" alt="img" />
                      <p class="fs-14 fw-medium">Deposit</p>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#payment-cheque"
                    >
                      <img src="@/assets/img/icons/cheque.svg" class="me-2" alt="img" />
                      <p class="fs-14 fw-medium">Cheque</p>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#gift-payment"
                    >
                      <img src="@/assets/img/icons/giftcard.svg" class="me-2" alt="img" />
                      <p class="fs-14 fw-medium">Gift Card</p>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#scan-payment"
                    >
                      <img
                        src="@/assets/img/icons/scan-icon.svg"
                        class="me-2"
                        alt="img"
                      />
                      <p class="fs-14 fw-medium">Scan</p>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                    >
                      <img src="@/assets/img/icons/paylater.svg" class="me-2" alt="img" />
                      <p class="fs-14 fw-medium">Pay Later</p>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                    >
                      <img src="@/assets/img/icons/external.svg" class="me-2" alt="img" />
                      <p class="fs-14 fw-medium">External</p>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-4 d-flex">
                    <a
                      href="javascript:void(0);"
                      class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#split-payment"
                    >
                      <img
                        src="@/assets/img/icons/split-bill.svg"
                        class="me-2"
                        alt="img"
                      />
                      <p class="fs-14 fw-medium">Split Bill</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-row d-flex align-items-center justify-content-between gap-3">
              <a
                href="javascript:void(0);"
                class="btn btn-white d-flex align-items-center justify-content-center flex-fill m-0"
                data-bs-toggle="modal"
                data-bs-target="#hold-order"
                ><i class="ti ti-printer me-2"></i>Print Order</a
              >
              <a
                href="javascript:void(0);"
                class="btn btn-secondary d-flex align-items-center justify-content-center flex-fill m-0"
                ><i class="ti ti-shopping-cart me-2"></i>Place Order</a
              >
            </div>
          </aside>
        </div>
        <!-- /Order Details -->
      </div>

      <div class="pos-footer bg-white p-3 border-top">
        <div class="d-flex align-items-center justify-content-center flex-wrap gap-2">
          <a
            href="javascript:void(0);"
            class="btn btn-orange d-inline-flex align-items-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#hold-order"
            ><i class="ti ti-player-pause me-2"></i>Hold</a
          >
          <a
            href="javascript:void(0);"
            class="btn btn-info d-inline-flex align-items-center justify-content-center"
            ><i class="ti ti-trash me-2"></i>Void</a
          >
          <a
            href="javascript:void(0);"
            class="btn btn-cyan d-flex align-items-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#payment-completed"
            ><i class="ti ti-cash-banknote me-2"></i>Payment</a
          >
          <a
            href="javascript:void(0);"
            class="btn btn-secondary d-inline-flex align-items-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#orders"
            ><i class="ti ti-shopping-cart me-2"></i>View Orders</a
          >
          <a
            href="javascript:void(0);"
            class="btn btn-indigo d-inline-flex align-items-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#reset"
            ><i class="ti ti-reload me-2"></i>Reset</a
          >
          <a
            href="javascript:void(0);"
            class="btn btn-danger d-inline-flex align-items-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#recents"
            ><i class="ti ti-refresh-dot me-2"></i>Transaction</a
          >
        </div>
      </div>
    </div>
  </div>

  <pos-one-modal></pos-one-modal>
</template>

<script>
import posCarousel from "@/assets/json/pos-carousel.json";
export default {
  data() {
    return {
      Information: ["Walk in Customer", "John", "Smith", "Ana", "Elza"],
      posCarousel: posCarousel,
      activeTab: "all",
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>
