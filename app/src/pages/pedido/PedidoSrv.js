import axios from "../../Services/api";
class PedidoSrv {
  url = "/pedido";
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
  async alterar({ id_pedido, ...data }) {
    return await axios
      .put(`${this.url}/${id_pedido}`, { ...data })
      .catch((err) => {
        throw err;
      });
  }
  async excluir(id_pedido) {
    return await axios.delete(`${this.url}/${id_pedido}`).catch((err) => {
      throw err;
    });
  }
  async obterPeloId(id_pedido) {
    return await axios.get(`${this.url}/${id_pedido}`).catch((err) => {
      throw err;
    });
  }
}

export default new PedidoSrv();
