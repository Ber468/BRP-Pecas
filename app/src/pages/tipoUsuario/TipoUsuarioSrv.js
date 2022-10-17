import axios from "../../Services/api";
class TipoUsuarioSrv {
    url = "/TipoUsuario";
    async listar() {
        return await axios.get(this.url).catch(err => { throw err; });
}
    async incluir(data) {
        return await axios.post(this.url, data).catch(err => { throw err; });
    }
    async alterar({ id_tipousuario, ...data }) {
        return await axios.put(`${this.url}/${id_tipousuario}`, {...data}).catch(err => { 
        throw err;
    });
    }
   async excluir(id_tipousuario) {
        return await axios.delete(`${this.url}/${id_tipousuario}`).catch(err => { 
        throw err;
    });
    }
    async obterPeloId(id_tipousuario) {
        return await axios.get(`${this.url}/${id_tipousuario}`).catch(err => { 
        throw err;
    });
    }
}

export default new TipoUsuarioSrv();