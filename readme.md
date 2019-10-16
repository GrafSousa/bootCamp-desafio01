
<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Rotas](#Rotas)
	- [Cadastrar projeto (POST)](#cadastrar-projetos)
	- [Recuperar projetos (GET)](#recuperar-projeto)
	- [Editar projeto (PUT)](#editar-projetos)
	- [Excluir projeto (DELETE)](#excluir-projeto)
	- [Cadastrar tarefa (POST)](#cadastrar-tarefa)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [Express](https://expressjs.com/pt-br/) - O Express é um framework que permite o desenvolvimento de aplicações usando JavaScript;

## Rotas

### Cadastrar Projeto (POST)
	A rota utilizada para cadastrar de um novo projeto é http://localhost:3333/projects
	No body da requisição deve-se enviar um objeto no formato { id: "1", title: 'Novo projeto', tasks: [] }

### Recuperar projetos (GET)
	A rota utilizada para recuperar todos os projetos cadastrados é http://localhost:3333/projects

### Editar Projeto (PUT)
	A rota utilizada para cadastrar de um novo projeto é http://localhost:3333/projects/:id
	Para informar qual projeto vai ser alterado é necessário informar o id no Route Params;
	No body da requisição deve-se enviar o título novo título do projeto a ser alterado { title: 'titulo alterado'}

### Excluir projeto (DELETE)
	A rota utilizada para cadastrar de um novo projeto é http://localhost:3333/projects/:id
	Para informar qual projeto vai ser excluído é necessário informar o id no Route Params;

### Cadastrar tarefa (POST)
	A rota utilizada para cadastrar uma nova tarefa de um projeto é http://localhost:3333/projects/:id/tasks
	Para informar em qual projeto a tarefa vai ser cadastrada é necessário informar o id do projeto no Route Params;
	No body da requisição deve-se enviar o título da tarefa a ser cadastrada { title: "Nova tarefa"}

## Contato

Gustavo Graf de Sousa - [Github](https://github.com/grafsousa) - [Linkedin](https://www.linkedin.com/in/grafsousa/)