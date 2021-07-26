const persons = [
  { id:1,gender: "male", price: "110",firstName: "Alex", lastName: "Wong", inventory: 20,img: 'https://www.careandliving.com/wp-content/uploads/2017/10/six-pack-men6.jpg' },
  { id:2,gender: "male", price: "120",firstName: "Joe", lastName: "Barbos", inventory: 7,img: 'https://i.pinimg.com/originals/3e/07/65/3e0765c8a07d80d25edd3835f8e269f3.jpg' },
  { id:3,gender: "male", price: "140",firstName: "Hui", lastName: "EgoZnaet", inventory: 8,img: 'https://i.pinimg.com/originals/6a/1e/ca/6a1eca2ad41d91c7ea26f6748b6de71b.jpg' },
  { id:7,gender: "female", price: "150",firstName: "Aly", lastName: "Johns", inventory: 0,img:[
    'https://thumb-p3.xhcdn.com/a/u_q1So9yAxf1vrqz7i1RjQ/000/368/242/013_1000.jpg',
    'https://img4.goodfon.ru/original/1680x1050/7/e7/model-briunetka-krasotka-pricheska-makiiazh-vzgliad-portret.jpg',
    'https://i.artfile.ru/2560x1600_602422_[www.ArtFile.ru].jpg',
    'https://uprostim.com/wp-content/uploads/2021/03/image010-65.jpg'
  ] },
]


const app = Vue.createApp({
  data() {
    return {
      index: 0,
      imgIndx:0,
      isMale: true,
      persons,
      inStock:true,
      cart:[]
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
    setName() {
      return `${this.persons[this.index].firstName} ${this.persons[this.index].lastName} `
    },
    setPicture() {
      if(typeof this.persons[this.index].img === 'string') return this.persons[this.index].img;
       return this.persons[this.index].img[this.imgIndx];
    },
    addToCart(id) {
     let person =  persons.find(person=> person.id === id);
     this.cart=[...this.cart,person]
    }
  }
})

app.mount('#app')