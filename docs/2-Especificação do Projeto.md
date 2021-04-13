# Especificações do Projeto

Tendo em vista que atualmente o usuário interessado em informações astronômicas depara-se com a dificuldade em encontrar uma fonte de informação que demonstre as previsões de eventos astronômicos visíveis a partir de sua geolocalização, o projeto busca desenvolver uma aplicação web que contenha dados sobre as ocorrências de eventos astronômicos baseados na localização informada pelo usuário

Assim, neste documento serão abordadas as definições de persona, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto utilizando técnicas de obtenção de dados, como questionários online, para compreender de forma específica nosso usuário e suas necessidades.


## Personas


<img title="Jose Augusto" src="https://i.imgur.com/APc56HT.jpg" width="200" height="200" />

José Augusto tem 13 anos, é estudante do ensino fundamental II e mora no interior de São Paulo, gosta de todas as matérias na área de exatas, videogame, adora a revista Recreio, filmes de ação científica. Recentemente, descobriu que gosta muito da NASA, Space X e de astros, por conta disso quer aprender mais sobre isso.


<img title="Maria Eugênia" src="https://i.imgur.com/EZmVbet.jpg" width="200" height="200" />

Maria Eugênia tem 31 anos, é artista e tem como hobbies a música e a fotografia. Desde que comprou um telescópio não conseguiu tirar os olhos do céu, gosta de observar as crateras da lua e os planetas que podem ser vistos da terra, porém ela nunca sabe quando vai ocorrer cada evento astronômico e se ela será capaz de vê-los.


<img title="Renato Luís" src="https://i.imgur.com/rGQVtoe.jpg" width="200" height="200" />

Renato Luís tem 56 anos, é professor de ciências, gosta de música, passa tempo com os amigos e família, adora um barzinho e dá aulas criativa. Ele deseja que seus alunos se interessem mais por astronomia, mas tem dificuldade de encontrar plataformas para isso.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
