
app.component('counter',{
  /*html*/
  template: `
  <button class="bg-red" @click="count+=1">
  {{count}}
  </button>
  `,
   data(){
     return{
       count:0
     }
   },
 
})