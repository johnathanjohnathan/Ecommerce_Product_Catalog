<script setup>
import {reactive, onMounted, watch} from 'vue'
import ProductDisplay from '../src/components/ProductDisplay.vue'
import ProductUnavailable from '../src/components/ProductUnavailable.vue'
import Loader from '../src/components/Loader.vue'

const state = reactive({
  product: {
    name: '',
    category: '',
    rating: { rate: 0, count: 0 },
    description: '',
    image: '',
    price: ''
  },
  currentIndex: 1
})

const isLoading = reactive({ value: false})

const fetchProduct = async (index) => {
  try {
    isLoading.value = true
    const response = await fetch(`https://fakestoreapi.com/products/${index}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    Object.assign(state.product, await response.json())
  } catch (err) {
    console.error('Error fetching product:', err.message)
  } finally {
    isLoading.value = false
  }
}

const nextProduct = () => {
  state.currentIndex = state.currentIndex < 20 ? state.currentIndex + 1 : 1
  fetchProduct(state.currentIndex)
}

const updateBodyBackground = () => {
  const body = document.body;
  if (state.product.category === "women's clothing") {
    body.style.background = "linear-gradient(to bottom, var(--woman-background-color) 70%, var(--white-color) 30%)"
  } else if (state.product.category === "men's clothing") {
    body.style.background = "linear-gradient(to bottom, var(--man-background-color) 70%, var(--white-color) 30%)"
  } else {
    body.style.background = "linear-gradient(to bottom, var(--unvailable-background-color) 70%, var(--white-color) 30%"
  }
}

onMounted( () => {
  fetchProduct(state.currentIndex)
})

watch( () => state.product.category, updateBodyBackground )
</script>

<template>
  <div>
    <ProductDisplay v-if="!isLoading.value" :product="state.product" @next="nextProduct" />
    <Loader v-else/>
  </div>
</template>
