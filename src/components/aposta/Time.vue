<template>
  <div class="time">
    <div class="time-icone">
      <i :class="icone" :style="estilo"></i>
    </div>
    <div class="time-info">
      <span class="time-titulo">{{ titulo }}</span>
      <span class="time-valor">{{ valor }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Time",
  props: ["titulo", "valor", "icone", "cor"],
  computed: {
    estilo() {
      return "color: " + this.color || "#000";
    },
  },
};
</script>

<style>
.time {
  flex: 1;
  display: flex;
  border-radius: 0px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: red;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
}

.time-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.time-titulo {
    font-size: 1.2rem;
}

.time-valor {
    font-size: 3rem;
}
</style>