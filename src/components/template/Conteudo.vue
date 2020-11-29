<template>
  <div class="conteudo">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Conteudo",
};
</script>

<style>
.conteudo {
  grid-area: conteudo;
  background-color: #fff;
  padding: 20px;
}
</style>