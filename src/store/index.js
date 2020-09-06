import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)
//创建vuex实例
const store = new Vuex.Store({
   state: {
      user:''
   }
})

//导出store
export default store
