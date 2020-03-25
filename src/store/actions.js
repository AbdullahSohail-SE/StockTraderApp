import Vue from 'vue';
import axios from 'axios';

export const loadData = ({commit}) => {
  
  axios.get('/state.json')
  .then(record=>{
    const data=record.data;

    if (data) {
      const stocks = data.stocks;
      const funds = data.funds;
      const stockPortfolio = data.portfolio;
      console.log(stockPortfolio);
      const portfoliodata = {
          stockPortfolio,
          funds
      };
    
      commit('SET_STOCKS', stocks);
      commit('SET_PORTFOLIO', portfoliodata);
    }
    
  
  
  })
  .catch(error=>alert('Some error occured :('));
        
};
