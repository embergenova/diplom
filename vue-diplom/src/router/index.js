import { createRouter, createWebHistory } from 'vue-router'
import { mainRoute } from '../modules/main/router'
import { detailsRoute } from '../modules/details/router'
import { authRoute } from '../modules/auth/router'
import { peopleRoute} from '../modules/people/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    authRoute,
    ...mainRoute,
    ...detailsRoute,
    ...peopleRoute
  ]
})

export default router

