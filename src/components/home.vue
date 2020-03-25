<template>
<div class="p-5">
<h4>Trade Stocks with ease</h4>
<h6>Buy and Sell to make fortune</h6>
<p>Your Current Funds : {{ funds }}$</p>
</div>
</template>
<script>
export default {
  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  }
}
</script>