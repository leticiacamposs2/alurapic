# Alurapic

Repositório com o intuito de documentar os estudos do curso de Angular da Alura.

Usuário: flavio
Senha: 123

------

Site para decodificar token: http://calebb.net/

-----

- O BehaviorSubject armazena a última emissão até que alguém apareça para consumi-la.
- Com o Async pipe conseguimos capturar a emissão do Observable diretamente do nosso template.
- O guarda de rotas serve para darmos consistência para nossa aplicação, liberando acesso apenas para as rotas que fazem sentido para nosso usuário.
- Em um formulário, para saber habilitar um botão quando os dados tiverem dados, mesmo tendo dados assincronos usa-se pending dessa forma `[disabled]="signupForm.invalid || signupForm.pending"`

