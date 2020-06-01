import React from "react";
import "./styles.css"
import "./corpo.js"

function Home() {
  
  return (
    <body>
    <header class="topo">
          <nav>
            <div class="contem">
            <img class="logo" src="/images/logoskrin.jpg" alt="logo"></img>
           
            <div class="melhor">
            <p>OS MELHORES</p>
            <div class="lista"><ul>
              <li>PREÇOS</li>
              <li>PRODUTOS</li>
              <li>CLIENTES</li>
            </ul>
            </div>
            </div>

                </div>
                </nav>
      <span>Seja bem vindo(a) </span>
    </header>
   <container>
     <a href="/corpo" class="btn btn-purple">Home</a>
     <a href="/cadastro" class="btn btn-purple">Cadastro</a>
     <a href="/listagem" class="btn btn-purple">Listagem</a>
    </container>
    
  </body>
  );
}
     

export default Home;


