<script setup>
import "../assets/style/LoaderStyle.css";
</script>

<template>
  <div class="skeleton-container">
    <div class="skeleton-loader">
      <div class="skeleton-image"></div>
      <div class="skeleton-details">
        <div class="skeleton-text title"></div>
        <div class="skeleton-text category"></div>
        <div class="skeleton-subcategory-rating">
          <div class="skeleton-text rating"></div>
        </div>
        <div class="skeleton-text description"></div>
        <div class="skeleton-text price"></div>
        <div class="button-container">
          <div class="skeleton-text buy-button"></div>
          <div class="skeleton-text buy-button"></div>
        </div>
      </div>
    </div>
  </div>
</template>
