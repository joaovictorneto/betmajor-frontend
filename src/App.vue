<template>
  <div id="app" :class="{ 'esconder-menu': !menuEstaVisivel || !usuario }">
    <Cabecalho
      
      :esconderAlternancia="!usuario"
      :esconderMenuSuspensoUsuario="!usuario"
    />
    <Menu v-if="usuario" />
    <Loading v-if="validandoToken"/>
    <Conteudo v-else/>
    <Rodape />
  </div>
</template>

<script>
import axios from "axios";
import { urlBaseApi, chaveUsuario } from "@/global";
import { mapState } from "vuex";
import Cabecalho from "@/components/template/Cabecalho";
import Menu from "@/components/template/Menu";
import Conteudo from "@/components/template/Conteudo";
import Rodape from "@/components/template/Rodape";
import Loading from "@/components/template/Loading";
export default {
  name: "App",
  components: { Cabecalho, Menu, Conteudo, Rodape, Loading },
  computed: mapState(["menuEstaVisivel", "usuario"]),
  data: function () {
    return {
      validandoToken: true,
    };
  },
  methods: {
    async validarToken() {
      this.validandoToken = true;
      const json = localStorage.getItem(chaveUsuario);
      const dadosUsuario = JSON.parse(json);
      this.$store.commit("setarUsuario", null);
      if (!dadosUsuario) {
        this.validandoToken = false;
        this.$router.push({ name: "autenticacao" });
        return;
      }
      const res = await axios.post(`${urlBaseApi}/validarToken`, dadosUsuario);
      if (res.data) {
        this.$store.commit("setarUsuario", dadosUsuario);
      } else {
        localStorage.removeItem(chaveUsuario);
        this.$router.push({ name: "autenticacao" });
      }
      this.validandoToken = false;
    },
  },
  created() {
    this.validarToken()
  }
};
</script>

<style>
* {
  font-family: 'Roboto Mono';
}
body {
  margin: 0;
}
#app {
  /* Suavidade no carregamento das fontes */
  -webkit-font-smoothing: antialisied;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 30px; /*1. 80PX=MENU; 1FRAME=CONTEUDO; 40PX=RODAPE. */
  grid-template-columns: 300px 1fr;
  grid-template-areas: /* 5 PARTES AO TOTAL, 3 LINHAS E 2 COLUNAS */
    "cabecalho cabecalho"
    "menu conteudo"
    "menu rodape";
}
#app.esconder-menu {
  grid-template-areas:
    "cabecalho cabecalho"
    "conteudo conteudo"
    "rodape rodape";
}
</style>
