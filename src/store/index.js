import { createStore } from 'vuex'

export default createStore({
    state: {
        authenticated: false,
        user: null,
        token: null,
        All: null
    },
    mutations: {
        setAuth(state, user) {
            localStorage.setItem('AUTH', JSON.stringify(user))
            state.authenticated = true
            state.user = user
        },
        setToken(state, token) {
            localStorage.setItem('TOKEN', token)
            state.token = token
        },
        setAll(state, all) {
            localStorage.setItem('ALL', JSON.stringify(all))
            state.All = all
        },
        initialize(state) {
            if (localStorage.getItem('AUTH')) {
                state.authenticated = true
                state.user = JSON.parse(localStorage.getItem('AUTH'))
                state.token = localStorage.getItem('TOKEN')
                state.All = JSON.parse(localStorage.getItem('ALL'))
            } else {
                state.authenticated = false
                state.user = null
                state.token = null
                state.All = null
            }
        }
    },
    actions: {},
    modules: {}
})