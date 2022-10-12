# Projeto Integrador Compre do Pequeno Negócio - SITE

### [https://compre-pequeno-negocio.com/](https://compre-pequeno-negocio.herokuapp.com/)

## Requisitos para rodar o projeto:
* Node >= 16 (usar NVM de preferência) => [Instalação do NVM](https://github.com/nvm-sh/nvm)
* Yarn versão 1.22.5 => [Instalação do yarn](https://yarnpkg.com/getting-started/install)
* ### Extensões do vscode
  * vscode-styled-components
  * eslint
  * prettier eslint
  * pretier - code formatter

# Rodando o projeto
  1) Clonar repositório.
  2) Rodar comando ```yarn install``` na raiz do projeto.
  3) Rodar comando ```yarn dev``` para rodar o projeto em desenvolvimento.

# Realizando tarefas:

  1) Iniciando uma nova tarefa:
      * ```git checkout main``` => comando para ir para a branch main;
      * ```git pull origin main``` => comando para atualizar a branch main;
      * ```git checkout -b nome-da-sua-branch``` para criar sua branch da tarefa a partir da ```main```;
      * Realizar a tarefa...;
        - Obs: A sua branch de tarefas deve ser sempre criada a partir da ```main```;
        
  2) Mandando para code review:
      * ```git status``` => comando que vai listar os arquivos que sofreram alteração (sempre verificar);
      * ```git add .``` => comando para preparar as alterações feitas;
      * ```git commit -m "descrição do que foi feito"``` => commitando as alterações;
      * ```git push origin main``` => abrindo Pull Request para a main;
      * Entrar no github e terminar de abri o pull request;
      * Enviar link do pull request para revisão;
 
  3) Finalizando a tarefa (após aprovação de todos os desenvolvedores):
      * ```git checkout dev``` => Indo para a branch dev;
      * ```git pull origin dev``` => atualizando a branch de dev;
      * ```git pull origin nome-da-sua-branch``` => puxando alterações da sua branch para dev;
      * ```git push origin dev``` => subindo as alterações de dev;
        - Obs: após esse procedimento o seu código estará na branch de dev.
        
