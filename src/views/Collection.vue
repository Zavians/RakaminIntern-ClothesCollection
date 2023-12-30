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
.man-page {
    background: var(--bluesoft);
    background: linear-gradient(to bottom, var(--bluesoft) 50%, #fffbf5 50%);

    color: white;
}

.women-page {
    background: var(--bluesoft);
    background: linear-gradient(to bottom, var(--pinksoft) 50%, #fffbf5 50%);

    color: white;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    display: flex;
    align-items: center;
}

.section-title {
    font-size: 28px;
    margin-top: 20px;
}

.product-list {
    padding: 0;
    margin: 20px 0;
    list-style: none;
}

.product-item {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); 
    border: 5px solid white;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
  }

.product-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 20px;
}

.product-details {
    flex: 1;
    text-align: left;
}

.product-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}

.men-title {
    color: var(--blue);
}

.women-title {
    color: var(--purple);
    
}

.product-category {
    border-bottom: 2px solid gray;
    font-size: 16px;
    color: #555;
}

.product-description {
    border-bottom: 2px solid gray;
    color: black;
    font-size: 16px;
    margin-bottom: 10px;
}

.product-price-man {
    font-size: 18px;
    color: var(--blue);
}

.product-price-woman {
    font-size: 18px;
    color: var(--purple);
}

.btn-primary-man {
    width: 45%;
    background-color: var(--blue);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    margin-top: 20px;
}

.btn-outline-primary-man {
    margin-left: 20px;
    width: 45%;
    color: var(--blue);
    padding: 12px 20px;
    border: solid var(--blue);
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    margin-top: 20px;
}

.btn-primary-man:hover {
    background-color: #0056b3;
}
.btn-outline-primary-man:hover {
    background-color: var(--bluesoft);
}

.btn-primary-woman {
    width: 45%;
    background-color: var(--purple);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    margin-top: 20px;
}

.btn-outline-primary-woman {
    margin-left: 20px;
    width: 45%;
    color: var(--purple);
    padding: 12px 20px;
    border: solid var(--purple);
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    margin-top: 20px;
}

.btn-primary-woman:hover {
    background-color: var(--pinksoft);
}
.btn-outline-primary-woman:hover {
    background-color: var(--pinksoft);
}

.unavailable-product {
    align-items: center;
    justify-content: center; 
    display: flex; 
    flex-direction: column; 
    height: 50vh; 
    width: 100svh;
    border: 5px solid white;
    border-radius: 8px;
    margin: 20px 0;
    padding: 20px;
    text-align: center;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); 
}

.unavailable-product p {
    font-size: 16px;
    color: black;
}
</style>
  