<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Payslip</h4>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"
              ><img src="@/assets/img/icons/pdf.svg" alt="img"
            /></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"
              ><i data-feather="printer" class="feather-rotate-ccw"></i
            ></a>
          </li>
          <li class="me-2">
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" @click="toggleHeader"><i class="ti ti-chevron-up"></i></a>
          </li>
        </ul>
        <div class="page-btn">
          <router-link
            to="/sales/invoice"
            class="btn btn-secondary d-inline-flex align-items-center"
            ><vue-feather type="arrow-left" class="me-2"></vue-feather>Back to
            Payroll</router-link
          >
        </div>
      </div>

      <!-- Invoices -->
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4>Payslip for the Month of Jan 2025</h4>
            <div class="d-flex align-items-center justify-content-end">
              <button type="button" class="btn btn-primary me-2">
                <i class="ti ti-mail me-2"></i>Send Email
              </button>
              <button type="button" class="btn btn-secondary me-2">
                <i class="ti ti-download me-2"></i>Download
              </button>
              <button type="button" class="btn btn-danger">
                <i class="ti ti-printer me-2"></i>Print Barcode
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <p class="mb-1">
                  Employee Name : <span class="text-gray-9">Carl Evans</span>
                </p>
                <p>Employee ID : <span class="text-gray-9">EMP001</span></p>
              </div>
            </div>
            <div class="col-md-6 text-end">
              <div class="mb-3">
                <p class="mb-1">Location : <span class="text-gray-9">USA</span></p>
                <p>Pay Period : <span class="text-gray-9">Jan 2025</span></p>
              </div>
            </div>
          </div>
          <div>
            <div class="card">
              <div class="row p-3">
                <div class="col-6">
                  <h4>Earnings</h4>
                </div>
                <div class="col-6">
                  <h4>Deductions</h4>
                </div>
              </div>
              <div class="table-responsive mb-3">
                <div></div>
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th>Pay Type</th>
                      <th>Amount</th>
                      <th>Pay Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Basic Salary</td>
                      <td>$32,000</td>
                      <td>PF</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>HRA Allowance</td>
                      <td>$0.00</td>
                      <td>Professional Tax</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>Conveyance</td>
                      <td>$0.00</td>
                      <td>TDS</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>Medical Allowance</td>
                      <td>$0.00</td>
                      <td>Loans & Others</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>Bonus</td>
                      <td>$0.00</td>
                      <td>Bonus</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td><h6>Total Earnings</h6></td>
                      <td><h6>$32,000</h6></td>
                      <td><h6>Total Deductions</h6></td>
                      <td><h6>$0.00</h6></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center border-bottom mb-3">
            <div class="mb-3 me-3">
              <h6 class="mb-2">Net Salary</h6>
              <p>Inwords</p>
            </div>
            <div class="mb-3">
              <h6 class="mb-2">$32,000</h6>
              <p>Thirty Two Thousand Only</p>
            </div>
          </div>
          <div class="text-center">
            <div class="mb-3">
              <img src="@/assets/img/logo.svg" width="130" class="img-fluid" alt="logo" />
            </div>
            <p>
              81, Randall Drive,Hornchurch <br />
              RM126TA.
            </p>
          </div>
        </div>
      </div>
      <!-- /Invoices -->
    </div>
    <div
      class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3"
    >
      <p class="mb-0">2014 - 2025 &copy; DreamsPOS. All Right Reserved</p>
      <p>
        Designed &amp; Developed by
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
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
