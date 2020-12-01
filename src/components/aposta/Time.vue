<template>
  <div class="time">
    <div class="lado-superior-esquerdo">
      <img
        src="../../assets/Jogadores/MIBR/MIBR.png"
      />
      <!-- <img src="url_da_img_aki"> -->
    </div>
    <div class="time-info">
      <span class="time-titulo">{{ titulo }}</span>
      <span class="time-valor">{{ valor }}</span>
      <b-button variant="dark" @click="showModal">FAZER APOSTAS</b-button>
      
      <div class="modal">

    <b-modal centered ref="my-modal" hide-footer title="Fazer apostas">
      <div class="d-block text-center">
        <b-form-input v-model="valorapostar" placeholder="R$"></b-form-input>
        <hr>
        <b-form-select v-model="selected" :options="options" class="mb-3">
            <template #first>
              <b-form-select-option :value="null" disabled>-- Escolha o time --</b-form-select-option>
            </template>
          </b-form-select>
      </div>
      <div class="aposta-infos">
      Valor: <strong>R${{ valorapostar }}</strong> <hr>
      Time: <strong>{{ selected }}</strong><hr>
      Probabilidade: <strong>0.23%</strong><hr>
      </div>
      <b-button class="mt-3" variant="success" block @click="toggleModal" >Realizar Aposta</b-button>
      <!-- <b-button variant="danger" block @click="hideModal">CANCELAR</b-button> -->
    </b-modal>
      </div>
      <!-- <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Escolha o time"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-select v-model="selected" :options="options" class="mb-3">
            <template #first>
              <b-form-select-option :value="null" disabled>-- Escolha o time --</b-form-select-option>
            </template>
          </b-form-select>



          <div>
            Time: <strong>{{ selected }}</strong>
          </div>
          <div class="probabilidade">Probabilidade: <strong>0.2%</strong></div>
        </form>
      </b-modal> -->

      <!-- <b-button>FAZER APOSTAS</b-button> -->
    </div>
    <div class="lado-superior-direito">
      <img src="../../assets/Jogadores/Furia/Logo Furia.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Time",
  props: ["titulo", "valor", "imagem"],
  data: function () {
    return {
      valorapostar: '',
      selected: null,
      options: [
        { value: "MIBR", text: "MIBR" },
        { value: "FURIA", text: "FURIA" },
      ],
    };
  },
  methods: {
    showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        this.$refs['my-modal'].toggle('#toggle-btn')

      }
  }
};
</script>

<style>
.time {
  flex: 1;
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;
  /* border-radius: 40px; */
  background-color: #141212;
  color: #F6F5F7;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
}

.lado-superior-esquerdo img {
  max-width: 50px;
}

.lado-superior-direito img {
  max-width: 50px;
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