const express = require("express")
const router = express.Router();
const bodyParse = require("body-parser")
const PlayerModel = require("../../models/player.js");
const auth = require("../../config/auth.js")


router.use(bodyParse.json())


// Cadastra jogadores no time
router.post('/register', auth.validateToken, async (req, res) => {
    const { id_team, name, photo, height, weight, age, position, number } = req.body;

    try {
        // Verificar se o time existe no banco de dados
        const player = await PlayerModel.findOne({ name });

        if (player) {
            return res.status(401).send('Jogador já cadastrado!');
        }

        const count = await PlayerModel.countDocuments(id_team);
        if (count >= 22) {
            return res.status(400).send({ message: 'Já foram cadastrados 22 jogadores para o time.' });
        }


        // Criar um novo jogador com as informações fornecidas
        await PlayerModel.create({
            teamId: id_team,
            name: name, photo: photo, height: height, weight: weight, age: age, position: position, number: number
        },
        );

        return res.send({ message: "Jogador cadastrado com sucesso." });


    } catch (error) {
        res.status(400).send("Erro ao cadastrar jogador.");
    }
},);



// Lista todos os jogadores cadastrados
router.get("/", auth.validateToken, async (req, res) => {
    try {
        const playes = await PlayerModel.find({});
        res.status(200).json({ jogadores: playes });
    } catch (error) {
        res.status(500).json({ message:"Erro ao listar jogadores"});
    }
});

// Lista todos os jogadores pelo time
router.get("/team/:id", auth.validateToken, async (req, res) => {
    const { id_team } = req.params;

    try {
        const playes = await PlayerModel.find({id_team});
        res.status(200).json({ jogadores: playes });
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar jogadores pelo time" });
    }
});


// Rota para editar jogador
router.put('/:id', auth.validateToken, async (req, res) => {
    const params = req.params;

    try {
        const player = await PlayerModel.findByIdAndUpdate(params.id, req.body, { new: true });
        if (!player) {
            return res.status(404).send({ message: 'Jogador não encontrado.' });
        }

        return res.send({ message: "Jogador atualizado com sucesso." });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao atualizar jogador.' });
    }
});


// Rota para excluir jogador
router.delete('/:id', auth.validateToken, async (req, res) => {


    try {
        const { id } = req.params;
        const player = await PlayerModel.findByIdAndDelete(id);

        if (!player) {
            return res.status(404).send({ message: 'Jogador não encontrado.' });
        }

        return res.send({ message: "Jogador excluído com sucesso." })
    } catch (error) {
        res.status(500).send({ message: 'Erro ao excluir jogador' });
    }
});


module.exports = router;