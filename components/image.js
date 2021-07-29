
app.component('image',{
  /*html*/
  template: `
  <img :src="image"  alt="hello" class="w-100 h-100 inset-0 w-full h-full object-cover" />
  `,
  props:{
    image:{
      type: String,
      required: true
    }
  },
})