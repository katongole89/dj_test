<template>
  <div class="row row-cols-xxl-5 g-3">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl"
    >
      <div
        :class="['product-info card', { active: product.isActive }]"
        @click="toggleActive(product)"
      >
        <a href="javascript:void(0);" class="product-image">
          <img :src="require(`@/assets/img/products/${product.image}`)" alt="Products" />
        </a>
        <div class="product-content">
          <h6 class="fs-14 fw-bold mb-1">
            <a href="javascript:void(0);">{{ product.name }}</a>
          </h6>
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="text-teal fs-14 fw-bold">{{ formatPrice(product.price) }}</h6>
            <p class="text-pink">{{ product.quantity }} Pcs</p>
          </div>
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
          name: "Blue Boot Shoes",
          price: 320,
          quantity: 30,
          image: "pos-product-14.jpg",
          isActive: true,
        },
        {
          name: "Brown Formal Shoes",
          price: 160,
          quantity: 13,
          image: "pos-product-16.jpg",
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
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
  },
};
</script>
