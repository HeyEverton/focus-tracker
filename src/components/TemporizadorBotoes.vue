<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">

        <CronometroTempo :tempoEmSegundos="tempoEmSegundos" />

        <button class="button" @click="initCount" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>

        <button class="button" @click="endCount" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>
<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue'
import CronometroTempo from './CronometroTempo.vue'

export default defineComponent({
    name: "TemporizadorBotoes",
    emits: ['aoTemporizadorFinalizado'],

    components: {
        CronometroTempo
    },

    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
        };
    },

    methods: {
        initCount() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000);
            console.log("iniciou");
        },

        endCount() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0

        },
    },

})
</script>
<style lang="">
    
</style>