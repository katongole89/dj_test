<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper notes-page-wrapper">
    <div class="content">
      <div class="page-header">
        <div class="add-item d-flex">
          <div class="page-title">
            <h4>Search List</h4>
            <h6>Manage your search</h6>
          </div>
        </div>
        <div
          class="d-flex flex-sm-row flex-column align-items-sm-center align-items-start"
        >
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
                @click="toggleHeader"
                ><i class="ti ti-chevron-up"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="d-flex align-items-center">
              <input type="text" class="form-control flex-fill me-3" value="DreamsPOS" />
              <button type="submit" class="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="mb-3">Search result for "DreamsPOS"</h5>
          <div class="row">
            <div class="col-md-6">
              <div class="card shadow-none">
                <div class="card-body">
                  <a href="#" class="text-info text-truncate mb-2"
                    >https://themeforest.net/search/dreamspos</a
                  >
                  <p class="text-truncate line-clamb-2 mb-2">
                    DreamsPOS - Html, Vue 3, Angular 17+, React & Node HR Project
                    Management & CRM Admin Dashboard Template
                  </p>
                  <div class="d-flex align-items-center flex-wrap row-gap-2">
                    <span class="text-gray-9 me-3 pe-3 border-end">1.7K Sales</span>
                    <div
                      class="text-gray-9 d-flex align-items-center me-3 pe-3 border-end"
                    >
                      <i class="ti ti-star-filled text-warning me-1"></i>
                      <i class="ti ti-star-filled text-warning me-1"></i>
                      <i class="ti ti-star-filled text-warning me-1"></i>
                      <i class="ti ti-star-filled text-warning me-1"></i>
                      <i class="ti ti-star-filled text-gray-2 me-1"></i>
                      (45)
                    </div>
                    <span class="text-gray-9">$35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 class="mb-3">Images</h5>
          <div class="row g-3">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="col-xl-2 col-md-4 col-6"
            >
              <a @click.prevent="openLightbox(index)" class="gallery-item">
                <img
                  :src="require(`@/assets/img/media/${image}`)"
                  class="rounded"
                  alt="img"
                />
              </a>
            </div>
          </div>

          <!-- Vue Easy Lightbox -->
          <vue-easy-lightbox
            v-model:visible="visible"
            :imgs="imageUrls"
            :index="lightboxIndex"
            @click.self="closeLightbox"
          />
        </div>
      </div>
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
import { ref, computed } from "vue";
import VueEasyLightbox from "vue-easy-lightbox"; // Ensure you import the lightbox component

export default {
  components: {
    VueEasyLightbox,
  },
  setup() {
    const images = [
      "media-15.jpg",
      "media-16.jpg",
      "media-17.jpg",
      "media-18.jpg",
      "media-19.jpg",
      "media-20.jpg",
      "media-21.jpg",
      "media-22.jpg",
      "media-23.jpg",
      "media-24.jpg",
      "media-25.jpg",
      "media-26.jpg",
    ];

    const visible = ref(false);
    const lightboxIndex = ref(0);

    const openLightbox = (index) => {
      lightboxIndex.value = index;
      visible.value = true;
    };

    const closeLightbox = () => {
      visible.value = false;
    };

    const imageUrls = computed(() => {
      return images.map((image) => require(`@/assets/img/media/${image}`));
    });

    return {
      images,
      visible,
      lightboxIndex,
      openLightbox,
      closeLightbox,
      imageUrls,
    };
  },
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/application/search-list");
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
