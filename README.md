<h1>Motivação</h1>
Esse trabalho foi desenvolvido para obtenção de nota da cadeira de Web 2. O objetivo era criar APIs para fazer a integração com o banco de dados MongoDB, utilizando a tecnologia Node.js como base para o desenvolvimento. Essa aplicação também deveria ser hospedada em um servidor, a plataforma escolhida foi a Vercel. 

<h1>Endpoints</h1>

<h3>BaseURL</h3>

```
projeto-web2-git-main-micheli97.vercel.app
```


<h3>Login</h3>

<h4>Cadastro de usuário</h4>

```
POST /api/users/register
```
<h5>Exemplo</h5>

```
{
	"email":"email.usuario@email.com",
	"password":"senha",
	"name":"Nome usuário"
}
```

 <h4>Login</h4>
 O usuário previamente cadastrado no banco poderá efetuar o login por meio do e-mail e senha fornecidos durante o cadastro. 
 <br/>
 <br/>
 
```
 POST /api/users/login
```
 
 <h5>Exemplo</h5>
 
 ```
 {
	"email": "email_cadastrado@email.com",
	"password": "senha"
}
```

<h3>Teams</h3>
<h4>Listar todos os times cadastrados</h4>

```
GET /api/teams/
```

<h4>Obtém a quantidade total de times cadastrados</h4>

```
GET /api/teams/team_count
```

<h4>Obtém time pelo ID</h4>

```
PUT /api/teams/:idTeam
```

<h4>Cadastrar um novo time</h4>

```
POST /api/teams/register
```
<h5>Exemplo</h5>

```
{
	"name": "Maranguape", 
	"badge_photo": "https://seuladogeek.com.br/wp-content/uploads/2022/02/simbolo-spfc-sao-paulo-fc-png-e-vetor.png",
        "city": "Maranguape",
	"coach": "Jose", 
	"website": "www.Maranguape.com"
}
```

<h4>Editar time</h4>

```
PUT /api/teams/:idTeam
```

<h5>Exemplo</h5>

```
{
	"name":"Juazeiro"
}
```

<h4>Deletar time</h4>

```
DELETE /api/teams/:idTeam
```

<h3>Players</h3>
<h4>Cadastrar um novo time</h4>

```
POST /api/player/register
```

<h5>Exemplo</h5>

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

<h4>Listar todos os jogadores cadastrados</h4>

```
GET /api/player/
```

<h4>Listar todos os jogador pelo ID do time</h4>

```
GET /api/player/team/idTEeam
```

<h4>Editar jogador</h4>

```
PUT /api/player/idJogador
```

<h5>Exemplo</h5>

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

<h4>Deletar jogador</h4>

```
DELETE /api/player/idJogador
```

<h3>Campeonato</h3>
<h4>Gerar campeonato</h4>

```
POST /api/champions/
```

<h4>Listar jogos do campeonato</h4>

```
GET /api/champions/games
```





  


 
  


  



  
