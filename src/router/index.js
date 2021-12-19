import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddNote from '../views/AddNote.vue'
import EditNote from '../views/EditNote.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddNote',
    component: AddNote
  },
  {
    path:'/notes/:id',
    name: 'EditNote',
    component: EditNote,
    props:true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
