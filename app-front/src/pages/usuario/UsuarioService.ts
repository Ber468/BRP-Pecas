import axios from 'axios';

export const getAll = async () => {
    return await axios.get('/usuario');
}

export const getById = async (id: number) => {
    return await axios.get(`/usuario/${id}`);
}

export const create = async (usuario: any) => {
    return await axios.post('/usuario', usuario);
}

export const update = async (usuario: any) => {
    return await axios.put(`/usuario/${usuario.id}`, usuario);
}

export const remove = async (id: number) => {
    return await axios.delete(`/usuario/${id}`);
}

