<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>

            <div class="column">
                <TemporizadorBotoes @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>

</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue'
import CronometroTempo from './CronometroTempo.vue'
import TemporizadorBotoes from './TemporizadorBotoes.vue'

export default defineComponent({
    name: "FormularioTemporizador",

    emits: ['aoSalvarTarefa'],

    data() {
        return {
            descricao: ''
        }
    },

    components: {
        CronometroTempo,
        TemporizadorBotoes
    },

    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ''
        }
    },


})
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>