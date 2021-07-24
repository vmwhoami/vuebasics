const persons = [
  { gender: "male", firstName: "Alex", lastName: "Wong", img: 'https://www.careandliving.com/wp-content/uploads/2017/10/six-pack-men6.jpg' },
  { gender: "male", firstName: "Joe", lastName: "Barbos", img: 'https://i.pinimg.com/originals/3e/07/65/3e0765c8a07d80d25edd3835f8e269f3.jpg' },
  { gender: "male", firstName: "Hui", lastName: "EgoZnaet", img: 'https://i.pinimg.com/originals/6a/1e/ca/6a1eca2ad41d91c7ea26f6748b6de71b.jpg' },
  { gender: "female", firstName: "Soe", lastName: "Bitch", img: 'https://lol54.ru/wp-content/uploads/2019/04/083-4.jpeg' },
]
const app = Vue.createApp({
  data() {
    return {
      index: 0,
      isMale: true
    }
  },
  methods: {
    setIndex() {
      if (persons[this.index] === null || persons[this.index] === undefined) {
        return this.index = 0
      }
      return this.index += 1
    },
    setName() {
      return `${this.firstName} ${this.lastName} `
    },
    setPicture() {
      return persons[this.index].img
    }
  }
})

app.mount('#app')