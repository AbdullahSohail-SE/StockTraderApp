const state={
  funds:10000,
  stocks:[]
}

const mutations={
  'BUY_STOCKS'(state,{stockId,stockPrice,quantity}){
     quantity=Number(quantity);
     const obj=state.stocks.find(stock=>{
        return stock.stockId==stockId;
     });
    
    if(obj)
    {
      obj.quantity+=quantity;
    }
    else{
      state.stocks.push(
        {
          stockId,
          quantity 
        }
      );
    }
    state.funds-=stockPrice*quantity;
    
  },
  'SELL_STOCKS'(state,{stockId,stockPrice,quantity}){
      const record=state.stocks.find(stock=>{
        return stock.stockId==stockId;
     });
     if(record.quantity > quantity){
       record.quantity-=quantity;
     }
     else{
       state.stocks.splice(state.stocks.indexOf(record),1);
     }
     state.funds+=stockPrice*quantity;
  },
  'SET_PORTFOLIO'(state,{stockPortfolio,funds}){
    console.log(stockPortfolio);
    state.funds=funds;
  }

};

const actions={
  sellStocks:(state,order)=>
  {
    state.commit('SELL_STOCKS',order);
  }
}
const getters={
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
        const record = getters.stocks.find(element => element.id == stock.stockId);
        return {
            id: stock.stockId,
            quantity: stock.quantity,
            title: record.title,
            price: record.price
        }
    });
},
  funds(state)
  {
    return state.funds;
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}