<template>
  <div class="artigos-por-categoria">
    <TituloPagina :principal="categoria.name" sub="Categoria" />
    <!-- o sub poderia ser a descricao...  -->
    <ul>
      <li v-for="artigo in artigos" :key="artigo.id">
        <ArtigoIndividual :artigo="artigo" />
      </li>
    </ul>
    <div class="carregar-mais">
      <button
        v-if="carregarMais"
        class="btn btn-lg btn-primary"
        @click="obterArtigos"
      >
        carregar mais...
      </button>
    </div>
  </div>
</template>

<script>
import TituloPagina from "../template/TituloPagina";
import axios from "axios";
import { urlBaseApi } from "@/global";
import ArtigoIndividual from "./ArtigoIndividual";

export default {
  name: "ArtigosPorCategoria",
  components: { TituloPagina, ArtigoIndividual },
  data: function () {
    return {
      categoria: {},
      artigos: [],
      pagina: 1,
      carregarMais: true,
    };
  },
  methods: {
    obterCategoria() {
      const url = `${urlBaseApi}/categorias/${this.categoria.id}`;
      axios(url).then((res) => (this.categoria = res.data));
    },
    obterArtigos() {
      const url = `${urlBaseApi}/categorias/${this.categoria.id}/artigos?page=${this.pagina}`;
      axios(url).then((res) => {
        this.artigos = this.artigos.concat(res.data);
        this.pagina++;

        if (res.data.length === 0) this.carregarMais = false;
      });
    },
  },
  watch: {
    $route(to) {
      this.categoria.id = to.params.id;
      this.artigos = [];
      this.pagina = 1;
      this.carregarMais = true;
      this.obterCategoria();
      this.obterArtigos();
    },
  },
  mounted() {
    this.categoria.id = this.$route.params.id;
    this.obterCategoria();
    this.obterArtigos();
  },
};
</script>

<style>
.artigos-por-categoria ul {
  list-style-type: none;
  padding: 0px;
}

.artigos-por-categoria .carregar-mais {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}

.artigo-individual {
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #121214;
}

.artigo-individual-info p {
  color: #F6F5F7;
  font-size: 1.1rem;
}

.btn-primary {
  color: #F6F5F7 !important;
  background-color: #121214 !important;
  border-color: #121214 !important;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) !important;
}

.artigo-individual a{
  color: #F6F5F7;
}
</style>