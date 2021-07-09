app.component('review-Form', {

    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="rating"> Rating: </label>
            <select id="rating" v-model="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            
            <label for="recom">Would you recommend this product?</label>
                <input type="radio" id="recom" name="recom" value="recom" v-model="recom">
                <label for="recom">YES</label>

            <input class="button" type="submit" value="Submit">
        </form>
        `
    ,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('review is incomplete. please fill out every fiend.')
                return
            }

            check = null
            if (this.recom == 'recom') {
                this.check = true
            } else {
                this.check = false
            } 
            
            let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.check
                }



            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = null
        }
    }

})