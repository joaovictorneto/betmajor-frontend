<template>
  <div class="menususpenso-usuario">
    <div class="botao-usuario">
      <div class="menususpenso-usuario-img">
        <Gravatar :email="usuario.email" alt="usuario" />
      </div>
      <span class="d-none d-sm-block">{{ usuario.name }}</span>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="menususpenso-usuario-conteudo">
      <router-link to="/admin" v-if="usuario.admin">Área administrativa</router-link>
      <router-link to="/apostas">Apostas</router-link>
      <router-link to="/categorias/1/artigos">Notícias</router-link>
      <router-link to="/">Estatiscas</router-link>
      <a href @click.prevent="sair">Sair</a>
    </div>
  </div>
</template>

<script>
import { chaveUsuario } from "@/global";
import { mapState } from "vuex";
import Gravatar from "vue-gravatar";

export default {
  name: "MenuSuspensoUsuario",
  components: { Gravatar },
  computed: mapState(["usuario"]),
  methods: {
    sair() {
      localStorage.removeItem(chaveUsuario);
      this.$store.commit("setarUsuario", null);
      this.$router.push({ name: "autenticacao" });
    },
  },
};
</script>

<style>
.menususpenso-usuario {
  position: relative;
  height: 100%;
}

.botao-usuario {
  display: flex;
  align-items: center;
  color: #F6F5F7;
  height: 100%;
  padding: 0 20px;
}

.menususpenso-usuario:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.menususpenso-usuario-img {
  margin: 0px 12px;
}

.menususpenso-usuario-img > img {
  object-fit: cover;
  border-radius: 50%;
  max-height: 50px;
  max-width: 50px;
}

.fa-angle-down {
  margin: 0 10px;
}

.menususpenso-usuario-conteudo {
  position: absolute;
  right: 0px;
  background-color: #F6F5F7;
  min-width: 199px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1; /* Sobreposição/Ter prioridade */

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  visibility: hidden;
  /* opacity: 0; */
  /* transition: visibility 0s, opacity 0.5s linear; */
}

.menususpenso-usuario:hover .menususpenso-usuario-conteudo {
  /* Aplicar outra regra sobre o menususpenso-usuario-conteudo */
  visibility: visible;
  /* opacity: 1; */
}

.menususpenso-usuario-conteudo a {
  text-decoration: none;
  color: #000;
  padding: 10px;
}

/* .menususpenso-usuario-conteudo a:hover { 
    text-decoration: none;
    color: #000;
    background-color: rgba(0, 0, 0, 0.2);
}*/
</style>