import Vue from 'vue'

export const chaveUsuario = '__betmajor_usuario'
export const urlBaseApi = 'https://betmajor-backend.herokuapp.com'

export function mostrarErro(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { urlBaseApi, mostrarErro , chaveUsuario }