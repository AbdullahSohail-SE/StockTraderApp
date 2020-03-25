<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link class="navbar-brand" to="/">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="">
    <ul class="navbar-nav">
      <router-link to="/Stocks" tag="li" active-class="active" class="nav-item ">
        <a class="nav-link">Stocks</a>
      </router-link>
      <router-link to="/Portfolio" tag="li" active-class="active" class="nav-item">
        <a class="nav-link">Portfolio</a>
      </router-link>
    </ul>
  </div>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load Data
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" @click="saveData" href="#">Save Data</a>
          <a class="dropdown-item" @click="loadData" href="#">Load Data</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="endday">End Day</a>
      </li>
       <li class="nav-item">
        <a class="nav-link active" >Funds : {{ funds }}$</a>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
import axios from 'axios';
export default {
  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods:{
    endday(){
      this.$store.dispatch('randomizeStocks');
    },
    saveData(){
      const data={
        stocks:this.$store.getters.stocks,
        portfolio:this.$store.getters.stockPortfolio,
        funds:this.$store.getters.funds
      }
      axios.put('/state.json',data)
      .then(result=>console.log(result))
      .catch(error=>alert('Some error Occured!'));
    },
    loadData(){
      this.$store.dispatch('loadData');
    }
  }
}
</script>
<style>

</style>