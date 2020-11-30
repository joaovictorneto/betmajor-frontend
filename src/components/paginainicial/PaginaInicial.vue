<template>
  <div class="portal">
    <TituloPagina principal="Inicio" sub="Estatísticas" />
    <h1><router-link to="/">ver as ultimas noticias</router-link></h1>
    <div class="estatisticas">
      <!-- <Estatistica titulo="Apostas" :valor="0" /> -->
      <Estatistica
        titulo="Categorias"
        :valor="estatistica.categorias"
        icone=""
      />
      <Estatistica titulo="Postagens" :valor="estatistica.artigos" />
      <Estatistica titulo="Usuários" :valor="estatistica.usuarios" />
      <Estatistica titulo="Apostas" :valor="0" /> 
      <!-- <Estatistica titulo=""/> -->
    </div>
    <!-- 

  <hr>
  <h1 align="center">Você tem 0.00 BetMoedas</h1> -->
  </div>
</template>

<script>
import TituloPagina from "../template/TituloPagina";
import Estatistica from "./Estatistica";
import axios from "axios";
import { urlBaseApi } from "@/global";

export default {
  name: "PaginaInicial",
  components: { TituloPagina, Estatistica },
  data: function () {
    return {
      estatistica: {},
      usuario: {},
    };
  },
  methods: {
    obterEstatisticas() {
      axios
        .get(`${urlBaseApi}/estatisticas`)
        .then((res) => (this.estatistica = res.data));
    },
  },
  mounted() {
    this.obterEstatisticas();
  },
};
</script>

<style>
.estatisticas {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Está permitindo que quebre as linhas la do Estatistica.vue */
}
</style>