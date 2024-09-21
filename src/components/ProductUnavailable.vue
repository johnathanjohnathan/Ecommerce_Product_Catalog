<script setup>
import { defineEmits } from "vue";
import "../assets/style/ProductUnavailableStyle.css";

const emit = defineEmits();

const handleNextClick = () => {
  emit("next");
};
</script>

<template>
  <div class="product-notfound-container">
    <div class="notfound-card">
      <div class="notfound-message-card">
        <h3 class="notfound-message">This product is unavailable to show</h3>
        <button class="next-product" @click="handleNextClick">
          Next product
        </button>
      </div>
    </div>
  </div>
</template>
