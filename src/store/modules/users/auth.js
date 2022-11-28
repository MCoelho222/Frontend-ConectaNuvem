import axios from "axios"
import { useCookies } from "vue3-cookies";

const cookies = useCookies().cookies;

export default {
  namespaced: true,
  state () {
    return {
      url_auth: null,
      status: true
    }
  },
  getters: {
    
  },
  mutations: {
    setURL(state,  url) {
      state.url_auth = url
    }
  },
  actions: {
    async getUrlAuth(context) {
      context.commit("setURL", null);
      await axios.post("http://localhost:5000/users/auth/google").then((response) => {
        context.commit("setURL", response.data.url);
      })
    },
    async validateToken(context, token) {
      await axios.get(`http://localhost:5000/users/verify/?token=${token}`).then((response) => {
        let tokenObj = cookies.get('token')
        
        if (response.data.status == 'false') {
          tokenObj.status = false
        } 
        if (response.data.status == 'true') {
          tokenObj.status = true
        } 
        cookies.set('token', JSON.stringify(tokenObj))
      })
    },
    async logout (context) {
      await axios.get("http://localhost:5000/users/logout").then(() => {
        context.state.status = false
        let token = cookies.get('token')
        if (token !== null) {
            cookies.remove('token')
            localStorage.removeItem('people')
        }
      })
    }
  }
}

