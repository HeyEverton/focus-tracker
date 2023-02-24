<template>
    <BoxMessage class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{ tarefaTask.descricao || 'Tarefa sem descrição' }}
            </div>

            <div class="column">
                <CronometroTempo :tempoEmSegundos="tarefaTask.duracaoEmSegundos" />
            </div>
        </div>
    </BoxMessage>
</template>

<script lang="ts">
import ITarefa from '@/interfaces/ITarefa';
import { defineComponent, PropType } from 'vue';
import BoxMessage from './BoxMessage.vue';
import CronometroTempo from './CronometroTempo.vue';

export default defineComponent({
    name: 'TarefaTask',

    components: {
        CronometroTempo,
        BoxMessage,
    },

    props: {
        tarefaTask: {
            type: Object as PropType<ITarefa>,
            required: true,
        },
    },
    // computed: {
    //     tempoGasto(): string {
    //         return new Date(this.tarefa.duracaoEmSegundos * 1000)
    //             .toISOString()
    //             .substr(11, 8)
    //     }
    // }
})

</script>
<style lang="">
    
</style>