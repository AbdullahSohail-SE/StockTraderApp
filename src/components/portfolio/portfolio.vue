<template>
<div class="row p-5">
  <appStock v-for="stock in stocks" :key="stock.stockId" :stock="stock"></appStock>
  <h5 v-if="stocks.length==0" class="">No stocks owned !</h5>
  
</div>
</template>
<script>
import stock from './stock'
export default {
  
  computed:{
    stocks(){
      return this.$store.getters.stockPortfolio;
    }
  },
  components:{
    appStock:stock
  }
}
</script>
<style scoped>

</style>