import React from "react";
import './FrequentAnswer.scss';

const FrequentAnswer = () => {
  return (
    <div className="FrequentAnswer">
      <h1 className="text-center mt-0">Respuestas frecuentes</h1>
      <p>
        <b>
          Cliengo detecta las preguntas más frecuentes que hacen los clientes.
        </b>
      </p>
      <p>
        Optimiza el diálogo con ellos, configurando respuestas a estas preguntas
        desde aquí.
      </p>
      <p>
        <a href="#">Cómo configurar respuestas automáticas</a>
      </p>
    </div>
  );
};

export default FrequentAnswer;
