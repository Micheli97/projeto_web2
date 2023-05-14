const express = require("express")
const router = express.Router();
const bodyParse = require("body-parser")
const TeamModel = require("../../models/team.js");
const auth = require("../../config/auth.js")


router.use(bodyParse.json())

// Obtem o total de times cadastrados
router.get("/team_count", auth.validateToken, async (req, res) => {
    try {
        const count = await TeamModel.countDocuments({});
        res.status(200).json({ total: count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Lista todos os times cadastrados
router.get("/", auth.validateToken, async (req, res) => {
    try {
        const count = await TeamModel.find({});
        res.status(200).json({ total: count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Cadastra um time
router.post("/register", auth.validateToken, async (req, res) => {
    const { name, badge_photo, city, coach, website } = req.body;

    // Verificar se as informações do corpo da solicitação foram fornecidas corretamente
    if (!name || !badge_photo || !city || !coach || !website) {
        return res.status(400).send({ mensagem: 'Parâmetros inváldidos!' });
    }


    try {

        // Verificar se o time existe no banco de dados
        const time = await TeamModel.findOne({ name });

        if (time) {
            return res.status(401).send('Time já cadastrado!');
        }

        // ADICIONAR VALIDACAO DE QUANTIDADE DE TIMES CADASTRADOS
        const count = await TeamModel.countDocuments({});

        if (count >= 8) {
            return res.status(400).send({ message: 'Já foram cadastrados 8 times.' });
        }

        // Criar um novo time com as informações fornecidas
        await TeamModel.create({
            name: name, badge_photo: badge_photo,
            city: city, coach: coach, website: website,
        });

        return res.status(201).send({ mensagem: 'Time cadastrado com sucesso' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: `${res.status(500)}`, mensagem: `${error.mensagem}` });

    }
});

// Editar time
router.put('/:id', auth.validateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const time = await TeamModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!time) {
            return res.status(404).send({ message: 'Time não encontrado.' });
        }

        return res.send({ message: "Time atualizado com sucesso." });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao atualizar time.' });
    }
});


// Deleta time
router.delete('/:id', auth.validateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const team = await TeamModel.findByIdAndDelete(id);

        if (!team) {
            return res.status(404).send({ message: 'Time não encontrado.' });
        }

        return res.send({ message: 'Time excluído com sucesso.' });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao excluir time.' });
    }
});


// Obtem um time pelo ID
router.get('/:id', auth.validateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const time = await TeamModel.findById(id);

        if (!time) {
            return res.status(404).send({ message: 'Time não encontrado.' });
        }

        return res.send({ time });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao buscar time.' });
    }
});




module.exports = router;



