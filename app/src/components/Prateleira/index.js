import React, { useState } from "react";
import "./styles.css";

function Prateleira(props) {
  const { dados, editMode } = props;

  const [nome, setNome] = useState(dados.nome);
  const [comprimento, setComprimento] = useState(dados.comprimento);
  const [altura, setAltura] = useState(dados.altura);

  return (
    <>
      <div
        className="prateleira"
        style={{ width: comprimento + "px", height: altura + "px" }}
      >
        {!editMode && <p>{nome}</p>}
        {editMode && (
          <div>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            ></input>

            <input
              type="number"
              placeHolder={comprimento}
              onChange={(e) => setComprimento(e.target.value)}
            ></input>
            <input
              type="number"
              placeHolder={altura}
              onChange={(e) => setAltura(e.target.value)}
            ></input>
          </div>
        )}
      </div>
    </>
  );
}

export default Prateleira;
