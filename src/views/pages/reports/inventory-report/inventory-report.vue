<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="table-tab">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/inventory-report/inventory-report"
              >Inventory Report</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/inventory-report/stock-history"
              >Stock History</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/inventory-report/sold-stock"
              >Sold Stock</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <div class="page-header">
          <div class="add-item d-flex">
            <div class="page-title">
              <h4>Inventory</h4>
              <h6>View Reports of Inventory</h6>
            </div>
          </div>
          <ul class="table-top-head">
            <li class="me-2">
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"
                ><i class="ti ti-refresh"></i
              ></a>
            </li>
            <li>
              <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
            </li>
          </ul>
        </div>
        <div class="card border-0">
          <div class="card-body pb-1">
            <form action="#">
              <div class="row align-items-end">
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Choose Date</label>
                        <div class="input-icon-start position-relative">
                          <input
                            type="text"
                            class="form-control date-range bookingrange"
                            placeholder="dd/mm/yyyy - dd/mm/yyyy"
                            ref="dateRangeInput"
                          />
                          <span class="input-icon-left">
                            <i class="ti ti-calendar"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Category</label>
                        <vue-select
                          :options="RobertInv"
                          id="robertinv"
                          placeholder="All"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Products</label>
                        <vue-select :options="ProInv" id="proinv" placeholder="All" />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mb-3">
                        <label class="form-label">Units</label>
                        <vue-select :options="UnitInv" id="unitinv" placeholder="All" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="mb-3">
                    <button class="btn btn-primary w-100" type="submit">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- /product list -->
        <div class="card table-list-card no-search">
          <div
            class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
          >
            <div>
              <h4>Customer Report</h4>
            </div>
            <ul class="table-top-head">
              <li class="me-2">
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
                  ><img src="@/assets/img/icons/pdf.svg" alt="img"
                /></a>
              </li>
              <li class="me-2">
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"
                  ><img src="@/assets/img/icons/excel.svg" alt="img"
                /></a>
              </li>
              <li>
                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"
                  ><i class="ti ti-printer"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table datatable">
                <thead class="thead-light">
                  <tr>
                    <th>SKU</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Unit</th>
                    <th>InStock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a>PT001</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-01.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Lenovo IdeaPad 3</a></p>
                        </div>
                      </div>
                    </td>
                    <td>Computers</td>
                    <td>Pc</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>
                      <a>PT002</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-06.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Beats Pro </a></p>
                        </div>
                      </div>
                    </td>
                    <td>Electronics</td>
                    <td>Pc</td>
                    <td>140</td>
                  </tr>
                  <tr>
                    <td>
                      <a>PT003</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-02.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Nike Jordan</a></p>
                        </div>
                      </div>
                    </td>
                    <td>Shoe</td>
                    <td>Bx</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>
                      <a>PT004</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-03.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Apple Series 5 Watch</a></p>
                        </div>
                      </div>
                    </td>
                    <td>Electronics</td>
                    <td>Pc</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <td>
                      <a>PT005</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-04.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Amazon Echo Dot</a></p>
                        </div>
                      </div>
                    </td>
                    <td>Electronics</td>
                    <td>Pc</td>
                    <td>320</td>
                  </tr>
                  <tr>
                    <td>
                      <a>PT006</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/stock-img-05.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Sanford Chair Sofa</a></p>
                        </div>
                      </div>
                    </td>
                    <td>Furniture</td>
                    <td>Pc</td>
                    <td>650</td>
                  </tr>
                  <tr>
                    <td>
                      <a>PT007</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/expire-product-01.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Red Premium Satchel</a></p>
                        </div>
                      </div>
                    </td>
                    <td>Bags</td>
                    <td>Bx</td>
                    <td>700</td>
                  </tr>
                  <tr>
                    <td>
                      <a>PT008</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/expire-product-02.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Iphone 14 Pro</a></p>
                        </div>
                      </div>
                    </td>
                    <td>Phone</td>
                    <td>Bx</td>
                    <td>630</td>
                  </tr>
                  <tr>
                    <td>
                      <a>PT009</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/expire-product-03.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Gaming Chair</a></p>
                        </div>
                      </div>
                    </td>
                    <td>Furniture</td>
                    <td>Pc</td>
                    <td>410</td>
                  </tr>
                  <tr>
                    <td>
                      <a>PT010</a>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a class="avatar avatar-md"
                          ><img
                            src="@/assets/img/products/expire-product-04.png"
                            class="img-fluid"
                            alt="img"
                        /></a>
                        <div class="ms-2">
                          <p class="text-dark mb-0"><a>Borealis Backpack</a></p>
                        </div>
                      </div>
                    </td>
                    <td>Bags</td>
                    <td>Bx</td>
                    <td>550</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- /product list -->
      </div>
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-orange">Dreams</a>
      </p>
    </div>
  </div>
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      RobertInv: ["All", "Carl Evans", "Minerva Rameriz", "Robert Lamon"],
      ProInv: ["All", "Lenovo IdeaPad 3", "Beats Pro", "Nike Jordan"],
      UnitInv: ["All", "PC", "BX"],
    };
  },
  setup() {
    const dateRangeInput = ref(null);
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
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
