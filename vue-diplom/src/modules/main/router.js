import Main from './pages/Main.vue'
import Details from '../details/pages/Details.vue'

export const mainRoute=[
    {
        path:'/',
        name:'main',
        component:Main
    },
    {
        path:'/details/:title',
        name:'details',
        component:Details
    },
]