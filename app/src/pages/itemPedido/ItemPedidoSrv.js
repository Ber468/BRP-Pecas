import axios from "../../Services/api";
class ItemPedidoSrv {
  url = "/itemPedido";
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
  async alterar({ id_itempedido, ...data }) {
    return await axios
      .put(`${this.url}/${id_itempedido}`, { ...data })
      .catch((err) => {
        throw err;
      });
  }
  async excluir(id_itempedido) {
    return await axios.delete(`${this.url}/${id_itempedido}`).catch((err) => {
      throw err;
    });
  }
  async obterPeloId(id_itempedido) {
    return await axios.get(`${this.url}/${id_itempedido}`).catch((err) => {
      throw err;
    });
  }
}

export default new ItemPedidoSrv();
