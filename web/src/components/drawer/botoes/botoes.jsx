import { useNavigate } from 'react-router-dom';
import '../drawer.css';

import { BiTask, BiCategoryAlt } from 'react-icons/bi';
import Tooltip from '@mui/material/Tooltip';

const Botoes = () => {
  const navigate = useNavigate();

  return (
    <div className="divBotoes">
      <div>
        <Tooltip title={<h3>Dashboard</h3>} placement="right" arrow>
          <button className="botaoDrawer" onClick={() => navigate('/')}>
            <BiCategoryAlt size={24} />
          </button>
        </Tooltip>
        <Tooltip title={<h3>Clientes</h3>} placement="right" arrow>
          <button className="botaoDrawer" onClick={() => navigate('/cliente')}>
            <BiTask size={24} />
          </button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}></div>
    </div>
  );
};

export default Botoes;