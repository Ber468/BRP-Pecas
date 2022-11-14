import "./components/login/app.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import Rotas from "../src/Routes/routes";
import LoginForm from "./pages/login/LoginForm";

function App() {
  const [token, setToken] = useState([]);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  if (!token || token <= "") {
    return <LoginForm />;
  } else {
    return (
      <div className="app">
        <Rotas />
      </div>
    );
  }
}

export default App;
