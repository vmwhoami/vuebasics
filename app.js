const app = Vue.createApp({
  template: '<h2>Hi {{firstName}} the {{lastName}}</h2>',
  data() {
    return {
      firstName: 'Adam',
      lastName: 'Melnic'
    }
  }
})

app.mount('#app')