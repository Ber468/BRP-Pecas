import axios from 'axios';

export const getAll = async () => {
    return await axios.get('/cliente');
}

export const getById = async (id: number) => {
    return await axios.get(`/cliente/${id}`);
}

export const create = async (cliente: any) => {
    return await axios.post('/cliente', cliente);
}

export const update = async (cliente: any) => {
    return await axios.put(`/cliente/${cliente.id}`, cliente);
}

export const remove = async (id: number) => {
    return await axios.delete(`/cliente/${id}`);
}

