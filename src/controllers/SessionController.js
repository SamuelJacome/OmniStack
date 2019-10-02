//métodos padrão index = (listagem de sessões), show(listar uma unica sessão), store(alterar), update(atualizar), destroy(remover)
//controller cuida das requisições e das respostas

const User = require ('../models/User');

module.exports = {
    async store(req, res){ //async identifica que se trata de uma função assincrona
        const  { email } = req.body;


        let user = await User.findOne({ email })

        if(!user){
            user = await User.create({ email }) //await só deixa prosseguir para proxima linha quando está instrução finalizar
        }

        return res.json(user);
    }
}