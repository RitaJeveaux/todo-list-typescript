import { ListaDeTarefas } from "./ListaDeTarefas";

const minhaLista = new ListaDeTarefas();

minhaLista.adicionarTarefa("estudar typescript");
minhaLista.adicionarTarefa("desenvolver um projeto");
minhaLista.adicionarTarefa("revisar código");


const dataLimite = new Date();
dataLimite.setDate(dataLimite.getDate() + 7);
minhaLista.adicionarTarefaComDataLimite("Entregar relatório", dataLimite);

console.log('|')
minhaLista.listarTarefas();
console.log('|')

minhaLista.marcarTarefaComoConcluida(2);

console.log('|')
minhaLista.listarTarefas();
console.log('|')

minhaLista.marcarTarefaComoConcluida(5);

minhaLista.removerTarefa(1);
console.log('|')
minhaLista.listarTarefas();
console.log('|')