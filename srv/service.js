const cds = require('@sap/cds')
 
module.exports = cds.service.impl(async function () {




    this.on('RequisicaoCadastro', async (req) => {
        
        const { Cadastro } = this.entities;
        
        const{ ID } = req.data;

        if(!ID)
            return req.console.error(400,'Não foi digitado campo chave');

        const VariavelID = ID;
           
        const cadastro = await SELECT.from(Cadastro).where({ ID: VariavelID });

        return cadastro;

    })

  
})
 