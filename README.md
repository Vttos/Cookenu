# Cookenu
A ideia é que os usuarios possam compartilha suas receitas.

link para a documentação do postman https://documenter.getpostman.com/view/18694794/2s9YJdVMZb
------

-Criar usuário 

POST http://localhost:3003/user/signup

Body
{
    "email": "...@gmail.com",
    "password": "***"
}

-------

-Logar com o usuário

Retornar um json com o token e o id do usuáro

POST http://localhost:3003/user/login

Body
{
    "email": "...@gmail.com",
    "password": "***" 
}

-------

-Buscar dados do usuário

GET http://localhost:3003/user/:id

Authorization token

-------

-Criar nova receita

POST http://localhost:3003/recipe/post/:id

Authorization token

Body
{
    "title": "Nome da receita",
    "description": "Modo de preparo"
}

-------

-Buscar receitas do usuario

GET http://localhost:3003/recipe/user/:id

Authorization token

-------

-Buscar as receitas dos outros usuarios

GET http://localhost:3003/recipe/all/:id
Authorization toke

-------

-Segui outro usuario

POST http://localhost:3003/follow/:id

Authorization toke

Body
{
    "idSeguido": "Id do usuario que deseja seguir"
}

-------

-Busca lista de usuario que esta seguindo

GET http://localhost:3003/follow/find/:id

Authorization toke

-------

-Buscar receitas dos usuarios que esta segindo

GET http://localhost:3003/recipe/:id

Authorization toke





