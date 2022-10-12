import { useContext } from 'react';
import VendaContext from '../context/vendaContext';

const useVenda = () => {
    const _vendaContext = useContext(VendaContext);

    return _vendaContext;
};

export default useVenda;