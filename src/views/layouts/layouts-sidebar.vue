<template>
  <div class="" :class="['sidebar', sidebarClass]" id="sidebar">
    <!-- Logo -->
    <div class="sidebar-logo active">
      <router-link to="/dashboard/" class="logo logo-normal">
        <img src="@/assets/img/logo.svg" alt="Img" />
      </router-link>
      <router-link to="/dashboard/" class="logo logo-white">
        <img src="@/assets/img/logo-white.svg" alt="Img" />
      </router-link>
      <router-link to="/dashboard/" class="logo-small">
        <img src="@/assets/img/logo-small.png" alt="Img" />
      </router-link>
      <a id="toggle_btn" href="javascript:void(0);" @click="toggleSidebar">
        <i class="ti ti-chevrons-left"></i>
      </a>
    </div>
    <!-- /Logo -->

    <!-- Modern Profile -->
    <div class="modern-profile p-3 pb-0">
      <div class="text-center rounded bg-light p-3 mb-4 user-profile">
        <div class="avatar avatar-lg online mb-3">
          <img
            src="@/assets/img/customer/customer15.jpg"
            alt="Img"
            class="img-fluid rounded-circle"
          />
        </div>
        <h6 class="fs-14 fw-bold mb-1">Adrian Herman</h6>
        <p class="fs-12 mb-0">System Admin</p>
      </div>
      <div class="sidebar-nav mb-3">
        <ul
          class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent"
          role="tablist"
        >
          <li class="nav-item"><a class="nav-link active border-0" href="#">Menu</a></li>
          <li class="nav-item">
            <router-link class="nav-link border-0" to="/application/chat"
              >Chats</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link border-0" to="/application/email"
              >Inbox</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- /Modern Profile -->

    <!-- Sidebar Header -->
    <div class="sidebar-header p-3 pb-0 pt-2">
      <div
        class="text-center rounded bg-light p-2 mb-4 sidebar-profile d-flex align-items-center"
      >
        <div class="avatar avatar-md online">
          <img
            src="@/assets/img/customer/customer15.jpg"
            alt="Img"
            class="img-fluid rounded-circle"
          />
        </div>
        <div class="text-start sidebar-profile-info ms-2">
          <h6 class="fs-14 fw-bold mb-1">Adrian Herman</h6>
          <p class="fs-12">System Admin</p>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between menu-item mb-3">
        <div>
          <router-link to="/dashboard/" class="btn btn-sm btn-icon bg-light">
            <i class="ti ti-layout-grid-remove"></i>
          </router-link>
        </div>
        <div>
          <router-link to="/application/chat" class="btn btn-sm btn-icon bg-light">
            <i class="ti ti-brand-hipchat"></i>
          </router-link>
        </div>
        <div>
          <router-link
            to="/application/email"
            class="btn btn-sm btn-icon bg-light position-relative"
          >
            <i class="ti ti-message"></i>
          </router-link>
        </div>
        <div class="notification-item">
          <router-link
            to="/activities"
            class="btn btn-sm btn-icon bg-light position-relative"
          >
            <i class="ti ti-bell"></i>
            <span class="notification-status-dot"></span>
          </router-link>
        </div>
        <div class="me-0">
          <router-link
            to="/settings/general-settings"
            class="btn btn-sm btn-icon bg-light"
          >
            <i class="ti ti-settings"></i>
          </router-link>
        </div>
      </div>
    </div>
    <!-- /Sidebar Header -->

    <!-- Sidebar Inner -->
    <div class="sidebar-inner slimscroll flex-fill">
      <perfect-scrollbar
        class="scroll-area"
        :settings="settings"
        @ps-scroll-y="scrollHanle"
      >
        <div id="sidebar-menu" class="sidebar-menu">
          <vertical-sidebar></vertical-sidebar>
        </div>
      </perfect-scrollbar>
    </div>
    <!-- /Sidebar Inner -->
  </div>
  <two-col-sidebar></two-col-sidebar>
  <horizontal-header></horizontal-header>
  <pos-loader></pos-loader>
</template>

<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

export default {
  components: {
    PerfectScrollbar,
  },
  data() {
    return {
      sidebarClass: "",
      settings: {
        suppressScrollX: true,
      },
    };
  },
  watch: {
    "$route.path"(newPath) {
      if (newPath.startsWith("/pos/pos-1") || 
        newPath.startsWith("/pos/pos-2") ||
        newPath.startsWith("/pos/pos-3") ||
        newPath.startsWith("/pos/pos-4") ||
        newPath.startsWith("/pos/pos-5") 
      ) {
        this.sidebarClass = "d-none";
      } else {
        this.sidebarClass = "";
      }
    },
  },
  mounted() {
    this.initMouseoverListener();
     // Run once when the component is mounted
    if (this.$route.path.startsWith("/pos/pos-1") || 
        this.$route.path.startsWith("/pos/pos-2") ||
        this.$route.path.startsWith("/pos/pos-3") ||
        this.$route.path.startsWith("/pos/pos-4") ||
        this.$route.path.startsWith("/pos/pos-5")
      ) 
      {
      this.sidebarClass = "d-none";
    }
  },
  methods: {
    scrollHanle() {},
    toggleSidebar() {
      const body = document.body;
      body.classList.toggle("mini-sidebar");
    },
    initMouseoverListener() {
      document.addEventListener("mouseover", this.handleMouseover);
    },
    handleMouseover(e) {
      e.stopPropagation();

      const body = document.body;
      const toggleBtn = document.getElementById("toggle_btn");

      if (body.classList.contains("mini-sidebar") && this.isElementVisible(toggleBtn)) {
        const target = e.target.closest(".sidebar, .header-left");

        if (target) {
          body.classList.add("expand-menu");
          this.slideDownSubmenu();
        } else {
          body.classList.remove("expand-menu");
          this.slideUpSubmenu();
        }

        e.preventDefault();
      }
    },
    isElementVisible(element) {
      return element.offsetWidth > 0 || element.offsetHeight > 0;
    },
    slideDownSubmenu() {
      const subdropPlusUl = document.getElementsByClassName("subdrop");
      for (let i = 0; i < subdropPlusUl.length; i++) {
        const submenu = subdropPlusUl[i].nextElementSibling;
        if (submenu && submenu.tagName.toLowerCase() === "ul") {
          submenu.style.display = "block";
        }
      }
    },
    slideUpSubmenu() {
      const subdropPlusUl = document.getElementsByClassName("subdrop");
      for (let i = 0; i < subdropPlusUl.length; i++) {
        const submenu = subdropPlusUl[i].nextElementSibling;
        if (submenu && submenu.tagName.toLowerCase() === "ul") {
          submenu.style.display = "none";
        }
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener("mouseover", this.handleMouseover);
  },
};
</script>
