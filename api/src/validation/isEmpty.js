
function VerificarEmpty(objValores) {
    let mensagem = undefined;
  
    objValores?.forEach(({ nome, valor }) => {
  
      if (!valor || valor.toString().trim() === '') mensagem = `O campo ${nome} não foi informado`
    });
  
    return mensagem;
  }
  module.exports = VerificarEmpty;