import axios from "../../Services/api";
class UsuarioSrv {
    url = "/usuario";
    async listar() {
        return await axios.get(this.url).catch(err => { throw err });
}
    async incluir(data) {
        return await axios.post(this.url, data).catch(err => { throw err });
    }
    async alterar({id_usuario, ...data}) {
        return await axios.put(`${this.url}/${id_usuario}`, {...data}).catch(err => { 
        throw err;
    });
    }
    async excluir(id_usuario) {
        return await axios.delete(`${this.url}/${id_usuario}`).catch(err => { 
        throw err;
    });
    }
    async obterPeloId(id_usuario) {
        return await axios.get(`${this.url}/${id_usuario}`).catch(err => { 
        throw err;
    });
    }
}

export default new UsuarioSrv();