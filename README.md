<h1>Motivação</h1>
Esse trabalho foi desenvolvido para obtenção de nota da cadeira de Web 2. O objetivo era criar APIs para fazer a integração com o banco de dados MongoDB, utilizando a tecnologia Node.js como base para o desenvolvimento. Essa aplicação também deveria ser hospedada em um servidor, a plataforma escolhida foi a Vercel. 

<h1>Endpoints</h1>

<h3>BaseURL</h3>

```
projeto-web2-git-main-micheli97.vercel.app
```


<h3>Login</h3>

*<h4>Cadastro de usuário</h4>

O usuário cadastrado previamente no banco de dados poderá efetuar o cadastro de novos usuários.


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
Retorna a lista de todos os times cadastrados no sistema.

```
GET /api/teams/
```

<h4>Obtém a quantidade total de times cadastrados</h4>
Retorna a quantidade total de times cadastrados no sistema.
```
GET /api/teams/team_count
```

<h4>Obtém time pelo ID</h4>
Retorna um time específico por meio do ID.

```
GET /api/teams/:teamID
```

<h4>Cadastrar um novo time</h4>
Efetua o cadastro de um novo time no sistema.

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
Efetua a edição do time por meio do(s) campo(s) que precisam ser editados.

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
Efetua a remoção do time do sistema.

```
DELETE /api/teams/:idTeam
```

<h3>Players</h3>
<h4>Cadastrar um novo jogador</h4>
Efetua o cadastro de um novo jogador no sistema.

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
Retorna a lista de todos os jogadores cadastrados no sistema.

```
GET /api/player/
```

<h4>Listar todos os jogador pelo ID do time</h4>
Retorna a lista de jogadores associados a um determinado time.

```
GET /api/player/team/idTEeam
```

<h4>Editar jogador</h4>
Efetua a edição do jogador por meio do(s) campo(s) que precisam ser editados.

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
Efetua a remoção do jogador do sistema.

```
DELETE /api/player/idJogador
```

<h3>Campeonato</h3>
<h4>Gerar campeonato</h4>
Gera o campeonato por meio da combinação dos times cadastrados no sistema.

```
POST /api/champions/
```

<h4>Listar jogos do campeonato</h4>
Retorna a lista de jogos do campeonato.

```
GET /api/champions/games
```





  


 
  


  



  
