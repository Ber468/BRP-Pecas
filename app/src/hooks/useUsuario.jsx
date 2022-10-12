import { useContext } from 'react';
import UsuarioContext from '../context/usuarioContext';

const useUsuario = () => {
    const _usuarioContext = useContext(UsuarioContext);

    return _usuarioContext;
};

export default useUsuario;