<template>
  <b-container class="mt-5">
    <b-row>
      <b-col class="border-right">
        <img
          :src="
            'http://localhost:9001/api/v1/instrumentos/images/' +
              instrumentoEncontrado.imagen
          "
          alt="Imagen producto"
          class="imgDetails"
        />
        <div class="descripcionInstrumento">
          <h5>Descipción</h5>
          <p>{{ instrumentoEncontrado.descripcion }}</p>
        </div>
      </b-col>
      <b-col>
        <p class="cantidadVendida">
          {{ instrumentoEncontrado.cantidadVendida }} vendidos
        </p>
        <h3 class="tituloDescripcion">
          {{ instrumentoEncontrado.instrumento }}
        </h3>
        <h2 class="precio">${{ instrumentoEncontrado.precio }}</h2>
        <br />
        <p>Marca: {{ instrumentoEncontrado.marca }}</p>
        <p>Modelo: {{ instrumentoEncontrado.modelo }}</p>
        <div v-if="instrumentoEncontrado.costoEnvio == 'G'">
          <img
            :src="'http://localhost:9001/api/v1/instrumentos/images/camion.png'"
            width="30px"
            class="mb-1"
          />
          <span class="envioGratis">Envío gratis a todo el país</span>
        </div>
        <div v-else>
          <p class="envioPago">
            Costo de Envio Interior de Argentina: ${{
              instrumentoEncontrado.costoEnvio
            }}
          </p>
        </div>
        <br />
        <button class="btn btn-primary">Agregar al carrito</button>
      </b-col>
    </b-row>
    <b-row>
      <a class="btn btn-primary" href="/productos">Volver</a>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "DetalleProducto",
  components: {},
  mounted() {
    this.getInstrumentoXId();
  },
  data() {
    return {
      instrumentoEncontrado: [],
    };
  },
  methods: {
    async getInstrumentoXId() {
      const parametroId = this.$route.params.id;
      const res = await fetch(
        "http://localhost:9001/api/v1/instrumentos/" + parametroId
      );
      const resJson = await res.json();
      this.instrumentoEncontrado = resJson;
      /* 
      this.instrumentoEncontrado = await resJson.instrumentos.find(
        (instrumento) => instrumento.id === parametroId
      ); */
    },
  },
};
</script>

<style>
.envioGratis {
  color: #68966f;
  font-size: 14px;
}

.envioPago {
  color: #d2691e;
  font-size: 14px;
}

.precio {
  font-size: 36px;
  font-weight: 500;
}

.tituloDescripcion {
  font-weight: 300;
}

.cantidadVendida {
  font-size: 14px;
}

.descripcionInstrumento {
  font-size: 14px;
  margin-top: 25px;
}

.imgDetails {
  height: 300px;
  width: auto;
  display: flex;
  margin: 0 auto;
}
</style>
