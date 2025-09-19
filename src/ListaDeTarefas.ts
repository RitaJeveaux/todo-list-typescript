import { Tarefa } from "./Tarefa";

export class ListaDeTarefas {
  private _tarefas: Tarefa[] = [];
  private _proximoId: number = 1;

  public adicionarTarefa(descricao: string): Tarefa {
    const tarefa = new Tarefa(this._proximoId++, descricao);
    this._tarefas.push(tarefa);
    return tarefa;
  }

  public listarTarefas(): void {
    console.log("----------Lista De Tarefas ----------");
    this._tarefas.forEach(tarefa => {
      const status = tarefa.concluida ? "[X]" : "[ ]";
      console.log(`${status} ${tarefa.id}: ${tarefa.descricao}`);
    });
    console.log("-------------------------------------");
  }

  public marcarTarefaComoConcluida(id: number): void {
    const tarefa = this.encontrarTarefaPorId(id);
    if (tarefa) {
      tarefa.marcarComoConcluida();
      console.log(`Tarefa ${tarefa.descricao} marcada como concluída.`);
    } else {
      console.log(`Tarefa com ID: ${id}, não encontrada.`)
    }

  }


  private encontrarTarefaPorId(id: number): Tarefa | undefined {
    return this._tarefas.find(tarefa => tarefa.id === id);
  }


  private encontrarIndicePorId(id: number): number {
    return this._tarefas.findIndex(tarefa => tarefa.id === id);
  }


  public removerTarefa(id: number): void {
    const indice = this.encontrarIndicePorId(id);
    if (indice != -1) {
      const tarefaRemovida = this._tarefas.splice(indice,1)[0]!;
      console.log(`Tarefa ${tarefaRemovida.descricao} removida.`);
    } else {
      console.log(`Tarefa com ID: ${id}, não encontrada.`)
    }
  }
}