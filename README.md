# Desafio Backend - LAComp Ufal

## Objetivo

O objetivo desse desafio é avaliar e nivelar o nível de desenvolvimento do time que cuidara da frente Backend da LAComp, avaliando pontos especificos como:

- Git/Github
- Arquitetura
- Rotas
- Injeção de dependências

<b>Opcionais:</b>

- Integração com o banco de dados [PostgreSql](https://www.postgresql.org/)
- TypeORM

Lembre-se, você não precisa saber fazer TUDO que esta descrito para ser avaliado, faça o seu melhor

## Desafio

O desafio consiste no desenvolvimento de uma API em [NestJS](https://nestjs.com/) que lide com postagens de noticias.

Essas noticias consistem em:

- Título
- Subtítulo
- Conteúdo da postagem 
- Nome do autor
- Data da postagem
- Ultima alteração

O controller de noticias deve conter os seguintes verbos: GET, POST, PUT, DELETE

Lembre-se de criar um GET que lista todas as postagnes e um outro GET que devolva apenas uma das noticias baseado no ID da notícia enviado pelos parametros da requisição.

## Instruções para avaliação

Crie um [Fork](https://docs.github.com/pt/get-started/quickstart/fork-a-repo) desse repositório onde você deverá publicar seu projeto, junto com as instruções de execução. Lembre-se de deixa-lo público.

## Instruções de execução
 
 A branch main é uma versão sem migration, então ao executar o 'npm run start:dev' as tabelas no banco serão criadas. Portanto basta apenas configurar o arquivo 'orm.config.ts'.
 
 Na branch alternative é uma versão com migration, então será necessário executar alguns comandos, além de configurar o 'orm.config.ts'.
  - 'npm migration:generate' para gerar as migrations.
  - 'npm migration:run' para fazer as migrations.
  - 'npm migration:revert' para reverter.
### Endpoint

 Estou usando o swagger que facilita a documentação de api então basta acessar o endpoint principal e lá estarão os outros documentados.
 - localhost:3000/api
