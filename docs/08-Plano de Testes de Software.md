# Plano de Testes de Software

USER STORY 
Eu enquanto usuário 
Quero poder verificar as ocorrências astronômicas de acordo com a localização
Para que eu tenha conhecimento de que ocorrências eu posso visualizar em minha localidade

QUAL VALOR PARA O USUÁRIO?
Agregar conhecimento referente à ocorrências astronômicas, além de possuir disponível um plataforma que contenha, de forma centralizada, os dados referentes às datas destas ocorrências. 

QUAL VALOR PARA O NEGÓCIO?
Permitir o acesso de informação voltado para astronomia de forma simplificada para o usuário e proporcionar ao usuário a verificação das ocorrências astronômicas.

Cadastrar um evento 
 Dado que (Given) possua as informações de uma ocorrência astronômica 
 Quando (When) fizer o cadastro  
 Então (Then) a ocorrência deve ser armazenada na local storage

Consultar todas as ocorrências astronômicas cadastradas  
 Dado que (Given) já existam ocorrências astronômicas armazenadas na local storage  
 Quando (When) navegar para seção de ocorrências cadastradas    
 Então (Then) devo visualizar as ocorrências 

Consultar uma ocorrência específica  
 Dado que (Given) já existam ocorrências astronômicas armazenadas na local storage 
 Quando (When) inserir as palavras-chaves, referente a ocorrência que desejo visualizar, no local de busca  
 Então (Then) devo visualizar a(s) ocorrência(s) referente(s) à busca 