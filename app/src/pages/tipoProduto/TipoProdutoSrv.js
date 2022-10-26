import axios from "../../Services/api";
class TipoProdutoSrv {
  url = "/TipoProduto";
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
  async alterar({ id_tipoproduto, ...data }) {
    return await axios
      .put(`${this.url}/${id_tipoproduto}`, { ...data })
      .catch((err) => {
        throw err;
      });
  }
  async excluir(id_tipoproduto) {
    return await axios.delete(`${this.url}/${id_tipoproduto}`).catch((err) => {
      throw err;
    });
  }
  async obterPeloId(id_tipoproduto) {
    return await axios.get(`${this.url}/${id_tipoproduto}`).catch((err) => {
      throw err;
    });
  }
}

export default new TipoProdutoSrv();
