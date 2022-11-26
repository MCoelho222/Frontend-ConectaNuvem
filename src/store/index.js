import { createStore } from 'vuex'
import auth from './modules/users/auth'

const store = createStore({
  modules: {
      auth,
  }
})

export default store