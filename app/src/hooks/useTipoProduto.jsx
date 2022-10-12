import { useContext } from 'react';
import TipoProdutoContext from '../context/tipoProdutoContext';

const useTipoProduto = () => {
    const _tipoProdutoContext = useContext(TipoProdutoContext);

    return _tipoProdutoContext;
};

export default useTipoProduto;