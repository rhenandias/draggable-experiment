import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

import Prateleira from "../../components/Prateleira";

import "./styles.css";

function Home() {
  const [editMode, setEditMode] = useState(false);

  const [prateleiras, setPrateleiras] = useState([]);

  useEffect(() => {
    const novaPrateleira = {
      nome: "Prateleira A",
      comprimento: 200,
      altura: 100,
    };
    setPrateleiras([...prateleiras, novaPrateleira]);
  }, []);

  const adicionarPrateleira = (e) => {
    e.preventDefault();
  };

  const handleStop = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="controle">
        {/* Controle do Modo de Edição */}
        {!editMode && (
          <button onClick={() => setEditMode(true)}>
            Ativar modo de edição
          </button>
        )}
        {editMode && (
          <button onClick={() => setEditMode(false)}>Salvar Edições</button>
        )}

        {/* Opções de Edição */}
        {editMode && (
          <>
            <button>Adicionar Prateleira</button>
          </>
        )}
      </div>
      <div className="corpo">
        <div className="mapa" id="mapa">
          {prateleiras.map((prateleira) => (
            <>
              <Draggable disabled={!editMode} onStop={handleStop}>
                <div classNameName="handle">
                  <Prateleira dados={prateleira} editMode={editMode} />
                </div>
              </Draggable>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
