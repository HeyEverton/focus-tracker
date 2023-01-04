import { defineComponent } from 'vue';
<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'BoxMessage',

    data() {
        return {
            estilos: {
                backgroundColor: '#FAF0CA'
            }
        }
    },


})
</script>
<!-- <style scoped>
.box {
    background: #FAF0CA;
}
</style> -->