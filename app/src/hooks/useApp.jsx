import { useContext } from 'react';
import appContext from '../context/appContext';

const useApp = () => {
  const _appContext = useContext(appContext);

  return _appContext;
};

export default useApp;