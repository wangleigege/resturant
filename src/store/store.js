import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart_list: [],
        totalmoney: "0"
    },
    mutations: {
        increment(state, content) {
            state.cart_list.push(content)

        }
    }

})