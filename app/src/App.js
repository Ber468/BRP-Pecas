import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Routes from './Routes/routes';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;