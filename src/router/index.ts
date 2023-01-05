import TarefasVue from "../views/TelaTarefas.vue";
import ProjetosVue from "../views/TelaProjetos.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: TarefasVue
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: ProjetosVue
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador