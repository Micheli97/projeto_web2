<h1>Motivação</h1>
Esse trabalho foi desenvolvido para obtenção de nota da cadeira de Web 2. O objetivo era criar APIs para fazer a integração com o banco de dados MongoDB, utilizando a tecnologia Node.js como base para o desenvolvimento. Essa aplicação também deveria ser hospedada em um servidor, a plataforma escolhida foi a Vercel. 

<h1>Endpoints</h1>

<h3>BaseURL</h3>

```
projeto-web2-git-main-micheli97.vercel.app
```


<h3>Login</h3>

* Cadastro de usuário

O usuário cadastrado previamente no banco de dados poderá efetuar o cadastro de novos usuários.


```
POST /api/users/register
```
Exemplo

```
{
	"email":"email.usuario@email.com",
	"password":"senha",
	"name":"Nome usuário"
}
```

* Login 
 O usuário previamente cadastrado no banco poderá efetuar o login por meio do e-mail e senha fornecidos durante o cadastro. 
 <br/>
 <br/>
 
```
 POST /api/users/login
```
 
Exemplo
 
 ```
 {
	"email": "email_cadastrado@email.com",
	"password": "senha"
}
```

<h3>Teams</h3>

* Listar todos os times cadastrados
Retorna a lista de todos os times cadastrados no sistema.

```
GET /api/teams/
```

* Obtém a quantidade total de times cadastrados
Retorna a quantidade total de times cadastrados no sistema.
```
GET /api/teams/team_count
```

* Obtém time pelo ID
Retorna um time específico por meio do ID.

```
GET /api/teams/:teamID
```

* Cadastrar um novo time 
Efetua o cadastro de um novo time no sistema.

```
POST /api/teams/register
```
Exemplo

```
{
	"name": "Maranguape", 
	"badge_photo": "https://seuladogeek.com.br/wp-content/uploads/2022/02/simbolo-spfc-sao-paulo-fc-png-e-vetor.png",
        "city": "Maranguape",
	"coach": "Jose", 
	"website": "www.Maranguape.com"
}
```

* Editar time 
Efetua a edição do time por meio do(s) campo(s) que precisam ser editados.

```
PUT /api/teams/:teamID
```

Exemplo

```
{
	"name":"Juazeiro"
}
```

* Deletar time 
Efetua a remoção do time do sistema.

```
DELETE /api/teams/:teamID
```

<h3>Players</h3>

* Cadastrar um novo jogador
Efetua o cadastro de um novo jogador no sistema.

```
POST /api/player/register
```

Exemplo

```
{
			"id_team":"645c35bb64f6e978a22eb147",
			"name":"Rafael",
			"photo":"foto",
			"height":"1.82",
			"weight":"80",
			"age":"24",
			"position":"Atacante",
			"number":"10"
}
```

* Listar todos os jogadores cadastrados 
Retorna a lista de todos os jogadores cadastrados no sistema.

```
GET /api/player/
```

* Listar todos os jogadores pelo ID do time
Retorna a lista de jogadores associados a um determinado time.

```
GET /api/player/team/:teamID
```

* Editar jogador 
Efetua a edição do jogador por meio do(s) campo(s) que precisam ser editados.

```
PUT /api/player/:playerID
```

Exemplo

```
{
			"id_team":"645c35bb64f6e978a22eb147",
			"name":"Joao",
			"photo":"foto",
			"height":"1.82",
			"weight":"80",
			"age":"24",
			"position":"Atacante",
			"number":10
}
```

* Deletar jogador 
Efetua a remoção do jogador do sistema.

```
DELETE /api/player/:playerID
```

<h3>Campeonato</h3>

* Gerar campeonato 
Gera o campeonato por meio da combinação dos times cadastrados no sistema.

```
POST /api/champions/
```

* Listar jogos do campeonato
Retorna a lista de jogos do campeonato.

```
GET /api/champions/games
```





  


 
  


  



  
