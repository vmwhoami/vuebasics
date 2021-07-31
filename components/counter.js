
Vue.component('counter',{
  /*html*/
  template: `
  <button class="bg-red-500 w-7 h-7 text-white" @click="count+=1">
  {{count}}
  </button>
  `,
   data(){
     return{
       count:0
     }
   },
 
})