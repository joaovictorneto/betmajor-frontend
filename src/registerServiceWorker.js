/* eslint-disable no-console */

import { register } from 'register-service-worker'

//if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App está sendo provido pelo cache através service worker.\n' +
        'Para mais detalhes, visite https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker registrado com sucesso.')
    },
    cached () {
      console.log('Conteúdo foi armazenado no cache para uso offline.')
    },
    updatefound () {
      console.log('Novo conteúdo está carregando.')
    },
    updated () {
      console.log('Novo conteúdo disponível; por favor atualize a página.')
    },
    offline () {
      console.log('Sem conexão com a internet. App está rodando em modo offline.')
    },
    error (error) {
      console.error('Erro durante o registo do Service worker:', error)
    }
  })
//}
