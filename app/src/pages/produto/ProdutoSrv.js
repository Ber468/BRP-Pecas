import axios from "../../Services/api";
class ProdutoSrv {
  url = "/produto";
  async listar() {
    return await axios.get(this.url).catch((err) => {
      throw err;
    });
  }
  async incluir(data) {
    return await axios.post(this.url, data).catch((err) => {
      throw err;
    });
  }
  async alterar({ id_produto, ...data }) {
    return await axios
      .put(`${this.url}/${id_produto}`, { ...data })
      .catch((err) => {
        throw err;
      });
  }
  async excluir(id_produto) {
    return await axios.delete(`${this.url}/${id_produto}`).catch((err) => {
      throw err;
    });
  }
  async obterPeloId(id_produto) {
    return await axios.get(`${this.url}/${id_produto}`).catch((err) => {
      throw err;
    });
  }
}

export default new ProdutoSrv();
