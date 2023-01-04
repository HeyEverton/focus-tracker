<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>

    <div class="column is-three-quarter">
      <FormularioTemporizador @aoSalvarTarefa="salvarTarefa" />

      <div class="lista">
        <TarefaTask v-for="(tarefa, index) in tarefas" :key="index" :tarefaTask="tarefa"/>
      </div>


    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue'
import FormularioTemporizador from './components/FormularioTemporizador.vue'
import TarefaTask from './components/TarefaTask.vue';
import ITarefa from './interfaces/ITarefa';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTemporizador,
    TarefaTask,
  },

  data() {
    return {
      tarefas: [] as ITarefa[]
    }
  },

  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  },
});
</script>

<style>

</style>
