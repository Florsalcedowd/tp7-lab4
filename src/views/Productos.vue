<template>
  <div class="productos">
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <div
            class="cards mt-4 mb-4"
            v-for="instrumento in instrumentosData"
            :key="instrumento.id"
          >
            <instrumento-item
              :instrumentoParam="instrumento"
            ></instrumento-item>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CardInstrumento from "@/components/CardInstrumento.vue";
import axios from "axios";

export default {
  name: "Productos",
  components: {
    "instrumento-item": CardInstrumento,
  },
  mounted() {
    this.getInstrumentos();
  },
  data() {
    return {
      instrumentosData: [],
    };
  },
  methods: {
    getInstrumentos() {
      axios
        .get("http://localhost:9001/api/v1/instrumentos/all")
        .then((res) => {
          this.instrumentosData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
