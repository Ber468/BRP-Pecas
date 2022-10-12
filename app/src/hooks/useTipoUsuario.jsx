import { useContext } from 'react';
import TipoUsuarioContext from '../context/tipoUsuarioContext';

const useTipoUsuario = () => {
    const _tipoUsuarioContext = useContext(TipoUsuarioContext);

    return _tipoUsuarioContext;
};

export default useTipoUsuario;