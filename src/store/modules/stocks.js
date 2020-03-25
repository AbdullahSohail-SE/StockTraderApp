const stocks=
  [
    { id:1,name:'BMW',price:110,title:'BMW',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem accusantium perferendis. Officia libero explicabo exercitationem quia vitae ab impedit.' },
    { id:2,name:'Mercedes',price:200,title:'Mercedes',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem accusantium perferendis. Officia libero explicabo exercitationem quia vitae ab impedit.' },
    { id:3,name:'Audi',price:350,title:'Audi',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem accusantium perferendis. Officia libero explicabo exercitationem quia vitae ab impedit.' },
    { id:4,name:'Bugatti',price:410,title:'Bugatti',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem accusantium perferendis. Officia libero explicabo exercitationem quia vitae ab impedit.' }
  ];


const state={
  stocks:[]
}
const mutations={
  'SET_STOCKS'(state,payload){
    state.stocks=payload;
  },
  'RND_STOCKS'(state){
    state.stocks.forEach(stock=>{
      stock.price=Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
}

const actions={
  buyStock:(state,order)=>{
    state.commit('BUY_STOCKS',order);
  },
  initStocks:(state)=>{
    state.commit('SET_STOCKS',stocks);
  },
  randomizeStocks:(state)=>{
    state.commit("RND_STOCKS");
  }
}
const getters={
  stocks:(state)=>{
    return state.stocks;
  }
};
export default {
  state,mutations,actions,getters
}