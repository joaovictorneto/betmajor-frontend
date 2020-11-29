import Vue from 'vue'
import VueRouter from 'vue-router'

import PaginaInicial from '@/components/paginainicial/PaginaInicial'
import PaginasAdmin from '@/components/admin/PaginasAdmin'
import ArtigosPorCategoria from '@/components/artigo/ArtigosPorCategoria'
import ArtigoPorId from '@/components/artigo/ArtigoPorId'
import Autenticacao from '@/components/autenticacao/Autenticacao'
import Apostas from '@/components/aposta/Apostas'

import { chaveUsuario } from "@/global";

Vue.use(VueRouter)

const rotas = [{
    name: 'paginainicial',
    path: '/',
    component: PaginaInicial
}, {
    name: 'paginasAdmin',
    path: '/admin',
    component: PaginasAdmin,
    meta: { requerAdmin: true } //Vem de meta dadosPropriedade para chamar uma flag
}, {
    name: 'artigosPorCategoria',
    path: '/categorias/:id/artigos',
    component: ArtigosPorCategoria
}, {
    name: 'artigoPorId',
    path: '/artigos/:id',
    component: ArtigoPorId
}, {
    name: 'autenticacao',
    path: '/autenticacao',
    component: Autenticacao
}, {
    name: 'apostas',
    path: '/apostas',
    component: Apostas
}]

const router = new VueRouter({
    mode: 'history',
    routes: rotas
})

//Validando admin
router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(chaveUsuario)

    if (to.matched.some(record => record.meta.requerAdmin)) {
        // essa rota requer poderes de admin, checa
        // se não, redireciona para a pagina home.
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router