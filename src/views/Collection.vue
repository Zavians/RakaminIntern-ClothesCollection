<template>
    <main :class="{ 'man-page': isMenCategory, 'women-page': isWomenCategory }">
        <div class="container">
            <div v-if="produk.length">
                <h2 class="section-title men-title" v-if="isMenCategory">Men Collection</h2>
                <h2 class="section-title women-title" v-else-if="isWomenCategory">Women Collection</h2>
                <h2 class="section-title" v-else>Unavailable Product</h2>

                <ul class="product-list">
                    <li v-for="product in produk" :key="product.id" class="product-item">
                        <img :src="product.image" :alt="product.title" class="product-image" />
                        <div class="product-details">
                            <h3 class="product-title"
                                :class="{ 'men-title': isMenCategory, 'women-title': isWomenCategory }">
                                {{ product.title }}
                            </h3>
                            <p class="product-category">{{ product.category }}</p>
                            <p class="product-description">{{ product.description }}</p>
                            <p :class="{'product-price-man':isMenCategory, 'product-price-woman':isWomenCategory}">Price: ${{ product.price }}</p>
                            <button type="button" :class="{ 'btn-primary-man': isMenCategory, 'btn-primary-woman': isWomenCategory }">Buy Now</button>
                            <button v-if="!isUnavailable" @click="getNextProducts" :class="{ 'btn-outline-primary-man': isMenCategory, 'btn-outline-primary-woman': isWomenCategory }" >Next
                                Product</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div v-else>
                <div class="unavailable-product">
                    <h2 class="section-title">Unavailable Product</h2>
                    <p>Sorry, no products are currently available.</p>
                    <button @click="getNextProducts" class="btn btn-primary" >Next Product</button>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
export default {
    data() {
        return {
            produk: [],
            index: 1,
        };
    },

    computed: {
        isMenCategory() {
            return this.produk.length && this.produk[0].category === "men's clothing";
        },
        isWomenCategory() {
            return this.produk.length && this.produk[0].category === "women's clothing";
        },
        isUnavailable() {
            return this.produk.length === 0;
        },
    },

    mounted() {
        this.fetchProduk();
    },

    methods: {
        fetchProduk() {
            fetch(`https://fakestoreapi.com/products/${this.index}`)
                .then((res) => res.json())
                .then((json) => {
                    if (json.category === "men's clothing" || json.category === "women's clothing") {
                        this.produk = [json];
                    } else {
                        this.produk = [];
                    }
                })
                .catch((error) => {
                    console.error("Ada Kesalahan dalam penangkapan Data:", error);
                });
        },

        getNextProducts() {
            this.index = this.index === 20 ? 1 : this.index + 1;
            this.fetchProduk();
        },
    },
};
</script>
  
<style lang="scss" scoped>
@import "../assets/style/collection.scss"
</style>
  