import { useEffect, useState } from "react";

import "./App.css";
import Astronomi from "./component/Astronomi";

// Clave Api
const API_KEY = "b290rpVD46oGecSdJQ8QK53og0xDcOfE24VWDAHz";

function App() {
  // Estado del componente para almacenar los datos de la imagen astronómica del día (APOD)
  const [apodData, setApodData] = useState(null);

  // URL de la API de la NASA con la clave API
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  // Efecto de efectuarse una vez al montar el componente para obtener los datos de la API
  useEffect(() => {
    // Función asincrónica para realizar la solicitud a la API
    const fetchData = async () => {
      try {
        // Realizar la solicitud utilizando fetch
        const response = await fetch(apiUrl);

        // Verificar si la solicitud fue exitosa (código de estado 200)
        if (!response.ok) {
          throw new Error(
            `Error de red - Código de estado: ${response.status}`
          );
        }

        // Convertir la respuesta a formato JSON
        const data = await response.json();

        // Actualizar el estado con los datos obtenidos
        setApodData(data);
      } catch (error) {
        // Capturar y manejar errores durante la obtención de datos
        console.error("Error al obtener datos:", error);
      }
    };

    // Llamar a la función fetchData para obtener los datos al montar el componente
    fetchData();

    // Mensaje de registro para indicar que el componente se ha renderizado
    console.log("render");
  }, []); // La dependencia vacía significa que este efecto se ejecuta solo una vez al montar el componente

  // Renderizar el componente Astronomi con los datos obtenidos, si hay datos disponibles
  return <>{apodData && <Astronomi apodData={apodData} />}</>;
}

export default App;
