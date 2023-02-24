import TarefasVue from "../views/TelaTarefas.vue";
import ProjetosVue from "../views/TelaProjetos.vue";
import FormularioVue from '../views/projetos/FormularioProjeto.vue'
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
    },
    {
        path: '/projetos/novo',
        name: 'Novo projeto',
        component: FormularioVue
    },
    {
        path: '/projetos/:id',
        name: 'Editar projeto',
        component: FormularioVue,
        props:true,
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador