<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Calendar</h4>
            <h6>Manage Your calendar</h6>
          </div>
        </div>
        <ul class="table-top-head">
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i class="ti ti-refresh"></i></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i class="ti ti-chevron-up"></i></a>
          </li>
          <li class="me-2">
            <div class="input-icon-end position-relative">
              <input type="text" ref="dateRangeInput" class="date-range bookingrange fs-14 form-control py-1 ps-2 pe-4 fs-14" placeholder="dd/mm/yyyy - dd/mm/yyyy">
              <span class="input-icon-addon">
                <i class="ti ti-chevron-down ms-1"></i>
              </span>
            </div>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="@/assets/img/icons/pdf.svg" alt="img"></a>
          </li>
          <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="@/assets/img/icons/excel.svg" alt="img"></a>
          </li>
        </ul>
        <div class="page-btn">
          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_event"><i class="ti ti-circle-plus me-1"></i>Create</a>
        </div>
      </div>
      
      <div class="row">

        <!-- Calendar Sidebar -->
        <div class="col-xxl-3 col-xl-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="border-bottom pb-2 mb-4">
                <div class="datepic">
                  <v-calendar is-expanded :attributes="attributes" />
                </div> 
              </div>

              <!-- Event -->
              <div class="border-bottom pb-4 mb-4">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <h5>Event </h5>
                  <a href="#" class="text-secondary" data-bs-toggle="modal" data-bs-target="#add_event"><i class="ti ti-square-rounded-plus-filled fs-16"></i></a>
                </div>
                <p class="fs-12 mb-2">Drag and drop your event or click in the calendar</p>
                <div id='external-events'>
                  <div class="fc-event bg-success-transparent mb-1" data-event='{ "title": "Team Events" }' data-event-classname="bg-transparent-success">
                    <i class="ti ti-square-rounded text-success me-2"></i>Team Events
                  </div>
                  <div class="fc-event bg-warning-transparent mb-1" data-event='{ "title": "Team Events" }' data-event-classname="bg-transparent-warning">
                    <i class="ti ti-square-rounded text-warning me-2"></i>Work
                  </div>
                  <div class="fc-event bg-danger-transparent mb-1" data-event='{ "title": "External" }' data-event-classname="bg-transparent-danger">
                    <i class="ti ti-square-rounded text-danger me-2"></i>External
                  </div>
                  <div class="fc-event bg-cyan-transparent mb-1" data-event='{ "title": "Projects" }' data-event-classname="bg-transparent-skyblue">
                    <i class="ti ti-square-rounded text-cyan me-2"></i>Projects
                  </div>
                  <div class="fc-event bg-pink-transparent mb-1" data-event='{ "title": "Applications" }' data-event-classname="bg-transparent-purple">
                    <i class="ti ti-square-rounded text-pink me-2"></i>Applications
                  </div>
                  <div class="fc-event bg-info-transparent mb-0" data-event='{ "title": "Desgin" }' data-event-classname="bg-transparent-info">
                    <i class="ti ti-square-rounded text-info me-2"></i>Desgin
                  </div>
                </div>
              </div>
              <!-- /Event -->

              <!-- Upcoming Event -->
              <div class="border-bottom pb-2 mb-4">
                <h5 class="mb-2">Upcoming Event<span class="badge badge-success rounded-pill ms-2">15</span></h5>
                <div class="border-start border-purple border-3 mb-3">
                  <div class="ps-3">
                    <h6 class="fw-medium mb-1">Meeting with Team Dev</h6>
                    <p class="fs-12"><i class="ti ti-calendar-check text-info me-2"></i>15 Mar 2025</p>
                  </div>
                </div>
                <div class="border-start border-pink border-3 mb-3">
                  <div class="ps-3">
                    <h6 class="fw-medium mb-1">Design System With Client</h6>
                    <p class="fs-12"><i class="ti ti-calendar-check text-info me-2"></i>24 Mar 2025</p>
                  </div>
                </div>
                <div class="border-start border-success border-3 mb-3">
                  <div class="ps-3">
                    <h6 class="fw-medium mb-1">UI/UX Team Call</h6>
                    <p class="fs-12"><i class="ti ti-calendar-check text-info me-2"></i>28 Mar 2025</p>
                  </div>
                </div>
              </div>
              <!-- /Upcoming Event -->

              <!-- Upgrade Details -->
              <div class="bg-dark rounded text-center position-relative p-4">
                <span class="avatar avatar-lg rounded-circle bg-white mb-2">
                  <i class="ti ti-alert-triangle text-dark"></i>
                </span>
                <h6 class="text-white position-relative z-1 mb-3">Enjoy Unlimited Access on a small price monthly.</h6>
                <a href="#" class="btn btn-white d-inline-flex position-relative z-1">Upgrade Now <i class="ti ti-arrow-right"></i></a>
                <div class="box-bg">
                  <span class="bg-right"><img src="@/assets/img/bg/email-bg-01.png" alt="Img"></span>
                  <span class="bg-left"><img src="@/assets/img/bg/email-bg-02.png" alt="Img"></span>
                </div>
              </div>
              <!-- /Upgrade Details -->

            </div>
          </div>					

        </div>
        <!-- /Calendar Sidebar -->

        <div class="col-xxl-9 col-xl-8 theiaStickySidebar">	
          <div class="stickysidebar">
            <div class="card border-0">
              <div class="card-body">
                <FullCalendar :options="calendarOptions" :events="events"></FullCalendar>
              </div>
            </div>	
          </div>	
        </div>

      </div>
    </div>
    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
      <p>Designed &amp; Developed By <a href="javascript:void(0);" class="text-primary">Dreams</a></p>
    </div>
  </div>
  <calendar-modal></calendar-modal>
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      events: [],
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [
          {
            title: "12:40p Test Event 1",
            start: currentDate,
            className: "bg-success",
          },
          {
            title: "11:20a Test Event 2",
            start: "2023-03-15",
            className: "bg-info",
          },
          {
            title: "10:33a Test Event 3",
            start: "2023-03-17",
            className: "bg-primary",
          },
          {
            title: "5:47a Event Name 4",
            start: "2023-03-15",
            className: "bg-purple",
          },
        ],

        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
      },
    };
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
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
  props: {
    msg: String,
  },
  components: {
    FullCalendar,
  },
};
</script>
