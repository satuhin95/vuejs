const app = Vue.createApp({
    data(){
       return{
        name:"Saifuddin",
        age:28,
        condition:true,
        url:"www.google.com",

        books:[
            {name:"Book 1",price:150},
            {name:"Book 2",price:120},
            {name:"Book 3",price:110},
            {name:"Book 4",price:10},
            {name:"Book 5",price:50},
        ]
       }
    },
    methods:{
        changeTitle(){
           this.name="Hasan"
        },
        toggleShow(){
            this.condition = !this.condition
        }
    },
    computed:{
        totalBook(){
            return this.books.length
        }
    }
});



app.mount('#app')