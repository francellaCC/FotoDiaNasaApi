import React from "react";

function Astronomi({ apodData }) {
  return (
    <>
      {/* Encabezado del componente */}
      <h1>Imagen del Día</h1>

      {/* Contenido del componente con datos de la imagen astronómica */}
      <div>
        {/* Título de la imagen astronómica */}
        <h2>{apodData.title}</h2>

        {/* Imagen astronómica */}
        <img src={apodData.url} alt={apodData.title} />

        {/* Derechos de autor de la imagen astronómica */}
        <h4>{apodData.copyright}</h4>

        {/* Descripción o explicación de la imagen astronómica */}
        <p>{apodData.explanation}</p>
      </div>
    </>
  );
}

export default Astronomi;
