<template>
  <div class="apostas">
    <TituloPagina principal="Apostas" sub="Hora de apostar" />
    <b-card no-body>
    <b-tabs pills card>
      <b-tab title="Partidas" active>
        <b-card-text>#1</b-card-text>
        <div class="times">
          <Time titulo="DISTRIBUIÇÃO DE APOSTAS" valor="MIBR vs FURIA"/>
        </div>
        <!-- <div class="botao-apostar">
        <p>Total de apostas: <strong>{{ contador }}</strong></p>
        <b-button variant="dark"  v-if="visivel != false">REALIZAR APOSTA</b-button>
        </div> -->
        <!-- <b-button v-on:click="contador -= 10">FAZER APOSTAS</b-button> -->
      </b-tab>
      
      <b-tab v-on:click="contador -= 20" title="Carteira">
        <Saldo :valor="contador"/>
        <!-- <hr> -->
        <!-- <p>SABE QNTS VEZES VC CLICOU NA PORRA DESTE BOTÃO? TA AI A RESPOSTA SEU CORNO: {{ contador }}</p> -->
      </b-tab>
    </b-tabs>
  </b-card>
  </div>
</template>

<script>
import Saldo from "./Saldo";
import TituloPagina from "../template/TituloPagina";
import Time from "./Time";

export default {
  name: "Apostas",
  components: { Saldo, TituloPagina, Time },
  data: function () {
    return {
      isBusy: false,
        items: [
          { first_name: 'Dickerson', last_name: 'MacDonald', age: 40 },
          { first_name: 'Larsen', last_name: 'Shaw', age: 21 },
          { first_name: 'Geneva', last_name: 'Wilson', age: 89 },
          { first_name: 'Jami', last_name: 'Carney', age: 38 }
        ],
      votar: "Votar neste time reverte o texto!",
      contador: 120,
      visivel: true
    };
  },
  methods: {
    msgContrario() {
      this.votar = this.votar.split("").reverse().join("");
    },
  },
};
</script>

<style>
.times {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Está permitindo que quebre as linhas la do Time.vue */
}

.times p {
  font-size: 2.9rem;
  margin: 30px;
  font-weight: bold;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
  color: #F6F5F7;
  background-color: #141212;
}

.nav-pills .nav-link {
  color: #121214;
  transition: 0.5s;
}

.nav-pills .nav-link:hover{
  color: #F6F5F7;
  background-color: #141212;
}

</style>