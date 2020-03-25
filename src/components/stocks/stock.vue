<template>
<div class="col-md-4 col-sm-6 col-lg-3 mt-3">
  <div class="card">
  <div class="card-header">
    {{stock.name}} - {{stock.price}}$
  </div>
  <div class="card-body">
    <h5 class="card-title">{{stock.title}}</h5>
    <p class="card-text">{{stock.content}}</p>
<form class="form-inline justify-content-between">
  <div class="form-group">
    <input type="number" style="width:50%" class="form-control form-control-sm" id="Buy" placeholder="Quantity" v-model="quantity">
  </div>
  <button type="button" class="btn btn-sm btn-primary" @click="buyStocks()" :disabled="insufficientFunds || quantity <=0 ">Buy</button>
  <p style="color:red" class="mt-2" v-if="insufficientFunds">* You don't have enough funds</p>
</form>
    
  </div>
</div>
</div>
</template>
<script>
export default {
  props:["stock"],
  data(){
    return {
      quantity:0
    }
  },
  computed:{
    funds(){
      return this.$store.getters.funds;
    },
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods:{
    buyStocks(){
      const order={
        stockId:this.stock.id,
        stockPrice:this.stock.price,
        quantity:this.quantity
      };
      
       this.quantity = 0;
       this.$store.dispatch('buyStock',order);
      
       
    }
  }
}
</script>
<style>

</style>