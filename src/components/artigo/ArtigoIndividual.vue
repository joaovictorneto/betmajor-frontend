<template>
  <div class="artigo-individual">
    <router-link :to="{ name: 'artigoPorId', params: { id: artigo.id } }">
      <div class="artigo-individual-img d-none d-sm-block">
        <img
          v-if="artigo.imageUrl"
          :src="artigo.imageUrl"
          height="300"
          width="300"
          alt="Publicação"
        />
        <img
          v-else
          src="@/assets/publicacao.jpg"
          height="300"
          width="300"
          alt="Publicação"
        />
      </div>
      <div class="artigo-individual-info">
        <h2>{{ artigo.name }}</h2>
        <p>{{ artigo.description }}</p>
        <span class="artigo-individual-autor">
          <strong>Por: </strong>{{ artigo.author }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ArtigoIndividual",
  props: ["artigo"],
};
</script>

<style>
.artigo-individual {
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rba(0, 0, 0, 0.15);
}

.artigo-individual a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
}

.artigo-individual-info h2 {
    font-size: 1.7rem;
}

.artigo-individual-img {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid;
}

.artigo-individual-img img {
    object-fit: cover;
    border-radius: 5px;
}

.artigo-individual-info {
    display: flex;
    /* align-self: stretch; */
    flex-direction: column;
}

.artigo-individual-info p {
    /* flex: 1 */
    color: #555;
    font-size: 1.1rem;
}

</style>