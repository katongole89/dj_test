<template>
  <div class="row">
    <div
      class="col-sm-6 col-md-6 col-lg-4 col-xl-3"
      v-for="(product, index) in products"
      :key="index"
    >
      <div
        :class="['product-info card', { active: product.isActive }]"
        @click="toggleActive(product)"
      >
        <a href="javascript:void(0);" class="pro-img">
          <img :src="require(`@/assets/img/products/${product.image}`)" alt="Products" />
          <span><i class="ti ti-circle-check-filled"></i></span>
        </a>
        <h6 class="cat-name">
          <a href="javascript:void(0);">{{ product.name }}</a>
        </h6>
        <h6 class="product-name">
          <a href="javascript:void(0);">{{ product.modal }}</a>
        </h6>
        <div class="d-flex align-items-center justify-content-between price">
          <span>{{ product.quantity }} Pcs</span>
          <p>${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Headphones",
          modal: "Airpod 2",
          price: 5478,
          quantity: 47,
          image: "pos-product-05.png",
          isActive: true,
        },
        {
          name: "Headphones",
          modal: "SWAGME",
          price: 6587,
          quantity: 14,
          image: "pos-product-08.png",
          isActive: false,
        },
      ],
      showActiveOnly: false,
    };
  },
  computed: {
    filteredProducts() {
      if (this.showActiveOnly) {
        return this.products.filter((product) => product.isActive);
      }
      return this.products;
    },
  },
  methods: {
    toggleActive(product) {
      product.isActive = !product.isActive;
    },
  },
};
</script>
