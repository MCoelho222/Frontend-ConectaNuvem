import axios from "axios"
import { useCookies } from "vue3-cookies";

const cookies = useCookies().cookies;

export default {
  namespaced: true,
  state () {
    return {
      personInfo: {}
    }
    
  },
  getters: {
    sendPersonInfo(state) {
      return state.personInfo
    },
    sendPersonInfoKeys(state) {
      let keys = Object.keys(state.personInfo)
      return keys
    }
  },
  mutations: {
  },
  actions: {
    async getPersonInfo(context) {
      await axios.get("https://mcoelho-peop-4feilbi6na-rj.a.run.app/people", { 
        headers: {
            'Access-Control-Allow-Origin': "https://mcoelho-peop-4feilbi6na-rj.a.run.app/",
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '86400'
        }
    }).then((response) => {
        let check = cookies.get('token')
        if (check == null) {
          cookies.set('token', {
            'token': response.data.profile.token,
            'status': true
          })
        }
        context.state.personInfo = response.data
        localStorage.setItem('people', JSON.stringify(response.data))
      })
    },
    async validateToken(context, token) {
      await axios.get(`https://mcoelho-peop-4feilbi6na-rj.a.run.app/people/verify/?token=${token}`, { 
        headers: {
            'Access-Control-Allow-Origin': "https://mcoelho-peop-4feilbi6na-rj.a.run.app/",
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '86400'
        }
    }).then((response) => {
        if (response.data.status == 'false') {
          let tokenObj = cookies.get('token')
          tokenObj.status = false
          cookies.set('token', tokenObj)
        } 
      })
    }
  },
  modules: {
  }

}

