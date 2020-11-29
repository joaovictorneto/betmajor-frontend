<template>
  <div class="categoria-admin">
    <b-form>
      <input id="categoria-id" type="hidden" v-model="categoria.id" />
      <b-form-group label="Nome:" label-for="categoria-nome">
        <b-form-input
          id="categoria-nome"
          type="text"
          v-model="categoria.name"
          :readonly="modo === 'remover'"
          placeholder="Digite o nome da categoria"
        />
      </b-form-group>
      <b-form-group label="Categoria Pai:" label-for="categoria-parentId">
        <b-form-select
          id="categoria-parentId"
          :options="categorias"
          :disabled="modo === 'remover'"
          v-model="categoria.parentId"
        />
      </b-form-group>
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
    </b-form>
    <b-table
      headVariant="dark"
      hover
      striped
      :items="categorias"
      :fields="campos"
    >
      <template v-slot:cell(actions)="data">
        <b-button
          variant="warning"
          @click="carregarCategoria(data.item)"
          class="mr-2"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="danger"
          @click="carregarCategoria(data.item, 'remover')"
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
  name: "CategoriaAdmin",
  data: function () {
    return {
      modo: "salvar",
      categoria: {},
      categorias: [],
      campos: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
        { key: "actions", label: "Opções" },
      ],
    };
  },
  methods: {
    carregarCategorias() {
      //Trazer categorias do back-end
      const url = `${urlBaseApi}/categorias`;
      axios.get(url).then((res) => {
        // this.categorias = res.data;
        this.categorias = res.data.map((categoria) => {
          return { ...categoria, value: categoria.id, text: categoria.path };
        });
      });
    },
    resetar() {
      this.modo = "salvar";
      this.categoria = {};
      this.carregarCategorias();
    },
    salvar() {
      const metodo = this.categoria.id ? "put" : "post";
      const id = this.categoria.id ? `/${this.categoria.id}` : "";
      axios[metodo](`${urlBaseApi}/categorias${id}`, this.categoria)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.resetar();
        })
        .catch(mostrarErro);
    },
    remover() {
      const id = this.categoria.id;
      axios
        .delete(`${urlBaseApi}/categorias/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.resetar();
        })
        .catch(mostrarErro);
    },
    carregarCategoria(categoria, modo = "salvar") {
      this.modo = modo;
      this.categoria = { ...categoria };
    },
  },
  mounted() {
    this.carregarCategorias();
  },
};
</script>

<style>
</style>