const request = require('supertest');
const app = require('../app');

describe('Teste inclusao de um cliente', () => {
    it('Deve criar um  novo cliente', async () => {
        const response = await request(app)
        .post("/api/cliente")
        .send({
            nome: "Carlos",
            endereco: "Barra Funda",
            cpf: "23420304074",
            telefone: null,    
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message", "Cliente adicionado com sucesso!");
    
});
});

//  describe('Teste alterar cliente', () => {
//     it('Deve alterar um cliente', async () => {
//         const response = await request(app)
//         .put("/api/cliente/16")
//         .send({
//             nome: "Fulano",
//             endereco: "Rua 1",
//             cpf: "01020304098",
//             telefone: "054996154784",
//     });
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("message", "Cliente atualizado com sucesso!");
// });
// });

  
//   describe('Teste excluir cliente', () => {
//     it('Deve excluir um cliente', async () => {
//         const response = await request(app)
//         .delete("/api/cliente/17")
//         .send({});
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("message", "Cliente deletado com sucesso!");
    
// });
// });
 
