const TokenModel = require("../models/token")

var _tokens = {
  "tolkf;;lm;ldmf;slmdf;lsmdf;lsmd;flms;dlfm": true
}

exports.setToken = async function (token)  {
  _tokens[token] = true;
  await TokenModel.create({ token: token })

};



exports.validateToken =async  function (req, res, next) {
  var token = req.headers["token"];
  token = await TokenModel.findOne({ token });

  if (!token) {
   return res.status(401).send({ mensagem: 'Token inválido!' });
  }

  next();
};