<template>
  <header class="cabecalho">
    <a class="alternar" @click="alternanciaMenu" v-if="!esconderAlternancia">
      <i class="fa fa-lg" :class="icone"></i>
    </a>
    <div class="logo">
      <router-link to="/"><img fluid src="../../assets/Logo BetMajor.png"></router-link>
    </div>
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
  background-color: #121214;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position:fixed;
  left:0;          
  top:0;       
  width:100vw;
  height:80px;   */

}

.logo {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-grow: 1;
}

.logo a {
  text-decoration: none;
  color: #F2F2F2;
  width: 375px;
  align-self: center;
}

.logo img{
  max-width: 100%;
  height: auto;
}

header.cabecalho > a.alternar {
  width: 60px;
  height: 100%;
  color: #F6F5F7;
  justify-self: flex-start;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
}

header.cabecalho > a.alternar:hover {
  color: #F6F5F7;
  background-color: rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
  .logo{
    width: 210px;
  }
}

@media (max-width: 400px) {
  .logo{
    width: 190px;
  }
}

@media (max-width: 320px) {
  .logo{
    width: 140px;
  }
}
</style>