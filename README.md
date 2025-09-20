# To Do List com POO e Typescript

## AULA 01

Construir uma aplicação de linha de comando para gerenciar uma lista de tarefas.

Essa aplicação deverá permitir ao usuário:
- Adicionar
- Listar
- Marcar como concluída
- Remover tarefas

Este problema simples permitirá explorar como a POO pode nos ajudar a organizar o código de forma mais eficiente.

Para isso vamos precisar dos seguintes recursos instalados no computador:
- VsCode
- Node.js
- Typescript (instalaremos no projeto)

## Exercícios AULA 01

### Remover uma Tarefa

- Crie um método público `removerTarefa(id: number)` na classe `ListaDeTarefas`.
- Este método deve encontrar e remover a tarefa com o ID fornecido.
- Exiba uma mensagem de confirmação ou de erro caso a tarefa não seja encontrada.

### Herança para Tarefas com Data Limite

- Crie uma nova classe `TarefaComDataLimite` que herda de `Tarefa`.
- Adicione uma propriedade `dataLimite` (do tipo `Date`).
- Sobrescreva o método `listarTarefas` na classe `ListaDeTarefas` para que, se a tarefa for uma `TarefaComDataLimite`, exiba também a data limite formatada (ex: `(Entregar até: DD/MM/AAAA)`).


## Como Executar

1.  **Pré-requisitos**: Certifique-se de ter o Node.js instalado em sua máquina.

2.  **Instalar dependências**: No diretório raiz do projeto, execute o comando para instalar os pacotes necessários:
    ```bash
    npm install
    ```

3.  **Executar a simulação**: Para rodar o script principal que simula as operações bancárias, utilize:
    ```bash
    npx ts-node src/index.ts
    ```

## Comandos para iniciar um projeto do zero:
 ```bash
npm init -y
npm i typescript ts-node @types/node --save-dev
npx tsc --init
  ```



Para executar o projeto:

```sh
npx ts-node src/index.ts
```
