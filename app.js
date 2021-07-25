const persons = [
  { gender: "male", firstName: "Alex", lastName: "Wong", img: 'https://www.careandliving.com/wp-content/uploads/2017/10/six-pack-men6.jpg' },
  { gender: "male", firstName: "Joe", lastName: "Barbos", img: 'https://i.pinimg.com/originals/3e/07/65/3e0765c8a07d80d25edd3835f8e269f3.jpg' },
  { gender: "male", firstName: "Hui", lastName: "EgoZnaet", img: 'https://i.pinimg.com/originals/6a/1e/ca/6a1eca2ad41d91c7ea26f6748b6de71b.jpg' },
  { gender: "female", firstName: "Soe", lastName: "Evans", img: 'https://img4.goodfon.ru/original/1680x1050/7/e7/model-briunetka-krasotka-pricheska-makiiazh-vzgliad-portret.jpg' },
  { gender: "female", firstName: "Maria", lastName: "Delgado", img: 'https://i.ucrazy.ru/files/i/2013.8.20/1376997377_wallpapers_girls-00335.jpg' },
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
      return `${persons[this.index].firstName} ${persons[this.index].lastName} `
    },
    setPicture() {
      return persons[this.index].img
    },
    setGender() {
      if (persons[this.index].gender === 'male') {
        return 'img male'
      }
      return 'img female'
    }
  }
})

app.mount('#app')