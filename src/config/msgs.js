import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    // iconPack: 'fontawesome',
    position: "bottom-left", 
    // fullWidth: true,
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realizada com sucesso! :-)' : payload.msg,
    { type: 'success' },
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'ERRO!' : payload.msg,
    { type: 'error' }
)