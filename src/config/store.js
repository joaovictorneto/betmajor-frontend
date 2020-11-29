import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuEstaVisivel: false,
        usuario: null
    },
    mutations: {
        alternanciaMenu(state, estaVisivel) {
            if (!state.usuario) {
                state.menuEstaVisivel = false
                return
            }

            if (estaVisivel === undefined) {
                state.menuEstaVisivel = !state.menuEstaVisivel
            } else {
                state.menuEstaVisivel = estaVisivel
            }
            // console.log('alternanciaMenu = ' + state.menuEstaVisivel)
        },
        setarUsuario(state, usuario) {
            state.usuario = usuario
            if (usuario) {
                axios.defaults.headers.common['Authorization'] = `bearer ${usuario.token}`
                state.menuEstaVisivel = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.menuEstaVisivel = false
            }
        }
    }
})