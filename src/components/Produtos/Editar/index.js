import React, { useCallback, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import "./styles.css";

// import api from "../../services/api";

function Editar({ produto, callBack }) {
  const [products, setProducts] = useState({
    sku: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  });

  const handleKeyUp = useCallback((e) => {
    if (e) {
      console.log("keyup", e.target.value);
      let value;
      value = e.target.value;
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d)(\d{2})$/, "$1,$2");
      // 1.333.999,00
      value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
      e.target.value = value;
    }
  }, []);

  const history = useHistory();

  useEffect(() => {
    setProducts(produto);
  }, [produto]);

  const handleChange = useCallback(
    (e) => {
      setProducts({
        ...products,
        [e.target.sku]: e.target.value,
      });
    },
    [products]
  );

  // const handleSubmit = useCallback(() => {
  //   const id = products._id;

  //   // api
  //   //   .put(`/users/${id}`, products)
  //   //   .then((resolve) => {
  //   //     callBack({
  //   //       tipoAcao: "sucessoEdit",
  //   //     });
  //   //   })
  //     .catch((error) => console.log(error));
  // }, [callBack, products]);
 
  return (
    <div>
      <span>SKU</span>
      <input
        placeholder="SKU"
        onChange={handleChange}
        name="sku"
        value={products.sku}
      />
      <input
        placeholder="Nome do Produto"
        onChange={handleChange}
        name="name"
        value={products.name}
      />
      <textarea
        placeholder="Descrição"
        onChange={handleChange}
        name="description"
        value={products.description}
      ></textarea>
      <input
        placeholder="Preço de Venda"
          onChange={(e) => {
          handleKeyUp(e);
          handleChange(e);
        }}
        name="price"
        value={products.price}
      />
      <input
        placeholder="Quantidade"
        onChange={handleChange}
        name="quantity"
        type="number"
        value={products.quantity}
      />
      <input
        placeholder="Imagem"
        onChange={handleChange}
        name="image"
        value={products.image}
      />

      <button type="button" className="button">
        Editar
      </button>
      <button
        type="button"
        className="button"
        onClick={() =>
          callBack({
            tipoAcao: "closeModal",})
        }>Fechar</button>
    </div>
  );
}

export default Editar;