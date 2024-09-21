<script setup>
import { reactive, onMounted, watch } from "vue";
import ProductDisplay from "../src/components/ProductDisplay.vue";
import ProductUnavailable from "../src/components/ProductUnavailable.vue";
import Loader from "../src/components/Loader.vue";

const initialProductState = {
  name: "",
  category: "",
  rating: { rate: 0, count: 0 },
  description: "",
  image: "",
  price: "",
};

const state = reactive({
  product: { ...initialProductState },
  currentIndex: 1,
});

const isLoading = reactive({ value: false });

const fetchProduct = async (index) => {
  try {
    isLoading.value = true;
    const response = await fetch(`https://fakestoreapi.com/products/${index}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const productData = await response.json();
    if (
      productData &&
      (productData.category === "men's clothing" ||
        productData.category === "women's clothing")
    ) {
      Object.assign(state.product, productData);
    } else {
      Object.assign(state.product, initialProductState);
    }
  } catch (err) {
    console.error("Error fetching product:", err.message);
    Object.assign(state.product, initialProductState);
  } finally {
    isLoading.value = false;
  }
};

const nextProduct = () => {
  state.currentIndex = state.currentIndex < 20 ? state.currentIndex + 1 : 1;
  fetchProduct(state.currentIndex);
};

const updateBodyBackground = () => {
  const body = document.body;
  if (state.product.category === "women's clothing") {
    body.style.background =
      "linear-gradient(to bottom, var(--woman-background-color) 70%, var(--white-color) 30%)";
  } else if (state.product.category === "men's clothing") {
    body.style.background =
      "linear-gradient(to bottom, var(--man-background-color) 70%, var(--white-color) 30%)";
  }
};

onMounted(() => {
  fetchProduct(state.currentIndex);
});

watch(
  () => state.product.category,
  (newProduct) => {
    if (newProduct) {
      updateBodyBackground();
    } else {
      document.body.style.background =
        "linear-gradient(to bottom, var(--unvailable-background-color) 70%, var(--white-color) 30%";
    }
  },
);
</script>

<template>
  <div>
    <Loader v-if="isLoading.value" />
    <ProductDisplay
      v-if="
        !isLoading.value &&
        state.product &&
        (state.product.category === 'men\'s clothing' ||
          state.product.category === 'women\'s clothing')
      "
      :product="state.product"
      @next="nextProduct"
    />
    <ProductUnavailable
      v-if="
        !isLoading.value &&
        (!state.product.category || state.product.category === '')
      "
      @next="nextProduct"
    />
  </div>
</template>
