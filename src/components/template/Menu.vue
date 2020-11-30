<template>
  <aside class="menu" v-show="menuEstaVisivel">
    <div class="filtro-menu">
      <i class="fa fa-search"></i>
      <input
        type="text"
        placeholder="Filtrar..."
        v-model="filtrarNaArvore"
        class="campo-filtro"
      />
    </div>
    <Arvore
      :data="dadosArvore"
      :options="opcoesArvore"
      :filter="filtrarNaArvore"
      ref="arvore"
    />
  </aside>
</template>

<script>
import { mapState } from "vuex";
import Arvore from "liquor-tree";
import { urlBaseApi } from "@/global";
import axios from "axios";

export default {
  name: "Menu",
  components: { Arvore },
  computed: mapState(["menuEstaVisivel"]),
  data: function () {
    return {
      filtrarNaArvore: "",
      dadosArvore: this.obterDadosArvore(),
      opcoesArvore: {
        propertyNames: {
          text: "name",
        },
        filter: {
          emptyText: "Categoria não encontrada",
        },
      },
    };
  },
  methods: {
    obterDadosArvore() {
      const url = `${urlBaseApi}/categorias/arvore`;
      return axios.get(url).then((res) => res.data);
    },
    noNoSelecionado(no) {
      this.$router.push({
        name: "artigosPorCategoria",
        params: { id: no.id },
      });
      if (this.$mq === 'xs' || this.$mq === 'sm') {
        this.$store.commit('alternanciaMenu', false)
      }
    },
  },
  mounted() {
    this.$refs.arvore.$on("node:selected", this.noNoSelecionado);
  },
};
</script>

<style>
.menu {
  grid-area: menu;
  /* background: linear-gradient(to right, #232526, #414345);  */
  background: #121214;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.menu span,
.menu span:hover {
  color: #F6F5F7;
  text-decoration: none;
}

.menu .tree-node:not(.selected) > .tree-content:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.menu .tree-node.selected > .tree-content {
  background-color: rgba(0, 0, 0, 0.2);
}

.tree-arrow.has-child {
  filter: brightness(27);
}

.menu .filtro-menu {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #F6F5F7;
}

.menu .filtro-menu i {
  color: #F6F5F7;
  margin-right: 10px;
}

.menu input {
  color: #F6F5F7;
  font-size: 1.3rem;
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
}

.tree-filter-empty {
  color: #F6F5F7;
  font-size: 1.3rem;
  margin-left: 20px;
}
</style>