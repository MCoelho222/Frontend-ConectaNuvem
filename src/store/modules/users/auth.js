import axios from "axios"
// import { useCookies } from "vue3-cookies";

// const cookies = useCookies().cookies;

export default {
  namespaced: true,
  state () {
    return {
      url_auth: null
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
        // let check = cookies.get('token')
        // if (check == null) {
        //   cookies.set('token', {
        //     'token': response.data.profile.token,
        //     'status': true
        //   })
        // }
        // context.state.personInfo = response.data
        // localStorage.setItem('people', JSON.stringify(response.data))
      })
    },
    // async validateToken(context, token) {
    //   // await axios.get(`http://localhost:5000/people/verify/?token=${token}`).then((response) => {
    //   //   if (response.data.status == 'false') {
    //   //     let tokenObj = cookies.get('token')
    //   //     tokenObj.status = false
    //   //     cookies.set('token', tokenObj)
    //   //   } 
    //   // })
    // }
  }
}

