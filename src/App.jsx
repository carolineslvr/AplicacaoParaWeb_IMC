import Corpo from "./Corpo";
import Titulo from "./Titulo";
import Calculo from "./Calculo";
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    document.title = "Calculadora IMC"; // Definindo o título da página
  }, []);

  return (
    <div>
      <Titulo texto="Calculadora de IMC - Índice de Massa Corporal" />

      <br></br>

      <Corpo titulo="Digite abaixo seu peso (em Kg) e sua altura (em metros):"/>
  
      <Calculo/>
    </div>
  );
}

export default App;
