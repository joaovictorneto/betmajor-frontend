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
          <b-tab class="guias" title="Categorias">
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

.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  color: #121214;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-tabs .nav-link {
  color: #121214;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.form-control:focus {
  color: #121214;
  background-color: #F6F5F7;
  border-color: #121214;
  outline: 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>