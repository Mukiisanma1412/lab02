app.component('product-display', {
    template:
        /*html*/
        `<div class="product-display">
            <div class= "product-container" >
                <div class="product-image">
                    <img v-bind:src="image">
                </div>
                <div class="product-info">
                    <h1> {{ title }} </h1>
                    <p v-if="inStock"> In Stock </p>
                    <p v-else> Out of Stock</p>

                    <div v-for="(variant, index) in variants" : key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color }">
                    </div>

                    <button class=" button" : disabled='!inStock' :class="{disabledButton: !inStock}" v-on:click="addToCart ">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>`
    ,
    data() {
        return {
            product: 'Shoes',
            brand: 'SE 331',

            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            selectedVariant: 0,
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index) {
            this.w = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        isOnSale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale!'
            }
        }
    }
})