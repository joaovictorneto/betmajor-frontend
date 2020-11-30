<template>
  <div class="conteudo-autenticacao">
    <div class="autenticacao-modal">
      <img src="@/assets/logo_betmajor_preta.png" width="300" alt="Logo" />
      <!-- <hr /> -->
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
@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
  font-family: 'Montserrat', sans-serif;
}

.conteudo-autenticacao {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.autenticacao-modal {
  background-color: #F6F5F7;
  border-radius: 10px;
  width: 768px;
  height: 480px;
  padding: 35px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.aut-titulo {
  font-family: 'Roboto Mono';
  color: #000;
  font-size: 2.0rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;
}

.autenticacao-modal input {
  border-radius: 20px;
  background-color: #121214;
  color: #F6F5F7;
  border: none;
  width: 100%; /* nao ultrapassa por causa do padding*/
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}

.autenticacao-modal input::placeholder{
  color: #F6F5F7;
  opacity: 1;
}

.autenticacao-modal input:focus{
  outline-offset: 0px;
}

.autenticacao-modal button {
  align-self: center;
  border: 1px solid rgb(18, 18, 20);
  border-radius: 20px;
  background-color: #121214;
  color: #F6F5F7;
  padding: 12px 45px; /* vertical 5px; horizontal 15px*/
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #F6F5F7;
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