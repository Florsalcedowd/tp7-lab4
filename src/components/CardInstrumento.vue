<template>
  <b-card
    :img-src="
      'http://localhost:9001/api/v1/instrumentos/images/' +
        instrumentoParam.imagen
    "
    img-alt="Imagen producto"
    img-width="20%"
    img-height="20%"
    img-left
  >
    <b-card-title
      :title="instrumentoParam.instrumento"
      class="tituloTarjeta"
    ></b-card-title>
    <b-card-text>
      <h3 :precio="instrumentoParam.precio" class="precio">
        $ {{ instrumentoParam.precio }}
      </h3>

      <p v-if="instrumentoParam.costoEnvio == 'G'" class="envioGratis">
        <img
          :src="'http://localhost:9001/api/v1/instrumentos/images/camion.png'"
          width="30px"
          class="mb-1"
        />
        Envio gratis a todo el país
      </p>
      <p v-else class="envioPago">
        Costo de Envio Interior de Argentina: ${{ instrumentoParam.costoEnvio }}
      </p>
      <p
        class="cantidadVendida"
        :cantidadVendida="instrumentoParam.cantidadVendida"
      >
        {{ instrumentoParam.cantidadVendida }} vendidos
      </p>
    </b-card-text>
    <b-button :href="'/detalle/' + instrumentoParam.id" variant="primary">
      <b>Detalle</b>
    </b-button>
  </b-card>
</template>
<script>
export default {
  props: ["instrumentoParam"],
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

.cantidadVendida {
  font-size: 14px;
}

.tituloTarjeta {
  font-size: 24px;
  font-weight: 300;
}
</style>
