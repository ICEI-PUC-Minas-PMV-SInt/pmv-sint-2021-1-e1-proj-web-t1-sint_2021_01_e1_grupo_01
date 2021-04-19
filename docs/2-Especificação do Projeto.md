# Especificações do Projeto

Tendo em vista que atualmente o usuário interessado em informações astronômicas depara-se com a dificuldade em encontrar uma fonte de informação, o projeto busca desenvolver uma aplicação web que contenha dados quanto à, ocorrências astronômicas, baseadas na localização informada pelo usuário.

Assim, neste documento serão abordadas as definições de persona, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto utilizando técnicas de obtenção de dados, como questionários online, para compreender de forma específica nosso usuário e suas necessidades.


## Personas

<table>
  <tr>
    <th>Foto</th>
    <th>Nome</th>
    <th>Descrição</th>
    <th>Aplicativos</th>
    <th>Motivações</th>
    <th>Frustrações</th>
    <th>Hobbies, História</th>
  </tr>
  <tr>
    <td><img title="Jose Augusto" src="https://i.imgur.com/APc56HT.jpg"/></td>
    <td>José Augusto</td>
    <td>
      <ul>
        <li>13 anos</li>
        <li>Estudante do ensino fundamental</li>
        <li>Mora no interior de SP</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Youtube</li>
        <li>Tik Tok</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Revista Recreio</li>
        <li>Felipe Neto</li>
        <li>Astronautas</li>
      </ul>
    </td>
    <td>
      <li>Não sabe muito sobre cometas</li>
      <li>Nunca viu fenômenos astronômicos</li>
      <li>Quer aprender bateria</li>
    </td>
    <td>
      <li>Ler revista Recreio</li>
      <li>Filmes de ação e ficção científica</li>
      <li>Recentemente, descobriu que gosta muito da NASA, Space X e de astros, então quer aprender mais sobre</li>
    </td>
  </tr>
  <tr>
    <td><img title="Maria Eugênia" src="https://i.imgur.com/EZmVbet.jpg"/></td>
    <td>Maria Eugênia</td>
    <td>
      <ul>
        <li>31 anos</li>
        <li>Artista</li>
        <li>Mora no Rio de Janeiro</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Frida Kahlo</li>
        <li>Tarsila do Amaral</li>
        <li>Rihanna</li>
      </ul>
    </td>
    <td>
      <li>Não sabe quando vai ter algum fenômeno astronômico</li>
      <li>Não sabe o que está vendo no espaço</li>
      <li>Quer fazer quadros mais detalhados do espaço</li>
    </td>
    <td>
      <li>Fotografia</li>
      <li>Música</li>
      <li>Desde que comprou um telescópio não conseguiu tirar os olhos do céu, porém ela nunca sabe quando vai ocorrer
        cada evento astronômico e se será capaz de vê-los</li>
    </td>
  </tr>
  <tr>
    <td><img title="Renato Luís" src="https://i.imgur.com/rGQVtoe.jpg" /></td>
    <td>Renato Luís</td>
    <td>
      <ul>
        <li>56 anos</li>
        <li>Professor de Ciências</li>
        <li>Mora em Belo Horizonte</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Youtube</li>
        <li>Facebook</li>
        <li>Reddit</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Coisa de Nerd(Leon e Nilse)</li>
        <li>Elon Musk</li>
        <li>NASA</li>
      </ul>
    </td>
    <td>
      <li>Não encontra sites bons sobre astronomia</li>
      <li>Não consegue engajar os alunos</li>
      <li>Pensa em comprar telescópio, mas antes quer saber se vai conseguir ver vários fenômenos</li>
    </td>
    <td>
      <li>Música</li>
      <li>Barzinho com os amigos</li>
      <li>Dar aulas criativas</li>
      <li>Ele deseja que seus alunos se interessem mais por astronomia, mas tem dificuldade de encontrar plataformas
        para isso</li>
    </td>
  </tr>
  <tr>
    <td><img title="Eduardo"
        src="https://images.generated.photos/4kl3NFu9b1hfPOPq4U4gvFCE0HG_PEdFj2CQDhKK4WQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzAzMTg5ODYu/cG5n.png"/></td>
    <td>Eduardo</td>
    <td>
      <ul>
        <li>77 anos</li>
        <li>Engenheiro aposentado</li>
        <li>Mora no interior de Minas</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Facebook</li>
        <li>G1</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Jornais</li>
        <li>Space X</li>
        <li>Bill Gates</li>
      </ul>
    </td>
    <td>
      <li>Tem muito tempo livre nas mãos</li>
      <li>Quer aprender mais coisas</li>
    </td>
    <td>
      <li>Ler jornais</li>
      <li>Passar tempo com seus netos</li>
      <li>Assistir tv</li>
      <li>Desde que se aposentou começou a se interessar mais pela astronomia, então quer encontrar um site que o ajude
        a entender mais.</li>
    </td>
  </tr>
</table>

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
