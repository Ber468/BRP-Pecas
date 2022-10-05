import axios from 'axios';

export const getAll = async () => {
    return await axios.get('/venda');
}

export const getById = async (id: number) => {
    return await axios.get(`/venda/${id}`);
}

export const create = async (venda: any) => {
    return await axios.post('/venda', venda);
}

export const update = async (venda: any) => {
    return await axios.put(`/venda/${venda.id}`, venda);
}

export const remove = async (id: number) => {
    return await axios.delete(`/venda/${id}`);
}