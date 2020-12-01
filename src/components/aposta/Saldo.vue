<template>
  <div class="saldo">
    <div class="saldo-info">
      <span class="saldo-titulo">Você possui:</span>
      <span class="saldo-valor">R${{ valor }}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "Saldo",
props: ["valor"],
}
</script>

<style>
.saldo {
  color: #141212;
}

.saldo-info {
  background-color: #141212;
  color: #f6f5f7;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.saldo-titulo {
  font-size: 1.2rem;
}

.saldo-valor {
  font-size: 3rem;
}
</style>