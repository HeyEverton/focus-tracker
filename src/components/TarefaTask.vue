<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{tarefaTask.descricao}}
            </div>

            <div class="column">
                <CronometroTempo :tempoEmSegundos="tarefaTask.duracaoEmSegundos" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ITarefa from '@/interfaces/ITarefa';
import { defineComponent, PropType } from 'vue';
import CronometroTempo from './CronometroTempo.vue';

export default defineComponent({
    name: 'TarefaTask',

    components: {
        CronometroTempo
    },

    props: {
        tarefaTask: {
            type: Object as PropType<ITarefa>,
            required: true,
        },
    },
})

</script>
<style lang="">
    
</style>