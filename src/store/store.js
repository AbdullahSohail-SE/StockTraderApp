import vue from 'vue';
import vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import * as actions from './actions'

vue.use(vuex);

export default  new vuex.Store({
  state:{

  },
  getters:{

  },
  mutations:{

  },
  actions, 
  modules:{
    stocks,
    portfolio,
    actions
  }
});