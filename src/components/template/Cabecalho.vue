<template>
  <header class="cabecalho">
    <a class="alternar" @click="alternanciaMenu" v-if="!esconderAlternancia">
      <i class="fa fa-lg" :class="icone"></i>
    </a>
    <h1 class="titulo">
      <router-link to="/">{{ titulo }}</router-link>
    </h1>
    <MenuSuspensoUsuario v-if="!esconderMenuSuspensoUsuario" />
  </header>
</template>

<script>
import MenuSuspensoUsuario from "./MenuSuspensoUsuario";

export default {
  name: "Cabecalho",
  components: { MenuSuspensoUsuario },
  props: {
    titulo: String,
    esconderAlternancia: Boolean,
    esconderMenuSuspensoUsuario: Boolean
  },
  computed: {
    icone() {
      return this.$store.state.menuEstaVisivel
        ? "fa-angle-left"
        : "fa-angle-down";
    },
  },
  methods: {
    alternanciaMenu() {
      this.$store.commit("alternanciaMenu");
      // console.log('alternanciaMenu')
    },
  },
};
</script>

<style>
.cabecalho {
  grid-area: cabecalho;
  background-color: #242526;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position:fixed;
  left:0;          
  top:0;       
  width:100vw;
  height:80px;   */

}

.titulo {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}

.titulo a {
  color: #fff;
  text-decoration: none; /* tirar a decoracao texto-link */
}

.titulo a:hover {
  color: #fff;
  text-decoration: none; /* tirar a decoracao texto-link */
}

header.cabecalho > a.alternar {
  width: 60px;
  height: 100%;
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
}

header.cabecalho > a.alternar:hover {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>