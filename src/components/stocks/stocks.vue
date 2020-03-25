<template>
  <div class="row p-5">
    <appStock v-for="stock in stocks" :key="stock.id" :stock="stock"></appStock>
  </div>
  
</template>

<script>
import stock from './stock'

export default {
  data(){
    return {
      
    }
  },
  components:{
    'appStock':stock
  },
  computed:{
    stocks(){
      return this.$store.getters.stocks;
    }
  }
}
</script>