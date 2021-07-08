const app = Vue.createApp({
    data() {
        return{
            cart: [],
            premium: true,
            productdetail : 'blah blah blah'
        } 
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        }
    },
    computed:{
        carts(){
            return this.cart.length
        }
    }
})