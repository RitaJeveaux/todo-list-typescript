import { ListaDeTarefas } from "./ListaDeTarefas";

const minhaLista = new ListaDeTarefas();

minhaLista.adicionarTarefa("estudar typescript");
minhaLista.adicionarTarefa("desenvolver um projeto");
minhaLista.adicionarTarefa("revisar código");

minhaLista.listarTarefas();

minhaLista.marcarTarefaComoConcluida(2);

minhaLista.listarTarefas();

minhaLista.marcarTarefaComoConcluida(5);
