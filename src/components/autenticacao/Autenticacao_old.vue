<template>
  <div class="conteudo-autenticacao">
    <div class="autenticacao-modal">
      <img src="@/assets/logo_betmajor.png" width="300" alt="Logo" />
      <hr />
      <div class="aut-titulo">
        {{ mostrarCadastro ? "Cadastre-se" : "Entrar" }}
      </div>
      <input
        type="text"
        v-if="mostrarCadastro"
        v-model="usuario.name"
        placeholder="Nome"
      />
      <input
        type="text"
        name="email"
        v-model="usuario.email"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        v-model="usuario.password"
        placeholder="Senha"
      />
      <input
        type="password"
        v-if="mostrarCadastro"
        v-model="usuario.confirmPassword"
        placeholder="Confirme a senha"
      />

      <button v-if="mostrarCadastro" @click="cadastrar">Cadastrar</button>
      <button v-else @click="entrar">Entrar</button>

      <a href @click.prevent="mostrarCadastro = !mostrarCadastro">
        <span v-if="mostrarCadastro">Ou entrar</span>
        <span v-else>ou Inscreva-se</span>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { urlBaseApi, mostrarErro, chaveUsuario } from "@/global";
export default {
  name: "Autenticacao",
  data: function () {
    return {
      mostrarCadastro: false,
      usuario: {},
    };
  },
  methods: {
    entrar() {
      axios
        .post(`${urlBaseApi}/entrar`, this.usuario)
        .then((res) => {
          this.$store.commit("setarUsuario", res.data);
          localStorage.setItem(chaveUsuario, JSON.stringify(res.data));
          this.$router.push({ path: "/" });
        })
        .catch(mostrarErro);
    },
    cadastrar() {
      axios
        .post(`${urlBaseApi}/cadastrar`, this.usuario)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.usuario = {};
          this.mostrarCadastro = false;
        })
        .catch(mostrarErro);
    },
  },
};
</script>

<style>
.conteudo-autenticacao {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.autenticacao-modal {
  background-color: #000;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.aut-titulo {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}

.autenticacao-modal input {
  border: 1px solid #bbb;
  width: 100%; /* nao ultrapassa por causa do padding*/
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}

.autenticacao-modal button {
  align-self: center;
  background-color: #000;
  color: #fff;
  padding: 5px 15px; /* vertical 5px; horizontal 15px*/
}

.autenticacao-modal a {
  margin-top: 35px;
}

.autenticacao-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}
</style>