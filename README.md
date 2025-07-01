# Frontend de Visualização de Usuários com Angular

Este repositório contém a aplicação frontend desenvolvida com Angular, responsável por consumir dados de usuários de uma API RESTful (o backend NestJS correspondente) e exibi-los de forma organizada em uma tabela.

## Funcionalidades

-   **Consumo de API:** Faz requisições HTTP para o backend NestJS (`http://localhost:3000/users`) para obter a lista de usuários.
-   **Exibição de Dados em Tabela:** Apresenta os dados dos usuários de forma clara e legível em uma tabela HTML dinâmica.
-   **Interface Responsiva:** Estilos básicos para garantir uma visualização adequada.

## Tecnologias Utilizadas

-   [**Angular**](https://angular.dev/): Framework para a construção de aplicações web modernas e escaláveis.
-   [**TypeScript**](https://www.typescriptlang.org/): Linguagem de programação que adiciona tipagem estática ao JavaScript.
-   [**RxJS**](https://rxjs.dev/): Biblioteca para programação reativa, utilizada para lidar com fluxos de dados assíncronos (como respostas de APIs).
-   [**Angular CLI**](https://angular.dev/cli): Ferramenta de linha de comando para automatizar o desenvolvimento, scaffold e build de projetos Angular.

## Configuração do Projeto

Siga estes passos para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

-   [Node.js](https://nodejs.org/en/download/) (versão 18.x ou superior recomendada)
-   [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js) ou [Yarn](https://yarnpkg.com/)
-   [Angular CLI](https://angular.dev/cli/overview) (instalado globalmente: `npm install -g @angular/cli`)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/WesleyJA-33/frontend-angular.git frontend
    cd frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    ```

## Como Rodar a Aplicação

Para iniciar o servidor de desenvolvimento do Angular:

```bash
ng serve --open