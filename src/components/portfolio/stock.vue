<template>
<div class="col-md-4 col-sm-6 col-lg-3 mt-3">
  <div class="card">
  <div class="card-header">
     {{stock.title}} - {{stock.price}}$ - (Quantity:{{stock.quantity}}) 
  </div>
  <div class="card-body">
    <h5 class="card-title">{{stock.title}}</h5>
    <p class="card-text">{{stock.content}}</p>
<form class="form-inline justify-content-between">
  <div class="form-group">
    <input type="number" class="form-control form-control-sm" id="Buy" placeholder="Quantity" v-model="quantity">
  </div>
  <button type="button"  class="btn btn-sm btn-primary" @click="sellStocks" :disabled="unrealQty || quantity <=0 ">Sell</button>
  <p style="color:red" class="mt-2" v-if="unrealQty">* You can't sell more than you have</p>
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
    unrealQty(){
      return this.stock.quantity < this.quantity; 
    }
  },
  methods:{
    sellStocks(){
      const order={
        stockId:this.stock.id,
        stockPrice:this.stock.price,
        quantity:this.quantity
      }
      this.quantity=0;
      this.$store.dispatch('sellStocks',order);
    }
  }
}
</script>
<style>

</style>