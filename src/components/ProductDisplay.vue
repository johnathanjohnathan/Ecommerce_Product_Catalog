<script setup>
import productImage from '../assets/images/mens-clotches.png'
import '../assets/style/ProductDisplayStyle.css'
</script>

<template>
    <div class="display-container">
        <div class="product-display">
            <div class="product-image">
                <img :src=productImage alt="Product Image" />
            </div>
            <div class="product-detail">
                <h2 class="product-name">Mens Casual Slim Fit</h2>
                <div class="product-subcategory-rating">
                    <span class="subcategory">men's clothing</span>
                    <span class="rating">4/5
                        <span class="circle filled"></span>
                        <span class="circle filled"></span>
                        <span class="circle filled"></span>
                        <span class="circle filled"></span>
                        <span class="circle"></span>
                    </span>
                </div>
                <p class="product-description">great outerwear jackets for Spring/Autumn/Winter, suitable for many
                    occasions,
                    such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good
                    gift
                    choice for you or your family member. A warm hearted love to Father, husband or son in this
                    thanksgiving
                    or
                    Christmas Day.</p>
                <span class="price">$1</span>
                <div class="button-container">
                    <button class="buy-button">Buy now</button>
                    <button class="next-button">Next product</button>
                </div>
            </div>
        </div>
    </div>

</template>