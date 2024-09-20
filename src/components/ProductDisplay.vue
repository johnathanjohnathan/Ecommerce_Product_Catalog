<script setup>
import { defineProps, defineEmits } from 'vue';
import '../assets/style/ProductDisplayStyle.css'

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const emit = defineEmits()

const handleNextClick = () => {
    emit('next')
}
</script>

<template>
    <div class="display-container">
        <div class="product-display">
            <div class="product-image">
                <img :src="product.image" alt="Product Image" />
            </div>
            <div class="product-detail">
                <h2 class="product-name">{{ product.title }}</h2>
                <div class="product-subcategory-rating">
                    <span class="subcategory">{{ product.category }}</span>
                    <span class="rating">{{ product.rating.rate }}/5
                        <span v-for="index in 5" :key="index" :class="{'circle filled': index <= Math.round(product.rating.rate), 'circle': index > Math.round(product.rating.rate)}"></span>
                    </span>
                </div>
                <p class="product-description">{{ product.description }}</p>
                <span class="price">${{ product.price }}</span>
                <div class="button-container">
                    <button class="buy-button">Buy now</button>
                    <button class="next-button" @click="handleNextClick">Next product</button>
                </div>
            </div>
        </div>
    </div>

</template>