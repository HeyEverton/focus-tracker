<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro' : modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>

    <div class="column is-three-quarter conteudo">
      <FormularioTemporizador @aoSalvarTarefa="salvarTarefa" />

      <div class="lista">
        <TarefaTask v-for="(tarefa, index) in tarefas" :key="index" :tarefaTask="tarefa" />
        <BoxMessage v-if="listaEstaVazia">
          Você não está muito produtivo hoje, hein! Vamos começar? :D
        </BoxMessage>
      </div>

    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue'
import BoxMessage from './components/BoxMessage.vue';
import FormularioTemporizador from './components/FormularioTemporizador.vue'
import TarefaTask from './components/TarefaTask.vue';
import ITarefa from './interfaces/ITarefa';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTemporizador,
    TarefaTask,
    BoxMessage,
  },

  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,

    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },

  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo

    }
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;

}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
