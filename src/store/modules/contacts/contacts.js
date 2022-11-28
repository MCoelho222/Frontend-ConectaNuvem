import axios from "axios"
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
      await axios.get("http://localhost:5000/people/").then((response) => {
        console.log(response.data)
        let check = cookies.get('token')
        if (check !== null) {
            context.state.personInfo = response.data
            localStorage.setItem('people', JSON.stringify(response.data))
        }
      })
    },
    async validateToken(context, token) {
      await axios.get(`http://localhost:5000/people/verify/?token=${token}`).then((response) => {
        if (response.data.status == 'false') {
          let tokenObj = cookies.get('token')
          tokenObj.status = false
          cookies.set('token', tokenObj)
        } 
      })
    }
  }

}

