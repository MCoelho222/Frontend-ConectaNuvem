import axios from "axios";
import { useCookies } from "vue3-cookies";

const cookies = useCookies().cookies;

export default {
  namespaced: true,
  state () {
    return {
      personInfo: {},
      backendUrl: 'https://mcoelho-contacts-4feilbi6na-rj.a.run.app/'
    }
  },
  getters: {
  },
  mutations: {
    
  },
  actions: {
    async getPersonInfo(context, token) {
      await axios.get(`${context.state.backendUrl}/people/?token=${token}`).then((response) => {
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

