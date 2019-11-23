;const app = new Vue({
    el: "#app",
    data: {
        books: [
            {
                id: 1,
                name: "《算法导论》",
                date: "2006-09",
                price: 85,
                counter: 1,
                action: true
            },
            {
                id: 2,
                name: "《代码大全》",
                date: "2006-02",
                price: 59,
                counter: 1,
                action: true
            },
            {
                id: 3,
                name: "《UNIX编程艺术》",
                date: "2006-02",
                price: 59,
                counter: 1,
                action: true
            },
            {
                id: 4,
                name: "《编程大师》",
                date: "2006-02",
                price: 59,
                counter: 1,
                action: true
            }
        ],
        show: false
        
    },
    methods: {
        sub(index){
            this.books[index].counter-- 
            if(this.books[index].counter < 1){
                this.books[index].counter = 1
            }
        },
        add(index){
            this.books[index].counter++
        },
        remove(index){
            this.books.splice(index,1);
            if(this.books.length === 0 ){
                this.show = true
                console.log(this.show)
            }
           
        },
    },
    computed: {
        totalPrice: function(){
            let price = 0
            for(let i = 0;i < this.books.length; i++){
                price = price + this.books[i].price * this.books[i].counter
            }
            return price;
        }
    }
})
