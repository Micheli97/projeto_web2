
var _tokens = {
  "tolkf;;lm;ldmf;slmdf;lsmdf;lsmd;flms;dlfm": true
}

exports.setToken = function (token) {
  _tokens[token] = true;
};

exports.tokenIsValid = function (token) {
  return _tokens[token];
};

exports.validateToken = function (req, res, next) {
  var token = req.headers["token"];
  if (!_tokens[token]) {
   return res.status(401).send({ mensagem: 'Token inválido!' });
  }

  next();
};