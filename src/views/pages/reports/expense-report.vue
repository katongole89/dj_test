<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Expense Report</h4>
            <h6>View Reports of Expenses</h6>
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
                      <label class="form-label">Expense Category</label>
                      <vue-select :options="ServCate" id="servcate" placeholder="All" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Payment Method</label>
                      <vue-select :options="PayCred" id="paycred" placeholder="All" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <vue-select :options="PendSat" id="pendsat" placeholder="All" />
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
            <h4>Expense Report</h4>
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
                  <th>Expense Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Electricity Payment</td>
                  <td>Utilities</td>
                  <td>Electricity Bill</td>
                  <td>24 Dec 2024</td>
                  <td>$200</td>
                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Stationery Purchase</td>
                  <td>Office Supplies</td>
                  <td>Stationery items for office</td>
                  <td>10 Dec 2024</td>
                  <td>$50</td>
                  <td>
                    <span
                      class="badge badge-cyan d-inline-flex align-items-center badge-xs"
                    >
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>AC Repair Service</td>
                  <td>Repairs & Maintenance</td>
                  <td>AC Repair for Office</td>
                  <td>27 Nov 2024</td>
                  <td>$800</td>
                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Social Media Promotion</td>
                  <td>Marketing</td>
                  <td>Social Media Ads Campaign</td>
                  <td>18 Nov 2024</td>
                  <td>$100</td>
                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Client Meeting</td>
                  <td>Travel Expenses</td>
                  <td>Travel fare for client meeting</td>
                  <td>06 Nov 2024</td>
                  <td>$700</td>
                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Team Lunch</td>
                  <td>Employee Benefits</td>
                  <td>Team Lunch at Restaurant</td>
                  <td>25 Oct 2024</td>
                  <td>$1000</td>
                  <td>
                    <span
                      class="badge badge-cyan d-inline-flex align-items-center badge-xs"
                    >
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Business Flight Ticket</td>
                  <td>Travel Expenses</td>
                  <td>Flight tickets for meetings</td>
                  <td>14 Oct 2024</td>
                  <td>$1200</td>
                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Chair Purchase</td>
                  <td>Office Supplies</td>
                  <td>Ergonomic chairs for staff</td>
                  <td>03 Oct 2024</td>
                  <td>$750</td>
                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Plumbing Service</td>
                  <td>Repairs & Maintenance</td>
                  <td>Plumbing repairs in office</td>
                  <td>20 Sep 2024</td>
                  <td>$450</td>
                  <td>
                    <span
                      class="badge badge-success d-inline-flex align-items-center badge-xs"
                    >
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Internet Bill Payment</td>
                  <td>Utilities</td>
                  <td>Monthly internet subscription</td>
                  <td>10 Sep 2024</td>
                  <td>$300</td>
                  <td>
                    <span
                      class="badge badge-cyan d-inline-flex align-items-center badge-xs"
                    >
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- /product list -->
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
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      ServCate: [
        "All",
        "Electricity Payment",
        "Stationery Purchase",
        "AC Repair Service",
      ],
      PayCred: ["All", "Paypal", "Cash", "Credit Card"],
      PendSat: ["All", "Approved", "Pending"],
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
