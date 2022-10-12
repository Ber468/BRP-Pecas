import { useContext } from 'react';
import ProdutoContext from '../context/produtoContext';

const useProduto = () => {
    const _produtoContext = useContext(ProdutoContext);

    return _produtoContext;
};

export default useProduto;