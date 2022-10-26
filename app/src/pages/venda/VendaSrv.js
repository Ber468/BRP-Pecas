import axios from "../../Services/api";
class VendaSrv {
  url = "/venda";
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
  async alterar({ id_venda, ...data }) {
    return await axios
      .put(`${this.url}/${id_venda}`, { ...data })
      .catch((err) => {
        throw err;
      });
  }
  async excluir(id_venda) {
    return await axios.delete(`${this.url}/${id_venda}`).catch((err) => {
      throw err;
    });
  }
  async obterPeloId(id_venda) {
    return await axios.get(`${this.url}/${id_venda}`).catch((err) => {
      throw err;
    });
  }
}

export default new VendaSrv();
