# 📷 Alurapic

Repositório com o intuito de documentar os estudos do curso de Angular da Alura.

------

## 🤓 Assuntos abordados durante o projeto:

#### ✔️ Angular parte 1: Fundamentos
- [x] Integração com Web API's
    - [x] SPAs e consumo de APIs
    - [x] Nomenclatura do servidor
    - [x] HttpClient e injeção de dependência
    - [x] Consumindo dados da API
    - [x] Isolando a acesso em serviços
    - [x] Tipando a API
    - [x] Ciclo de vida de um componente
 
- [x] Single Page Applications e rotas
    - [x] Gerar componente pelo CLI
    - [x] BrowserModule e CommonModule
    - [x] Single Page Application e Rotas
    - [x] Lidando com rotas inexistentes
    - [x] Segmentos de rotas

- [x] Novo componente, novos conceitos
    - [x] Componente exclusivo para listar fotos
    - [x] Implementando a lógica do Grid
    - [x] A função Array.slice
    - [x] Change Detection
    - [x] Sobre a interface OnChanges

- [x] Melhorando a experiência do usuário
    - [x] Binding de eventos
    - [x] Pipe e implementação
    - [x] Resolvers
    - [x] Implementando Resolvers
    - [x] RxJS e seu Subject
    - [x] Padrão debounce com RxJS
    - [x] Paginação de dados
    - [x] LoadButton

- [x] Lapidando ainda mais a aplicação
    - [x] Submódulos
    - [x] Integração com Font Awesome
    - [x] Component container e ng-content
    - [x] Componentizando o filtro
    - [x] Output property
    - [x] Criando uma diretiva customizada

#### ✔️ Angular parte 2: Autenticação, forms e lazy loading
- [x] Componente de login
    - [x] Validação de formulários
    - [x] Importando o módulo de validação
    - [x] Componentizando mensagens de validação
    - [x] Enviando credenciais para a API
    - [x] Redirecionamento pós login
    - [x] Redirecionando depois do login
    - [x] ViewChild: obtendo referências do template
    - [x] Focus automático
    - [x] Detectando a plataforma de execução

- [x] Autenticação e o papel do token
    - [x] Acesso do header de resposta
    - [x] Acessando o headers
    - [x] Armazenamento do token
    - [x] Local de armazenamento do token
    - [x] Segurança do token
    - [x] Cabeçalho da aplicação

- [x] Usuário logado e proteção de rotas
    - [x] Separação de responsabilidades
    - [x] Entendendo BehaviorSubject
    - [x] Async pipe
    - [x] Implementação do logout
    - [x] Guarda de rotas
    - [x] A diretiva routerLink

- [x] Registro de novos usuários
    - [x] Validação do formulário
    - [x] Criando nosso próprio validador
    - [x] Validador assíncrono
    - [x] Submissão dos dados
    - [x] Sobre a classe FormGroup

- [x] Rotas filhas e lazy loading
    - [x] Rotas filhas
    - [x] Build do projeto
    - [x] Lazy loading e code splitting
    - [x] Refinando o uso de serviços
    - [x] Interceptadores e envio do token

#### ❌ Angular parte 3: Upload, build e novos componentes
- [x] Upload de fotos
    - [x] Rodapé
    - [x] O formulário upload de fotos
    - [x] Validando o formulário
    - [x] Obtendo os dados do formulário
    - [x] Upload da foto
    - [x] FormData
    - [x] Adequando a exibição das fotos

- [x] Lapidando o upload
    - [x] Um botão mais elegante
    - [x] Preview de imagens
    - [x] Variável de templates
    - [x] *ngIf e else
    - [x] Escondendo um elemento
    - [x] Seleção automática de arquivos
    - [x] Bloqueando acesso não autenticado

- [x] Detalhes da foto
    - [x] Rotas parametrizadas
    - [x] Extraindo parâmetros de rotas
    - [x] Segmento de rota
    - [x] Buscando a foto selecionada da API
    - [x] Serviço para obtenção de segmentos de rotas

- [x] Comentando fotos
    - [x] Buscando comentários
    - [x] Comentários como componente
    - [x] Lidando com o refresh de comentários
    - [x] Lapidando a experiência do usuário

- [ ] Remoção de fotos e novos componentes
    - [x] Permissão de comentários
    - [ ] Remoção de fotos
    - [ ] Ocultando elementos que requerem permissão
    - [ ] Revisão - O Pipe Async
    - [ ] Sobre liberação de recursos


- [ ] Componente de notificação
    - [ ] Modelando dados do componente
    - [ ] O modificador readonly
    - [ ] A camada de serviço do componente
    - [ ] Revisão sobre Subject
    - [ ] Implementando o componente
    - [ ] Utilizando o novo componente
    - [ ] Revisão sobre comunicação entre componentes
    - [ ] Lapidando o componente
    - [ ] Um pequeno detalhe
    - [ ] Consolidando seu conhecimento
                    

- [ ] Curtindo fotos
    - [ ] Exibindo apenas quando logado
    - [ ] Revisando o papel do serviço Renderer
    - [ ] Preparando o serviço
    - [ ] Criando Observables com of
    - [ ] Curtindo fotos
    - [ ] Um pouco mais sobre Rxjs

- [ ] Diferenciando ambientes de deploy

-----

## 📚 Anotações:

- Dados de login: Usuário: flavio e Senha: 123
- Site para decodificar token: http://calebb.net/
- O BehaviorSubject armazena a última emissão até que alguém apareça para consumi-la.
- Com o Async pipe conseguimos capturar a emissão do Observable diretamente do nosso template.
- O guarda de rotas serve para darmos consistência para nossa aplicação, liberando acesso apenas para as rotas que fazem sentido para nosso usuário.
- Em um formulário, para saber habilitar um botão quando os dados tiverem dados, mesmo tendo dados assincronos usa-se pending dessa forma `[disabled]="signupForm.invalid || signupForm.pending"`
- Um input com o type="file" básico, em que o accpet="image/*", faz com que apenas arquivos de imagem possam ser selecionados, ou seja, uma espécie de filtro.
- Exemplo do uso da diretiva `*ngIf/else`:
```
    <div *ngIf="show; else message">
        Welcome
    </div>
    <ng-template #message>
        Error!
    </ng-template>
```
- O operador `switchMap` cancela o `Observable` anterior passando o fluxo para um novo `Observable`, garantindo assim que a emissão tenha apenas o valor emitido pelo `Observable` retornado por `switchMap`.


-----

## 🛠️ Requisitos para rodar o projeto:

- API: Rodar com a versão do node 8.0.0
- Frontend: Rodar com a versão do node 12.19.0

