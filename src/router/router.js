import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Foods from '../components/Foods'
import Drinks from '../components/Drinks'
import Select from '../components/Select'
import HelloWorld from '../components/HelloWorld'
const routes = [{
        path: "/home",
        component: HelloWorld,
        children: [{
                path: "foods",
                name: "Foods",
                component: Foods
            },
            {
                path: "drinks",
                name: "Drinks",
                component: Drinks
            },
            {
                path: "/",
                name: "Foods",
                component: Foods
            }
        ]

    },
    {
        path: "/",
        component: Select
    }
]

var router = new VueRouter({
    routes
})
export default router