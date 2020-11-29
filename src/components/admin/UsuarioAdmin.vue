<template>
  <div class="usuario-admin">
    <b-form>
      <input id="usuario-id" type="hidden" v-model="usuario.id" />
      <b-row>
        <b-col xs="12">
          <b-form-group label="Nome:" label-for="usuario-nome">
            <b-form-input
              id="usuario-nome"
              type="text"
              v-model="usuario.name"
              :readonly="modo === 'remover'"
              placeholder="Digite o nome do usuário"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12">
          <b-form-group label="E-mail:" label-for="usuario-email">
            <b-form-input
              id="usuario-email"
              type="email"
              v-model="usuario.email"
              :readonly="modo === 'remover'"
              placeholder="Digite o e-mail do usuário"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-show="modo === 'salvar'">
        <b-col xs="12">
          <b-form-group label="Senha:" label-for="usuario-senha">
            <b-form-input
              id="usuario-senha"
              type="password"
              v-model="usuario.password"
              placeholder="Digite a senha do usuário"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-show="modo === 'salvar'">
        <b-col xs="12">
          <b-form-group
            label="Confirmação de senha:"
            label-for="usuario-confirmar-senha"
          >
            <b-form-input
              id="usuario-confirmar-senha"
              type="password"
              v-model="usuario.confirmPassword"
              placeholder="Digite novamente a senha do usuário"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-checkbox id="usuario-admin" v-show="modo==='salvar'" v-model="usuario.admin" class="mb-3"
        >Administrador(a)?</b-form-checkbox
      >
      <b-row>
        <b-col xs="12">
          <b-button
            variant="primary"
            v-if="modo === 'salvar'"
            @click="salvar"
            class="mb-3 mr-2"
            >Salvar</b-button
          >
          <b-button
            variant="danger"
            v-if="modo === 'remover'"
            @click="remover"
            class="mb-3 mr-2"
            >Excluir</b-button
          >
          <b-button @click="resetar" class="mb-3">Cancelar</b-button>
        </b-col>
      </b-row>
    </b-form>
    <b-table headVariant="dark" hover striped :items="usuarios" :fields="campos">
      <template v-slot:cell(actions)="data">
        <b-button
          variant="warning"
          @click="carregarUsuario(data.item)"
          class="mr-2"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="danger"
          @click="carregarUsuario(data.item, 'remover')"
          class="mr-2"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { urlBaseApi, mostrarErro } from "@/global";
import axios from "axios";

export default {
  name: "UsuarioAdmin",
  data: function () {
    return {
      modo: "salvar",
      usuario: {},
      usuarios: [],
      campos: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin", label: "É Admin",
          sortable: true,
          formatter: (valor) => (valor ? "Sim" : "Não"),
        },
        { key: "actions", label: "Opções" },
      ],
    };
  },
  methods: {
    carregarUsuarios() {
      //Trazer usuarios do back-end
      const url = `${urlBaseApi}/usuarios`;
      axios.get(url).then((res) => {
        this.usuarios = res.data;
      });
    },
    resetar() {
      this.modo = "salvar";
      this.usuario = {};
      this.carregarUsuarios();
    },
    salvar() {
      const metodo = this.usuario.id ? "put" : "post";
      const id = this.usuario.id ? `/${this.usuario.id}` : "";
      axios[metodo](`${urlBaseApi}/usuarios${id}`, this.usuario)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.resetar();
        })
        .catch(mostrarErro);
    },
    remover() {
      const id = this.usuario.id;
      axios
        .delete(`${urlBaseApi}/usuarios/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.resetar();
        })
        .catch(mostrarErro);
    },
    carregarUsuario(usuario, modo = "salvar") {
      this.modo = modo;
      this.usuario = { ...usuario };
    },
  },
  mounted() {
    this.carregarUsuarios();
  },
};
</script>

<style>
</style>