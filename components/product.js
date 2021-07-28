const persons = [
  { id:1,gender: "male", price: "110",firstName: "Alex", lastName: "Wong", inventory: 20,img: 'https://www.careandliving.com/wp-content/uploads/2017/10/six-pack-men6.jpg' },
  { id:2,gender: "male", price: "120",firstName: "Joe", lastName: "Barbos", inventory: 7,img: 'https://i.pinimg.com/originals/3e/07/65/3e0765c8a07d80d25edd3835f8e269f3.jpg' },
  { id:3,gender: "male", price: "140",firstName: "Hui", lastName: "EgoZnaet", inventory: 8,img: 'https://i.pinimg.com/originals/6a/1e/ca/6a1eca2ad41d91c7ea26f6748b6de71b.jpg' },
  { id:7,gender: "female", price: "150",firstName: "Aly", lastName: "Johns", inventory: 0,img:[
    'https://thumb-p3.xhcdn.com/a/u_q1So9yAxf1vrqz7i1RjQ/000/368/242/013_1000.jpg',
    'https://img4.goodfon.ru/original/1680x1050/7/e7/model-briunetka-krasotka-pricheska-makiiazh-vzgliad-portret.jpg',
    'https://i.artfile.ru/2560x1600_602422_[www.ArtFile.ru].jpg',
    'https://uprostim.com/wp-content/uploads/2021/03/image010-65.jpg',
    'https://yobte.ru/uploads/posts/2019-11/milye-devushki-v-ochkah-70-foto-41.jpg'
  ] },
]



Vue.component('product',{
  /*html*/
  template: `
  <div class="w-3/3 p-5">
    <div class="flex bg-gray-100 rounded-xl overflow-hidden">
      <div class="flex-none w-80 relative">
        <button 
        @click="next(persons[index].img)"
        v-if="Array.isArray(persons[index].img)"
        class="absolute 
        bottom-0 left-0
        blue-50 w-7 h-7 z-20 bg-gradient-to-r from-blue-100 to-blue-200 flex align-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <img v-bind:src="setPicture"  alt="" class="absolute inset-0 w-full h-full object-cover" />
        <button 
        @click="next(persons[index].img)"
        v-if="Array.isArray(persons[index].img)"
        class="absolute 
        bottom-0 right-0
        blue-50 w-7 h-7 z-20 bg-gradient-to-r from-blue-100 to-blue-200 flex align-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        </button>
      </div>
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <h1 class="flex-auto text-xl font-semibold">
            {{setName}}
          </h1>
          <div class="text-xl flex-wrap font-semibold text-gray-500">
            <h2>Total:{{setTotal()}}</h2>
            <div class="flex">
              {{cart.length}}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
            "$"{{persons[index].price}}
          </div>
          <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2"
          v-if="persons[index].inventory > 0 "
          >
            In stock
          </div>
          <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2 text-red-600"
          v-else
          >
            Out of stock
          </div>
        </div>
        <div class="flex items-baseline mt-4 mb-6">
          <div class="space-x-2 flex">
            <label v-for="size in sizes">
              <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" :value="size" checked>
              {{size}}
            </label>
          </div>
        </div>
        <div class="flex space-x-3 mb-4 text-sm font-medium">
          <div class="flex-auto flex space-x-3">
            <button 
            v-if="persons[index].inventory > 0 "
            class="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
             type="submit">Buy now</button>
            <button 
            v-if="persons[index].inventory > 0 "
            v-on:click="addToCart(persons[index].id)"
            class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" 
            type="button">Add to bag</button>
          </div>
          <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
            <svg width="20" height="20" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </button>
        </div>
      </form>
  
    </div>
  </div>
  `,
  data() {
    return {
      total:0,
      index: 0,
      imgIndx:0,
      sizes:['XS','S','M','L','XL'],
      persons,
      cart:[],
    }
  },
  methods: {
    next(array = null){
      if(array){
        if(this.imgIndx  >= array.length-1 ){
          return this.imgIndx = 0
        }
        return this.imgIndx +=1
      }
      if(this.index >= this.persons.length-1 ){
        return this.index = 0
      }
      return this.index+=1
    },
    prev(array = null){
      if(array){
        if(this.imgIndx <= 0){
          this.imgIndx = array.length
        }
        return this.imgIndx -=1
      }
      if(this.index <= 0){
        this.index = this.persons.length
      }
      this.index-=1
    },
    addToCart(id) {
     let person =  persons.find(person=> person.id === id);
     this.cart=[...this.cart,person]
    },
    setTotal(){
      const reducer = (accumulator, currentValue) => accumulator + (+currentValue.price) ;
      return this.cart.reduce(reducer,this.total)
    }
  },
  computed:{
    setName() {
      return `${this.persons[this.index].firstName} ${this.persons[this.index].lastName} `
    },
    setPicture() {
      if(typeof this.persons[this.index].img === 'string') return this.persons[this.index].img;
       return this.persons[this.index].img[this.imgIndx];
    }

  },
})
