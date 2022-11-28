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
      console.log(to.params.token)
      let payload = JSON.stringify(to.params.token)
      cookies.set('token', payload)
      let token = cookies.get('token')
      if (token !== null) {
        return (to.path = "people/contacts");
        // if (!token.status) {
        // } 
      // return (to.path = "people/contacts");
      // }
      // return true;
    }
    if (token == null) {
      return (to.path = "/")
    }
    return true
    },
    children: [
      { path: 'home', component: HomeView},
      { path: 'contacts', component: ContactsList},
      { path: 'report', component: ReportView }
    
    ]
  }
]

export default routes
