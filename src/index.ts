import { ListaDeTarefas } from "./ListaDeTarefas";

const minhaLista = new ListaDeTarefas();

minhaLista.adicionarTarefa("estudar typescript");
minhaLista.adicionarTarefa("desenvolver um projeto");
minhaLista.adicionarTarefa("revisar código");

minhaLista.listarTarefas();

minhaLista.marcarTarefaComoConcluida(2);

minhaLista.listarTarefas();

minhaLista.marcarTarefaComoConcluida(5);

console.log('//////////////////////////');
console.log('Testando Exercicio Aula 01');
console.log('//////////////////////////');

minhaLista.removerTarefa(1);
minhaLista.listarTarefas();
