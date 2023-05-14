const express = require("express")
const router = express.Router();
const bodyParse = require("body-parser")
const auth = require("../../config/auth.js")
const UserModel = require("../../models/user.js")
const crypto = require('crypto')

router.use(bodyParse.json())


router.post("/register",auth.validateToken, async (req, res) => {
    const { email, password, name } = req.body;

    // Verificar se as informações do corpo da solicitação foram fornecidas corretamente
    if (!email || !password || !name) {
        return res.status(400).send({ mensagem: 'Erro ao cadastrar usuário: Parâmetros obrigatórios' });
    }

    // Verificar se o time existe no banco de dados
    const user = await UserModel.findOne({ email });
    if (user) {
        return res.status(401).send('Usuário já cadastrado!');
    }

    try {
        // Criar um novo usuário com as informações fornecidas
        await UserModel.create({ email: email, password: password, name: name })

        return res.status(201).send({ mensagem: 'Usuário cadastrado com sucesso' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Erro ao cadastrar usuário"});

    }
})


router.post("/login", async (req, res) => {
    const { email, password } = req.body;


    // Verificar se as informações do corpo da solicitação foram fornecidas corretamente
    if (!email || !password) {
        return res.status(400).send({ message: "Os campos email e senha são obrigatórios!" })
    }

    try {
        // Verificar se o usuário existe no banco de dados
        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return res.status(401).send('Usuário inválido!');
        }

        // Verificar se a senha do usuário está correta
        const correctPassword = await user.password == password;
        if (!correctPassword) {
            return res.status(401).send('Senha inválida!');
        }

        // Gerar token de autenticação para o usuário
        const token = crypto.randomBytes(48).toString('base64url');
        // Retornar o token de autenticação como resposta
        auth.setToken(token);
        res.send({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Erro ao fazer login"});
    }

})

module.exports = router;