<template>
  <div class="apostas">
    <!-- <TituloPagina principal="Apostas" sub="Apostas" /> -->
    <div class="times">
      <Time titulo="Time BOM" valor="REPL"/>
      <Time titulo="Time MT BOM" valor="MIBR"/>
      <Time titulo="Time 3" valor="REPL"/>
      <Time titulo="Time 4" valor="REPL"/>
      <Time titulo="Time 5" valor="MIBR"/>
      <Time titulo="Time 6" valor="Lindo time!" icone="fa fa-cogs"/>
    </div>
  </div>
</template>

<script>
// import TituloPagina from "../template/TituloPagina";
import Time from "./Time";

export default {
  name: "Apostas",
  components: {Time },
};
</script>

<style>
.times {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Está permitindo que quebre as linhas la do Time.vue */
}
</style>