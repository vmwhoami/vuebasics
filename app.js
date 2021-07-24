const images = [
  'https://www.careandliving.com/wp-content/uploads/2017/10/six-pack-men6.jpg',
  'https://i.pinimg.com/originals/3e/07/65/3e0765c8a07d80d25edd3835f8e269f3.jpg',
  'https://i.pinimg.com/originals/6a/1e/ca/6a1eca2ad41d91c7ea26f6748b6de71b.jpg',
  'https://lol54.ru/wp-content/uploads/2019/04/083-4.jpeg',
]

const app = Vue.createApp({
  data() {
    return {
      index: 0,
      isMale: true,
      img: 'img',
      firstName: 'Adam',
      lastName: 'Melnic',
    }
  },
  methods: {
    changeIndx() {
      this.index += 1
    },
    setPicture() {
      if (images[this.index] === null || images[this.index] === undefined) {
        this.index = 0
      }
      return images[this.index]
    }

  }
})

app.mount('#app')