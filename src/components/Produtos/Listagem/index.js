import React, { useEffect, useState, useCallback } from "react";

import "./styles.css"

//import Editar from "../Editar";

//import api from "../../../services/api";

function Listagem() {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState(null);

  useEffect(() => {
    const prods = JSON.parse(localStorage.getItem("produtos"));
    setProducts(prods);
  }, []);

  const Editar = useCallback((produto) => {
    console.log(produto);
  }, []);

  const loadProducts = useCallback(() => {
   console.log()
}, []);

    useEffect(() => {
      loadProducts();
    }, [loadProducts]);  

  const callBackEdit = (dataFromChild) => {
    const { tipoAcao } = dataFromChild;

    if (tipoAcao === "sucessoEdit") {
      loadProducts();
      setCurrentProducts(null);
    } else if (tipoAcao === "closeModal") {
      setCurrentProducts(null);
    }
  };

   return (
    <div>
      <h3>Listagem de Produtos</h3>

      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Nome</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((produto) => (
            <tr key={produto.sku}>
              <td>{produto.sku}</td>
              <td>{produto.name}</td>
              <td>{produto.price}</td>
              <td>
                <button onClick={() => setCurrentProducts(produto)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentProducts && <Editar produto={currentProducts} callBack={callBackEdit} />}
    </div>
  );
}

export default Listagem;