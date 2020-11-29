<template>
  <div class="estatistica">
    <div class="estatistica-icone">
      <i :class="icone" :style="estilo"></i>
    </div>
    <div class="estatistica-info">
      <span class="estatistica-titulo">{{ titulo }}</span>
      <span class="estatistica-valor">{{ valor }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Estatistica",
  props: ["titulo", "valor", "icone", "cor"],
  computed: {
    estilo() {
      return "color: " + this.color || "#000";
    },
  },
};
</script>

<style>
.estatistica {
  flex: 1;
  display: flex;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.estatistica-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.estatistica-titulo {
    font-size: 1.2rem;
}

.estatistica-valor {
    font-size: 3rem;
}
</style>