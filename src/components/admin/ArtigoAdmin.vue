<template>
  <div class="artigo-admin">
    <b-form>
      <input id="artigo-id" type="hidden" v-model="artigo.id" />
      <b-form-group label="Título:" label-for="artigo-nome">
        <b-form-input
          id="artigo-nome"
          type="text"
          v-model="artigo.name"
          :readonly="modo === 'remover'"
          placeholder="Dê um título para sua postagem"
        />
      </b-form-group>
      <b-form-group label="Descrição:" label-for="artigo-descricao">
        <b-form-input
          id="artigo-descricao"
          type="text"
          v-model="artigo.description"
          :readonly="modo === 'remover'"
          placeholder="Descreva sua postagem"
        />
      </b-form-group>
      <b-form-group
        v-if="modo === 'salvar'"
        label="Imagem de Capa da Postagem (URL):"
        label-for="artigo-imagemUrl"
      >
        <b-form-input
          id="artigo-imagemUrl"
          type="text"
          v-model="artigo.imageUrl"
          :readonly="modo === 'remover'"
          placeholder="URL DA IMAGEM"
        />
      </b-form-group>
      <b-form-group
        v-if="modo === 'salvar'"
        label="Categoria:"
        label-for="artigo-categoriaId"
      >
        <b-form-select
          id="artigo-categoriaId"
          :options="categorias"
          v-model="artigo.categoryId"
        />
      </b-form-group>
      <b-form-group
        v-if="modo === 'salvar'"
        label="Autor(a):"
        label-for="artigo-usuarioId"
      >
        <b-form-select
          id="artigo-usuarioId"
          :options="usuarios"
          v-model="artigo.userId"
        />
      </b-form-group>
      <b-form-group
        v-if="modo === 'salvar'"
        label="Conteúdo:"
        label-for="artigo-conteudo"
      >
        <VueEditor
          v-model="artigo.content"
          placeholder="Arrasa no texto aqui em gata!"
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
    <b-table headVariant="dark" hover striped :items="artigos" :fields="campos">
      <template v-slot:cell(actions)="data">
        <b-button
          variant="warning"
          @click="carregarArtigo(data.item)"
          class="mr-2"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button
          variant="danger"
          @click="carregarArtigo(data.item, 'remover')"
          class="mr-2"
        >
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
    <b-pagination
      size="md"
      v-model="pagina"
      :total-rows="contagem"
      :per-page="limite"
    />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { urlBaseApi, mostrarErro } from "@/global";
import axios from "axios";

export default {
  name: "ArtigoAdmin",
  components: { VueEditor },
  data: function () {
    return {
      modo: "salvar",
      artigo: {},
      artigos: [],
      categorias: [],
      usuarios: [],
      pagina: 1,
      limite: 0,
      contagem: 0,
      campos: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Título", sortable: true },
        { key: "description", label: "Descrição", sortable: true },
        { key: "actions", label: "Opções" },
      ],
    };
  },
  methods: {
    carregarArtigos() {
      //Trazer categorias do back-end
      const url = `${urlBaseApi}/artigos?page=${this.pagina}`;
      axios.get(url).then((res) => {
        this.artigos = res.data.data;
        this.contagem = res.data.count;
        this.limite = res.data.limit;
      });
    },
    resetar() {
      this.modo = "salvar";
      this.artigo = {};
      this.carregarArtigos();
    },
    salvar() {
      const metodo = this.artigo.id ? "put" : "post";
      const id = this.artigo.id ? `/${this.artigo.id}` : "";
      axios[metodo](`${urlBaseApi}/artigos${id}`, this.artigo)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.resetar();
        })
        .catch(mostrarErro);
    },
    remover() {
      const id = this.artigo.id;
      axios
        .delete(`${urlBaseApi}/artigos/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.resetar();
        })
        .catch(mostrarErro);
    },
    carregarArtigo(artigo, modo = "salvar") {
      this.modo = modo;
      axios
        .get(`${urlBaseApi}/artigos/${artigo.id}`)
        .then((res) => (this.artigo = res.data));
    },
    carregarCategorias() {
      const url = `${urlBaseApi}/categorias`;
      axios.get(url).then((res) => {
        this.categorias = res.data.map((categoria) => {
          return { value: categoria.id, text: categoria.path };
        });
      });
    },
    carregarUsuarios() {
      const url = `${urlBaseApi}/usuarios`;
      axios.get(url).then((res) => {
        this.usuarios = res.data.map((usuario) => {
          return {
            value: usuario.id,
            text: `${usuario.name} - ${usuario.email}`,
          };
        });
      });
    },
  },
  watch: {
    pagina() {
      // console.log(this.pagina);
      this.carregarArtigos()
    },
  },
  mounted() {
    this.carregarUsuarios();
    this.carregarCategorias();
    this.carregarArtigos();
  },
};
</script>

<style>
</style>