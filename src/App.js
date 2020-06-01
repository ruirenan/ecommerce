import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
        <Home />
        <Routes />
      </BrowserRouter>
  );
}

export default App;