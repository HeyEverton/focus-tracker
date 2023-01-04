<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>

    <div class="column is-three-quarter">
      <FormularioTemporizador />
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue'
import FormularioTemporizador from './components/FormularioTemporizador.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTemporizador
  }
});
</script>

<style>

</style>
