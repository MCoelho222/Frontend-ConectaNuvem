// import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../../views/UserLogin.vue'
import TemplateView from '../../views/TemplateView.vue'
import ReportView from '../../views/ReportView.vue'
import HomeView from '../../views/HomeView.vue'
import ContactsList from '../../views/ContactsList.vue'
import { useCookies } from "vue3-cookies";

const cookies = useCookies().cookies;

const routes = [
  {
    path: '/',
    name: 'Login',
    component: UserLogin
  },
  {
    path: "/people/:token?",
    component: TemplateView,
    beforeEnter: (to) => {
      if (to.params.token) {
        cookies.set('token', to.params.token)
        return (to.path = "/people/contacts")
      }
   
    },
    children: [
      { path: 'home', component: HomeView},
      { path: 'contacts', component: ContactsList},
      { path: 'report', component: ReportView }
    
    ]
  }
]

export default routes
