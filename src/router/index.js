import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Collection from '../views/Collection.vue'

const router = createRouter ({
    history : createWebHistory (),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/collection',
            component: Collection
        }
        
    ]
})

export default router