const express = require("express")
const router = express.Router();
const bodyParse = require("body-parser")
const PlayerModel = require("../../models/player.js");
const ChampiosModel = require("../../models/champions.js")
const auth = require("../../config/auth.js")
const TeamModel = require("../../models/team.js");


router.use(bodyParse.json())

router.post("/", auth.validateToken, async (req, res) => {
    try {

        // Total de times cadastrados
        const team = await TeamModel.countDocuments({});
        if (team < 8) {
            return res.status(401).send('É necessário ter 8 times cadastrados para gerar um campeonato.');
        }

        // Total de jogadores cadastrados nos 8 times
        const playes = await PlayerModel.countDocuments({});

        if (playes < 176) {
            return res.status(401).send('Quantidade inválida de jogadores. Cada time deve conter 22 jogadores cadastrados.');
        }

        // Lista do nome dos times cadastrados
        const nameTeams = _getNameTeams(team)

        // Lista de times sorteados
        const registeredTeams = _generateChampions(nameTeams);

        await ChampiosModel.deleteMany({})
        await ChampiosModel.insertMany(  _formatGames(registeredTeams))

        return res.status(201).send({ message: 'Campeonato gerado com sucesso.' });

    } catch (error) {
        res.status(500).send({ message: 'Erro ao gerar campeonato.' });
    }

})

router.get("/games", auth.validateToken, async (req, res) => {
    try {
        const games = await ChampiosModel.find({});

        return res.status(201).send(games);

    } catch (error) {
        res.status(500).send({ message: 'Erro ao obter jogos.' });
    }
})


// Formata o objeto do times sorteados
function _formatGames(registeredTeams){
    var maths = [];

    for (let index = 0; index < registeredTeams.length; index += 2) {
        maths.push({
            "timeA": registeredTeams[index],
            "timeB": registeredTeams[index + 1]
        })
    }

    return maths
}

function _getNameTeams(teams) {
    const nameTeams = teams.map(team => team.name);
    return nameTeams;
}


function _generateChampions(tems) {
    const registeredTeams = [];

    // Copia os times para um novo array
    const avaliableTeams = [...tems];

    // Verifica se ainda há times disponíveis para sortear
    while (avaliableTeams.length > 0 && registeredTeams.length < 8) {
        // Sorteia um índice aleatório dentro do range dos times disponíveis
        const indiceSorteado = Math.floor(Math.random() * avaliableTeams.length);

        // Adiciona o time sorteado aos times sorteados
        const timeSorteado = avaliableTeams.splice(indiceSorteado, 1)[0];
        registeredTeams.push(timeSorteado);
    }

    return registeredTeams;
}


module.exports = router;