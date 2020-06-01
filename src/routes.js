import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Cadastro from './components/Produtos/Cadastro';
import Listagem from './components/Produtos/Listagem';
import Corpo from "./components/Home/corpo";




export default function Routes() {

    return (

<Switch>
    <Route path="/home"
     component={Home} />
     <Route path="/corpo"
     component={Corpo} />
    <Route path="/cadastro" 
    component={Cadastro} />
    <Route path="/listagem" 
    component={Listagem} />
  
    
</Switch>

    )
}