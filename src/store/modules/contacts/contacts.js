import axios from "axios";
import { useCookies } from "vue3-cookies";

const cookies = useCookies().cookies;

export default {
  namespaced: true,
  state () {
    return {
      personInfo: {},
    }
  },
  getters: {
  },
  mutations: {
    
  },
  actions: {
    async getPersonInfo(context, token) {
      await axios.get(`http://localhost:5000/people/?token=${token}`).then((response) => {
        let check = cookies.get('token')
        if (response.error) {
          check.status = false
          let newToken = JSON.stringify(check)
          cookies.set('token', newToken)
        }
        else {
          if (check !== null && check.status) {
            localStorage.setItem('people', JSON.stringify(response.data))
          }
        }
      })
    },
  }
}

