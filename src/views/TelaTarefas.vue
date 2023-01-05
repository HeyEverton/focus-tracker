<template>
    <FormularioTemporizador @aoSalvarTarefa="salvarTarefa" />

    <div class="lista">
        <BoxMessage v-if="listaEstaVazia">
            Você não está muito produtivo hoje, hein! Vamos começar? :D
        </BoxMessage>
        <TarefaTask v-for="(tarefa, index) in tarefas" :key="index" :tarefaTask="tarefa" />
    </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BoxMessage from '../components/BoxMessage.vue';
import FormularioTemporizador from '../components/FormularioTemporizador.vue'
import TarefaTask from '../components/TarefaTask.vue';
import ITarefa from '../interfaces/ITarefa';

export default defineComponent({
    name: 'App',
    components: {
        FormularioTemporizador,
        TarefaTask,
        BoxMessage,
    },

    data() {
        return {
            tarefas: [] as ITarefa[],
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

    },
});
</script>
