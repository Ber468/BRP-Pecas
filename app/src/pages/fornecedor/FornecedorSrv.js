import axios from "../../Services/api";
class FornecedorSrv {
    url = "/fornecedor";
    async listar() {
        return await axios.get(this.url).catch(err => { throw err });
}
    async incluir(data) {
        return await axios.post(this.url, data).catch(err => { throw err });
    }
    async alterar(data) {
        return await axios.put(this.url, data).catch(err => { throw err });
    }
    async excluir(id_fornecedor) {
        return await axios.delete(`${this.url}/${id_fornecedor}`).catch(err => { 
        throw err;
    });
    }
    async obterPeloId(id_fornecedor) {
        return await axios.get(`${this.url}/${id_fornecedor}`).catch(err => { 
        throw err;
    });
    }
}

export default new FornecedorSrv();