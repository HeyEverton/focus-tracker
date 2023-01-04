<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
            </div>

            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section>
                        <strong class="mr-6">{{ tempoDecorrido }}</strong>

                        <button class="button mr-5" @click="initCount">
                            <span class="icon">
                                <i class="fas fa-play"></i>
                            </span>
                            <span>play</span>
                        </button>
                        <button class="button" @click="endCount">
                            <span class="icon">
                                <i class="fas fa-stop"></i>
                            </span>
                            <span>stop</span>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
/* eslint-disable */
import { slotFlagsText } from '@vue/shared'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FormularioTemporizador',

    data() {
        return {
            tempoEmSegundos: 0
        }
    },

    computed: {
        tempoDecorrido() : string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8)
        }
    },

    methods: {
        initCount() {

            setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)

            console.log('iniciou')
        },

        endCount() {
            console.log('finalizou')
        },
    },
})
</script>

<style scoped>

</style>