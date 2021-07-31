let pictures = [
  "https://i.pinimg.com/originals/cf/43/b8/cf43b8bb3ed4be8021f3af5c5534585e.jpg",
  "https://i.redd.it/26myr3ckatu21.jpg",
  "https://www.victormagbrasil.com/wp-content/uploads/2016/12/sebastian-wileman-by-pat-supsiri-7.jpg",
  "https://i.pinimg.com/originals/bb/7e/99/bb7e99936053df002f25c6868d4b3b7c.jpg",
  "https://im0-tub-com.yandex.net/i?id=49899f88ec082236a593d225dcfbf290&n=13"
]

const app = new Vue({
  el: '#app',
  data: {
    name: 'Vitalie!',
    indx: 0,
    pictures
  }
})