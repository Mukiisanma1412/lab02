
app.component('product-details', {
    props: {
        productdetail:{
            type : String
        }
    },
    template:
        /*html*/
        `<p> {{productDetails}} </p>`
    ,
    computed:{
        productDetails(){
            return this.productdetail
        }
    }
})