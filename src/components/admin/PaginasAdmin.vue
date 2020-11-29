<template>
  <div class="paginas-admin">
    <TituloPagina
      principal="Painel de Controle"
      sub="Área restrita para administradores(as) do sistema"
    />
    <div class="paginas-admin-guias">
      <!-- <b-card nobody> -->
        <b-tabs content-class="mt-3" align="center">
          <b-tab title="Postagens" active>
            <ArtigoAdmin />
          </b-tab>
          <b-tab title="Categorias">
            <CategoriaAdmin />
          </b-tab>
          <b-tab title="Usuários">
            <UsuarioAdmin />
          </b-tab>
          <b-tab title="Apostas">
            
          </b-tab>
          <b-tab title="Times">

          </b-tab>
        </b-tabs>
      <!-- </b-card> -->
    </div>
  </div>
</template>

<script>
import TituloPagina from "../template/TituloPagina";
import ArtigoAdmin from "./ArtigoAdmin";
import CategoriaAdmin from "./CategoriaAdmin";
import UsuarioAdmin from "./UsuarioAdmin";

export default {
  name: "PaginasAdmin",
  components: { TituloPagina, ArtigoAdmin, CategoriaAdmin, UsuarioAdmin },
};
</script>

<style>
</style>