# 📷 Alurapic

Repositório com o intuito de documentar os estudos do curso de Angular da Alura.

------

## 🤓 Assuntos abordados durante o projeto:

- [x] Angular parte 1: Fundamentos
    - [x] Integração com Web API's
    - [x] Single Page Applications e rotas
    - [x] Melhorando a experiência do usuário
    - [x] Lapidando ainda mais a aplicação
- [x] Angular parte 2: Autenticação, Forms e lazy loading
    - [x] O componente para login
    - [x] Autenticação e o papel do token
    - [x] Usuário logado e proteção de rotas
    - [x] Registro de novos usuários
    - [x] Rotas filhas e lazy loading

-----

## 📚 Anotações:

- Dados de login: Usuário: flavio e Senha: 123
- Site para decodificar token: http://calebb.net/
- O BehaviorSubject armazena a última emissão até que alguém apareça para consumi-la.
- Com o Async pipe conseguimos capturar a emissão do Observable diretamente do nosso template.
- O guarda de rotas serve para darmos consistência para nossa aplicação, liberando acesso apenas para as rotas que fazem sentido para nosso usuário.
- Em um formulário, para saber habilitar um botão quando os dados tiverem dados, mesmo tendo dados assincronos usa-se pending dessa forma `[disabled]="signupForm.invalid || signupForm.pending"`
