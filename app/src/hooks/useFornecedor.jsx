import { useContext } from 'react';
import FornecedorContext from '../context/fornecedorContext';

const useFornecedor = () => {
    const _fornecedorContext = useContext(FornecedorContext);

    return _fornecedorContext;
};

export default useFornecedor;