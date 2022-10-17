import axios from "../../Services/api";
class ClienteSrv {
    url = "/cliente";
    async listar() {
        return await axios.get(this.url).catch(err => { throw err });
}
    async incluir(data) {
        return await axios.post(this.url, data).catch(err => { throw err });
    }
    async alterar(data) {
        return await axios.put(this.url, data).catch(err => { throw err });
    }
    async excluir(id_cliente) {
        return await axios.delete(`${this.url}/${id_cliente}`).catch(err => { 
        throw err;
    });
    }
    async obterPeloId(id_cliente) {
        return await axios.get(`${this.url}/${id_cliente}`).catch(err => { 
        throw err;
    });
    }
}

export default new ClienteSrv();