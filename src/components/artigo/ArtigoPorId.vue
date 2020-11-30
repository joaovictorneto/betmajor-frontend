<template>
  <div class="artigo-por-id">
    <TituloPagina :principal="artigo.name" :sub="artigo.description" />
    <div class="artigo-conteudo" v-html="artigo.content"></div>
  </div>
</template>

<script>
import TituloPagina from "../template/TituloPagina";
import axios from "axios";
import { urlBaseApi } from "@/global";

export default {
  name: "ArtigoPorId",
  components: { TituloPagina },
  data: function () {
    return {
      artigo: {},
    };
  },
  mounted() {
    const url = `${urlBaseApi}/artigos/${this.$route.params.id}`;
    axios.get(url).then((res) => (this.artigo = res.data));
  },
};
</script>

<style>
.artigo-conteudo {
    background-color: #F6F5F7;
    border-radius: 8px;
    padding: 25px;
}

.artigo-conteudo pre {
    padding: 20px;
    border-radius: 8px;
    font-size: 1.2rem;
}

.artigo-conteudo img {
    max-width: 100%;
}

.artigo-conteudo :last-child  {
    margin-bottom: 0px;
}
</style>