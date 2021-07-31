
Vue.component('imagine',{
  /*html*/
  template: `
   <div>
    <div class="flex h-80 w-1/2 relative " @click="changeIndx">
     <img :src="pictures[index]" alt="hello" class="absolute inset-0 w-full h-full object-cover">
    </div>
    </div>
    `,
  props: ['pictures'] 
  ,
  data(){
    return{
      index:0,
    }
  },
  methods:{
    changeIndx(){
      if(this.index>=this.pictures.length-1)return this.index=0;
      return this.index+=1
    }
  }
 
})