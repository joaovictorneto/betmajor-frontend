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
  background-color: #F6F5F7;
  padding: 20px;
}
</style>