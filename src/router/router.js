import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Foods from '../components/FoodsTotal/Foods'
import Drinks from '../components/FoodsTotal/Drinks'
import Select from '../components/Select'
import HelloWorld from '../components/FoodsTotal/HelloWorld'
import Pays from '../components/Pays'
import Address from '../components/Address'
import Registed from '../components/Registed'
import Home from '../components/Home'
import Book from '../components/Books/Book'
import FeedBack from '../components/FeedBack'
import BookStore from '../components/Books/Book_store'
import Digital from '../components/Digitals/Digital'
import Digtal_child from '../components/Digitals/Digtal_child'
import Landing from '../components/Landing'
import appLanding from '../components/appLanding'

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
                path: "",
                name: "Foods",
                component: Foods
            }
        ]

    },
    {
        path: "/book",
        component: Book,
        children: [{
                path: 'bookstore',
                component: BookStore

            },
            {
                path: "",
                component: BookStore
            }
        ]
    },
    {
        path: '/digital',
        component: Digital,
        children: [{
                path: 'digital_child',
                component: Digtal_child

            },
            {
                path: '',
                component: Digtal_child
            }
        ]

    },
    {
        path: '/address',
        component: Address
    },
    {
        path: '/pays',
        component: Pays
    },
    {
        path: '/select',
        component: Select
    },
    {
        path: '/registed',
        component: Registed
    },
    {
        path: '/feed',
        component: FeedBack
    },
    {
        path: '/land',
        component: Landing
    },
    {
        path: '/appland',
        component: appLanding
    },

    {
        path: "/",
        component: Home
    }
]

var router = new VueRouter({
    routes
})
export default router