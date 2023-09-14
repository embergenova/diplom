import Actor from '../actor/pages/Actore.vue'
import Details from '../details/pages/Details.vue'

export const detailsRoute=[
    {
        path:'/details/:title',
        name:'details',
        component:Details
    },
    {
        path:'/actor/:name',
        name:'actor',
        component:Actor
    },
]