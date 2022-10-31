import axios from "../../Services/api";
class ItemVendaSrv {
  url = "/itemVenda";
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
  async alterar({ id_itemvenda, ...data }) {
    return await axios
      .put(`${this.url}/${id_itemvenda}`, { ...data })
      .catch((err) => {
        throw err;
      });
  }
  async excluir(id_itemvenda) {
    return await axios.delete(`${this.url}/${id_itemvenda}`).catch((err) => {
      throw err;
    });
  }
  async obterPeloId(id_itemvenda) {
    return await axios.get(`${this.url}/${id_itemvenda}`).catch((err) => {
      throw err;
    });
  }
}

export default new ItemVendaSrv();
